import React, { useState, useEffect, useRef } from 'react';
import './ChatModal.scss';

const ChatModal = ({ isOpen, onToggle }) => {
    const [message, setMessage] = useState('');
    const modalRef = useRef(null);
    const [chatHistory, setChatHistory] = useState([
        { type: 'bot', content: '안녕하세요! 무엇을 도와드릴까요?' }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const chatAreaRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onToggle();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onToggle]);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) onToggle();
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onToggle]);

    const [currentResponse, setCurrentResponse] = useState('');  // 현재 응답 상태 추가

    const callLLM = async (userMessage) => {
        try {
            const response = await fetch('https://monitor-faithful-slightly.ngrok-free.app/callLLM', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessage,
                    sessionId: 'test-session',
                    relevantChunks: '',
                    prompt: 'default'
                })
            });

            if (!response.ok) throw new Error('API 요청 실패');

            const reader = response.body.getReader();
            setIsLoading(true);

            // 새로운 bot 메시지를 위한 공간 생성
            setChatHistory(prev => [...prev, { type: 'bot', content: '' }]);
            setCurrentResponse('');  // 현재 응답 초기화

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

                const chunk = new TextDecoder().decode(value);
                const lines = chunk.split('\n');

                for (const line of lines) {
                    if (!line.trim()) continue;

                    try {
                        const data = JSON.parse(line);
                        // console.log("받은 토큰:", data.token);  // 디버깅용

                        if (data.error) {
                            throw new Error(data.token.slice(7));
                        }

                        if (data.token === '[END]' || data.finished) {
                            // 마지막 메시지를 완성된 응답으로 업데이트
                            setChatHistory(prev => {
                                const newHistory = [...prev];
                                newHistory[newHistory.length - 1].content = currentResponse;
                                return newHistory;
                            });
                            setIsLoading(false);
                            break;
                        }

                        // 현재 응답 업데이트
                        setCurrentResponse(prev => {
                            const newResponse = data.token;
                            // 채팅 히스토리도 함께 업데이트
                            setChatHistory(prev => {
                                const newHistory = [...prev];
                                newHistory[newHistory.length - 1].content = newResponse;
                                console.log("newHistory : ", newHistory);
                                return newHistory;
                            });
                            return newResponse;
                        });


                    } catch (parseError) {
                        console.error('JSON 파싱 에러:', parseError, 'Line:', line);
                    }
                }
            }
        } catch (error) {
            console.error('Error:', error);
            setChatHistory(prev => [...prev, {
                type: 'bot',
                content: '죄송합니다. 오류가 발생했습니다.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim() || isLoading) return;

        // 사용자 메시지 추가
        const userMessage = message.trim();
        setChatHistory(prev => [...prev, { type: 'user', content: userMessage }]);
        setMessage('');

        // LLM 호출
        await callLLM(userMessage);
    };

    useEffect(() => {
        if (chatAreaRef.current) {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
        }
    }, [chatHistory]);


    return (
        <>
            <button className="floating-button" onClick={onToggle}>
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
            </button>

            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-container" ref={modalRef}>
                        <div className="modal-header">
                            <h2>LLM과 대화하기</h2>
                            <button onClick={onToggle}>✕</button>
                        </div>

                        <div className="chat-area" ref={chatAreaRef}>
                            {chatHistory.map((chat, index) => (
                                <div key={index} className={`message ${chat.type}`}>
                                    {chat.content}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="message bot loading">
                                    <span className="typing-indicator">...</span>
                                </div>
                            )}
                        </div>

                        <form className="input-area" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="메시지를 입력하세요..."
                                disabled={isLoading}
                            />
                            <button type="submit" disabled={isLoading}>
                                {isLoading ? '처리중...' : '전송'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatModal;
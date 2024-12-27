import React, { useEffect, useState } from 'react'
import './BackgroundEffects.scss'

const BackgroundEffects = ({ activeSlide }) => {
    const [moveAmount, setMoveAmount] = useState(0)

    const lightStreaks = [
        // 왼쪽 영역 별똥별들
        {
            id: 1,
            startX: 5,
            startY: 8,
            length: 180,
            mainColor: 'rgba(147, 112, 219, 0.8)',
            glowColor: 'rgba(66, 170, 255, 0.4)',
            width: 2,
            headSize: 6,
        },
        {
            id: 2,
            startX: 15,
            startY: 25,
            length: 140,
            mainColor: 'rgba(138, 43, 226, 0.6)',
            glowColor: 'rgba(30, 144, 255, 0.3)',
            width: 1.5,
            headSize: 6,
        },
        {
            id: 3,
            startX: 8,
            startY: 45,
            length: 100,
            mainColor: 'rgba(147, 112, 219, 0.5)',
            glowColor: 'rgba(66, 170, 255, 0.2)',
            width: 1,
            headSize: 6,
        },

        // 중앙 왼쪽 영역
        {
            id: 4,
            startX: 25,
            startY: 5,
            length: 160,
            mainColor: 'rgba(138, 43, 226, 0.7)',
            glowColor: 'rgba(30, 144, 255, 0.4)',
            width: 2,
            headSize: 6,
        },
        {
            id: 5,
            startX: 35,
            startY: 30,
            length: 130,
            mainColor: 'rgba(147, 112, 219, 0.6)',
            glowColor: 'rgba(66, 170, 255, 0.3)',
            width: 1.5,
            headSize: 6,
        },
        {
            id: 6,
            startX: 28,
            startY: 55,
            length: 90,
            mainColor: 'rgba(138, 43, 226, 0.5)',
            glowColor: 'rgba(30, 144, 255, 0.2)',
            width: 1,
            headSize: 6,
        },

        // 중앙 영역
        {
            id: 7,
            startX: 45,
            startY: 12,
            length: 170,
            mainColor: 'rgba(147, 112, 219, 0.8)',
            glowColor: 'rgba(66, 170, 255, 0.4)',
            width: 2,
            headSize: 6,
        },
        {
            id: 8,
            startX: 55,
            startY: 35,
            length: 140,
            mainColor: 'rgba(138, 43, 226, 0.6)',
            glowColor: 'rgba(30, 144, 255, 0.3)',
            width: 1.5,
            headSize: 6,
        },
        {
            id: 9,
            startX: 48,
            startY: 60,
            length: 110,
            mainColor: 'rgba(147, 112, 219, 0.5)',
            glowColor: 'rgba(66, 170, 255, 0.2)',
            width: 1,
            headSize: 6,
        },

        // 중앙 오른쪽 영역
        {
            id: 10,
            startX: 65,
            startY: 8,
            length: 180,
            mainColor: 'rgba(138, 43, 226, 0.8)',
            glowColor: 'rgba(30, 144, 255, 0.4)',
            width: 2,
            headSize: 6,
        },
        {
            id: 11,
            startX: 75,
            startY: 28,
            length: 150,
            mainColor: 'rgba(147, 112, 219, 0.6)',
            glowColor: 'rgba(66, 170, 255, 0.3)',
            width: 1.5,
            headSize: 6,
        },
        {
            id: 12,
            startX: 68,
            startY: 50,
            length: 100,
            mainColor: 'rgba(138, 43, 226, 0.5)',
            glowColor: 'rgba(30, 144, 255, 0.2)',
            width: 1,
            headSize: 6,
        },

        // 오른쪽 영역
        {
            id: 13,
            startX: 85,
            startY: 15,
            length: 160,
            mainColor: 'rgba(147, 112, 219, 0.8)',
            glowColor: 'rgba(66, 170, 255, 0.4)',
            width: 2,
            headSize: 6,
        },
        {
            id: 14,
            startX: 95,
            startY: 32,
            length: 130,
            mainColor: 'rgba(138, 43, 226, 0.6)',
            glowColor: 'rgba(30, 144, 255, 0.3)',
            width: 1.5,
            headSize: 6,
        },
        {
            id: 15,
            startX: 88,
            startY: 58,
            length: 90,
            mainColor: 'rgba(147, 112, 219, 0.5)',
            glowColor: 'rgba(66, 170, 255, 0.2)',
            width: 1,
            headSize: 6,
        },
    ]

    useEffect(() => {
        if (activeSlide <= 0) {
            setMoveAmount(0)
            return
        }

        setMoveAmount((activeSlide - 1) * 150)
    }, [activeSlide])

    if (activeSlide <= 0) return null

    return (
        <div className="background-effects">
            {lightStreaks.map((streak) => (
                <div
                    key={streak.id}
                    className="light-streak-wrapper"
                    style={{
                        position: 'absolute',
                        top: `${streak.startY}%`,
                        left: `${streak.startX}%`,
                        transform: `translate(${-moveAmount * 0.8}px, ${moveAmount}px) rotate(-45deg)`,
                        transition: 'transform 0.8s ease-out',
                        width: `${streak.length}px`,
                        height: `${Math.max(streak.headSize * 4, streak.width * 4)}px`,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {/* 혜성의 머리 부분 - 여러 겹의 빛 효과 */}
                    <div
                        className="light-streak-head-container"
                        style={{
                            position: 'absolute',
                            left: -2,
                            width: `${streak.headSize * 2}px`,
                            height: `${streak.headSize * 2}px`,
                            zIndex: 2,
                        }}
                    >
                        {/* 가장 밝은 중심부 */}
                        <div
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: `${streak.headSize * 0.6}px`,
                                height: `${streak.headSize * 0.6}px`,
                                background: 'rgba(255, 255, 255, 1)',
                                boxShadow: `
                      0 0 10px rgba(255, 255, 255, 1),
                      0 0 20px rgba(255, 255, 255, 0.8)
                    `,
                                borderRadius: '50%',
                                filter: 'blur(0.3px)',
                            }}
                        />
                        {/* 첫 번째 광채 레이어 */}
                        <div
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: `${streak.headSize * 1.2}px`,
                                height: `${streak.headSize * 1.2}px`,
                                background: `radial-gradient(circle at center,
                      rgba(255, 255, 255, 0.95) 0%,
                      rgba(255, 255, 255, 0.8) 30%,
                      ${streak.mainColor} 70%,
                      transparent 100%
                    )`,
                                borderRadius: '50%',
                                filter: 'blur(1px)',
                            }}
                        />
                        {/* 두 번째 광채 레이어 */}
                        <div
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: `${streak.headSize * 2}px`,
                                height: `${streak.headSize * 2}px`,
                                background: `radial-gradient(circle at center,
                      ${streak.mainColor}90 0%,
                      ${streak.glowColor}50 60%,
                      transparent 100%
                    )`,
                                borderRadius: '50%',
                                filter: 'blur(2px)',
                            }}
                        />
                    </div>

                    {/* 혜성의 꼬리 부분 */}
                    <div
                        className="light-streak-container"
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {/* 중앙 밝은 선 */}
                        <div
                            className="light-streak-core"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: `${streak.width}px`,
                                background: `linear-gradient(90deg, 
                      rgba(255, 255, 255, 0.9) 0%,
                      ${streak.mainColor} 30%,
                      ${streak.glowColor} 70%,
                      transparent 100%
                    )`,
                                filter: 'blur(0.5px)',
                            }}
                        />
                        {/* 바깥쪽 흐릿한 효과 */}
                        <div
                            className="light-streak-glow"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: `${streak.width * 5}px`,
                                background: `linear-gradient(90deg, 
                      ${streak.mainColor}60 0%,
                      ${streak.glowColor}30 50%,
                      transparent 100%
                    )`,
                                filter: 'blur(3px)',
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BackgroundEffects
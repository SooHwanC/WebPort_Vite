import React, { useEffect, useRef } from 'react'
import '../SCSS/modals/Modal.scss'

const DdabongModal = ({ closeModal }) => {

    const modalRef = useRef(null);
    const modalInnerRef = useRef(null);

    useEffect(() => {
        const handleWheel = (e) => {
            e.stopPropagation();
        };

        const modalElement = modalRef.current;
        if (modalElement) {
            modalElement.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (modalElement) {
                modalElement.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    const handleClickOutside = (e) => {
        if (modalInnerRef.current && !modalInnerRef.current.contains(e.target)) {
            closeModal();
        }
    };

    return (
        <div className='modal_main_wrapper' ref={modalRef} onClick={handleClickOutside}>
            <div className="modal_main_box" ref={modalInnerRef} onClick={(e) => e.stopPropagation()}>
                <div className="close_btn_box">
                    <img src="/modal/modal_close.svg" alt="close" onClick={closeModal} />
                </div>
                <div className="modal_title_box">
                    <h5>
                        DDA BONG
                    </h5>
                </div>

                <div className="modal_banner_box">
                    <div className="banner_img">
                        <img src="/modal/ddabong.png" alt="ddabong" />
                    </div>
                </div>
                <div className='modal_detail_link_box'>
                    <a href="https://github.com/ddab0ng/ReadMe.git" target='_blank' rel='noreferrer'>
                        바로가기
                    </a>
                </div>
                <div className="modal_detail_wrapper">
                    <hr />
                    <h6>
                        서비스 소개
                    </h6>
                    <hr />
                    <div className='modal_detail_box'>
                        <p>
                            최신 RAG(Retrieval-Augmented Generation) 기술을 활용한 고성능 챗봇 서비스
                        </p>
                        <p>
                            다양한 언어 모델과 임베딩 기술을 통합하여 사용자의 질문에 대해 정확하고 신속한 답변을 제공
                        </p>
                    </div>

                </div>

                <div className="modal_what_do_warpper">
                    <hr />
                    <h6>
                        담당 기능
                    </h6>
                    <hr />
                    <div className='modal_what_do_box'>
                        <p className='small_title'>
                            1. 실시간 데이터 처리
                        </p>
                        <p>
                            • SSE(Server-Sent Events) 기반 실시간 통신
                        </p>
                        <p>
                            • 임베딩 진행 상태 및 채팅 스트리밍
                        </p>
                        <p className='small_title'>
                            2. LLM
                        </p>
                        <p>
                            • 다중 LLM 모델 지원
                        </p>
                        <p>
                            • 오픈소스 LLM 호스팅 (vLLM)
                        </p>
                        <p className='small_title'>
                            3. RAG
                        </p>
                        <p>
                            • 임베딩 모델 커스터마이징 기능능
                        </p>
                        <p>
                            • 검색된 청크 하이라이트 기능
                        </p>
                        <p>
                            • 높은 정확도의 문서 파싱
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DdabongModal

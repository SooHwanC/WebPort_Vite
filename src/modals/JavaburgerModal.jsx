import React, { useEffect, useRef } from 'react'
import '../SCSS/modals/Modal.scss'

const JavaburgerModal = ({ closeModal }) => {

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
                    <img src="/images/modal_close.svg" alt="close" onClick={closeModal} />
                </div>
                <div className="modal_title_box">
                    <h5>
                        ITTY
                    </h5>
                </div>

                <div className="modal_banner_box">
                    <div className="banner_img">
                        <img src="/itty.png" alt="" />
                    </div>
                </div>

                <div className="modal_detail_wrapper">
                    <h6>
                        서비스 소개
                    </h6>
                    <div className='modal_detail_box'>
                        <p>
                            🔊 IT 업계에서 일하는, 공부하는 사람들을 위한 소통 커뮤니티
                        </p>
                        <p>
                            📚 흩어져 있는 프로젝트, 스터디 팀원들을 쉽게 구할 수 있는 스터디 & 프로젝트 구해요 게시판
                        </p>
                        <p>
                            💰 다양한 중고 물품들을 쉽고 빠르게 거래할 수 있는 중고장터 게시판
                        </p>
                        <p>
                            🎃 언제든, 무슨 이야기든 자유롭게 나누고 대화하는 자유게시판
                        </p>
                        <p>
                            💡 IT 꿀팁, 궁금한 점을 바로 질문하고 공유하는 팁 공유, QnA 게시판
                        </p>
                        <p>
                            ✨ "이거.. 제가 개발했어요" 자신의 개발 포트폴리오를 공유하는 포트폴리오 게시판
                        </p>
                        <p>
                            😎 "제 점수는요.." 수강했던 IT 학원의 후기를 솔직하게 공유하는 수료생후기 게시판
                        </p>
                        <p>
                            🔥 요즘 가장 핫한 기능, 익명 게시판을 구현했다! 모든 비밀이 오가는 익명 게시판
                        </p>


                    </div>

                </div>

                <div className="modal_what_do_warpper">
                    <h6>
                        담당 기능
                    </h6>
                    <div className='modal_what_do_box'>
                        <p>
                            • MongoDB 환경구축
                        </p>
                        <p>
                            • 랜더링 시간 최적화 (2초 → 0.5초)
                        </p>
                        <p>
                            • 1:1쪽지 기능
                        </p>
                        <p>
                            • 게시글 검색
                        </p>
                        <p>
                            • 댓글, 대댓글
                        </p>
                        <p>
                            • 익명 기능구현
                        </p>
                        <p>
                            • Text Editor (Quill) + 이미지 드래그 앤 드롭
                        </p>
                        <p>
                            • FireBase 이미지 호스팅
                        </p>
                        <p>
                            • 이미지 크롭 (React Cropper)
                        </p>
                        <p>
                            • Swiper 기능구현 (드래그 스크롤)
                        </p>
                        <p>
                            • 배포
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default JavaburgerModal

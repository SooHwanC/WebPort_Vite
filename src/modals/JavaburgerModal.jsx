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
                    <img src="/modal/modal_close.svg" alt="close" onClick={closeModal} />
                </div>
                <div className="modal_title_box">
                    <h5>
                        ITTY
                    </h5>
                </div>

                <div className="modal_banner_box">
                    <div className="banner_img">
                        <img src="/modal/javaburger.webp" alt="javaburger" />
                    </div>
                </div>

                <div className="modal_detail_wrapper">
                    <hr />
                    <h6>
                        서비스 소개
                    </h6>
                    <hr />
                    <div className='modal_detail_box'>
                        <p>
                            햄버거를 만들어 사람들에게 행복을 전달하는 본격! 햄버거 타이쿤 JAVA BURGER💚
                        </p>
                        <p>
                            - ⌚ 난이도마다 달라지는 레시피, 시간 제한! 스릴 만점 게임 구현 ✔
                        </p>
                        <p>
                            - 🍔 실시간으로 만들어지는 햄버거 애니메이션, 진짜보다 더 진짜 같다!
                        </p>
                        <p>
                            - ✌🏻 2가지 게임모드, 키보드 버전과 마우스 버전! 두 가지 재미를 동시에!
                        </p>
                        <p>
                            - 💛 랭킹 확인을 통해 나의 점수를 실시간으로 확인한다! 나는 과연 몇 등? 🔎
                        </p>
                        <p>
                            - 💡 게임의 사운드는 찰져야 제 맛, 타이쿤의 묘미는 사운드! 📣
                        </p>
                        <p>
                            - 🙆‍♀️ 아기자기한 화면 구현을 통해 사람들의 즐거움을 배로! 😄👍
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
                        <p>
                            • 햄버거 Making 로직
                        </p>
                        <p>
                            • 난이도 별 레시피
                        </p>
                        <p>
                            • 키보드 모드, 마우스 모드
                        </p>
                        <p>
                            • 난이도 별 손님
                        </p>
                        <p>
                            • 시간 제한
                        </p>
                        <p>
                            • 랭킹 등록
                        </p>
                        <p>
                            • bgm
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default JavaburgerModal

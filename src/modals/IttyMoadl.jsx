import React, { useEffect, useRef } from 'react'
import '../SCSS/modals/Modal.scss'

const IttyMoadl = ({ closeModal }) => {

    const modalRef = useRef(null);

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

    return (
        <div className='modal_main_wrapper' ref={modalRef}>
            <div className="modal_main_box">
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
                    <p>
                        스터디, 프로젝트 인원 모집, 중고장터, QnA 등등 학원생끼리 교류할 수 있는 학원 맞춤 커뮤니티 플랫폼
                    </p>
                    <p>
                        인원 모집, 자유게시판, 포트폴리오, 중고장터, QnA, 익명게시판 등 모든 커뮤니티 기능
                    </p>
                    <p>
                        스터디, 프로젝트 인원 모집, 중고장터, QnA 등등 학원생끼리 교류할 수 있는 학원 맞춤 커뮤니티 플랫폼
                    </p>
                    <p>
                        인원 모집, 자유게시판, 포트폴리오, 중고장터, QnA, 익명게시판 등 모든 커뮤니티 기능
                    </p>
                    <p>
                        스터디, 프로젝트 인원 모집, 중고장터, QnA 등등 학원생끼리 교류할 수 있는 학원 맞춤 커뮤니티 플랫폼
                    </p>
                    <p>
                        인원 모집, 자유게시판, 포트폴리오, 중고장터, QnA, 익명게시판 등 모든 커뮤니티 기능
                    </p>
                    <p>
                        스터디, 프로젝트 인원 모집, 중고장터, QnA 등등 학원생끼리 교류할 수 있는 학원 맞춤 커뮤니티 플랫폼
                    </p>
                    <p>
                        인원 모집, 자유게시판, 포트폴리오, 중고장터, QnA, 익명게시판 등 모든 커뮤니티 기능
                    </p>
                    <p>
                        스터디, 프로젝트 인원 모집, 중고장터, QnA 등등 학원생끼리 교류할 수 있는 학원 맞춤 커뮤니티 플랫폼
                    </p>
                    <p>
                        인원 모집, 자유게시판, 포트폴리오, 중고장터, QnA, 익명게시판 등 모든 커뮤니티 기능
                    </p>
                    <p>
                        스터디, 프로젝트 인원 모집, 중고장터, QnA 등등 학원생끼리 교류할 수 있는 학원 맞춤 커뮤니티 플랫폼
                    </p>
                    <p>
                        인원 모집, 자유게시판, 포트폴리오, 중고장터, QnA, 익명게시판 등 모든 커뮤니티 기능
                    </p>
                    <p>
                        스터디, 프로젝트 인원 모집, 중고장터, QnA 등등 학원생끼리 교류할 수 있는 학원 맞춤 커뮤니티 플랫폼
                    </p>
                    <p>
                        인원 모집, 자유게시판, 포트폴리오, 중고장터, QnA, 익명게시판 등 모든 커뮤니티 기능
                    </p>
                    <p>
                        스터디, 프로젝트 인원 모집, 중고장터, QnA 등등 학원생끼리 교류할 수 있는 학원 맞춤 커뮤니티 플랫폼
                    </p>
                    <p>
                        인원 모집, 자유게시판, 포트폴리오, 중고장터, QnA, 익명게시판 등 모든 커뮤니티 기능
                    </p>
                    <p>
                        스터디, 프로젝트 인원 모집, 중고장터, QnA 등등 학원생끼리 교류할 수 있는 학원 맞춤 커뮤니티 플랫폼
                    </p>
                    <p>
                        인원 모집, 자유게시판, 포트폴리오, 중고장터, QnA, 익명게시판 등 모든 커뮤니티 기능
                    </p>
                    <p>
                        스터디, 프로젝트 인원 모집, 중고장터, QnA 등등 학원생끼리 교류할 수 있는 학원 맞춤 커뮤니티 플랫폼
                    </p>
                    <p>
                        인원 모집, 자유게시판, 포트폴리오, 중고장터, QnA, 익명게시판 등 모든 커뮤니티 기능
                    </p>
                    <p>
                        스터디, 프로젝트 인원 모집, 중고장터, QnA 등등 학원생끼리 교류할 수 있는 학원 맞춤 커뮤니티 플랫폼
                    </p>
                    <p>
                        인원 모집, 자유게시판, 포트폴리오, 중고장터, QnA, 익명게시판 등 모든 커뮤니티 기능
                    </p>
                    <p>
                        스터디, 프로젝트 인원 모집, 중고장터, QnA 등등 학원생끼리 교류할 수 있는 학원 맞춤 커뮤니티 플랫폼
                    </p>
                    <p>
                        인원 모집, 자유게시판, 포트폴리오, 중고장터, QnA, 익명게시판 등 모든 커뮤니티 기능
                    </p>
                    <p>
                        스터디, 프로젝트 인원 모집, 중고장터, QnA 등등 학원생끼리 교류할 수 있는 학원 맞춤 커뮤니티 플랫폼
                    </p>
                    <p>
                        인원 모집, 자유게시판, 포트폴리오, 중고장터, QnA, 익명게시판 등 모든 커뮤니티 기능
                    </p>
                    <p>
                        스터디, 프로젝트 인원 모집, 중고장터, QnA 등등 학원생끼리 교류할 수 있는 학원 맞춤 커뮤니티 플랫폼
                    </p>
                    <p>
                        인원 모집, 자유게시판, 포트폴리오, 중고장터, QnA, 익명게시판 등 모든 커뮤니티 기능
                    </p>
                    <p>
                        스터디, 프로젝트 인원 모집, 중고장터, QnA 등등 학원생끼리 교류할 수 있는 학원 맞춤 커뮤니티 플랫폼
                    </p>
                    <p>
                        인원 모집, 자유게시판, 포트폴리오, 중고장터, QnA, 익명게시판 등 모든 커뮤니티 기능
                    </p>
                    <p>
                        스터디, 프로젝트 인원 모집, 중고장터, QnA 등등 학원생끼리 교류할 수 있는 학원 맞춤 커뮤니티 플랫폼
                    </p>
                    <p>
                        인원 모집, 자유게시판, 포트폴리오, 중고장터, QnA, 익명게시판 등 모든 커뮤니티 기능
                    </p>
                    <p>
                        스터디, 프로젝트 인원 모집, 중고장터, QnA 등등 학원생끼리 교류할 수 있는 학원 맞춤 커뮤니티 플랫폼
                    </p>
                    <p>
                        인원 모집, 자유게시판, 포트폴리오, 중고장터, QnA, 익명게시판 등 모든 커뮤니티 기능
                    </p>
                </div>

            </div>

        </div>
    )
}

export default IttyMoadl
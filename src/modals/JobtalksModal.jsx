import React, { useEffect, useRef } from 'react'
import '../SCSS/modals/Modal.scss'

const JobtalksModal = ({ closeModal }) => {

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
                        JobTalks
                    </h5>
                </div>

                <div className="modal_banner_box">
                    <div className="banner_img">
                        <img src="/modal/jobtalks.png" alt="jobtalks" />
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
                            합격 인증 자기소개서 데이터를 활용한 LLM FineTuning
                        </p>
                        <p>
                            RAG 기능 연동을 통한 회사 인재상 기반 자기소개서 첨삭
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
                            1. 데이터 정제
                        </p>
                        <p>
                            • 합격 인증 자기소개서 데이터 수집
                        </p>
                        <p>
                            • 데이터 전처리(개인정보 마스킹, 불용어 처리)
                        </p>
                        <p className='small_title'>
                            2. LLM
                        </p>
                        <p>
                            • 오픈소스 LLM FineTuning (Axolotl)
                        </p>
                        <p>
                            • 한국어 LLM 리더보드(Logickor) 기준 GPT-3.5 Turbo 및 HyperClovaX 이상의 글쓰기 추론 점수
                        </p>
                        <p>
                            • VLLM을 활용한 LLM 모델 서빙 (비동기 및 분산 추론 지원)
                        </p>
                        <p className='small_title'>
                            3. RAG
                        </p>
                        <p>
                            • 사용자가 입력한 회사 정보 실시간 크롤링
                        </p>
                        <p>
                            • 회사 정보를 통한 해당 회사 인재상에 맞는 자기소개서 첨삭
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default JobtalksModal

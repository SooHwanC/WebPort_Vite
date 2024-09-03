import React, { useEffect, useRef } from 'react'
import '../SCSS/modals/Modal.scss'

const CodebridgeModal = ({ closeModal }) => {

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
            CodeBridge
          </h5>
        </div>
        <div className="modal_banner_box">
          <div className="banner_img">
            <img src="/modal/codebridge.webp" alt="codebridge" />
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
              온라인 페어코딩 기반 코딩교육 및 레벨 테스트 플랫폼
            </p>
            <p>현재 시장에서 코딩 교육과 관련 산업이 빠르게 성장하고 있으며, 교육부가 2025년부터 초, 중등 교육 과정에서 코딩을 필수과목으로 지정하면서 코딩 교육 산업이 더욱 주목받고 있다.</p>
            <p>
              이로 인해 개발자의 수요가 계속해서 증가하고 있으며, 이러한 시장 동향에 맞춰 온라인 코딩 교육 플랫품을 개발하고자 한다.
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
              1. 웹 개발환경
            </p>
            <p>
              • WSL2 + Docker + CodeServer를 통한 IDE 가상화(학생 당 한 개의 IDE 배정)
            </p>
            <p>
              • 페어코딩 기능구현
            </p>
            <p>
              • 코딩 테스트 룸
            </p>
            <p className='small_title'>
              2. 코딩 문제 자동 생성/채점
            </p>
            <p>
              • OpenAI (GPT-4)
            </p>
            <p>
              • AI 문제생성 기능
            </p>
            <p>
              • AI 문제 채점 (채점 결과와 결과에 대한 이유 까지 표시)
            </p>
            <p className='small_title'>
              3. Pages
            </p>
            <p>
              • LMS 시스템 구축(학생/반 관리 시스템)
            </p>
            <p>
              • 오답노트, 이의제기 기능
            </p>
            <p>
              • WebRTC 화면공유, WebSocket 실시간채팅
            </p>
            <p>
              • 코딩 테스트 시스템
            </p>
            <p>
              • 강의실 시스템
            </p>
            <p>
              • Front, Back, DB, Flask 환경구축
            </p>
            <p>
              • DB 구조설계
            </p>
            <p>
              • 배포(AWS, Https)
            </p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default CodebridgeModal

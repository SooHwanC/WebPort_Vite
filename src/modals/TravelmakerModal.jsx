import React, { useEffect, useRef } from 'react'
import '../SCSS/modals/Modal.scss'

const TravelMakerModal = ({ closeModal }) => {

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
            TravelMaker
          </h5>
        </div>
        <div className="modal_banner_box">
          <div className="banner_img">
            <img src="/modal/travelmaker.webp" alt="travelmaker" />
          </div>
        </div>
        <div className="modal_detail_link_box">
          <a href="https://github.com/2023-SMHRD-SW-DataDesign-1/TravelMaker.git" target='_blank' rel='noreferrer'>
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
              여행계획 설계에 어려움을 느끼는 소비자를 위한 신뢰성과 다양성을 갖춘 개인 맞춤형 여행가이드 플랫폼
            </p>
            <p>
              고객의 디테일한 여행 견적요청서를 작성할 수 있는 서비스 제공
            </p>
            <p>
              고객의 견적요청서에 따른 고수의 여행 견적서 및 컨설팅을 작성할 수 있는 서비스 제공
            </p>
            <p>
              각 유저들의 여행정보를 거래할수 있는 정보거래 기능
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
              • 고수(판매자), 일반유저(구매자) 시스템 구축
            </p>
            <p>
              • 반응형 웹, 애니메이션
            </p>
            <p>
              • PortOne API를 통한 결제 API
            </p>
            <p>
              • Google Map API
            </p>
            <p>
              • 지역검색, 다중 마커추가
            </p>
            <p>
              • 사용자가 생성한 마커의 위도, 경도 정보 저장하여 새로운 지도에 동일한 위치에 마커 생성
            </p>
            <p>
              • SummerNote API (글쓰기 API)
            </p>
            <p>
              • 구매이력 기능
            </p>
            <p>
              • 구매이력을 통한 글 조회 제한기능
            </p>
            <p>
              • ajax를 통한 아이디 중복검사
            </p>
            <p>
              • 리뷰(별점) 기능
            </p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default TravelMakerModal

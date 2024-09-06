import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../SCSS/pages/Main.scss';
import JavaBurger from './JavaBurger';
import CircularSlider from './CircleSlider_fix';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';

function Main() {



    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.activeIndex);
    };
    // console.log('activeSlide', activeSlide);

    const [transitionDuration, setTransitionDuration] = useState('0.5s');

    useEffect(() => {
        if (activeSlide >= 3 && activeSlide <= 5) {
            // 나타날 때 0.8초
            setTransitionDuration('0.8s');
        } else {
            // 사라질 때 0.5초
            setTransitionDuration('0.3s');
        }
    }, [activeSlide]);

    const leftBoxStyle = {
        opacity: activeSlide >= 3 && activeSlide <= 5 ? 1 : 0,
        transition: `opacity ${transitionDuration} ease-in-out`,
    };


    // 모달 관련
    const [showModal, setShowModal] = useState(false); // 모달 표시 상태
    const [showModal_role, setShowModal_role] = useState(false); // 모달 표시 상태

    // 모달 토글 함수
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const toggleModal_role = () => {
        setShowModal_role(!showModal_role);
        console.log('클릭됨');
    };

    const toggleModalTrue = () => {
        setShowModal(true);
    };

    // Swiper 인스턴스를 저장할 상태
    const [swiperInstance, setSwiperInstance] = useState(null);


    // Swiper 인스턴스가 준비되면 저장
    const handleSwiper = (swiper) => {
        setSwiperInstance(swiper);
    };

    // 메인으로 이동하는 함수
    const goToMain = () => {
        if (swiperInstance) {
            swiperInstance.slideTo(0);
        }
    }

    const goToIntro = () => {
        if (swiperInstance) {
            swiperInstance.slideTo(1);
        }
    }

    const goToSkills = () => {
        if (swiperInstance) {
            swiperInstance.slideTo(3);
        }
    }

    const goToWorks = () => {
        if (swiperInstance) {
            swiperInstance.slideTo(2);
        }
    }

    const customConfig = {
        light: { mass: 1, tension: 350, friction: 40 },
        heavy: { mass: 5, tension: 350, friction: 40 },
        wobbly: { mass: 1, tension: 180, friction: 12 }
    };

    const INITIAL_POSITIONS = {
        img01: { top: '12%', left: '14%' },
        img02: { top: '12%', left: '71%' },
        img03: { bottom: '10%', right: '9%' }
    };

    const [props1, set1] = useSpring(() => ({
        x: 0,
        y: 0,
        top: INITIAL_POSITIONS.img01.top,
        left: INITIAL_POSITIONS.img01.left,
        config: customConfig.light  // 미리 정의된 config 사용
    }));

    const [props2, set2] = useSpring(() => ({
        x: 0,
        y: 0,
        top: INITIAL_POSITIONS.img02.top,
        left: INITIAL_POSITIONS.img02.left,
        config: customConfig.light  // 다른 이미지에 다른 config 적용
    }));

    const [props3, set3] = useSpring(() => ({
        x: 0,
        y: 0,
        bottom: INITIAL_POSITIONS.img03.bottom,
        right: INITIAL_POSITIONS.img03.right,
        config: customConfig.light  // 또 다른 config 적용
    }));

    const bind1 = useDrag(({ offset: [x, y], velocity: [vx, vy] }) =>
        set1({
            x: x * 0.5,  // 움직임을 50%로 줄임
            y: y * 0.5,  // 움직임을 50%로 줄임
            immediate: false,
            config: { velocity: [vx * 0.5, vy * 0.5] }  // 속도도 조정
        })
    );
    const bind2 = useDrag(({ offset: [x, y], velocity: [vx, vy] }) =>
        set2({
            x: x * 0.5,  // 움직임을 50%로 줄임
            y: y * 0.5,  // 움직임을 50%로 줄임
            immediate: false,
            config: { velocity: [vx * 0.5, vy * 0.5] }  // 속도도 조정
        })
    );
    const bind3 = useDrag(({ offset: [x, y], velocity: [vx, vy] }) =>
        set3({
            x: x * 0.5,  // 움직임을 50%로 줄임
            y: y * 0.5,  // 움직임을 50%로 줄임
            immediate: false,
            config: { velocity: [vx * 0.5, vy * 0.5] }  // 속도도 조정
        })
    );



    return (
        <div className="App">
            {activeSlide >= 2 && activeSlide <= 6 &&
                <div className="left_box_fixed" style={leftBoxStyle}>
                    SKILLS <br />
                    {activeSlide == 3 && "-Front-"}
                    {activeSlide == 4 && "-Back-"}
                    {activeSlide == 5 && "-Etc-"}
                </div>
            }
            {showModal && <JavaBurger closeModal={toggleModal} />}

            <header>
                <div className="nav_box_left" onClick={goToMain}>
                    SooHwan
                </div>
                <ul className='nav_box_middle'>
                    <li
                        onClick={goToIntro}
                        className={activeSlide === 1 ? 'active-menu-item' : ''}
                    >
                        Intro
                    </li>
                    <li
                        onClick={goToWorks}
                        className={activeSlide === 2 ? 'active-menu-item' : ''}
                    >
                        Works
                    </li>
                    <li
                        onClick={goToSkills}
                        className={activeSlide >= 3 && activeSlide <= 5 ? 'active-menu-item' : ''}
                    >
                        Skills
                    </li>
                </ul>
                <ul className="nav_box_right">
                    <li>
                        <a href='https://github.com/SooHwanC' target="_blank" rel="noopener noreferrer">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                        </a>
                    </li>
                    <li>
                        <a href='https://frcp9408.tistory.com/' target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459"><title>티스토리 로고</title><g><path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z" /></g></svg>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.notion.so/6151759b15b241b48ab9f172b2b70935?pvs=4' target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <path d="M5.948 5.609c0.99 0.807 1.365 0.75 3.234 0.625l17.62-1.057c0.375 0 0.063-0.375-0.063-0.438l-2.927-2.115c-0.557-0.438-1.307-0.932-2.74-0.813l-17.057 1.25c-0.625 0.057-0.75 0.37-0.5 0.62zM7.005 9.719v18.536c0 0.995 0.495 1.37 1.615 1.307l19.365-1.12c1.12-0.063 1.25-0.745 1.25-1.557v-18.411c0-0.813-0.313-1.245-1-1.182l-20.234 1.182c-0.75 0.063-0.995 0.432-0.995 1.24zM26.12 10.708c0.125 0.563 0 1.12-0.563 1.188l-0.932 0.188v13.682c-0.813 0.438-1.557 0.688-2.177 0.688-1 0-1.25-0.313-1.995-1.245l-6.104-9.583v9.271l1.932 0.438c0 0 0 1.12-1.557 1.12l-4.297 0.25c-0.125-0.25 0-0.875 0.438-0.995l1.12-0.313v-12.255l-1.557-0.125c-0.125-0.563 0.188-1.37 1.057-1.432l4.609-0.313 6.354 9.708v-8.589l-1.62-0.188c-0.125-0.682 0.37-1.182 0.995-1.24zM2.583 1.38l17.745-1.307c2.177-0.188 2.74-0.063 4.109 0.932l5.667 3.984c0.932 0.682 1.245 0.87 1.245 1.615v21.839c0 1.37-0.5 2.177-2.24 2.302l-20.615 1.245c-1.302 0.063-1.927-0.125-2.615-0.995l-4.172-5.417c-0.745-0.995-1.057-1.74-1.057-2.609v-19.411c0-1.12 0.5-2.052 1.932-2.177z" />
                            </svg>
                        </a>
                    </li>

                </ul>
            </header>

            <Swiper
                speed={1000}
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                onSwiper={handleSwiper}
                pagination={{
                    clickable: true,
                }}
                onSlideChange={handleSlideChange}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            // noSwiping={true}
            // noSwipingClass="swiper-no-swiping"
            >
                <SwiperSlide>
                    <div className="main_top_box">
                        <video src="/videos/main_video.webm" preload="auto" autoPlay playsInline muted loop></video>
                        <div className="main_top_title">
                            <h1>최수환</h1>
                            <h1>Full Stack Developer</h1>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="second_block">
                        <div className="second_block_photo">
                            <img src="/images/profile_pic.webp" alt="프로필사진" />
                        </div>
                        <div className="second_block_intro">
                            <h1>
                                To Be <br />Full Stack Developer
                            </h1>
                            <p>
                                안녕하세요 풀스택 개발자를 지향하는 최수환입니다. <br />
                                새로운 지식과 기술을 배우는걸 좋아합니다. <br />
                                완벽을 추구하는 성향 덕분에 맡은 일을 끝까지 해냅니다. <br />
                            </p>
                            <ul>
                                <li>
                                    #꼼꼼함
                                </li>
                                <li>
                                    #완벽주의
                                </li>
                            </ul>
                        </div>
                        <div className="background_img_wrapper_02">
                            <animated.div className="img_01" {...bind1()} style={{
                                ...props1,
                                transform: props1.x.to(x => `translate3d(${x}px, ${props1.y.get()}px, 0)`)
                            }}>
                                <img src="/images/background_star.svg" alt="별" />
                            </animated.div>
                            <animated.div className="img_02" {...bind2()} style={{
                                ...props2,
                                transform: props2.x.to(x => `translate3d(${x}px, ${props2.y.get()}px, 0)`)
                            }}>
                                <img src="/images/background_astro.svg" alt="우주인" />
                            </animated.div>
                            <animated.div className="img_03" {...bind3()} style={{
                                ...props3,
                                transform: props3.x.to(x => `translate3d(${x}px, ${props3.y.get()}px, 0)`)
                            }}>
                                <img src="/images/background_rocket.svg" alt="로켓" />
                            </animated.div>
                        </div>
                    </div>
                </SwiperSlide >
                <SwiperSlide >
                    <CircularSlider />
                </SwiperSlide>

                <SwiperSlide>
                    <div className='skill_block'>
                        <div className='left_box'>
                        </div>
                        <div className='right_box'>
                            {/* <h1>
                                Front
                            </h1> */}
                            <div className='logo_wrapper'>
                                <h2>
                                    Language
                                </h2>
                                <div className='right_box_logo3'>
                                    <div className='logo_box'>
                                        <img src='/skills/html.svg' alt='logo_html' className='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/skills/css.svg' alt='logo_css' className='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/skills/javascript.svg' alt='logo_js' className='tilt-animation' />
                                    </div>
                                </div>
                                <h2>
                                    FrameWork
                                </h2>
                                <div className='right_box_logo2'>
                                    <div className='logo_box'>
                                        <img src='/skills/react.svg' alt='logo_react' className='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/skills/vue.svg' alt='logo_vue' className='tilt-animation' />
                                    </div>
                                </div>
                                <h2>
                                    Library
                                </h2>
                                <div className='right_box_logo3'>
                                    <div className='logo_box'>
                                        <img src='/skills/redux.svg' alt='logo_redux' className='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/skills/pinia.svg' alt='logo_pinia' className='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/skills/sass.svg' alt='logo_sass' className='tilt-animation' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide >
                <SwiperSlide>
                    <div className='skill_block'>
                        <div className='left_box'>
                        </div>
                        <div className='right_box'>
                            {/* <h1>
                                Back
                            </h1> */}
                            <div className='logo_wrapper'>
                                <h2>
                                    Language
                                </h2>
                                <div className='right_box_logo3'>
                                    <div className='logo_box'>
                                        <img src='/skills/javascript.svg' alt='logo_js' className='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/skills/java.svg' alt='logo_java' className='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/skills/python.svg' alt='logo_python' className='tilt-animation' />
                                    </div>
                                </div>
                                <h2>
                                    FrameWork
                                </h2>
                                <div className='right_box_logo4'>
                                    <div className='logo_box_large'>
                                        <img src='/skills/springboot.svg' className='large_svg' alt='logo_spb' />
                                    </div>
                                    <div className='logo_box_large'>
                                        <img src='/skills/node1.svg' className='large_svg' alt='logo_node' />
                                    </div>
                                    <div className='logo_box_large'>
                                        <img src='/skills/flask.svg' className='large_svg' alt='logo_flask' />
                                    </div>
                                    <div className='logo_box_large'>
                                        <img src='/skills/fastapi.svg' className='large_svg' alt='logo_fastapi' />
                                    </div>
                                </div>
                                <h2>
                                    DB
                                </h2>
                                <div className='right_box_logo3'>
                                    <div className='logo_box'>
                                        <img src='/skills/oracle.svg' alt='logo_oracle' className='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/skills/mysql.svg' alt='logo_mysql' className='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/skills/mongodb.svg' alt='logo_mongodb' className='tilt-animation' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide >
                <SwiperSlide>
                    <div className='skill_block'>
                        <div className='left_box'>
                        </div>
                        <div className='right_box'>
                            {/* <h1>
                                Etc
                            </h1> */}
                            <div className='logo_wrapper'>
                                <h2>
                                    Etc
                                </h2>

                                <div className='right_box_logo4'>
                                    <div className='logo_box'>
                                        <img src='/skills/docker.svg' alt='logo_docker' className='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/skills/firebase.svg' alt='logo_firebase' className='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/skills/aws.svg' alt='logo_aws' className='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/skills/github.svg' alt='logo_github' className='tilt-animation' />
                                    </div>
                                    {/* <div className='logo_box'>
                                        <h2>
                                            LLM
                                        </h2>
                                    </div>
                                    <div className='logo_box'>
                                        <h2>
                                            Axolotl
                                        </h2>
                                    </div>
                                    <div className='logo_box'>
                                        <h2>
                                            STT
                                            (Whisper)
                                        </h2>
                                    </div>
                                    <div className='logo_box'>
                                        <h2>
                                            Vllm
                                        </h2>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide >

                <SwiperSlide>
                    <div className='copyright'>
                        <video src="/videos/outro.webm" autoPlay playsInline muted loop></video>
                        <div className='copyright_text'>
                            <p>
                                본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
                            </p>
                            <span>
                                @ 2024. Choi Soo Hwan. All rights reserved.
                            </span>
                        </div>
                    </div>

                </SwiperSlide >



            </Swiper >
        </div >
    );
}

export default Main;

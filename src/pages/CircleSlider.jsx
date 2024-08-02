import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';
// import '../css/main.css';

const CircularSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoplayRunning, setIsAutoplayRunning] = useState(true);
    const [slidesSize, setSlidesSize] = useState(0);

    const wrapperRef = useRef(null);
    const slidesHolderRef = useRef(null);
    const descriptionsHolderRef = useRef(null);

    const slides = [
        { image: '/slider/js.svg', title: 'Javascript' },
        { image: '/slider/css.png', title: 'Css3' },
        { image: '/slider/html.png', title: 'Html5' },
        { image: '/slider/sass.png', title: 'Sass' },
        { image: '/slider/vstudio.png', title: 'MVS Code' },
        { image: '/slider/chrome.png', title: 'Chrome' },
    ];

    const stepAngle = (2 * Math.PI) / slides.length;  // 2 * Math.PI = 360
    const sliderSize = 100;
    const slideSize = 15;
    const animationDuration = 600;
    const autoplayInterval = 2500;


    // initial animation value setting
    const [{ rotate }, api] = useSpring(() => ({
        rotate: 0, // 초기 회전각
        config: { mass: 1, tension: 120, friction: 14 }, // mass: 질량 (무겁게), tention: 스프링 강도 (빠르게), friction: 마찰력 (안정화)

        // 로깅
        onChange: (result) => {
            console.log('Rotate changed:', result.value.rotate);
        }
    }));

    useEffect(() => {
        onResize();
        window.addEventListener('resize', onResize);  // resize 이벤트에 onResize 리스너로 등록
        return () => window.removeEventListener('resize', onResize);  // 컴포넌트 언마운트or재실행 전에 리스너 제거 (메모리누수)
    }, []);

    useEffect(() => {
        const newRotate = -currentSlide * (stepAngle * 180 / Math.PI);
        api.start({ rotate: newRotate, immediate: false });
    }, [currentSlide, api, stepAngle]);

    // 자동 슬라이드
    // useEffect(() => {
    //     let interval;
    //     if (isAutoplayRunning) {
    //         interval = setInterval(() => rotateSlider(-1), autoplayInterval);
    //     }
    //     return () => clearInterval(interval);
    // }, [isAutoplayRunning, currentSlide]);

    const onResize = () => {
        if (wrapperRef.current) {
            const w = wrapperRef.current.parentNode.getBoundingClientRect().width;  // 부모노드 너비
            const h = wrapperRef.current.parentNode.getBoundingClientRect().height;  // 부모노드 높이
            const radius = 2 * h <= w ? h * sliderSize / 100 : (w / 2) * sliderSize / 100;
            setSize(Math.round(radius));
        }
    };

    const setSize = (radius) => {
        if (wrapperRef.current && slidesHolderRef.current && descriptionsHolderRef.current) {
            wrapperRef.current.style.width = 2 * radius + 'px';
            wrapperRef.current.style.height = radius + 'px';

            const r = 2 * radius * (1 - slideSize / 100);
            slidesHolderRef.current.style.width = slidesHolderRef.current.style.height = r + 'px';
            slidesRepositioning(r / 2);

            slidesHolderRef.current.style.marginTop = radius * slideSize / 100 + 'px';
            descriptionsHolderRef.current.style.width = (r / 2 - r * slideSize / 100 + 20) * 2 + 'px';
            descriptionsHolderRef.current.style.height = r / 2 - r * slideSize / 100 + 20 + 'px';

            const newSlidesSize = Math.min(2 * radius * slideSize / 100, stepAngle * radius * (1 - slideSize / 100) - 50);
            setSlidesSize(newSlidesSize);

            descriptionsHolderRef.current.style.fontSize = window.innerHeight < window.innerWidth ? '1.2vh' : '1.2vw';
        }
    };

    const slidesRepositioning = (r) => {
        slides.forEach((_, i) => {
            const x = r * Math.cos(stepAngle * i - Math.PI / 2);
            const y = r * Math.sin(stepAngle * i - Math.PI / 2);
            const slide = document.querySelector(`.slides-holder__item:nth-child(${i + 1})`);
            if (slide) {
                slide.style.transform = `translate(${x}px, ${y}px) rotate(${stepAngle * 180 / Math.PI * i}deg)`;
            }
        });
    };

    const rotateSlider = (direction) => {
        // direction을 반대로 변경
        const newSlide = (currentSlide - direction + slides.length) % slides.length;
        console.log('Rotate slider:', { newSlide, currentSlide, direction });
        setCurrentSlide(newSlide);
        const newRotate = -newSlide * (stepAngle * 180 / Math.PI);
        console.log('New rotate:', newRotate);
        api.start({ rotate: newRotate, immediate: false });
    };

    const toggleAutoplay = () => {
        setIsAutoplayRunning(!isAutoplayRunning);
    };

    const bind = useDrag(({ movement: [mx], velocity: [vx], active, last }) => {
        console.log('Drag values:', { mx, vx, active, last, currentSlide });

        if (active) {
            // 드래그 중 실시간 회전 (방향을 반대로 변경)
            const rotation = -currentSlide * (stepAngle * 180 / Math.PI) + mx * 2;
            api.start({ rotate: rotation, immediate: true });
        } else if (last) {
            const moveThreshold = 1;
            const velocityThreshold = 0.1;

            if (Math.abs(mx) > moveThreshold || Math.abs(vx) > velocityThreshold) {
                // 방향 결정 (방향을 반대로 변경)
                const direction = mx > 0 ? -1 : 1;
                const newSlide = (currentSlide + direction + slides.length) % slides.length;
                console.log('New slide:', newSlide);
                setCurrentSlide(newSlide);
            }

            // 최종 위치로 부드럽게 이동
            api.start({ rotate: -currentSlide * (stepAngle * 180 / Math.PI), immediate: false });
        }
    }, { axis: 'x', preventScroll: true });


    return (
        <div className="slider">
            <div className="circular-slider circular-slider-1">
                <div className="wrapper" ref={wrapperRef} style={{ touchAction: 'none' }}>
                    <div className="controls">
                        <div className="controls__left" onClick={() => rotateSlider(1)}>
                            <div className="icon-wrapper"><i className="far fa-arrow-alt-circle-left"></i></div>
                        </div>
                        <div className="controls__right" onClick={() => rotateSlider(-1)}>
                            <div className="icon-wrapper"><i className="far fa-arrow-alt-circle-right"></i></div>
                        </div>
                        <div className={`controls__autoplay ${isAutoplayRunning ? 'controls__autoplay_running' : ''}`} onClick={toggleAutoplay}>
                            <div className="icon-wrapper">
                                <div className="pause"><i className="far fa-pause-circle"></i></div>
                                <div className="run"><i className="far fa-play-circle"></i></div>
                            </div>
                        </div>
                    </div>
                    <animated.div
                        className="slides-holder"
                        ref={slidesHolderRef}
                        style={{
                            transform: rotate.to(r => `rotate(${r}deg)`),
                            touchAction: 'none',
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`slides-holder__item ${index === currentSlide ? 'slides-holder__item_active' : ''}`}
                                style={{
                                    width: `${slidesSize}px`,
                                    height: `${slidesSize}px`
                                }}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        cursor: 'grab',
                                        touchAction: 'none'  // 이 줄을 추가합니다
                                    }}
                                    {...(index === currentSlide ? bind() : {})}
                                />
                            </div>
                        ))}
                    </animated.div>
                    <div className="descriptions" ref={descriptionsHolderRef}>
                        {slides.map((slide, index) => (
                            <div key={index} className={`descriptions__item ${index === currentSlide ? 'descriptions__item_visible' : ''}`}>
                                <h1>{slide.title}</h1>
                                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, ea? Commodi alias ad corporis velit, neque facere fugit nulla exercitationem veniam. Facere est cupiditate perspiciatis aliquid odio impedit enim quo!</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircularSlider;
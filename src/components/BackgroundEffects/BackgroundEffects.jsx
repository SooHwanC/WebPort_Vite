import React, { useEffect, useState } from 'react';
import './BackgroundEffects.scss';

const BackgroundEffects = ({ activeSlide }) => {
    const [moveAmount, setMoveAmount] = useState(0);
    
    const lightStreaks = [
        // 최상단 영역
        { id: 1, startX: 15, startY: 1, length: 140, opacity: 0.4 },
        { id: 2, startX: 35, startY: 2, length: 120, opacity: 0.3 },
        { id: 3, startX: 55, startY: 1, length: 130, opacity: 0.35 },
        { id: 4, startX: 75, startY: 2, length: 110, opacity: 0.3 },
        { id: 5, startX: 95, startY: 1, length: 125, opacity: 0.25 },

        // 상단 영역
        { id: 6, startX: 8, startY: 10, length: 115, opacity: 0.4 },
        { id: 7, startX: 25, startY: 12, length: 125, opacity: 0.35 },
        { id: 8, startX: 45, startY: 8, length: 105, opacity: 0.3 },
        { id: 9, startX: 65, startY: 11, length: 135, opacity: 0.35 },
        { id: 10, startX: 85, startY: 9, length: 110, opacity: 0.3 },

        // 중상단 영역
        { id: 11, startX: 12, startY: 20, length: 120, opacity: 0.4 },
        { id: 12, startX: 32, startY: 22, length: 130, opacity: 0.35 },
        { id: 13, startX: 52, startY: 21, length: 100, opacity: 0.25 },
        { id: 14, startX: 72, startY: 23, length: 115, opacity: 0.3 },
        { id: 15, startX: 92, startY: 20, length: 125, opacity: 0.4 },

        // 중단 영역
        { id: 16, startX: 5, startY: 35, length: 105, opacity: 0.35 },
        { id: 17, startX: 28, startY: 32, length: 140, opacity: 0.3 },
        { id: 18, startX: 48, startY: 34, length: 120, opacity: 0.35 },
        { id: 19, startX: 68, startY: 33, length: 110, opacity: 0.4 },
        { id: 20, startX: 88, startY: 35, length: 130, opacity: 0.3 },

        // 중하단 영역
        { id: 21, startX: 15, startY: 45, length: 100, opacity: 0.25 },
        { id: 22, startX: 35, startY: 48, length: 115, opacity: 0.35 },
        { id: 23, startX: 55, startY: 46, length: 125, opacity: 0.4 },
        { id: 24, startX: 75, startY: 47, length: 105, opacity: 0.3 },
        { id: 25, startX: 95, startY: 45, length: 130, opacity: 0.35 },

        // 하단 영역
        { id: 26, startX: 8, startY: 60, length: 120, opacity: 0.3 },
        { id: 27, startX: 28, startY: 58, length: 110, opacity: 0.4 },
        { id: 28, startX: 48, startY: 62, length: 140, opacity: 0.35 },
        { id: 29, startX: 68, startY: 59, length: 125, opacity: 0.3 },
        { id: 30, startX: 88, startY: 61, length: 115, opacity: 0.35 }
    ];

    useEffect(() => {
        if (activeSlide <= 0) {
            setMoveAmount(0);
            return;
        }
        
        setMoveAmount((activeSlide - 1) * 50);
    }, [activeSlide]);

    if (activeSlide <= 0) return null;

    return (
        <div className="background-effects">
            {lightStreaks.map((streak) => (
                <div
                    key={streak.id}
                    className="light-streak"
                    style={{
                        position: 'absolute',
                        top: `${streak.startY}%`,
                        left: `${streak.startX}%`,
                        width: `${streak.length}px`,
                        height: '2px',
                        opacity: streak.opacity,
                        transform: `translate(${-moveAmount * 0.5}px, ${moveAmount}px) rotate(-45deg)`,
                        transition: 'transform 0.8s ease-out',
                        background: `linear-gradient(90deg, 
                            transparent 0%, 
                            rgba(255, 255, 255, 0.3) 15%, 
                            rgba(255, 255, 255, ${streak.opacity * 2}) 50%, 
                            rgba(255, 255, 255, 0.3) 85%, 
                            transparent 100%
                        )`
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundEffects;
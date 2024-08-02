import React from 'react'
// import '../SCSS/pages/JavaBurger.scss';

function JavaBurger({ closeModal }) {
    return (
        <div className='App_JavaBurger'>
            <h1>JAVA BURGER</h1>
            <div className='main_pic'>
                <img src='/javaburger.png' />
            </div>
            <div className='describe_work'>
                <h2>
                    서비스소개
                </h2>
                <h3>
                    서비스명: 햄버거를 만들어 사람들에게 행복을 전달하는 본격! 햄버거 타이쿤 JAVA BURGER💚
                </h3>
                <h3>
                    서비스 설명 :
                </h3>
                <h3>
                    ⌚ 난이도마다 달라지는 레시피, 시간 제한! 스릴 만점 게임 구현 ✔
                </h3>
                <h3>
                    🍔 실시간으로 만들어지는 햄버거 애니메이션, 진짜보다 더 진짜 같다!
                </h3>
                <h3>
                    ✌🏻 2가지 게임모드, 키보드 버전과 마우스 버전! 두 가지 재미를 동시에!
                </h3>
                <h3>
                    💛 랭킹 확인을 통해 나의 점수를 실시간으로 확인한다! 나는 과연 몇 등? 🔎
                </h3>
                <h3>
                    💡 게임의 사운드는 찰져야 제 맛, 타이쿤의 묘미는 사운드! 📣
                </h3>
                <h3>
                    🙆‍♀️ 아기자기한 화면 구현을 통해 사람들의 즐거움을 배로! 😄👍
                </h3>
            </div>
        </div>
    )
}

export default JavaBurger
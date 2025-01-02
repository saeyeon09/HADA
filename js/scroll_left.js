document.addEventListener('DOMContentLoaded', () => {
  const scrollBox = document.querySelector('.scroll_box1');

  if (scrollBox) {
    console.log('scrollBox found:', scrollBox);

    scrollBox.addEventListener('mousedown', (e) => {
      console.log('mousedown event triggered');
    });
  } else {
    console.error('scrollBox not found. Please check your HTML and selector.');
  }
});


const scrollBox = document.querySelector('.scroll_box1');

let isDown = false; // 드래그 상태 확인
let startX; // 드래그 시작 위치
let scrollLeft; // 초기 스크롤 위치

// 마우스 버튼 누를 때
scrollBox.addEventListener('mousedown', (e) => {
  isDown = true;
  scrollBox.classList.add('active');
  startX = e.pageX - scrollBox.offsetLeft;
  scrollLeft = scrollBox.scrollLeft;
});

// 마우스 움직일 때
scrollBox.addEventListener('mousemove', (e) => {
  if (!isDown) return; // 드래그 중이 아니면 종료
  e.preventDefault();
  const x = e.pageX - scrollBox.offsetLeft;
  const walk = (x - startX) * 1.5; // 드래그 속도
  scrollBox.scrollLeft = scrollLeft - walk;
});

// 마우스 버튼을 뗄 때
scrollBox.addEventListener('mouseup', () => {
  isDown = false;
  scrollBox.classList.remove('active');
});

// 마우스가 박스 밖으로 나갈 때
scrollBox.addEventListener('mouseleave', () => {
  isDown = false;
  scrollBox.classList.remove('active');
});


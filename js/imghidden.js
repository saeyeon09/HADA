document.addEventListener("DOMContentLoaded", () => {
  const image1 = document.querySelector(".image-1 img");
  let isImageHidden = false; // 이미지가 사라진 상태를 추적

  // 화면 전체에 터치 이벤트 추가
  document.body.addEventListener("click", () => {
    if (!isImageHidden) {
      // 첫 번째 이미지를 숨김
      image1.style.opacity = "0";
      image1.style.visibility = "hidden";

      // 상태를 업데이트하여 다시 나타나지 않도록 함
      isImageHidden = true;
    }
  });
});
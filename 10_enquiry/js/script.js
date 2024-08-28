document.addEventListener("DOMContentLoaded", ()=>{
    const submitBtn = document.getElementById('submitBtn');
    const closeBtn = document.getElementById('close');
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.overlay');

    // 제출 버튼 클릭 시 팝업과 오버레이를 표시
    submitBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
        popup.style.display = 'block';
    });

    // 닫기 버튼 클릭 시 팝업과 오버레이를 숨김
    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    });

    // 오버레이 클릭 시에도 팝업 닫기
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    });
});///////////////////////전체 끝
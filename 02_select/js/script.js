document.addEventListener("DOMContentLoaded", ()=>{
    // 요소 선택
    const ownerLink = document.getElementById('ownerLink');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    // 펫오너 링크 클릭 시 팝업 표시
    ownerLink.addEventListener('click', (event) => {
        event.preventDefault(); // 기본 링크 동작 막기
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    // Yes 버튼 클릭 시 동작
    yesButton.addEventListener('click', () => {
        window.location.href = '../04_reservation/index.html';
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    // No 버튼 클릭 시 팝업 닫기
    noButton.addEventListener('click', () => {
        window.location.href = '../03_home/index.html';
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    // 오버레이 클릭 시 팝업 닫기
    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});///////////////////////전체 끝
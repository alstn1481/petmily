document.addEventListener("DOMContentLoaded", ()=>{
    // 모든 request-card에 클릭 이벤트를 추가
    document.querySelectorAll('.request-card').forEach(card => {
        card.addEventListener('click', function() {
            // 클릭한 카드의 정보를 저장
            const serviceType = this.querySelector('h3').innerText;
            const petType = this.querySelector('p:nth-of-type(1)').innerText; // 종류
            const location = this.querySelector('p:nth-of-type(2)').innerText; // 위치
            const date = this.querySelector('p:nth-of-type(3)').innerText; // 일시
            const price = this.querySelector('p:nth-of-type(4)').innerText; // 가격

            // sessionStorage에 정보 저장
            sessionStorage.setItem('serviceType', serviceType);
            sessionStorage.setItem('petType', petType);
            sessionStorage.setItem('location', location);
            sessionStorage.setItem('date', date);
            sessionStorage.setItem('price', price);

            // 예약 상세 페이지로 이동
            window.location.href = '../03. home_detail/index.html'; // 예약 상세 페이지로 리디렉션
        });
    });
});///////////////////////전체 끝
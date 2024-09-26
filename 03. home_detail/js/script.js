document.addEventListener("DOMContentLoaded", ()=>{
    /****************슬라이드***************/
    const slideArea = document.querySelector("main section div");
    const toLeft = () => {

        slideArea.style.left = "-100%";
        slideArea.style.transition = "left 1s";

        setTimeout(() => {

            slideArea.style.transition = "none"
            slideArea.style.left = 0
            slideArea.append(slideArea.firstElementChild);
        }, 1000);
    };

    setInterval(toLeft, 2500);

    /****************예약 정보 가져오기***************/

    // sessionStorage에서 저장된 데이터를 가져와 페이지에 표시
    document.getElementById('serviceType').innerText = sessionStorage.getItem('serviceType');
    document.getElementById('petType').innerText = sessionStorage.getItem('petType');
    document.getElementById('location').innerText = sessionStorage.getItem('location');
    document.getElementById('date').innerText = sessionStorage.getItem('date');
    document.getElementById('price').innerText = sessionStorage.getItem('price');

    /****************예약하기 버튼***************/

    document.getElementById('confirm-button').addEventListener("click", () => {
        const confirmation = confirm("정말 예약하시겠습니까?");
        if (confirmation) {
            alert("예약이 확정되었습니다.");
            // 예약 확정 로직을 여기에 추가할 수 있습니다.
        } else {
            // 취소 시에는 아무 작업도 하지 않음.
            console.log("예약이 취소되었습니다.");
        }
    });

});///////////////////////전체 끝
document.addEventListener("DOMContentLoaded", ()=>{
    
    const menuBtn = document.getElementById("menu-button");
        const menu = document.getElementById("menu");
        const black = document.getElementById("black");
        const layout = document.getElementById("layout");

        // 메뉴 열기, 닫기
        menuBtn.addEventListener("click", () => {
            if (menuBtn.textContent == "menu") {
                menuBtn.textContent = "close";
                menu.style.right = "0";
                menuBtn.style.color = "var(--white)";
                menuBtn.style.transition = "color 0.5s";
                black.style.display = "block";
                layout.style.overflowY = "hidden";

            } else {
                menuBtn.textContent = "menu";
                menu.style.right = "-50%";
                menuBtn.style.color = "var(--pink4)";
                menuBtn.style.transition = "color 0.5s";
                black.style.display = "none";
                layout.style.overflowY = "auto";
            };
        })

});///////////////////////전체 끝
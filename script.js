document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Прелоадер: плавно убираем экран загрузки
    const preloader = document.getElementById("preloader");
    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.style.opacity = "0";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 800);
        }, 500);
    });

    // 2. Шапка: добавляем плотность фона при прокрутке страницы
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "15px 0";
            navbar.style.background = "rgba(10, 10, 10, 0.85)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
        } else {
            navbar.style.padding = "20px 0";
            navbar.style.background = "rgba(10, 10, 10, 0.4)";
            navbar.style.boxShadow = "none";
        }
    });

    // 3. Анимация появления блоков при скролле (Scroll Reveal)
    const revealElements = document.querySelectorAll(".reveal");
    
    const checkReveal = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", checkReveal);
    checkReveal(); // Запуск проверки сразу при загрузке
});

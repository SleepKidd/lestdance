document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Прелоадер: плавно скрываем экран загрузки после полной сборки страницы
    const preloader = document.getElementById("preloader");
    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.style.opacity = "0";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 800);
        }, 500);
    });

    // 2. Шапка: плавно меняем прозрачность и высоту навигации при скролле
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

    // 3. Эффект проявления блоков: запускаем красивую анимацию появления при прокрутке
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
    checkReveal(); // Проверяем блоки сразу при старте страницы

    // 4. Логика аккордеона FAQ: плавное открытие вкладок по клику
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        
        question.addEventListener("click", () => {
            const isOpen = item.classList.contains("active");
            
            // Схлопываем остальные вкладки, чтобы интерфейс оставался аккуратным
            faqItems.forEach(i => i.classList.remove("active"));
            
            // Если кликнули на закрытую вкладку — открываем её
            if (!isOpen) {
                item.classList.add("active");
            }
        });
    });
});

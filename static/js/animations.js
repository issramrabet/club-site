/* ==========================================
   ENISo Auto Crew - Nice-to-Have Features
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    /* 1. Statistics Counting Animation */
    const statCounters = document.querySelectorAll("[data-counter]");
    
    if (statCounters.length > 0) {
        const observerOptions = { root: null, threshold: 0.5 };

        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const targetValue = parseInt(counter.getAttribute("data-counter"), 10);
                    const duration = 2000; // 2 seconds
                    const startTime = performance.now();

                    const updateCount = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeProgress = 1 - Math.pow(1 - progress, 3); // Smooth ease-out
                        const currentCount = Math.floor(easeProgress * targetValue);

                        counter.textContent = currentCount;

                        if (progress < 1) {
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.textContent = targetValue;
                        }
                    };

                    requestAnimationFrame(updateCount);
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);

        statCounters.forEach(counter => counterObserver.observe(counter));
    }


    /* 2. Image Slider / Carousel */
    const slider = document.querySelector(".slider-container");
    
    if (slider) {
        const slides = slider.querySelectorAll(".slide");
        const prevBtn = slider.querySelector(".slider-prev");
        const nextBtn = slider.querySelector(".slider-next");
        let currentIndex = 0;
        let slideInterval;

        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.style.display = (i === index) ? "block" : "none";
            });
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        };

        if (nextBtn && prevBtn && slides.length > 0) {
            nextBtn.addEventListener("click", () => {
                nextSlide();
                resetTimer();
            });

            prevBtn.addEventListener("click", () => {
                prevSlide();
                resetTimer();
            });
        }

        const startTimer = () => {
            slideInterval = setInterval(nextSlide, 4000); // Changes slide every 4 seconds
        };

        const resetTimer = () => {
            clearInterval(slideInterval);
            startTimer();
        };

        if (slides.length > 0) {
            showSlide(currentIndex);
            startTimer();
        }
    }
});
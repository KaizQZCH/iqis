// Animasi Bintang
const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let stars = [];
for (let i = 0; i < 150; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        alpha: Math.random(),
        speed: Math.random() * 0.02
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
        star.alpha += star.speed;
        if (star.alpha >= 1 || star.alpha <= 0.2) star.speed *= -1;
    }
    requestAnimationFrame(animateStars);
}
animateStars();

window.addEventListener("scroll", () => {
    const landing = document.getElementById("landing");
    const scrollPos = window.scrollY;

    if (scrollPos > window.innerHeight * 0.5) {
        landing.style.background = "none"; // Hilangkan bintang
    } else {
        landing.style.background = "black"; // Kembalikan bintang saat scroll ke atas
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll(".project-video");

    videos.forEach(video => {
        video.addEventListener("mouseenter", () => {
            video.play();
        });

        video.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0; // Reset ke awal
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.getElementById("landing");
    const canvas = document.getElementById("starCanvas");

    function updateBackground() {
        if (window.scrollY > homeSection.clientHeight) {
            canvas.style.display = "none"; // Hilangin bintang
        } else {
            canvas.style.display = "block"; // Tampilkan bintang
        }
    }

    window.addEventListener("scroll", updateBackground);
    updateBackground(); // Panggil sekali di awal
});
const videos = document.querySelectorAll(".project-video");

videos.forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0; // Balik ke awal
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});
window.addEventListener('load', () => {
    const chibi = document.querySelector('.chibi');
    const textElement = document.getElementById('typed-text');

    const text = "Halo! Welcome to PukisStudio!";
    let index = 0;

    function startTyping() {
        const typingInterval = setInterval(() => {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);
    }

    // delay sebelum munculin chibi
    setTimeout(() => {
        chibi.classList.add('show');

        // tunggu 800ms baru mulai ketik
        setTimeout(() => {
            startTyping();
        }, 800);
    }, 500);
});


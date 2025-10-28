// Smooth scroll từ frame-1 xuống frame_middle
document.querySelector('.scroll-down').addEventListener('click', function () {
    document.querySelector('.scroll-hint').classList.add('hidden');

    const frameMiddle = document.querySelector('.frame_middle');
    const targetPosition = frameMiddle.offsetTop;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

// Smooth scroll từ frame_middle xuống frame-2
document.querySelector('.scroll-down-middle').addEventListener('click', function () {
    document.querySelector('.scroll-hint-middle').classList.add('hidden');

    const frame2 = document.querySelector('.frame-2');
    const targetPosition = frame2.offsetTop;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

// Typing effect cho tờ giấy
const paper = document.querySelector('.paper');
const typedText = document.querySelector('.typed-text');
const paperHint = document.querySelector('.paper-hint');

const birthdayMessage = `Chúc mừng sinh nhật tuổi 20 của bấy bi! 🎉

Hôm nay là một ngày đặc biệt, đánh dấu thêm một tuổi mới trong cuộc đời của em, đó còn là tuổi 20 - một độ tuổi mà mọi người cho rằng là tuổi mà người con gái xinh đẹp nhất.

Tuổi 20 là cũng thời điểm để em bắt đầu khám phá bản thân và theo đuổi những ước mơ mà em nung nấu. Hy vọng rằng em sẽ luôn giữ được sự nhiệt huyết, đam mê và tinh thần lạc quan trong mọi thử thách mà cuộc sống mang đến.

Mong rằng tuổi 20 của em sẽ là một năm đầy ắp những kỷ niệm đẹp, những trải nghiệm mới mẻ và những thành tựu rực rỡ bên cạnh người mà em yêu thương (cụ thể là anh 😎).

Chúc em luôn xinh đẹp, may mắn và được bao quanh bởi tình yêu thương từ gia đình và bạn bè, à và luôn iu anh nhé ❤️.

Happy Birthday Châu thối! 🎂🎈

Với tất cả tình iu,
Nguyễn Minh Tiến ❤️`;

let hasTyped = false;

paper.addEventListener('click', function () {
    if (hasTyped) return;

    hasTyped = true;
    paperHint.classList.add('hidden');
    paper.style.cursor = 'default';

    typeWriter(birthdayMessage, 0);
});

function typeWriter(text, index) {
    if (index < text.length) {
        const currentChar = text.charAt(index);
        typedText.textContent += currentChar;

        let speed;

        // Nếu gặp ký tự xuống dòng
        if (currentChar === '\n') {
            speed = 700; // Nghỉ 0.7 giây (700ms) khi xuống dòng
        } else {
            speed = 70; // Tốc độ đánh máy bình thường
        }

        setTimeout(() => typeWriter(text, index + 1), speed);
    } else {
        typedText.classList.add('typing-done');
    }
}





// ...existing code...

// Do You Love Me functionality
const questionContainer = document.querySelector(".frame_middle .question-container");
const resultContainer = document.querySelector(".frame_middle .result-container");
const gifResult = document.querySelector(".frame_middle .gif-result");
const heartLoader = document.querySelector(".frame_middle .cssload-main");
const yesBtn = document.querySelector(".frame_middle .js-yes-btn");
const noBtn = document.querySelector(".frame_middle .js-no-btn");

// Function để di chuyển nút No
function moveNoButton() {
    const frameMiddle = document.querySelector('.frame_middle');
    const padding = 60; // Khoảng cách an toàn từ viền (tăng lên nếu cần)

    // Lấy kích thước thực của button
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    // Tính toán vùng an toàn
    const maxX = frameMiddle.offsetWidth - buttonWidth - padding;
    const maxY = frameMiddle.offsetHeight - buttonHeight - padding;
    const minX = padding;
    const minY = padding;

    // Random trong vùng an toàn
    const newX = Math.floor(Math.random() * (maxX - minX) + minX);
    const newY = Math.floor(Math.random() * (maxY - minY) + minY);

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}

// Kiểm tra thiết bị có hỗ trợ hover không
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

if (isTouchDevice) {
    // Mobile: Di chuyển khi click
    noBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Ngăn hành động mặc định
        moveNoButton();
    });
} else {
    // Desktop: Di chuyển khi hover
    noBtn.addEventListener("mouseover", () => {
        moveNoButton();
    });
}

// Yes button functionality
yesBtn.addEventListener("click", () => {
    questionContainer.style.display = "none";
    heartLoader.style.display = "inherit";

    setTimeout(() => {
        heartLoader.style.display = "none";
        resultContainer.style.display = "inherit";
        gifResult.play();
    }, 3000);
});
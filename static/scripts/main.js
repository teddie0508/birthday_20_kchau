// Smooth scroll khi click nút scroll-down
document.querySelector('.scroll-down').addEventListener('click', function () {
    // Ẩn hint
    document.querySelector('.scroll-hint').classList.add('hidden');

    // Scroll mượt đến frame-2
    document.querySelector('.frame-2').scrollIntoView({
        behavior: 'smooth'
    });
});

// Hiện lại hint khi scroll về frame-1
window.addEventListener('scroll', function () {
    const scrollHint = document.querySelector('.scroll-hint');
    const frame1Height = document.querySelector('.frame-1').offsetHeight;
    const scrollPosition = window.pageYOffset;

    // Nếu scroll về gần frame-1 (trong 80% chiều cao frame-1)
    if (scrollPosition < frame1Height * 0.8) {
        scrollHint.classList.remove('hidden');
    } else {
        scrollHint.classList.add('hidden');
    }
});

// Typing effect cho tờ giấy
const paper = document.querySelector('.paper');
const typedText = document.querySelector('.typed-text');
const paperHint = document.querySelector('.paper-hint');

const birthdayMessage = `Chúc mừng sinh nhật tuổi 20 của bấy bi! 🎉

Hôm nay là một ngày đặc biệt, đánh dấu thêm một tuổi mới trong cuộc đời của em. Chúc bạn luôn tràn đầy niềm vui, hạnh phúc và thành công.

Mong rằng tuổi 20 của bạn sẽ là một năm đầy ắp những kỷ niệm đẹp, những trải nghiệm mới mẻ và những thành tựu rực rỡ.

Chúc bạn luôn khỏe mạnh, may mắn và được bao quanh bởi tình yêu thương từ gia đình và bạn bè.

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
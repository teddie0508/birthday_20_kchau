// Force scroll to top on page load/reload
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);
});

// Welcome Dialog - Phát nhạc khi nhấn button
const welcomeDialog = document.getElementById('welcomeDialog');
const agreeBtn = document.getElementById('agreeBtn');
const audio = document.getElementById('bg-music');

// Set volume mặc định
audio.volume = 0.6;

// Xử lý khi nhấn nút "Nhất trí" - Phát nhạc
agreeBtn.addEventListener('click', () => {
    // Ẩn dialog
    welcomeDialog.classList.add('hidden');

    // Phát nhạc
    audio.play().then(() => {
        console.log('Music started playing!');
    }).catch(err => {
        console.log('Audio play failed:', err);
    });
});

// Smooth scroll từ frame-1 xuống frame_middle
document.querySelector('.scroll-down').addEventListener('click', function () {
    document.querySelector('.frame_middle').scrollIntoView({
        behavior: 'smooth'
    });
});

// Smooth scroll từ frame_middle xuống frame-2
document.querySelector('.scroll-down-middle').addEventListener('click', function () {
    document.querySelector('.frame-2').scrollIntoView({
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
    if (!hasTyped) {
        paperHint.classList.add('hidden');
        typeWriter(birthdayMessage, 0);
        hasTyped = true;
    }
});

function typeWriter(text, index) {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        setTimeout(() => typeWriter(text, index + 1), 50);
    } else {
        typedText.classList.add('typing-done');
    }
}

// Do You Love Me functionality
const questionContainer = document.querySelector(".frame_middle .question-container");
const resultContainer = document.querySelector(".frame_middle .result-container");
const gifResult = document.querySelector(".frame_middle .gif-result");
const heartLoader = document.querySelector(".frame_middle .cssload-main");
const yesBtn = document.querySelector(".frame_middle .js-yes-btn");
const noBtn = document.querySelector(".frame_middle .js-no-btn");
const dontYouDare = document.getElementById('dontYouDare');

// Đếm số lần nhấn nút "Khum"
let noClickCount = 0;

// Function để di chuyển nút No
function moveNoButton() {
    const container = document.querySelector(".frame_middle");
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - noBtn.offsetWidth - 40;
    const maxY = containerRect.height - noBtn.offsetHeight - 40;

    const randomX = Math.floor(Math.random() * maxX) + 20;
    const randomY = Math.floor(Math.random() * maxY) + 20;

    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    // Tăng số lần click và đổi text sau 3 lần
    noClickCount++;
    if (noClickCount >= 3) {
        dontYouDare.textContent = 'Bỏ cuộc và ấn nút Có đi đồ lì lợm 😒';
    }
}

// Kiểm tra thiết bị có hỗ trợ hover không
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

if (isTouchDevice) {
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveNoButton();
    });
} else {
    noBtn.addEventListener('mouseenter', moveNoButton);
}

yesBtn.addEventListener('click', () => {
    questionContainer.style.display = 'none';
    heartLoader.style.display = 'block';

    setTimeout(() => {
        heartLoader.style.display = 'none';
        resultContainer.style.display = 'block';
        gifResult.play();
    }, 3000);
});
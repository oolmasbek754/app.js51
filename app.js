const countText = document.querySelector('.count');
const slider = document.querySelector('.slider');
const resetBtn = document.querySelector('.reset');

// boshlang‘ich qiymat
let count = 0;

// Slider o‘zgarsa
slider.addEventListener('input', () => {
    count = slider.value;
    updateUI();
});

// Reset
resetBtn.addEventListener('click', () => {
    count = 0;
    slider.value = 0;
    updateUI();
});

// UI update
function updateUI() {
    countText.textContent = count;

    if (count > 0) {
        countText.style.color = "green";
    } else if (count < 0) {
        countText.style.color = "red";
    } else {
        countText.style.color = "black";
    }
}

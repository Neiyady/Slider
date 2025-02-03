const images = [
    'E:/Frontened-разработка/Для работы/assets/image1.jpg',
    'E:/Frontened-разработка/Для работы/assets/image2.jpg',
    'E:/Frontened-разработка/Для работы/assets/image3.jpg',
    'E:/Frontened-разработка/Для работы/assets/image4.jpg',
    'E:/Frontened-разработка/Для работы/assets/image5.jpg',
    // Добавьте больше изображений по необходимости
];

let currentIndex = 0;

const imageElement = document.getElementById('image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Функция для обновления изображения
function updateImage() {
    imageElement.src = images[currentIndex];
    imageElement.style.opacity = 0; // Начинаем с прозрачности 0
    setTimeout(() => {
        imageElement.style.opacity = 1; // Затем показываем изображение
    }, 50); // Небольшая задержка для анимации
}

// Обработчик событий для кнопки "Назад"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

// Обработчик событий для кнопки "Вперед"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});

// Инициализация слайдера
updateImage();

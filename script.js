// =====================================
// МОБИЛЬНОЕ МЕНЮ
// =====================================

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#nav');

if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
        const open = nav.classList.toggle('open');

        menuButton.setAttribute('aria-expanded', String(open));
        menuButton.textContent = open ? '×' : '☰';
    });

    // Закрываем меню после перехода
    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');

            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.textContent = '☰';
        });
    });
}


// =====================================
// МИНИМАЛЬНАЯ ДАТА ДЛЯ БРОНИРОВАНИЯ
// =====================================

const dateInputs = document.querySelectorAll('input[type="date"]');

const now = new Date();

const today = new Date(
    now.getTime() - now.getTimezoneOffset() * 60000
)
    .toISOString()
    .slice(0, 10);

// Запрещаем выбирать даты в прошлом
dateInputs.forEach((input) => {
    input.min = today;
});


// =====================================
// ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ БРОНИРОВАНИЯ
// =====================================

const tripDate = document.querySelector('#tripDate');
const tourChoice = document.querySelector('#tourChoice');
const peopleSelect = document.querySelector('#people');

const applicationForm = document.querySelector('#applicationForm');


// =====================================
// ОБРАБОТКА ФОРМЫ ЗАЯВКИ
// =====================================

if (applicationForm) {
    applicationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const data = new FormData(applicationForm);

        const name = (data.get('name') || '').trim();

        const message = document.querySelector('#formMessage');

        // Сообщение об успешном заполнении
        if (message) {
            message.textContent =
                `Спасибо${name ? ', ' + name : ''}! ` +
                `Заявка заполнена. Это демо-форма: ` +
                `данные не отправляются на сервер.`;
        }

        // Очищаем форму
        applicationForm.reset();
    });
}


// =====================================
// ПЕРЕНОС ДАННЫХ ИЗ ПАНЕЛИ БРОНИРОВАНИЯ
// =====================================

const bookingButton = document.querySelector('.book-button');

if (bookingButton) {
    bookingButton.addEventListener('click', () => {

        // Получаем поле даты в форме
        const dateField = document.querySelector('input[name="date"]');

        // Получаем поле комментария
        const commentField = document.querySelector(
            'textarea[name="comment"]'
        );

        // Передаём выбранную дату в заявку
        if (dateField && tripDate && tripDate.value) {
            dateField.value = tripDate.value;
        }

        // Передаём выбранный тур и число туристов
        if (commentField && tourChoice && peopleSelect) {
            commentField.value =
                `Тур: ${tourChoice.value}. ` +
                `Количество туристов: ${peopleSelect.value}.`;
        }
    });
}


// =====================================
// ПЛАВНАЯ ПРОКРУТКА К РАЗДЕЛАМ
// =====================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {

        const targetId = link.getAttribute('href');

        // Игнорируем пустые ссылки
        if (!targetId || targetId === '#') {
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// =====================================
// КОНЕЦ SCRIPT.JS
// =====================================

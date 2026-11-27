// ===============================
// МОБИЛЬНОЕ МЕНЮ
// ===============================

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });

  // Закрываем меню после перехода по ссылке
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });
}


// ===============================
// ОБРАБОТКА ФОРМЫ ЗАЯВКИ
// ===============================

// Форма пока работает в демонстрационном режиме
// Данные не отправляются на сервер

const applicationForm = document.querySelector('#applicationForm');
const formMessage = document.querySelector('#formMessage');

if (applicationForm && formMessage) {
  applicationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(applicationForm);
    const visitorName = (formData.get('name') || '').trim();

    formMessage.textContent = `Спасибо${visitorName ? ', ' + visitorName : ''}! Ваша заявка заполнена. Это демо — данные не отправлены на сервер.`;

    // Очищаем форму после отправки
    applicationForm.reset();
  });
}


// ===============================
// МИНИМАЛЬНАЯ ДАТА В ФОРМЕ
// ===============================

// Запрещаем выбрать прошедшие даты
const dateInput = document.querySelector('input[type="date"]');

if (dateInput) {
  const today = new Date();

  const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, 10);

  dateInput.min = localToday;
      }

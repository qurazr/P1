document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bookingForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const tariffSelect = document.getElementById('tariff');
        const tariff = tariffSelect.options[tariffSelect.selectedIndex].text;

        // Простая валидация
        if (name.length < 2) {
            alert('Пожалуйста, введите ваше имя.');
            return;
        }
        if (phone.length < 6) {
            alert('Пожалуйста, введите корректный номер телефона.');
            return;
        }

        // Имитация отправки данных
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.innerText;

        button.innerText = 'Отправка...';
        button.disabled = true;

        setTimeout(() => {
            alert(
                `Спасибо, ${name}!\n` +
                `Ваша заявка на тариф "${tariff}" принята.\n` +
                `Мы позвоним вам на номер ${phone} в ближайшее время.`
            );
            button.innerText = originalText;
            button.disabled = false;
            form.reset();
        }, 1200);
    });

    // Плавное появление секций при прокрутке
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
    }
    slideIndex++;
    if (slideIndex >= slides.length) {slideIndex = 0}
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
    setTimeout(showSlides, 3000);
}

function currentSlide(n) {
    showSlide(slideIndex = n - 1);
}

function showSlide(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    slideIndex = n;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
}

function openModal(modalId, content = '') {
    document.getElementById(modalId).style.display = 'block';
    if (content) {
        document.getElementById('modal-details-text').innerText = content;
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function clearForm() {
    document.getElementById('register-form').reset();
}

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (this.checkValidity()) {
        alert('Форма успешно отправлена!');
        closeModal('modal-register');
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});

document.querySelectorAll('.initiative .knopka a').forEach((button, index) => {
    button.addEventListener('click', function() {
        const descriptions = [
            'В Общественной палате России состоится обсуждение вопросов правового регулирования реализации соглашений о взаимодействии по сохранению и укреплению традиционных семейных ценностей в регионах. Участники планируют рассмотреть эффективные механизмы поддержки семейных традиций и обсудить возможные законодательные инициативы. Ожидается, что результаты обсуждения помогут сформировать более структурированный подход к сохранению семейных ценностей на уровне регионов.',
            'Профильная Комиссия ОП РФ, ОП Московской области и представители традиционных конфессий подпишут важное соглашение, направленное на укрепление семейных ценностей. Ранее, в начале 2023 года, аналогичное соглашение было заключено между епархией Московской метрополии Русской православной церкви и профильной Комиссией ОП РФ. Эти шаги свидетельствуют о стремлении различных институтов общества к совместной работе над сохранением традиционных ценностей.',
            'В Вологде парам, прожившим вместе более 50 лет, будет вручаться памятный знак «За сохранение семейных ценностей». Эта награда станет признанием их многолетней верности и символом уважения к традиционным семейным устоям. Аналогичные награды будут вручаться и парам из областной столицы, чей семейный стаж превышает полвека.',
            'Вологодская область подписала соглашение с Общественной палатой о проведении мероприятий по сохранению и укреплению традиционных семейных ценностей. Долгосрочный опыт работы с разными возрастными категориями будет использован для объединения поколений и решения проблемы их разобщенности. Программа включает множество семейных мероприятий, способствующих укреплению межпоколенческих связей.',
            'Проект направлен на развитие позитивных межпоколенческих отношений и укрепление института семьи через совместное образование и творчество. Опыт организации мероприятий с участием разных возрастных категорий помогает объединить семьи для решения проблемы разобщенности поколений. Программа нацелена на создание комфортной и позитивной среды для всех членов семьи.',
            'В течение 2024 года управление ЗАГС проводит фестиваль торжественных регистраций брака, учитывающий национальные традиции для укрепления семейных ценностей. В селе Привольном состоялась русская свадьба с традиционными обрядами и народными песнями, а в Туркменском районе прошла татарская свадьба с обрядом "топтания подушки". Эти мероприятия помогают сохранить культурное наследие и способствуют укреплению семей.'
        ];
        openModal('modal-details', descriptions[index]);
    });
});

document.querySelectorAll('.event .knopka a').forEach((button, index) => {
    const titles = ['Лекция о семейных ценностях', 'Выставка "Семейные Ценности"', 'День семьи, любви и верности'];
    button.addEventListener('click', function() {
        openModal(titles[index]);
    });
});

function openModal(title) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-register').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal-register').style.display = 'none';
}

function clearForm() {
    document.getElementById('register-form').reset();
}

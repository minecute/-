const levelsContainer = document.querySelector('.levels');
const challengeDisplay = document.querySelector('.challenge-display');
const challengeList = document.getElementById('challenge-list');
const closeButton = document.querySelector('.close-btn');
const randomButton = document.querySelector('.random-btn');

const levels = [
    {
        level: 1,
        name: "Креатив",
        tasks: [
            "Рифмы: называйте рифмующиеся слова по очереди, кто не сможет придумать рифму за определённое время, тот проиграл. " +
        "Время выбираете сами. Можно использовать таймер на телефоне.",
            "Рассмеши оппонента за минуту. Если не получилось, ход переходит другому.",
            "Реп батл. Кто-круче!?"
        ]
    },
    {
        level: 2,
        name: "Мастерсво",
        tasks: [
            "Самый дальнолетающий самолётик из бумаги.",
            "Прокатиться 10 раз на балансборде и потом жонглировать, держа баланс.", 
            "Water Battle Flip Challenge!!! Вы кидаете бутылки по очереди. Сначала Игрок №1 ставит обычную бутылку 0,5. " +
            "Игрок №2 повторяет. Далее в ход идёт бутылка с толстым дном. Игроки снова по очереди ставят бутылку на дно." +
            "Победа засчитывается только в том случае, если бутылки удалось поставить 4 раза подряд."
        ]
    },
    {
        level: 3,
        name: "Хлеборезка",
        tasks: [
            "КАРАОКЕ! Выбирай песню!",
            "Сними наушники, на тебя орут: Игроки по очереди надевают наушники, в которых играет музыка. " +
            "Сокомандник придумывает слово и пытается донести его до первого игрока. " +
            "Для победы каждый должен угадать по 3 слова.",
            "Непонятные термины: Игрок №1 загадывает термин из своей области(или любой сложный), Игрок №2 отгадывает и наоборот. " +
            "Можно играть до любого количества терминов."
        ]
    },
    {
        level: 4,
        name: "Кринж",
        tasks: [
            "Найдите в интернете странный звук и попробуйте его издать. Кто громче?",
            "Найти в интернете кринжовый текст и прочитать его."
        ]
    },
    {
        level: 5,
        name: "Прогулка",
        tasks: [
            "Выйти на улицу и прокатиться на карусели.",
            "Выйти на улицу и прокатиться на качелях."
        ]
    },
    {
        level: 6,
        name: "Танцульки",
        tasks: [
            "Выучить танец или некоторое количество движений из опыта самого опытного танцора в комнате.", 
            "Выучить танец из интернета.",
            "Станцевать вальс."
        ]
    },
    {
        level: 7,
        name: "Искусство",
        tasks: [
            "Рисунок 50/50: Кто-то рисует верх, потом другой рисует низ, при этом он не видит, что нарисовал другой.",
            "Рисунок друг у друга на запястье, который рисуется параллельно.",
            "Кто лучше нарисует предмет за определённое время, тот победил. Время и предмет обговариваются."
        ]
    },
    {
        level: 8,
        name: "Майнкрафт",
        tasks: [
            "Построить карточный домик из 4 этажей.",
            "Построить домик из спичек без клея.",
            "Построить домик из брусочков."
        ]
    },
    {
        level: 9,
        name: "Хотелки",
        tasks: [
            "На данном уровне нужно выполнить сразу все задания!\n\n",
            "Снять трендовое видео или любое другое по желанию.",
            "Сделать любой цветок, который захочет один из игроков. Один игрок делает другому.",
            "Набрать воду в рот, закрыть глаза и одновременно открыть. Кто засмеялся - проиграл."
        ]
    },
    {
        level: 10,
        name: "Йога",
        tasks: [
            "Можешь выбрать любую позу, которую ты захочешь. При желании можно повторить все позы."
        ]
    },
    {
        level: 11,
        name: "Снежки",
        tasks: [
            "У каждого по 10 снежков, между игроками есть определённое расстояние, игроки по очереди кидают друг в друга. " +
        "Побеждает наиболее меткий снайпер. Проигравший получает мечом по спине.",
            "У каждого по 10 снарядов, игроки становятся в линию, игроки по очереди кидают в крипера. Кто первый попал, тот и победил. Проигравший получает мечом по спине."
            ]
    },
    {
        level: 12,
        name: "Жесть",
        tasks: [
            "Без моральной подготовки здесь не обойтись. Игра камень, ножницы, бумага. Игроки сражаются до 10 побед. " +
        "Проигравший игрок должен смириться со своей участью и получить в наказание - обливание холодной водой из ведра, которое ему устроит победитель.",
            "Построить домик из спичек без клея.",
            "Построить домик из брусочков."
        ]
    },
    {
        level: 13,
        name: "Отдых",
        tasks: [
            "Попить чай, кофе и отдохнуть от заданий."
        ]
    },
    {
        level: 14,
        name: "Спорт",
        tasks: [
            "Гоночный болид: тачка 10 кругов. Распределяйте круги самостоятельно.",
            "Я держу Землю: простоять верх ногами у стены 1 минуту.",
            "Планка 2 минуты."
        ]
    },
    {
        level: 15,
        name: "Настолки",
        tasks: ["Дженга.",
            "Алиас.", 
            "Монополия.",
            "Крокодил."
        ]
    }
];

let currentLevel = null; // Переменная для хранения текущего выбранного уровня

// Массив путей к картинкам для уровня "Йога"
const yogaImages = [
    'images/y1.jpeg',
    'images/y2.jpeg',
    'images/y3.jpeg',
    // Добавьте больше изображений по мере необходимости
];

let yogaImagesContainer = null;  // Контейнер для изображений

// Функция для добавления или обновления картинок
function updateYogaImages(showRandom = false) {
    if (!yogaImagesContainer) {
        yogaImagesContainer = document.createElement('div');
        yogaImagesContainer.classList.add('yoga-images');
        challengeDisplay.insertBefore(yogaImagesContainer, challengeList);
    } else {
        yogaImagesContainer.innerHTML = ''; // Очищаем контейнер, если он уже существует
    }

    if (showRandom) {
        const randomImageSrc = yogaImages[Math.floor(Math.random() * yogaImages.length)];
        const randomImage = document.createElement('img');
        randomImage.src = randomImageSrc;
        randomImage.alt = 'Случайная картинка йоги';
        randomImage.classList.add('random-image');
        yogaImagesContainer.appendChild(randomImage);
    } else {
        yogaImages.forEach(imageSrc => {
            const image = document.createElement('img');
            image.src = imageSrc;
            image.alt = 'Йога изображение';
            yogaImagesContainer.appendChild(image);
        });
    }
}

// Функция для удаления картинок
function removeYogaImages() {
    if (yogaImagesContainer) {
        yogaImagesContainer.remove();
        yogaImagesContainer = null; // Обнуляем переменную после удаления
    }
}

// Функция для создания кнопок уровней
function createLevelButtons() {
    levels.forEach((level, index) => {
        const levelButton = document.createElement('button');
        levelButton.textContent = level.name; // Используем название уровня
        levelButton.classList.add('level-btn');
        levelButton.addEventListener('click', () => {
            currentLevel = level; // Устанавливаем текущий уровень
            showChallengeList(level.tasks); // Показываем задания текущего уровня
        });
        levelsContainer.appendChild(levelButton);

        // Добавляем разрыв строки после каждых 5 кнопок
        if ((index + 1) % 5 === 0) {
            levelsContainer.appendChild(document.createElement('br'));
        }
    });
}

function showRandomChallenge() {
    if (currentLevel) { // Проверяем, что уровень выбран
        const randomTask = currentLevel.tasks[Math.floor(Math.random() * currentLevel.tasks.length)];
        challengeList.innerHTML = `<li>${randomTask}</li>`;
        // Если уровень "Йога", показываем случайную картинку
        if (currentLevel.name === 'Йога') {
            updateYogaImages(true); // Показываем случайное изображение
        }
    } else {
        alert("Please select a level first!"); // Если уровень не выбран, показываем предупреждение
    }
}

// Функция для показа списка заданий
function showChallengeList(tasks) {
    challengeList.innerHTML = '';  // Очищаем предыдущие задания
    // Если это уровень "Йога", добавляем изображения
    if (currentLevel && currentLevel.name === 'Йога') {
        updateYogaImages();  // Добавляем картинки
    } else {
        removeYogaImages();  // Убираем картинки, если это не уровень "Йога"
    }

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        challengeList.appendChild(listItem);
    });

    // Показываем окно с заданиями и добавляем класс .open для анимации
    challengeDisplay.classList.remove('hidden');
    challengeDisplay.classList.add('open');
}

// Обработчик события для кнопки "Random"
randomButton.addEventListener('click', showRandomChallenge);

// Закрытие окна с заданиями
closeButton.addEventListener('click', () => {
    challengeDisplay.classList.add('hidden');
    challengeDisplay.classList.remove('open'); // Убираем класс .open, чтобы анимация вернулась в исходное состояние
    removeYogaImages();  // Убираем изображения при закрытии
});

// Инициализация кнопок
createLevelButtons();

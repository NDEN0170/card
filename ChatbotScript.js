const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotToggler1 = document.querySelector(".close-btn");
const chatInput = document.querySelector(".chat-input textarea");
const chatV1 = document.querySelector(".v1");
const chatV2 = document.querySelector(".v2");
const chatV3 = document.querySelector(".v3");
const chatV4 = document.querySelector(".v4");
const chatV5 = document.querySelector(".v5");
const chatV6 = document.querySelector(".v6");
const chatV7 = document.querySelector(".v7");

let userMessage;
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    //создание элемент chat <li> с переданным сообщением и именем класса
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined"><img src="бот.png" alt=""></span><p></p>`
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const answers = {
    "привет": ["Привет! Чем я могу Вам помочь?"],

    "что такое карта жителя?": ["Карта жителя Саратовской области - это пластиковая карта на любой банковской карты МИР. " +
        "Она помогает жителям получать социальные и коммерческие льготы и услуги, а также дает возможность принять учатие в новых программах. " +
        "Например, каждый может попробовать стать амбассадором Саратовской области и получить памятные подарки. Для тех, кто любит " +
        "активный отдых карта предлагает туристический квестбук."
    ],

    "что такое амбассадорство?": ["Посещая различные культурные, спортивные, образовательные " +
        "мероприятия, и оплачивая их с карты МИР, к которой подключена Карта жителя Саратовской " +
        "области, гражданин получает по 10 баллов за посещение каждого мероприятия, на основании " +
        "которых формируется рейтинг Амбассадоров. Определяется топ-115 самых активных жителей региона, " +
        "которые позиционируют свое направление. Они разделены на категории. 10 победителей в семи " +
        "неприоритетных категориях и 15 в трех приоритетных. Выбор приоритета может быть сделан на основе " +
        "тематических праздников или значимых мероприятий месяца. Рейтинг обновляется каждые 3 месяца. Также " +
        "начисляются дополнительные баллы за посты в соцсетях с хештегами карты и мероприятий. Выгода: " +
        "предусмотрены скидки по программе лояльности на посещение мероприятий, проводимых на площадках местных " +
        "заведений.Каждому амбассадору предоставляются подарки с символикой области:"
    ],

    "что такое система челленджей?": ["Каждый месяц генерируется список челленджей (например, посетить 3 культурных " +
        "мероприятия, и 1 спортивное). За выполнение каждого задания начисляется от 1 до 10 баллов в зависимости от " +
        "челленджа. Их можно потратить на частичную оплату мероприятий или накопить для рейтинга Амбассадоров."
    ],

    "как оформить карту жителя?": ["Для того, чтобы оформить карту жителя Вам необходимо взять с собой в офис Сбера паспорт и СНИЛС. " +
        "Если Вы входите в одну из льготных категорий граждан Вам нужноиметь с собой еще и документ, подтверждающий принадлежность к этой льготной категории. " +
        "Для подключения ранее выпущенной карты 'МИР' в приложении СберБанк Онлайн дополнительные документы не понадобятся " +
        "- все денные подгрузятся автоматически."
    ],

    "что такое квестбук?": ["Развивая туристическое направление, держателю карты доступен специальный туристический " +
        "квестбук. На карте отмечены основные и малоизвестные достопримечательности области, при посещении " +
        "которых участнику начисляется 10 баллов, которые учитываются в рейтинге Амбассадоров Путешествий. " +
        "Так же предоставляется возможность составлять собственные маршруты, просматривать и оценивать чужие."
    ],
    "как войти в личный кабинет?": ["Для входа в личный кабинет необходимо нажать на кнопку входа в личный кабинет " +
        "на главной странице и войти с помощью своей (подтвержденной) учетной записи от единого портала госуслуг."
    ],
    "сколько у меня баллов?": ["Сейчас у Вас 134 балла. Вы можете потратить их для оплаты части суммы" +
        " в следующих магазинах-партнерах или повысить свой рейтинг в амбассадорстве до 12 места."

    ]

    // ... другие пары вопрос-ответ
};

const generateResponse = (incomingChatLI) => {
    const messageElement = incomingChatLI.querySelector("p");
    const userQuery = userMessage.toLowerCase();

    // Простой поиск по началу фразы
    const findAnswer = (query) => {
        for (const key in answers) {
            if (query.startsWith(key)) {
                return answers[key];
            }
        }
        return "Извини, я не понимаю этот вопрос.";
    };

    messageElement.textContent = findAnswer(userQuery);
};

const handleChat = () => {

    userMessage = chatInput.value.trim();
    if (!userMessage) return;
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    //Добавление сообщения пользователя в окно чата
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        //Отображается сообщение "Печатает..." в ожидании ответа
        const incomingChatLI = createChatLi("Печатает...", "incoming")
        chatbox.appendChild(incomingChatLI);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLI);
    }, 600);
}
const chatV1input = () => {
    userMessage = "что такое карта жителя?";
    if (!userMessage) return;
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    //Добавление сообщения пользователя в окно чата
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        //Отображается сообщение "Печатает..." в ожидании ответа
        const incomingChatLI = createChatLi("Печатает...", "incoming")
        chatbox.appendChild(incomingChatLI);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLI);
    }, 600);
}
chatV1.addEventListener("click", chatV1input)


const chatV2input = () => {
    userMessage = "как оформить карту жителя?";
    if (!userMessage) return;
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    //Добавление сообщения пользователя в окно чата
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        //Отображается сообщение "Печатает..." в ожидании ответа
        const incomingChatLI = createChatLi("Печатает...", "incoming")
        chatbox.appendChild(incomingChatLI);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLI);
    }, 600);
}
chatV2.addEventListener("click", chatV2input)

const chatV3input = () => {
    userMessage = "Что такое амбассадорство?";
    if (!userMessage) return;
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    //Добавление сообщения пользователя в окно чата
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        //Отображается сообщение "Печатает..." в ожидании ответа
        const incomingChatLI = createChatLi("Печатает...", "incoming")
        chatbox.appendChild(incomingChatLI);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLI);
    }, 600);
}
chatV3.addEventListener("click", chatV3input)

const chatV4input = () => {
    userMessage = "Что такое квестбук?";
    if (!userMessage) return;
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    //Добавление сообщения пользователя в окно чата
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        //Отображается сообщение "Печатает..." в ожидании ответа
        const incomingChatLI = createChatLi("Печатает...", "incoming")
        chatbox.appendChild(incomingChatLI);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLI);
    }, 600);
}
chatV4.addEventListener("click", chatV4input)


const chatV5input = () => {
    userMessage = "Что такое система челленджей?";
    if (!userMessage) return;
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    //Добавление сообщения пользователя в окно чата
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        //Отображается сообщение "Печатает..." в ожидании ответа
        const incomingChatLI = createChatLi("Печатает...", "incoming")
        chatbox.appendChild(incomingChatLI);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLI);
    }, 600);
}
chatV5.addEventListener("click", chatV5input)

const chatV6input = () => {
    userMessage = "Как войти в личный кабинет?";
    if (!userMessage) return;
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    //Добавление сообщения пользователя в окно чата
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        //Отображается сообщение "Печатает..." в ожидании ответа
        const incomingChatLI = createChatLi("Печатает...", "incoming")
        chatbox.appendChild(incomingChatLI);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLI);
    }, 600);
}
chatV6.addEventListener("click", chatV6input)

const chatV7input = () => {
    userMessage = "Сколько у меня баллов?";
    if (!userMessage) return;
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    //Добавление сообщения пользователя в окно чата
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        //Отображается сообщение "Печатает..." в ожидании ответа
        const incomingChatLI = createChatLi("Печатает...", "incoming")
        chatbox.appendChild(incomingChatLI);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLI);
    }, 600);
}
chatV7.addEventListener("click", chatV7input)


sendChatBtn.addEventListener("click", handleChat);
chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const userMessage = chatInput.value.trim();
        if (userMessage === '') return;
        handleChat();
        chatInput.value = '';
        chatInput.focus();
    }
});

if (chatbotToggler) {
    chatbotToggler.addEventListener("click", () => {
        document.body.classList.toggle("show-chatbot");
    });
} else {
    console.error("Элемент с классом chatbot-toggler не найден");
}

if (chatbotToggler1) {
    chatbotToggler1.addEventListener("click", () => {
        document.body.classList.toggle("show-chatbot");
    });
} else {
    console.error("Элемент с классом chatbot-toggler не найден");
}
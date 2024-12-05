const users = [
  {
    name: "Иван Иванов",
    age: 25,
    city: "Москва",
    bio: "Любит путешествовать и читать книги.",
  },
  {
    name: "Мария Смирнова",
    age: 30,
    city: "Санкт-Петербург",
    bio: "Специалист по маркетингу.",
  },
  {
    name: "Алексей Кузнецов",
    age: 35,
    city: "Казань",
    bio: "Разработчик программного обеспечения.",
  },
  {
    name: "Елена Попова",
    age: 28,
    city: "Новосибирск",
    bio: "Дизайнер интерьеров.",
  },
  {
    name: "Иван Иванов",
    age: 25,
    city: "Москва",
    bio: "Любит путешествовать и читать книги.",
  },
  {
    name: "Мария Смирнова",
    age: 30,
    city: "Санкт-Петербург",
    bio: "Специалист по маркетингу.",
  },
  {
    name: "Алексей Кузнецов",
    age: 35,
    city: "Казань",
    bio: "Разработчик программного обеспечения.",
  },
  {
    name: "Елена Попова",
    age: 28,
    city: "Новосибирск",
    bio: "Дизайнер интерьеров.",
  },
  {
    name: "Иван Иванов",
    age: 25,
    city: "Москва",
    bio: "Любит путешествовать и читать книги.",
  },
  {
    name: "Мария Смирнова",
    age: 30,
    city: "Санкт-Петербург",
    bio: "Специалист по маркетингу.",
  },
  {
    name: "Алексей Кузнецов",
    age: 35,
    city: "Казань",
    bio: "Разработчик программного обеспечения.",
  },
  {
    name: "Елена Попова",
    age: 28,
    city: "Новосибирск",
    bio: "Дизайнер интерьеров.",
  },
  {
    name: "Иван Иванов",
    age: 25,
    city: "Москва",
    bio: "Любит путешествовать и читать книги.",
  },
  {
    name: "Мария Смирнова",
    age: 30,
    city: "Санкт-Петербург",
    bio: "Специалист по маркетингу.",
  },
  {
    name: "Алексей Кузнецов",
    age: 35,
    city: "Казань",
    bio: "Разработчик программного обеспечения.",
  },
  {
    name: "Елена Попова",
    age: 28,
    city: "Новосибирск",
    bio: "Дизайнер интерьеров.",
  },
  {
    name: "Иван Иванов",
    age: 25,
    city: "Москва",
    bio: "Любит путешествовать и читать книги.",
  },
  {
    name: "Мария Смирнова",
    age: 30,
    city: "Санкт-Петербург",
    bio: "Специалист по маркетингу.",
  },
  {
    name: "Алексей Кузнецов",
    age: 35,
    city: "Казань",
    bio: "Разработчик программного обеспечения.",
  },
  {
    name: "Елена Попова",
    age: 28,
    city: "Новосибирск",
    bio: "Дизайнер интерьеров.",
  },
];

const userCardsContainer = document.getElementById("user-cards");

users.forEach((user, index) => {
  const card = document.createElement("div");
  card.className = "col-lg-3 col-md-6 col-sm-12 mb-4";

  card.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <p class="card-text">Возраст: ${user.age}</p>
          <p class="card-text">Город: ${user.city}</p>
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userModal" onclick="showUserDetails(${index})">Подробнее</button>
        </div>
      </div>
    `;
  userCardsContainer.appendChild(card);
});

function showUserDetails(index) {
  const user = users[index]; // Получаем пользователя по индексу

  // Создаем HTML для отображения всей информации
  const userDetailsHTML = `
      <p><strong>Имя:</strong> ${user.name}</p>
      <p><strong>Возраст:</strong> ${user.age}</p>
      <p><strong>Город:</strong> ${user.city}</p>
      <p><strong>Биография:</strong> ${user.bio}</p>
    `;

  // Устанавливаем содержимое модального окна
  document.getElementById("user-details").innerHTML = userDetailsHTML;
}

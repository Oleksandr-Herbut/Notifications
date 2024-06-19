// Добавляем обработчик события "submit" для формы с id "orderForm"
document
  .querySelector("#orderForm")
  .addEventListener("submit", function (event) {
    // Предотвращаем стандартное поведение формы (перезагрузку страницы)
    event.preventDefault();

    // Получаем значения всех полей ввода и убираем лишние пробелы
    const address = document
      .querySelector('input[placeholder="Адрес"]')
      .value.trim();
    const price = document
      .querySelector('input[placeholder="Цена"]')
      .value.trim();
    const recipient = document
      .querySelector('input[placeholder="Получатель"]')
      .value.trim();

    // Проверяем, что все поля заполнены
    if (!address || !price || !recipient) {
      // Если какое-либо поле пустое, создаем уведомление об ошибке
      createNotification("error", "Ошибка", "Все поля должны быть заполнены.");
      return; // Прерываем выполнение функции
    }

    // Если все поля заполнены, создаем уведомление об успешном создании заказа
    createNotification("success", "Заказ создан", "Ваш заказ успешно создан!");
    // Показываем блок с кнопками
    document.querySelector(".buttons").style.display = "block";
  });

// Добавляем обработчик события "click" для кнопки с id "paid"
document.querySelector("#paid").addEventListener("click", function () {
  // Создаем уведомление об успешной оплате заказа
  createNotification("success", "Заказ оплачен", "Ваш заказ успешно оплачен!");
});

// Добавляем обработчик события "click" для кнопки с id "received"
document.querySelector("#received").addEventListener("click", function () {
  // Создаем уведомление об отправке заказа
  createNotification("info", "Заказ отправлен", "Ваш заказ отправлен!");
});

// Добавляем обработчик события "click" для кнопки с id "sent"
document.querySelector("#sent").addEventListener("click", function () {
  // Создаем уведомление о получении заказа
  createNotification("warning", "Заказ получен", "Ваш заказ получен!");
});

// Функция для создания уведомлений
function createNotification(type, title, message) {
  // Получаем контейнер для уведомлений с id "notificationsContainer"
  const notificationContainer = document.getElementById(
    "notificationsContainer"
  );

  // Создаем новый div элемент для уведомления
  const notification = document.createElement("div");
  // Устанавливаем класс для уведомления в зависимости от типа
  notification.className = `notification ${type}`;
  // Устанавливаем содержимое уведомления (заголовок и сообщение)
  notification.innerHTML = `<strong>${title}</strong><p>${message}</p>`;

  // Добавляем уведомление в контейнер
  notificationContainer.appendChild(notification);

  // Плавно показываем уведомление (изменяем прозрачность)
  setTimeout(() => {
    notification.style.opacity = 1;
  }, 10);

  // Удаляем уведомление через 3 секунды
  setTimeout(() => {
    // Плавно скрываем уведомление (изменяем прозрачность)
    notification.style.opacity = 0;
    // Удаляем элемент из DOM через 0.5 секунды после скрытия
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 3000);
}

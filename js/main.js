const bookButtons = document.querySelectorAll(".book-button");
const callbackButtons = document.querySelectorAll(
  ".callback-btn, .header__button_callback"
);
const contactDialog = document.querySelector(".contact-dialog");
const confirmationDialog = document.querySelector(".confirmation-dialog");
const contactForm = document.querySelector("#contact-form");

// Открытие формы по кликам на кнопки
bookButtons.forEach((button) => {
  button.addEventListener("click", () => contactDialog.showModal());
});

callbackButtons.forEach((button) => {
  button.addEventListener("click", () => contactDialog.showModal());
});

function closeContactDialog() {
  if (contactDialog && contactDialog.open) contactDialog.close();
}

function showConfirmation() {
  if (confirmationDialog) confirmationDialog.showModal();
}

function validateForm() {
  let isValid = true;

  const nameInput = document.querySelector(".name-input");
  const phoneInput = document.querySelector(".phone-input");

  if (!nameInput.value.trim()) {
    alert("Введите ваше имя!");
    isValid = false;
  }

  if (!phoneInput.value.trim()) {
    alert("Введите ваш номер телефона!");
    isValid = false;
  }

  if (isValid) {
    closeContactDialog();
    setTimeout(showConfirmation, 300);
  }

  // Предотвращаем реальную отправку формы и перезагрузку страницы
  return false;
}

// Обработка отправки формы
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
  });
}

// Закрытие окна подтверждения по клику по бэкдропу (Вариант 1)
if (confirmationDialog) {
  confirmationDialog.addEventListener("click", (e) => {
    if (e.target === confirmationDialog) {
      confirmationDialog.close();
    }
  });
}


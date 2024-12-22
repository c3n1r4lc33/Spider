
// Функция для отображения имени пользователя и кнопки выхода
function displayUserGreeting() {
  const username = localStorage.getItem('username');

  if (username) {
    document.getElementById('userGreeting').textContent = `Добро пожаловать, ${username}!`;
  }
}

// Функция для выхода из аккаунта
function logout() {
  localStorage.clear();
  window.location.href = 'auth.html'; // Перенаправляем на страницу авторизации
}

function checkAuth() {
  const userName = localStorage.getItem('username');

  if(window.location.pathname.slice(1) == 'auth.html') {
    if(userName !== null) {
      window.location.href = 'index.html'
    }

    return
  } 

  if (userName === null) {
    window.location.href = 'auth.html'
  }
}

// Вызываем функцию отображения имени пользователя при загрузке страницы
window.onload = function () {
  checkAuth();
  displayUserGreeting();
};
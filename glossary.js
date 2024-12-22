const definitions = {
  'Человек-Паук': 'Человек-Паук — супергерой комиксов Marvel, созданный Стэном Ли и Стивом Дитко.',
  'Веном': 'Веном — антагонист Человека-Паука, обладающий симбиотом, который дает ему сверхчеловеческие способности.',
  'Мэй Паркер': 'Мэй Паркер — тетя Питера Паркера, известная своей заботой и поддержкой.',
  'Нью-Йорк': 'Нью-Йорк — город, в котором живет Человек-Паук и происходят многие его приключения.',
  'Доктор Октавиус': 'Доктор Октавиус — злодей и противник Человека-Паука, известный своими механическими щупальцами.',
  'Тор': 'Тор — бог грома и один из самых мощных супергероев Marvel.',
  'Капитан Америка': 'Капитан Америка — супергерой, символизирующий патриотизм и борьбу за справедливость.',
  'Халк': 'Халк — альтер эго Брюса Бэннера, обладающее невероятной силой и устойчивостью.',
  'Черная Вдова': 'Черная Вдова — шпион и мастер боевых искусств, член Мстителей.',
  'Сорвиголова': 'Сорвиголова — супергерой, слепой, но обладающий выдающимися чувствами и навыками боя.'
};

function showDefinition(term) {
  const definitionElement = document.getElementById('definition');
  definitionElement.innerHTML = `<p><strong>${term}:</strong> ${definitions[term]}</p>`;
}

// Обработчик события для клика по терминам
function handleTermClick(term) {
  showDefinition(term);
}

// Обработчик события для поля ввода
document.getElementById('termInput').addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  const terms = document.querySelectorAll('.term');
  let foundTerm = null;

  terms.forEach(term => {
      const termText = term.textContent.toLowerCase();
      if (termText === filter) { // Проверяем на полное совпадение
          term.style.display = ''; // Показываем термин
          foundTerm = term.textContent; // Сохраняем найденный термин
      } else if (termText.includes(filter)) { // Проверяем на частичное совпадение
          term.style.display = ''; // Показываем термин
      } else {
          term.style.display = 'none'; // Скрываем термин
      }
  });

  // Если найден термин, показываем его определение
  if (foundTerm) {
      showDefinition(foundTerm);
  } else if (filter === '') {
      // Если поле поиска пустое, показываем все термины и очищаем определение
      terms.forEach(term => {
          term.style.display = ''; // Показываем все термины
      });
      document.getElementById('definition').innerHTML = '<p>Выберите термин, чтобы увидеть его определение.</p>'; // Сообщение по умолчанию
  } else {
      document.getElementById('definition').innerHTML = '<p>Термин не найден.</p>'; // Сообщение, если ничего не найдено
  }
});

// Изначально показываем все термины
document.querySelectorAll('.term').forEach(term => {
  term.style.display = ''; // Убедимся, что все термины видимы
});

// Добавляем обработчик клика для всех терминов
document.querySelectorAll('.term').forEach(term => {
  term.addEventListener('click', function() {
      handleTermClick(term.textContent);
  });
});
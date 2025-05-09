// Populate birth year options
const birthYearSelect = document.getElementById('birthYear');
const currentYear = new Date().getFullYear();

for (let year = currentYear; year >= 1940; year--) {
  const option = document.createElement('option');
  option.value = year;
  option.textContent = year;
  birthYearSelect.appendChild(option);
}

function calculateAge() {
  const year = parseInt(document.getElementById('birthYear').value);
  const month = parseInt(document.getElementById('birthMonth').value);
  const today = new Date();
  let age = today.getFullYear() - year;

  if (today.getMonth() + 1 < month) {
    age -= 1; // Adjust if birthday hasn't occurred yet this year
  }

  let message = '';
  if (age < 10) {
    message = `👶 You're just ${age} years old! So much ahead!`;
  } else if (age < 13) {
    message = `🌟 You're ${age}! Ready to become a STEM star!`;
  } else {
    message = `🚀 You're ${age} years awesome and counting!`;
  }

  document.getElementById('resultArea').innerHTML = message;
}

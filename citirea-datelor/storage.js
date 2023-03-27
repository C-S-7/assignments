// Definim o functie pentru a salva raspunsurile utilizatorului in localStorage
function saveUserAnswers(answers) {
  localStorage.setItem("userAnswers", JSON.stringify(answers));
}

// Definim o functie pentru a incarca raspunsurile utilizatorului din localStorage
function loadUserAnswers() {
  let answers = localStorage.getItem("userAnswers");
  if (answers) {
    return JSON.parse(answers);
  }
  return {};
}

// Definim o functie pentru a sterge raspunsurile utilizatorului din localStorage
function clearUserAnswers() {
  localStorage.removeItem("userAnswers");
}

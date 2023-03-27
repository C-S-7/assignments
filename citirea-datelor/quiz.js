// Incarcam intrebarile din fisierul JSON
fetch("quiz.json")
  .then((response) => response.json())
  .then((data) => {
    // Parsam obiectul JSON pentru a crea intrebarile
    const quiz = data.quiz;
    const quizContainer = document.getElementById("quiz");

    // Initializam un obiect pentru a tine raspunsurile utilizatorului
    let userAnswers = loadUserAnswers();

    // Parcurgem fiecare intrebare din quiz si creem HTML-ul pentru ea
    Object.keys(quiz).forEach(function (key) {
      const question = quiz[key];
      const questionContainer = document.createElement("div");
      questionContainer.classList.add("question");

      // Adaugam textul intrebarii
      const questionText = document.createElement("h3");
      questionText.innerText = question.question;
      questionContainer.appendChild(questionText);

      // Adaugam optiunile de raspuns
      const optionsContainer = document.createElement("ul");
      optionsContainer.classList.add("options");
      question.options.forEach(function (option) {
        const optionContainer = document.createElement("li");
        optionContainer.classList.add("option");
        optionContainer.style.listStyleType = 'none'
        const input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("name", key);
        input.setAttribute("value", option);

        if (userAnswers[key] === option) {
          input.checked = true;
        }
        input.addEventListener("change", function () {
          userAnswers[key] = this.value;
          saveUserAnswers(userAnswers);
        });

        const text = document.createTextNode(option);

        optionContainer.appendChild(input);
        optionContainer.appendChild(text);
        optionsContainer.appendChild(optionContainer);
      });
      questionContainer.appendChild(optionsContainer);

      // Adaugam intrebarea la containerul general
      quizContainer.appendChild(questionContainer);
    });
  })

  .catch((error) => console.error(error));

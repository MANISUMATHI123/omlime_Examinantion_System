let questions = [
    {
      question: "Question 1: The nucleus of an atom consists of",
      options: ["electrons and neutrons","electrons and protons","protons and neutrons","All of the above"],
      answer: "3"
    },
    {
      question: "Question 2: The number of moles of solute present in 1 kg of a solvent is called its",
      options: ["molality","molarity","normality","formality"],
      answer: "1"
    },
    {
      question: "Question 3: The most electronegative element among the following is",
      options: ["sodium","bromine","fluorine", "oxygen"],
      answer: "3"
    },
    {
      question: "Question 4: The metal used to recover copper from a solution of copper sulphate is",
      options: ["Na","Ag","Hg","Fe"],
      answer: "4"
    },
    {
      question: "Question 5: The number of d-electrons in Fe2+ (Z = 26) is not equal to that of ",
      options: ["p-electrons in Ne(Z = 10)","s-electrons in Mg(Z = 12)","d-electrons in Fe(Z = 26)", "p-electrons in CI(Z = 17)"],
      answer: "4"
    },
    {
      question: "Question 6: The metallurgical process in which a metal is obtained in a fused state is called",
      options: ["smelting","roasting","calcinations","froth floatation"],
      answer: "1"
    },
    {
      question: "Question 7: The molecules of which gas have highest speed?",
      options: ["H2 at -73oC","CH4 at 300 K","N2 at 1,027oC","O2 at 0oC"],
      answer: "1"
    },
    {
      question: "Question 8: The oldest rocks in the earth's crust were once molten, and came from deep inside the earth. The molten rock, called magma, spewed out in volcanic eruptions during the earth;s early life and solidified into hard rock's called",
      options: ["granite","basalt","igneous rocks","sedimentary rocks"],
      answer: "3"
    },
    {
      question: "Question 9: The law which states that the amount of gas dissolved in a liquid is proportional to its partial pressure is",
      options: ["Dalton's law","Gay Lussac's law","Henry's law","Raoult's law"],
      answer: "3"
    },
    {
      question: "Question 10: The main buffer system of the human blood is",
      options: ["H2CO3 - HCO3","H2CO3 - CO32-","CH3COOH - CH3COO-","NH2CONH2 - NH2CONH+"],
      answer: "1"
    },

    
    
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    let questionElement = document.getElementById("question");
    let optionsElement = document.getElementById("options");
  
    questionElement.innerText = questions[currentQuestion].question;
  
    optionsElement.innerHTML = "";
  
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
      let optionElement = document.createElement("input");
      optionElement.type = "radio";
      optionElement.name = "answer";
      optionElement.id = "option" + (i + 1);
      optionElement.value = (i + 1);
  
      let labelElement = document.createElement("label");
      labelElement.setAttribute("for", "option" + (i + 1));
      labelElement.id = "option" + (i + 1) + "-label";
      labelElement.innerText = questions[currentQuestion].options[i];
  
      optionsElement.appendChild(optionElement);
      optionsElement.appendChild(labelElement);
      optionsElement.appendChild(document.createElement("br"));
    }
  }
  
  function showResults() {
    let selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      if (selectedOption.value === questions[currentQuestion].answer) {
        score++;
      }
  
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        let resultElement = document.getElementById("result");
        resultElement.innerText = "Final Score: " + score + " out of " + questions.length;
  
        let questionsContainer = document.getElementById("questions-container");
        questionsContainer.style.display = "none";
  
        let resultsContainer = document.getElementById("results-container");
        resultsContainer.style.display = "block";
      }
    }
  }
  
  function restartExam() {
    currentQuestion = 0;
    score = 0;
  
    let resultsContainer = document.getElementById("results-container");
    resultsContainer.style.display = "none";
  
    let questionsContainer = document.getElementById("questions-container");
    questionsContainer.style.display = "block";
  
    displayQuestion();
  }
  
  window.onload = displayQuestion;
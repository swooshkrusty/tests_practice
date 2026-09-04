
const form = document.querySelector(".quiz-form");

const SHUFFLE_QUESTIONS = true;
const SHUFFLE_ANSWERS = true;

const quizTitle =
  document.body.dataset.quizTitle || "Quiz Trainer";

let quizQuestions = [];
let currentIndex = 0;
let cards = [];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

// function isCode(text) {
//     if (typeof text !== "string") return false;

//     return (
//         text.includes("\n") ||          
//         text.includes("def ") ||
//         text.includes("class ") ||
//         text.includes("public ") ||
//         text.includes("import ") ||
//         text.includes("return ") ||
//         text.includes("for ") ||
//         text.includes("while ") ||
//         text.includes("if ") ||
//         text.includes("else:") ||
//         text.includes("range(") ||
//         text.includes("random.") ||
//         text.includes("print(") ||
//         text.includes("=") && text.includes("(")
//     );
// }

prepareQuestions();

renderQuestions();

cards = document.querySelectorAll(".plate[data-progress]");
cards.forEach(card => card.classList.add("none"));
cards[0].classList.remove("none");
cards[0].classList.add("visible");

renderQuestionNav();

if (window.hljs) {

  hljs.highlightAll();

}

updateProgressBar();

updateQuestionNav();

function prepareQuestions() {
  quizQuestions = questions.map(function(q) {
    let newQuestion = { ...q };

    if (SHUFFLE_ANSWERS && q.answers) {
      newQuestion.answers = shuffleArray(q.answers);
  }

    return newQuestion;
  });

  if (SHUFFLE_QUESTIONS) {
    quizQuestions = shuffleArray(quizQuestions);
  }
}


window.addEventListener("click", function(event) {
  const nextBtn = event.target.closest("[data-nav='next']");
  const prevBtn = event.target.closest("[data-nav='prev']");
  const jumpBtn = event.target.closest("[data-jump]");

  if (jumpBtn) {
    goToQuestion(Number(jumpBtn.dataset.jump));
    return;
  }

  if (nextBtn) {
    const card = cards[currentIndex];

    if (!hasAnswer(card)) {
      card.querySelector("[data-answers]").classList.add("required");
      return;
    }

    if (!card.classList.contains("answered")) {
      showAnswerResult(card, currentIndex);
      card.classList.add("answered");

      if (currentIndex === cards.length - 1) {
        nextBtn.innerText = "Show Results";
      }

      return;
    }

    if (currentIndex === cards.length - 1) {
      showFinalResult();
      return;
    }

    goToNextCard();
    
  }

  if (prevBtn) {
    goToPrevCard();
    
  }
});


function renderQuestions() {
  form.innerHTML = "";

  quizQuestions.forEach(function(q, index) {
    const section = document.createElement("section");
    section.className = "plate";
    section.setAttribute("data-progress", "");

    let answersHTML = "";

    // if (q.type === "radio") {
    //   answersHTML = q.answers.map(answer => `
    //     <label class="radio-block">
    //       <input
    //         type="radio"
    //         name="q${index}"
    //         value="${answer}"
    //         class="radio-block__real"
    //       />
    //       <div class="radio-block__fake"></div>
    //       <div class="radio-block__text">${answer}</div>
    //     </label>
    //   `).join("");
    // }

    // if (q.type === "checkbox") {
    //   answersHTML = q.answers.map(answer => `
    //     <label class="checkbox-block">
    //       <input
    //         type="checkbox"
    //         name="q${index}"
    //         value="${answer}"
    //         class="checkbox-block__real"
    //       />
    //       <div class="checkbox-block__fake"></div>
    //       <div class="checkbox-block__text">${answer}</div>
    //     </label>
    //   `).join("");
    // }
    if (q.type === "radio") {
  answersHTML = q.answers.map(answer => {
    const text = typeof answer === "object" ? answer.text : answer;
    const value = typeof answer === "object" ? answer.value : answer;

    return `
      <label class="radio-block">
        <input
          type="radio"
          name="q${index}"
          value="${value}"
          class="radio-block__real"
        />
        <div class="radio-block__fake"></div>
        <div class="radio-block__text">

        ${text}

</div>
      </label>
    `;
  }).join("");
}

if (q.type === "checkbox") {
  answersHTML = q.answers.map(answer => {
    const text = typeof answer === "object" ? answer.text : answer;
    const value = typeof answer === "object" ? answer.value : answer;

    return `
      <label class="checkbox-block">
        <input
          type="checkbox"
          name="q${index}"
          value="${value}"
          class="checkbox-block__real"
        />
        <div class="checkbox-block__fake"></div>
        <div class="checkbox-block__text">
          ${text}
        </div>
      </label>
    `;
  }).join("");
}

if (q.type === "input") {
  answersHTML = `
    <input
      type="text"
      name="q${index}"
      class="quiz-input"
      placeholder="Enter your answer"
    />
  `;
}

if (q.type === "table-input") {
  answersHTML = `
    <table class="question-table table-input-question">
      <tr>
        <th>Address</th>
        ${q.columns.map(col => `<th>${col}</th>`).join("")}
      </tr>

      ${q.rows.map((row, rowIndex) => `
        <tr>
          <td>${row}</td>
          ${q.columns.map((_, colIndex) => {
            const inputIndex = rowIndex * q.columns.length + colIndex;

            return `
              <td>
                <input
                  type="text"
                  class="table-quiz-input"
                  data-table-input="${inputIndex}"
                  maxlength="20"
                  placeholder="?"
                />
              </td>
            `;
          }).join("")}
        </tr>
      `).join("")}
    </table>
  `;
}

if (q.type === "matching") {
  const rightOptions = shuffleArray(
    q.pairs.map(pair => pair.right)
  );

  answersHTML = `
    <div class="matching-group">
      ${q.pairs.map((pair, pairIndex) => `
        <div class="matching-row">
          <div class="matching-left">
            ${pair.left}
          </div>

          <div class="matching-arrow">→</div>

          <select
            class="matching-select"
            data-match-index="${pairIndex}"
          >
            <option value="">Select a match...</option>

            ${rightOptions.map(option => `
              <option value="${option}">
                ${option}
              </option>
            `).join("")}
          </select>
        </div>
      `).join("")}
    </div>
  `;
}

    section.innerHTML = `
      <header class="plate-header">
        <img src="img/icons/list.png" alt="Icon" class="plate-header__icon" />
        ${quizTitle}
      </header>

      <div class="plate-content">
        <h2 class="title-main">${q.question}</h2>
        <div data-answers>${answersHTML}</div>
      </div>

      <footer class="plate-footer">
        <div class="plate-footer__progress progress">
          <div class="progress__label">Progress: <strong>0%</strong></div>
          <div class="progress__line-wrapper">
            <div class="progress__line-bar" style="width: 0%"></div>
          </div>
        </div>

        <div class="plate-footer__buttons">
          ${
            index === 0
              ? ""
              : `<button type="button" class="button button--back" data-nav="prev">Back</button>`
          }
          <button type="button" class="button" data-nav="next">Check</button>
        </div>
      </footer>
    `;

    form.appendChild(section);
  });
}

function hasAnswer(card) {
  const matchingSelects = card.querySelectorAll(".matching-select");

  if (matchingSelects.length > 0) {
    return Array.from(matchingSelects).every(
      select => select.value !== ""
    );
  }

  const tableInputs = card.querySelectorAll(".table-quiz-input");

  if (tableInputs.length > 0) {
    return Array.from(tableInputs).every(input => input.value.trim() !== "");
  }

  const input = card.querySelector(".quiz-input");

  if (input) {
    return input.value.trim() !== "";
  }

  return card.querySelectorAll("input:checked").length > 0;
}

function isAnswerCorrect(index) {
  const q = quizQuestions[index];
  const card = cards[index];

  if (q.type === "radio") {
    const selected = card.querySelector("input:checked");
    return selected && selected.value === q.correct;
  }

  if (q.type === "checkbox") {
    const checked = Array.from(card.querySelectorAll("input:checked")).map(input => input.value);
    const correct = [...q.correct];

    return (
      checked.length === correct.length &&
      checked.sort().join("|") === correct.sort().join("|")
    );
  }

  if (q.type === "table-input") {
    const inputs = Array.from(card.querySelectorAll(".table-quiz-input"));

    return inputs.every(function(input, inputIndex) {
  const user = normalize(input.value);
  const correctAnswers = q.correct[inputIndex];

  if (Array.isArray(correctAnswers)) {
    return correctAnswers.some(ans => normalize(ans) === user);
  }

  return user === normalize(correctAnswers);
});
  }

  if (q.type === "input") {
  const input = card.querySelector(".quiz-input");
  const userAnswer = normalize(input.value);

  if (Array.isArray(q.correct)) {
    return q.correct.some(ans => normalize(ans) === userAnswer);
  }

  return userAnswer === normalize(q.correct);
}

if (q.type === "matching") {
  const selects = Array.from(
    card.querySelectorAll(".matching-select")
  );

  return selects.every(select => {
    const pairIndex = Number(select.dataset.matchIndex);
    const correctAnswer = q.pairs[pairIndex].right;

    return select.value === correctAnswer;
  });
}
  return false;
}

function normalize(str) {
  return String(str)
    .toLowerCase()
    .replace(/\s+/g, "")     
    .replace(/,/g, "")       
    .replace(/\*/g, "")      
    .replace(/block/g, "")   
    .replace(/set/g, "")     
    .replace(/блок/g, "")    
}



function showAnswerResult(card, index) {
  const q = quizQuestions[index];
  const correct = isAnswerCorrect(index);

  highlightAnswers(card, index);

  const resultBlock = document.createElement("div");
  resultBlock.style.marginTop = "24px";
  resultBlock.style.padding = "28px";
  resultBlock.style.borderRadius = "12px";
  resultBlock.style.fontSize = "24px";
  resultBlock.style.lineHeight = "1.45";
  resultBlock.style.background = correct ? "#d9ffd9" : "#ffd9d9";
  resultBlock.style.width = "100%";
  resultBlock.style.boxSizing = "border-box";

  let correctAnswerText;

if (q.type === "matching") {
  correctAnswerText = q.pairs
    .map(pair => `<strong>${pair.left}</strong> → ${pair.right}`)
    .join("<br>");
} else {
  correctAnswerText = Array.isArray(q.correct)
    ? q.correct
        .map(arr => Array.isArray(arr) ? arr[0] : arr)
        .join(", ")
    : q.correct;
}

  resultBlock.innerHTML = `
  ${correct ? "✅ Correct!" : "❌ Not Correct."}
  <br>
  Correct Answer:<br>
  ${correctAnswerText}
  ${q.explanation ? `<br><br><div class="answer-explanation">${q.explanation}</div>` : ""
  
  }`;

  card.querySelector(".plate-content").appendChild(resultBlock);
}

function escapeHTML(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function highlightAnswers(card, index) {
  const q = quizQuestions[index];

  if (q.type === "matching") {

  const selects = Array.from(
    card.querySelectorAll(".matching-select")
  );

  selects.forEach(select => {
    const pairIndex = Number(select.dataset.matchIndex);
    const correctAnswer = q.pairs[pairIndex].right;

    select.disabled = true;

    if (select.value === correctAnswer) {
      select.style.border = "2px solid green";
      select.style.background = "#d9ffd9";
    } else {
      select.style.border = "2px solid red";
      select.style.background = "#ffd9d9";

      const correctText = document.createElement("div");

      correctText.className = "matching-correct";
      correctText.innerHTML =
        `Correct: <strong>${correctAnswer}</strong>`;

      select.parentElement.appendChild(correctText);
    }
  });

  return;
}

  if (q.type === "table-input") {
  const inputs = Array.from(card.querySelectorAll(".table-quiz-input"));

  inputs.forEach(function(input, inputIndex) {
    input.disabled = true;

    const userAnswer = normalize(input.value);
    const correctAnswers = q.correct[inputIndex];

    const isCorrect = Array.isArray(correctAnswers)
      ? correctAnswers.some(ans => normalize(ans) === userAnswer)
      : userAnswer === normalize(correctAnswers);

    if (isCorrect) {
      input.style.border = "2px solid green";
      input.style.background = "#d9ffd9";
    } else {
      input.style.border = "2px solid red";
      input.style.background = "#ffd9d9";
    }
  });

  return;
}

  if (q.type === "input") {
  const input = card.querySelector(".quiz-input");
  const userAnswer = normalize(input.value);

  input.disabled = true;

  const isCorrect = Array.isArray(q.correct)
    ? q.correct.some(ans => normalize(ans) === userAnswer)
    : userAnswer === normalize(q.correct);

  if (isCorrect) {
    input.style.border = "2px solid green";
    input.style.background = "#d9ffd9";
  } else {
    input.style.border = "2px solid red";
    input.style.background = "#ffd9d9";
  }

  return;
}

  const inputs = card.querySelectorAll("input");

  inputs.forEach(function(input) {
    const label = input.closest("label");

    if (q.type === "radio") {
      if (input.value === q.correct) {
        label.style.border = "2px solid green";
        label.style.background = "#d9ffd9";
      }

      if (input.checked && input.value !== q.correct) {
        label.style.border = "2px solid red";
        label.style.background = "#ffd9d9";
      }
    }

    if (q.type === "checkbox") {
      if (q.correct.includes(input.value)) {
        label.style.border = "2px solid green";
        label.style.background = "#d9ffd9";
      }

      if (input.checked && !q.correct.includes(input.value)) {
        label.style.border = "2px solid red";
        label.style.background = "#ffd9d9";
      }
    }

    input.disabled = true;
  });
}

function goToNextCard() {
  cards[currentIndex].classList.remove("visible");

  setTimeout(function() {
    cards[currentIndex].classList.add("none");

    currentIndex++;

    cards[currentIndex].classList.remove("none");

    setTimeout(function() {
      cards[currentIndex].classList.add("visible");
    }, 100);

    updateProgressBar();
    updateQuestionNav();
  }, 500);
}

function goToPrevCard() {
  if (currentIndex === 0) return;

  cards[currentIndex].classList.remove("visible");

  setTimeout(function() {
    cards[currentIndex].classList.add("none");

    currentIndex--;

    cards[currentIndex].classList.remove("none");

    setTimeout(function() {
      cards[currentIndex].classList.add("visible");
    }, 100);

    updateProgressBar();
    updateQuestionNav();
  }, 500);
}

function updateProgressBar() {
  const progress = Math.round((currentIndex / cards.length) * 100);

  document.querySelectorAll(".progress__label strong").forEach(function(item) {
    item.innerText = progress + "%";
  });

  document.querySelectorAll(".progress__line-bar").forEach(function(item) {
    item.style.width = progress + "%";
  });
}

function showFinalResult() {
  let score = 0;

  quizQuestions.forEach(function(_, index) {
    if (isAnswerCorrect(index)) {
      score++;
    }
  });

  document.body.innerHTML = `
    <div style="
      background: white;
      max-width: 700px;
      margin: 100px auto;
      padding: 50px;
      border-radius: 16px;
      font-family: Arial, sans-serif;
      font-size: 26px;
      text-align: center;
      box-shadow: 0 10px 35px rgba(0,0,0,0.15);
    ">
      <h1>Final Result</h1>
      <p>Correct answers: ${score} out of ${quizQuestions.length}</p>
      <p>${score === quizQuestions.length ? "Great ✅" : "Try Again ❌"}</p>

      <button onclick="location.reload()" style="
        margin-top: 30px;
        padding: 16px 34px;
        font-size: 22px;
        background: #09ac0c;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
      ">
        🔄 Try again
      </button>
    </div>
  `;
}

function renderQuestionNav() {
  const navContainer = document.getElementById("nav-container");

  const searchHTML = `
    <div class="question-search">
      <input
        type="text"
        class="question-search__input"
        placeholder="Search question..."
      />
      <div class="question-search__results"></div>
    </div>
  `;

  const nav = document.createElement("div");
  nav.className = "question-nav";

  nav.innerHTML = quizQuestions.map((_, index) => `
    <button type="button" class="question-nav__btn" data-jump="${index}">
      ${index + 1}
    </button>
  `).join("");

  navContainer.innerHTML = searchHTML;
  navContainer.appendChild(nav);

  setupQuestionSearch();
  updateQuestionNav();
}

function setupQuestionSearch() {
  const searchInput = document.querySelector(".question-search__input");
  const resultsBox = document.querySelector(".question-search__results");

  searchInput.addEventListener("input", function() {
    const searchText = normalizeSearch(searchInput.value);

    resultsBox.innerHTML = "";

    if (searchText.length < 2) return;

    const foundQuestions = quizQuestions
      .map((q, index) => ({ q, index }))
      .filter(item => normalizeSearch(item.q.question).includes(searchText))
      .slice(0, 8);

    foundQuestions.forEach(function(item) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "question-search__result";
      btn.innerHTML = `
        <strong>Question ${item.index + 1}</strong><br>
        ${stripHTML(item.q.question).slice(0, 120)}...
      `;

      btn.addEventListener("click", function() {
        goToQuestion(item.index);
        searchInput.value = "";
        resultsBox.innerHTML = "";
      });

      resultsBox.appendChild(btn);
    });
  });
}

function normalizeSearch(str) {
  return stripHTML(str)
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function stripHTML(str) {
  const div = document.createElement("div");
  div.innerHTML = str;
  return div.textContent || div.innerText || "";
}

function goToQuestion(index) {
  cards[currentIndex].classList.remove("visible");
  cards[currentIndex].classList.add("none");

  currentIndex = index;

  cards[currentIndex].classList.remove("none");
  cards[currentIndex].classList.add("visible");

  updateProgressBar();
  updateQuestionNav();
}

function updateQuestionNav() {
  document.querySelectorAll(".question-nav__btn").forEach((btn, index) => {
    btn.classList.toggle("active", index === currentIndex);
    btn.classList.toggle("answered", cards[index].classList.contains("answered"));
  });
}
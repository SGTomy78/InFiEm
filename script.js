// Control de pestañas (tabs)
const buttons = document.querySelectorAll('.tab-button');
const sections = document.querySelectorAll('.tab-content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Desactivar todos los botones y ocultar todas las secciones
    buttons.forEach(b => b.classList.remove('active'));
    sections.forEach(section => section.style.display = 'none');

    // Activar el botón actual y mostrar la sección correspondiente
    button.classList.add('active');
    const tabId = button.dataset.tab;
    const sectionToShow = document.getElementById(tabId);
    if (sectionToShow) {
      sectionToShow.style.display = 'block';
    }
  });
});

// Función alternativa (por si usás clases activas manualmente)
function mostrarSeccion(id) {
  document.querySelectorAll('.contenido').forEach(sec =>
    sec.classList.remove('seccion-activa')
  );

  const activa = document.getElementById(id);
  if (activa) activa.classList.add('seccion-activa');
}

// Juego de Verdadero o Falso
const questions = [
  { text: "El derecho a la integridad física prohíbe la tortura y los tratos crueles o degradantes.", answer: true },
  { text: "La integridad psíquica solo aplica en situaciones de guerra.", answer: false },
  { text: "Toda persona tiene derecho a no ser sometida a violencia física por parte del Estado.", answer: true },
  { text: "El maltrato psicológico no es considerado una violación a la integridad psíquica.", answer: false },
  { text: "El derecho a la integridad física está garantizado por tratados internacionales.", answer: true },
  { text: "Los niños no tienen derecho a la integridad psíquica.", answer: false }
];

let currentQuestion = 0;
let correct = 0;
let total = 0;

function showQuestion() {
  const questionElem = document.getElementById("question");
  const resultElem = document.getElementById("result");

  if (currentQuestion < questions.length) {
    questionElem.textContent = questions[currentQuestion].text;
    resultElem.textContent = "";
  } else {
    questionElem.textContent = "¡Juego terminado!";
    resultElem.textContent = `Obtuviste ${correct} de ${total} respuestas correctas.`;
  }
}

function checkAnswer(userAnswer) {
  if (currentQuestion >= questions.length) return;

  const isCorrect = questions[currentQuestion].answer === userAnswer;
  const resultElem = document.getElementById("result");

  resultElem.textContent = isCorrect ? "✅ ¡Correcto!" : "❌ Incorrecto.";
  if (isCorrect) correct++;

  total++;
  document.getElementById("score").textContent = `Puntaje: ${correct} / ${total}`;
  currentQuestion++;

  setTimeout(showQuestion, 1000);
}

// Iniciar el juego al cargar
document.addEventListener("DOMContentLoaded", showQuestion);

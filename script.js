const prerequisitos = {
  "Matemática II": ["Matemáticas"],
  "Física II": ["Física", "Matemáticas"],
  "Fisiología General": ["Física", "Química General y Orgánica"],
  "Bioquímica": ["Química General y Orgánica"],
  "Bioquímica Aplicada": ["Bioquímica"],
  "Fisiología de Sistemas": ["Fisiología General"],
  "Inmunología": ["Genética", "Bioquímica"]
};

const semestres = [
  {
    nombre: "1° semestre",
    ramos: [
      "Química General y Orgánica",
      "Matemáticas",
      "Física",
      "Biología Celular y Molecular",
      "Sociedad y Profesión I",
      "Anatomía",
      "Formación General I"
    ]
  },
  {
    nombre: "2° semestre",
    ramos: [
      "Sociedad y Profesión II",
      "Histología y Embriología",
      "Genética",
      "Matemática II",
      "Física II",
      "Fisiología General",
      "Bioquímica"
    ]
  },
  {
    nombre: "3° semestre",
    ramos: [
      "Sociedad y Profesión III",
      "Agentes Vivos de la Enfermedad",
      "Fisiología de Sistemas",
      "Inmunología",
      "Inglés I",
      "Bioquímica Aplicada"
    ]
  }
];

const contenedor = document.getElementById("malla");
const estado = {}; // true = aprobado

// Crear malla
semestres.forEach(semestre => {
  const divSemestre = document.createElement("div");
  divSemestre.className = "semestre";

  const titulo = document.createElement("h2");
  titulo.textContent = semestre.nombre;
  divSemestre.appendChild(titulo);

  semestre.ramos.forEach(ramo => {
    const divRamo = document.createElement("div");
    divRamo.className = "ramo";
    divRamo.textContent = ramo;
    divRamo.dataset.nombre = ramo;

    if (prerequisitos[ramo]) {
      divRamo.classList.add("con-prereq");
    }

    divRamo.addEventListener("click", () => toggleRamo(ramo));

    divSemestre.appendChild(divRamo);
  });

  contenedor.appendChild(divSemestre);
});

function toggleRamo(ramo) {
  // doble click → volver a estado original
  estado[ramo] = !estado[ramo];

  document.querySelectorAll(".ramo").forEach(r => {
    r.classList.remove("aprobado", "disponible");

    if (prerequisitos[r.dataset.nombre]) {
      r.classList.add("con-prereq");
    }
  });

  // marcar aprobados
  Object.entries(estado).forEach(([r, aprobado]) => {
    if (aprobado) {
      const elem = document.querySelector(`.ramo[data-nombre="${r}"]`);
      if (elem) elem.classList.add("aprobado");
    }
  });

  // marcar disponibles
  Object.entries(prerequisitos).forEach(([destino, reqs]) => {
    const cumplidos = reqs.every(r => estado[r]);
    if (cumplidos && !estado[destino]) {
      const elem = document.querySelector(`.ramo[data-nombre="${destino}"]`);
      if (elem) elem.classList.add("disponible");
    }
  });
}

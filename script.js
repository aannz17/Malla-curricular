const colores = [
  "#800020",
  "#9f0a2f",
  "#b62247",
  "#d22d56",
  "#ee416c"
];

// 👉 PRERREQUISITOS
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
const estado = {}; // aprobado o no

// Crear malla
semestres.forEach(semestre => {
  const divSemestre = document.createElement("div");
  divSemestre.className = "semestre";

  const titulo = document.createElement("h2");
  titulo.textContent = semestre.nombre;
  divSemestre.appendChild(titulo);

  semestre.ramos.forEach((ramo, i) => {
    const divRamo = document.createElement("div");
    divRamo.className = "ramo";
    divRamo.textContent = ramo;
    divRamo.style.backgroundColor = colores[i % colores.length];
    divRamo.dataset.nombre = ramo;

    divRamo.addEventListener("click", () => aprobarRamo(ramo));

    divSemestre.appendChild(divRamo);
  });

  contenedor.appendChild(divSemestre);
});

function aprobarRamo(ramo) {
  estado[ramo] = true;

  document.querySelectorAll(".ramo").forEach(r => {
    r.classList.remove("disponible");

    if (estado[r.dataset.nombre]) {
      r.classList.add("aprobado");
    }
  });

  // Iluminar ramos disponibles
  Object.entries(prerequisitos).forEach(([ramoDestino, reqs]) => {
    const cumplidos = reqs.every(r => estado[r]);
    if (cumplidos && !estado[ramoDestino]) {
      const elem = document.querySelector(
        `.ramo[data-nombre="${ramoDestino}"]`
      );
      if (elem) elem.classList.add("disponible");
    }
  });
}

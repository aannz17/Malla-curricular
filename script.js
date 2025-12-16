const colores = [
  "#800020",
  "#9f0a2f",
  "#b62247",
  "#d22d56",
  "#ee416c"
];

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
  },
  {
    nombre: "4° semestre",
    ramos: [
      "Profesión, Persona y Sociedad",
      "Tecnologías Moleculares Aplicadas al Diagnóstico",
      "Introducción a la Salud Pública",
      "Fisiopatología",
      "Farmacología",
      "Inglés II"
    ]
  }
];

const contenedor = document.getElementById("malla");

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
    divSemestre.appendChild(divRamo);
  });

  contenedor.appendChild(divSemestre);
});

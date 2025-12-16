// --- 1. Definición de la Malla Curricular y Prerrequisitos ---

const malla = [
    { semestre: '1er semestre', cursos: [
        { nombre: 'Química General y Orgánica', creditos: 8, id: 'quimica-org' },
        { nombre: 'Matemáticas', creditos: 3, id: 'matematicas' },
        { nombre: 'Física', creditos: 5, id: 'fisica' },
        { nombre: 'Biología Celular y Molecular', creditos: 6, id: 'biologia-cel' },
        { nombre: 'Sociedad y Profesión I', creditos: 2, id: 'sociedad-prof-1' },
        { nombre: 'Anatomía', creditos: 5, id: 'anatomia' },
        { nombre: 'Formación general I', creditos: 2, id: 'formacion-gen-1' },
    ]},
    { semestre: '2do semestre', cursos: [
        { nombre: 'Sociedad y Profesión II', creditos: 3, id: 'sociedad-prof-2' },
        { nombre: 'Histología y Embriología', creditos: 4, id: 'histologia' },
        { nombre: 'Genética', creditos: 5, id: 'genetica' },
        { nombre: 'Matemática II', creditos: 3, id: 'matematicas-2' },
        { nombre: 'Física II', creditos: 5, id: 'fisica-2' },
        { nombre: 'Fisiología General', creditos: 4, id: 'fisiologia-gen' },
        { nombre: 'Bioquímica', creditos: 6, id: 'bioquimica' },
    ]},
    { semestre: '3er semestre', cursos: [
        { nombre: 'Sociedad y Profesión III', creditos: 5, id: 'sociedad-prof-3' },
        { nombre: 'Agentes Vivos de la Enfermedad', creditos: 5, id: 'agentes-vivos' },
        { nombre: 'Fisiología de Sistemas', creditos: 5, id: 'fisiologia-sistemas' },
        { nombre: 'Inmunología', creditos: 4, id: 'inmunologia' },
        { nombre: 'Inglés I', creditos: 3, id: 'ingles-1' },
        { nombre: 'Bioquímica Aplicada', creditos: 8, id: 'bioquimica-aplicada' },
    ]},
    { semestre: '4to semestre', cursos: [
        { nombre: 'Profesión, Persona y Sociedad', creditos: 5, id: 'profesion-persona' },
        { nombre: 'Tecnologías Moleculares Aplicadas al Diagnóstico', creditos: 8, id: 'tecnologias-moleculares' },
        { nombre: 'Introducción a la Salud Pública', creditos: 2, id: 'salud-publica' },
        { nombre: 'Fisiopatología', creditos: 7, id: 'fisiopatologia' },
        { nombre: 'Farmacología', creditos: 4, id: 'farmacologia' },
        { nombre: 'Inglés II', creditos: 3, id: 'ingles-2' },
    ]},
    { semestre: '5to semestre', cursos: [
        { nombre: 'Estadística y Epidemiología', creditos: 4, id: 'estadistica' },
        { nombre: 'Inglés III', creditos: 3, id: 'ingles-3' },
        { nombre: 'Módulo Integrado Interdisciplinario Multiprofesional I', creditos: 4, id: 'mod-int-1' },
        { nombre: 'Parasitología', creditos: 5, id: 'parasitologia' },
        { nombre: 'Química Clínica', creditos: 14, id: 'quimica-clinica' },
    ]},
    { semestre: '6to semestre', cursos: [
        { nombre: 'Intervención Comunitaria I', creditos: 2, id: 'intervencion-com-1' },
        { nombre: 'Gestión I', creditos: 3, id: 'gestion-1' },
        { nombre: 'Inglés IV', creditos: 3, id: 'ingles-4' },
        { nombre: 'Formación General II', creditos: 2, id: 'formacion-gen-2' },
        { nombre: 'Microbiología Clínica', creditos: 20, id: 'microbiologia-clinica' },
    ]},
    { semestre: '7mo semestre', cursos: [
        { nombre: 'Intervención Comunitaria II', creditos: 2, id: 'intervencion-com-2' },
        { nombre: 'Metodologías de la Investigación', creditos: 4, id: 'metodologias-inv' },
        { nombre: 'Gestión II', creditos: 3, id: 'gestion-2' },
        { nombre: 'Formación general III', creditos: 2, id: 'formacion-gen-3' },
        { nombre: 'Aseguramiento de la Calidad en el Laboratorio', creditos: 2, id: 'aseguramiento-calidad' },
        { nombre: 'Hematología', creditos: 17, id: 'hematologia' },
    ]},
    { semestre: '8vo semestre', cursos: [
        { nombre: 'Proyecto de investigación', creditos: 2, id: 'proyecto-inv' },
        { nombre: 'Módulo Integrado Interdisciplinario Multiprofesional II', creditos: 5, id: 'mod-int-2' },
        { nombre: 'Integración Interdisciplinaria en el Diagnóstico del Laboratorio de Bioanálisis', creditos: 5, id: 'integracion-bioanalisis' },
        { nombre: 'Medicina Transfusional', creditos: 18, id: 'medicina-transfusional' },
    ]},
    { semestre: '9no semestre', cursos: [
        { nombre: 'Trabajo de Investigación', creditos: 26, id: 'trabajo-inv-9' },
        { nombre: 'Gestión de la Calidad', creditos: 2, id: 'gestion-calidad-9' },
        { nombre: 'Formación General IV ETM', creditos: 2, id: 'formacion-gen-4-9' },
        { nombre: 'Práctica Profesional', creditos: 30, id: 'practica-prof-9' },
    ]},
    { semestre: '10mo semestre', cursos: [
        { nombre: 'Trabajo de Investigación', creditos: 26, id: 'trabajo-inv-10' },
        { nombre: 'Gestión de la Calidad', creditos: 2, id: 'gestion-calidad-10' },
        { nombre: 'Formación General IV ETM', creditos: 2, id: 'formacion-gen-4-10' },
        { nombre: 'Práctica Profesional', creditos: 30, id: 'practica-prof-10' },
    ]},
];

// Mapeo de prerrequisitos (ID del curso: [IDs de prerrequisitos])
const prerrequisitos = {
    'matematicas-2': ['matematicas'],
    'fisica-2': ['matematicas', 'fisica'],
    'fisiologia-gen': ['fisica', 'quimica-org'],
    'bioquimica': ['quimica-org'],
    'bioquimica-aplicada': [
        'sociedad-prof-1', 'sociedad-prof-2', 'matematicas-2', 'fisica-2', 'anatomia', 
        'histologia', 'fisiologia-gen', 'bioquimica', 'biologia-cel', 'genetica'
    ],
    'mod-int-2': ['mod-int-1'],
    'intervencion-com-2': ['intervencion-com-1'],
    'intervencion-com-1': ['profesion-persona'],
    'fisiologia-sistemas': ['fisiologia-gen'],
    'inmunologia': ['genetica', 'bioquimica'],
    'farmacologia': ['bioquimica'],
    'agentes-vivos': ['bioquimica', 'biologia-cel'],
    'salud-publica': ['sociedad-prof-3'],
    'tecnologias-moleculares': ['bioquimica-aplicada'],
    'fisiopatologia': ['bioquimica', 'fisiologia-sistemas'],
    'microbiologia-clinica': ['agentes-vivos'],
    'parasitologia': ['agentes-vivos'],
    'estadistica': ['salud-publica'],
    'metodologias-inv': ['estadistica'],
    'gestion-1': ['estadistica'],
    'quimica-clinica': ['bioquimica-aplicada', 'fisiopatologia'],
    'hematologia': ['fisiopatologia'],
    'aseguramiento-calidad': ['quimica-clinica'],
    'medicina-transfusional': ['hematologia'],
    'integracion-bioanalisis': ['quimica-clinica', 'hematologia', 'parasitologia', 'microbiologia-clinica'],
    'gestion-2': ['gestion-1'],
    'proyecto-inv': ['metodologias-inv'],
    'practica-prof-9': ['aseguramiento-calidad', 'medicina-transfusional', 'integracion-bioanalisis', 'gestion-2', 'proyecto-inv'],
    'practica-prof-10': ['aseguramiento-calidad', 'medicina-transfusional', 'integracion-bioanalisis', 'gestion-2', 'proyecto-inv'],
    'gestion-calidad-9': ['gestion-2'],
    'gestion-calidad-10': ['gestion-2'],
    'trabajo-inv-9': ['proyecto-inv'],
    'trabajo-inv-10': ['proyecto-inv'],
};

// Estado de los cursos: 'aprobado' o 'pendiente'
let estadoCursos = JSON.parse(localStorage.getItem('mallaEstado')) || {};


// --- 2. Funciones de Lógica ---

function estaDisponible(cursoId) {
    const prereqs = prerrequisitos[cursoId];
    if (!prereqs || prereqs.length === 0) {
        return true;
    }
    return prereqs.every(prereqId => estadoCursos[prereqId] === 'aprobado');
}

function actualizarEstado(cursoId, estado) {
    if (estado === 'aprobado') {
        estadoCursos[cursoId] = 'aprobado';
    } else {
        delete estadoCursos[cursoId];
    }
    localStorage.setItem('mallaEstado', JSON.stringify(estadoCursos));
    renderizarMalla();
}

/**
 * NUEVA FUNCIÓN: Maneja el clic único para cambiar de estado (Disponible -> Aprobado o Aprobado -> Pendiente).
 */
function manejarClickCurso(cursoId, elementoCurso) {
    const aprobado = estadoCursos[cursoId] === 'aprobado';
    const disponible = estaDisponible(cursoId);

    if (aprobado) {
        // Si ya está APROBADO (listo), lo revierte a PENDIENTE
        actualizarEstado(cursoId, 'pendiente');
    } else if (disponible) {
        // Si está DISPONIBLE, lo marca como APROBADO (listo)
        actualizarEstado(cursoId, 'aprobado');
    }
    // Si no está disponible (no-disponible), no hace nada.
}


// --- 3. Funciones de Renderizado e Interacción ---

function renderizarMalla() {
    const contenedorMalla = document.getElementById('malla-curricular');
    contenedorMalla.innerHTML = '';

    malla.forEach(semestreData => {
        const semestreDiv = document.createElement('div');
        semestreDiv.className = 'semestre';

        semestreDiv.innerHTML = `<h2>${semestreData.semestre}</h2><ul class="cursos-lista"></ul>`;
        const cursosLista = semestreDiv.querySelector('.cursos-lista');

        semestreData.cursos.forEach(curso => {
            const li = document.createElement('li');
            li.id = `curso-${curso.id}`;
            li.classList.add('curso');

            const nombreSpan = document.createElement('span');
            nombreSpan.className = 'curso-nombre';
            nombreSpan.textContent = curso.nombre;

            const creditosSpan = document.createElement('span');
            creditosSpan.className = 'curso-creditos';
            creditosSpan.textContent = `${curso.creditos} cr.`;

            li.appendChild(nombreSpan);
            li.appendChild(creditosSpan);

            const aprobado = estadoCursos[curso.id] === 'aprobado';
            const disponible = estaDisponible(curso.id);

            li.classList.remove('aprobado', 'disponible', 'no-disponible');

            if (aprobado) {
                li.classList.add('aprobado');
            } else if (disponible) {
                li.classList.add('disponible');
            } else {
                li.classList.add('no-disponible');
            }

            // Asignar el evento de click (tanto para aprobar como para desaprobar)
            // Se asigna a todos los cursos para que los aprobados también puedan revertirse.
            li.addEventListener('click', () => {
                manejarClickCurso(curso.id, li);
            });
            
            // Eliminar listeners de doble click si existieran de versiones anteriores
            li.removeEventListener('dblclick', () => {});


            cursosLista.appendChild(li);
        });

        contenedorMalla.appendChild(semestreDiv);
    });
}

// Iniciar la renderización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderizarMalla);

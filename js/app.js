// --- Translations ---
const i18n = {
  es: {
    name: 'Diego Ernesto Santana Ramírez',
    subtitle: 'Desarrollador web · Apasionado por la IA y APIs · Sistemas de Información',
    location: 'Cuenca, Ecuador',
    summary: 'Joven profesional motivado, con conocimientos en desarrollo web, diseño de sistemas y análisis contable. Busco oportunidades para aplicar mis habilidades técnicas y contables en entornos colaborativos e innovadores.',
    viewProjects: 'Ver proyectos',
    contact: 'Contacto',
    skills: 'Habilidades',
    langs: 'Lenguajes',
    frameworks: 'Frameworks',
    databases: 'Bases de datos',
    tools: 'Herramientas',
    systems: 'Sistemas',
    experience: 'Experiencia',
    projects: 'Proyectos destacados',
    education: 'Educación',
    contactTitle: 'Contacto & Enlaces',
    stackTitle: 'Stack & Tools',
    downloadDesc: 'Descarga el PDF oficial de mi CV.',
    downloadBtn: 'Descargar PDF'
  },
  en: {
    name: 'Diego Ernesto Santana Ramírez',
    subtitle: 'Web developer · Passionate about AI & APIs · Information Systems',
    location: 'Cuenca, Ecuador',
    summary: 'Motivated young professional with skills in web development, systems design and accounting analysis. Seeking opportunities to apply my technical and accounting skills in collaborative, innovative environments.',
    viewProjects: 'View projects',
    contact: 'Contact',
    skills: 'Skills',
    langs: 'Languages',
    frameworks: 'Frameworks',
    databases: 'Databases',
    tools: 'Tools',
    systems: 'Systems',
    experience: 'Experience',
    projects: 'Featured projects',
    education: 'Education',
    contactTitle: 'Contact & Links',
    stackTitle: 'Stack & Tools',
    downloadDesc: 'Download the official PDF of my resume.',
    downloadBtn: 'Download PDF'
  },
  fr: {
    name: 'Diego Ernesto Santana Ramírez',
    subtitle: 'Développeur web · Passionné par l\'IA et les APIs · Systèmes d\'information',
    location: 'Cuenca, Équateur',
    summary: 'Jeune professionnel motivé, compétent en développement web, conception de systèmes et analyse comptable. Je recherche des opportunités pour appliquer mes compétences techniques et comptables dans des environnements collaboratifs et innovants.',
    viewProjects: 'Voir les projets',
    contact: 'Contact',
    skills: 'Compétences',
    langs: 'Langages',
    frameworks: 'Frameworks',
    databases: 'Bases de données',
    tools: 'Outils',
    systems: 'Systèmes',
    experience: 'Expérience',
    projects: 'Projets remarquables',
    education: 'Formation',
    contactTitle: 'Contact & Liens',
    stackTitle: 'Stack & Outils',
    downloadDesc: 'Téléchargez le PDF officiel de mon CV.',
    downloadBtn: 'Télécharger PDF'
  }
};

// Elements map
const elements = {
  name: document.getElementById('name'),
  subtitle: document.getElementById('subtitle'),
  location: document.getElementById('location'),
  summary: document.getElementById('summary'),
  viewProjects: document.getElementById('viewProjects'),
  contactBtn: document.getElementById('contactBtn'),
  skillsTitle: document.getElementById('skillsTitle'),
  labelLang: document.getElementById('labelLang'),
  labelFw: document.getElementById('labelFw'),
  labelDb: document.getElementById('labelDb'),
  labelTools: document.getElementById('labelTools'),
  labelSys: document.getElementById('labelSys'),
  expTitle: document.getElementById('expTitle'),
  projectsTitle: document.getElementById('projectsTitle'),
  eduTitle: document.getElementById('eduTitle'),
  contactTitle: document.getElementById('contactTitle'),
  stackTitle: document.getElementById('stackTitle'),
  downloadDesc: document.getElementById('downloadDesc'),
  downloadPdf: document.getElementById('downloadPdf')
};

function applyLanguage(lang){
  const t = i18n[lang] || i18n['es'];
  elements.name.textContent = t.name;
  elements.subtitle.textContent = t.subtitle;
  elements.location.textContent = t.location;
  elements.summary.textContent = t.summary;
  elements.viewProjects.textContent = t.viewProjects;
  elements.contactBtn.textContent = t.contact;
  if (elements.skillsTitle) elements.skillsTitle.textContent = t.skills;
  if (elements.labelLang) elements.labelLang.textContent = t.langs;
  if (elements.labelFw) elements.labelFw.textContent = t.frameworks;
  if (elements.labelDb) elements.labelDb.textContent = t.databases;
  if (elements.labelTools) elements.labelTools.textContent = t.tools;
  if (elements.labelSys) elements.labelSys.textContent = t.systems;
  elements.expTitle.textContent = t.experience;
  elements.projectsTitle.textContent = t.projects;
  elements.eduTitle.textContent = t.education;
  elements.contactTitle.textContent = t.contactTitle;
  elements.stackTitle.textContent = t.stackTitle;
  elements.downloadDesc.textContent = t.downloadDesc;
  elements.downloadPdf.textContent = t.downloadBtn;
}

// Language selector
const langSelect = document.getElementById('lang');
const savedLang = localStorage.getItem('cv_lang') || 'es';
langSelect.value = savedLang;
applyLanguage(savedLang);
langSelect.addEventListener('change', (e)=>{
  const v=e.target.value;
  localStorage.setItem('cv_lang',v);
  applyLanguage(v);
  applyTheme(localStorage.getItem('cv_theme')||'dark');
});

// Theme toggle
const body = document.body;
const themeBtn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('cv_theme') || 'dark';
function applyTheme(theme){
  if(theme==='light'){
    body.classList.add('light');
    body.classList.remove('text-slate-100');
    body.classList.add('text-slate-900');
    themeBtn.textContent = (langSelect.value==='es') ? 'Modo oscuro' : (langSelect.value==='en'?'Dark':'Sombre');
  } else {
    body.classList.remove('light');
    body.classList.remove('text-slate-900');
    body.classList.add('text-slate-100');
    themeBtn.textContent = (langSelect.value==='es') ? 'Modo claro' : (langSelect.value==='en'?'Light':'Clair');
  }
  localStorage.setItem('cv_theme', theme);
}
applyTheme(savedTheme);
document.body.style.visibility = 'visible';
themeBtn.addEventListener('click', ()=>{
  const newTheme = body.classList.contains('light') ? 'dark' : 'light';
  applyTheme(newTheme);
});

// reveal on scroll
const observers = document.querySelectorAll('.fade-up');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('show')
  });
},{threshold:0.15});
observers.forEach(o=>io.observe(o));

// Año dinámico en el footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// --- Pruebas rápidas (se ven en la consola) ---
(function runSmokeTests(){
  try {
    console.assert(document.getElementById('lang'), 'Selector de idioma debe existir');
    console.assert(document.getElementById('themeToggle'), 'Botón de tema debe existir');
    console.assert(document.querySelector('#habilidades .skill-bar'), 'Debe existir al menos una barra de habilidad');
    const prev = document.body.classList.contains('light');
    applyTheme(prev ? 'dark' : 'light');
    console.assert(document.body.classList.contains(prev ? 'text-slate-100' : 'text-slate-900'), 'Theme toggle aplica clases de color');
    applyTheme(prev ? 'light' : 'dark'); // restaurar
    const currentLang = langSelect.value;
    applyLanguage('en');
    console.assert(document.getElementById('skillsTitle').textContent.length > 0, 'i18n aplica a títulos');
    applyLanguage(currentLang);
    console.log('%cSmoke tests OK','padding:2px 6px;border-radius:6px;background:#10b981;color:white');
  } catch (e) {
    console.error('Smoke tests FAILED', e);
  }

  
})();

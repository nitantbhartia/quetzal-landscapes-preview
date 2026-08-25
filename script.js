const SMS = "sms:+18582221454";
const LANG_KEY = "quetzal-lang";

const I18N = {
  en: {
    navStrip: "Encinitas strip",
    navWork: "Work",
    navAbout: "About",
    navJob: "Consult",
    kicker: "Design · Advice · Build · San Diego family-owned since 2011",
    h1: "High quality work for superior outdoor living.",
    lede: "We make it a priority to offer flexible services to accommodate your needs. From initial concepts to final touches, the team designs, advises, and builds custom outdoor spaces — a functional extension of the home.",
    textJob: "Text a consult",
    callNow: "Call 858-222-1454",
    stripK: "New project · Encinitas, Cal.",
    stripT: "Pergola, outdoor kitchen, fire features — the build strip",
    stripLede: "A new Encinitas project: pergola, outdoor kitchen, fire features and other details. Consult, design, approval, build, then walkthrough.",
    b1t: "Consult",
    b1b: "We send our team out to your property to estimate costs. Already know what you want? Skip ahead to approval.",
    b2t: "Design",
    b2b: "A team of high-level designers create unique, beautiful plans for your new landscape.",
    b3t: "Approval",
    b3b: "Revisions and approval. Designs are sent to you; we do the work, you get the final say.",
    b4t: "Build",
    b4b: "The project begins. Professional crews will begin working on your property.",
    b5t: "Walkthrough",
    b5b: "We’ll walk you through your new favorite place to be: your outdoor space.",
    figcap: "Encinitas pergola with outdoor kitchen and fire feature.",
    svcT: "What gets built",
    sv1: "Walls",
    sv2: "Pavers",
    sv3: "Fire features",
    sv4: "Outdoor kitchens",
    svcMore: "From designing to executing all aspects of softscape and hardscape projects. Quality, Service, and Integrity are the values carried in everything they do.",
    qKicker: "Ian H",
    aboutT: "About Quetzal",
    aboutB: "We are a San Diego family-owned landscape company providing services since 2011. Dedicated to building your ideas. Striving always for the highest standards of work to transform your outdoor living space.",
    lic: "CA license #1082680",
    jobT: "Start with a consult",
    jobLede: "Name and need required. Address is for the house call. Submit opens a text to 858-222-1454.",
    fName: "Name",
    fNeed: "Need",
    fAddr: "Address (house call)",
    fMsg: "Details (optional)",
    phName: "Your name",
    phAddr: "Street, city",
    phMsg: "Pergola, kitchen, fire, walls…",
    needPick: "Select the work",
    need1: "Walls",
    need2: "Pavers",
    need3: "Fire features",
    need4: "Outdoor kitchen",
    need5: "Pergola / outdoor living",
    need6: "Softscape / hardscape",
    need7: "Consult / estimate",
    fSend: "Text 858-222-1454",
    orCall: "Or call 858-222-1454",
    orSms: "Open a blank text",
    since: "since 2011",
    footSms: "Text",
    footRev: "Leave a review",
    docTitle: "Quetzal Landscapes · San Diego · CA #1082680"
  },
  es: {
    navStrip: "Tira Encinitas",
    navWork: "Obra",
    navAbout: "Acerca",
    navJob: "Consulta",
    kicker: "Diseño · Consejo · Construcción · De familia en San Diego desde 2011",
    h1: "Trabajo de alta calidad para una vida exterior superior.",
    lede: "Prioridad: servicios flexibles para acomodar lo que necesita. De los conceptos iniciales a los toques finales, el equipo diseña, aconseja y construye espacios exteriores a medida — una extensión funcional de la casa.",
    textJob: "Textear una consulta",
    callNow: "Llamar 858-222-1454",
    stripK: "Proyecto nuevo · Encinitas, Cal.",
    stripT: "Pérgola, cocina exterior, fuego — la tira de obra",
    stripLede: "Un proyecto nuevo en Encinitas: pérgola, cocina exterior, elementos de fuego y otros detalles. Consulta, diseño, aprobación, construcción, recorrido.",
    b1t: "Consulta",
    b1b: "Enviamos al equipo a su propiedad para estimar costos. ¿Ya sabe lo que quiere? Pase a la aprobación.",
    b2t: "Diseño",
    b2b: "Un equipo de diseñadores de alto nivel crea planos únicos y hermosos para su paisaje.",
    b3t: "Aprobación",
    b3b: "Revisiones y aprobación. Le enviamos los diseños; nosotros hacemos el trabajo, usted tiene la última palabra.",
    b4t: "Construcción",
    b4b: "Empieza el proyecto. Cuadrillas profesionales trabajan en su propiedad.",
    b5t: "Recorrido",
    b5b: "Lo recorremos por su nuevo lugar favorito: su espacio exterior.",
    figcap: "Pérgola en Encinitas con cocina exterior y fuego.",
    svcT: "Qué se construye",
    sv1: "Muros",
    sv2: "Adoquines",
    sv3: "Elementos de fuego",
    sv4: "Cocinas exteriores",
    svcMore: "Del diseño a la ejecución de softscape y hardscape. Calidad, Servicio e Integridad son los valores en todo lo que hacen.",
    qKicker: "Ian H",
    aboutT: "Acerca de Quetzal",
    aboutB: "Somos una empresa de paisaje de familia en San Diego, con servicios desde 2011. Dedicados a construir sus ideas. Siempre buscando el más alto estándar para transformar el espacio exterior.",
    lic: "Licencia CA n.º 1082680",
    jobT: "Empezar con una consulta",
    jobLede: "Nombre y necesidad son obligatorios. La dirección es para la visita. Enviar abre un texto al 858-222-1454.",
    fName: "Nombre",
    fNeed: "Necesidad",
    fAddr: "Dirección (visita a casa)",
    fMsg: "Detalles (opcional)",
    phName: "Su nombre",
    phAddr: "Calle, ciudad",
    phMsg: "Pérgola, cocina, fuego, muros…",
    needPick: "Elija el trabajo",
    need1: "Muros",
    need2: "Adoquines",
    need3: "Elementos de fuego",
    need4: "Cocina exterior",
    need5: "Pérgola / vida exterior",
    need6: "Softscape / hardscape",
    need7: "Consulta / estimado",
    fSend: "Textear 858-222-1454",
    orCall: "O llame al 858-222-1454",
    orSms: "Abrir un texto en blanco",
    since: "desde 2011",
    footSms: "Texto",
    footRev: "Dejar reseña",
    docTitle: "Quetzal Landscapes · San Diego · CA n.º 1082680"
  }
};

function setLang(lang) {
  const pack = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  if (pack.docTitle) document.title = pack.docTitle;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && pack[key] != null) el.textContent = pack[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key && pack[key] != null) el.setAttribute("placeholder", pack[key]);
  });
  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });
  try { localStorage.setItem(LANG_KEY, lang); } catch (_) {}
}

document.querySelectorAll(".lang button").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});
try {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === "es" || saved === "en") setLang(saved);
} catch (_) {}

const form = document.getElementById("sms-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = (form.elements.name.value || "").trim();
    const need = (form.elements.need.value || "").trim();
    const address = (form.elements.address.value || "").trim();
    const details = (form.elements.details.value || "").trim();
    if (!name || !need) return;
    let body = "Name: " + name + "\nNeed: " + need;
    if (address) body += "\nAddress: " + address;
    if (details) body += "\nDetails: " + details;
    window.location.href = SMS + "?body=" + encodeURIComponent(body);
  });
}

const printBtn = document.getElementById("print-card");
if (printBtn) printBtn.addEventListener("click", () => window.print());

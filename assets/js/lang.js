// TYPEWRITER — bilingual
const twPhrases = {
  es: [
    'Optimizamos el tiempo del abogado.',
    'Propiedad Intelectual · Chile · LATAM · Global',
    'IA Legal con etica como valor supremo.',
    'Desde 2009. Para el 2030 y mas alla.',
  ],
  en: [
    'We optimize the lawyer\'s most valuable asset: time.',
    'Intellectual Property · Chile · LATAM · Global',
    'Legal AI with ethics as the supreme value.',
    'Since 2009. Built for 2030 and beyond.',
  ]
};

let currentLang = 'es';
let pi = 0, ci = 0, del = false;
const tw = document.getElementById('tw');

function getPhrase() { return twPhrases[currentLang][pi % twPhrases[currentLang].length]; }

function loop() {
  const ph = getPhrase();
  if (!del) {
    tw.textContent = ph.slice(0, ci); ci++;
    if (ci > ph.length) { del = true; setTimeout(loop, 2000); return; }
    setTimeout(loop, 52);
  } else {
    tw.textContent = ph.slice(0, ci); ci--;
    if (ci < 0) { del = false; pi = (pi + 1) % twPhrases[currentLang].length; setTimeout(loop, 380); return; }
    setTimeout(loop, 26);
  }
}
setTimeout(loop, 2500);

// BILINGUAL TRANSLATION SYSTEM
const translations = {
  es: {
    'nav-empresas': 'Empresas',
    'nav-plataformas': 'Plataformas',
    'nav-contacto': 'Contacto',
    'nav-cta': 'Consulta Estratégica',
    'eyebrow': 'Chile · LATAM · Desde 2009',
    'hero-line': '<strong>Holding Legal</strong> — Propiedad Intelectual · Datos · Compliance · LegalTech',
    'btn-primary': 'Explorar el Holding',
    'btn-ghost': 'Consulta Estratégica',
    'sec1-eyebrow': 'Ecosistema Legal',
    'sec1-title': 'Las Empresas del <span>Holding</span>',
    'sec1-desc': 'Seis verticales que cubren el ciclo legal completo de empresas, marcas, datos y personas en Chile y el mundo.',
    'sec2-eyebrow': 'LegalTech',
    'sec2-title': 'Plataformas del <span>Futuro Legal</span>',
    'sec2-desc': 'Cuatro aplicaciones SaaS construidas para optimizar el tiempo del abogado y elevar la practica legal al siglo XXI.',
    'footer-meta': 'Holding Legal · Chile & LATAM · Desde 2009 · quantumlex.cl',
    'footer-copy': '© 2026 QuantumLex Holding · Todos los derechos reservados',
    'c1-type': 'Estudio Juridico', 'c1-name': '<span>MPD</span> Intelectual', 'c1-desc': 'Estudio lider en propiedad intelectual, marcas, patentes y asesoria corporativa. Presencia en mas de 50 paises desde 2009.', 'c1-link': 'mpd-intelectual.cl',
    'c2-type': 'Propiedad Industrial', 'c2-name': '<span>Observaciones</span> INAPI', 'c2-desc': 'Respuesta especializada a observaciones de marca ante INAPI en 48 horas. Observaciones de fondo, forma y apelaciones ante el TDPI.', 'c2-link': 'observacionesinapi.cl',
    'c3-type': 'Derechos Personales', 'c3-name': '<span>Reclama</span>Datos', 'c3-desc': 'Representacion ante la Agencia de Proteccion de Datos. Defensa de derechos ARCOP bajo la Ley 21.719. Plazo de 30 dias habiles para actuar.', 'c3-link': 'reclamadatos.cl',
    'c4-type': 'Portal Ciudadano', 'c4-name': '<span>Agencia</span>Datos', 'c4-desc': 'Portal de referencia sobre la Ley 21.719 en Chile. Derechos de personas y obligaciones de empresas. Vigente desde diciembre 2026.', 'c4-link': 'agenciadatos.cl',
    'c5-type': 'Marcas Internacional', 'c5-name': '<span>Trademark</span> In Chile', 'c5-desc': 'Registro de marcas en Chile para clientes de todo el mundo. 100% online, sin notario ni apostilla. Abogados certificados INAPI. Honorario de éxito solo al registrar.', 'c5-link': 'trademarkinchile.com',
    'c6-type': 'Vigilancia IP', 'c6-name': '<span>Sentinel</span> Alloy', 'c6-desc': 'Plataforma de monitoreo continuo de marcas. Alertas ante infracciones y usos no autorizados en Chile y mercados internacionales.', 'c6-link': 'Ver plataforma',
    'a1-tag': 'SaaS · Causas', 'a1-name': 'VistaLegal', 'a1-tagline': 'Portal Cliente · Gestion de Causas', 'a1-desc': 'Plataforma digital que conecta estudios juridicos con sus clientes. Dashboard personalizado, seguimiento de causas en tiempo real y comunicacion centralizada.',
    'a2-tag': 'SaaS · Contratos', 'a2-name': 'VistoBueno', 'a2-tagline': 'Ciclo de Vida Contractual', 'a2-desc': 'Control del ciclo completo de contratos corporativos. Desde la creacion hasta la firma, con checklist de 18 clausulas y arquitectura multitenant.',
    'a3-tag': 'IA · Agente Legal', 'a3-name': 'LAOS', 'a3-tagline': 'Legal Assistant Operating System', 'a3-desc': 'Sistema operativo legal con IA. Automatiza emails, genera documentos y gestiona plazos en el estilo propio del abogado. Powered by Claude AI.',
    'a4-tag': 'Monitor · IP', 'a4-name': 'Sentinel Alloy', 'a4-tagline': 'Vigilancia de Propiedad Intelectual', 'a4-desc': 'Monitoreo continuo de marcas con alertas ante infracciones en Chile y mercados internacionales. Proteccion proactiva del activo intangible.',
  },
  en: {
    'nav-empresas': 'Companies',
    'nav-plataformas': 'Platforms',
    'nav-contacto': 'Contact',
    'nav-cta': 'Strategic Inquiry',
    'eyebrow': 'Chile · LATAM · Since 2009',
    'hero-line': '<strong>Legal Holding</strong> — Intellectual Property · Data · Compliance · LegalTech',
    'btn-primary': 'Explore the Holding',
    'btn-ghost': 'Strategic Inquiry',
    'sec1-eyebrow': 'Legal Ecosystem',
    'sec1-title': 'The <span>Holding</span> Companies',
    'sec1-desc': 'Six specialized verticals covering the complete legal cycle for companies, brands, data and people in Chile and worldwide.',
    'sec2-eyebrow': 'LegalTech',
    'sec2-title': 'Platforms of the <span>Legal Future</span>',
    'sec2-desc': 'Four SaaS applications built to optimize the lawyer\'s time and elevate legal practice into the 21st century.',
    'footer-meta': 'Legal Holding · Chile & LATAM · Since 2009 · quantumlex.cl',
    'footer-copy': '© 2026 QuantumLex Holding · All rights reserved',
    'c1-type': 'Law Firm', 'c1-name': '<span>MPD</span> Intellectual', 'c1-desc': 'Leading firm in intellectual property, trademarks, patents and corporate advisory. Active in over 50 countries since 2009.', 'c1-link': 'mpd-intelectual.cl',
    'c2-type': 'Industrial Property', 'c2-name': '<span>INAPI</span> Observations', 'c2-desc': 'Specialized response to trademark office actions before INAPI within 48 hours. Substantive, formal objections and appeals before the TDPI.', 'c2-link': 'observacionesinapi.cl',
    'c3-type': 'Personal Rights', 'c3-name': '<span>Reclama</span>Datos', 'c3-desc': 'Representation before the Personal Data Protection Agency. Defense of ARCOP rights under Law 21.719. 30 business days to act.', 'c3-link': 'reclamadatos.cl',
    'c4-type': 'Citizen Portal', 'c4-name': '<span>Agencia</span>Datos', 'c4-desc': 'Reference portal on Law 21.719 in Chile. Individual rights and corporate obligations. In force from December 2026.', 'c4-link': 'agenciadatos.cl',
    'c5-type': 'International Trademark', 'c5-name': '<span>Trademark</span> In Chile', 'c5-desc': 'Trademark registration in Chile for clients worldwide. 100% online, no notary or apostille required. INAPI-certified attorneys. Success fee only paid upon official registration.', 'c5-link': 'trademarkinchile.com',
    'c6-type': 'IP Surveillance', 'c6-name': '<span>Sentinel</span> Alloy', 'c6-desc': 'Continuous trademark monitoring platform. Alerts for infringements and unauthorized use in Chile and international markets.', 'c6-link': 'View platform',
    'a1-tag': 'SaaS · Cases', 'a1-name': 'VistaLegal', 'a1-tagline': 'Client Portal · Case Management', 'a1-desc': 'Digital platform connecting law firms with their clients. Personalized dashboard, real-time case tracking and centralized communication.',
    'a2-tag': 'SaaS · Contracts', 'a2-name': 'VistoBueno', 'a2-tagline': 'Contract Lifecycle Management', 'a2-desc': 'Full control of corporate contract lifecycle. From creation to signature, with an 18-clause checklist and multitenant architecture.',
    'a3-tag': 'AI · Legal Agent', 'a3-name': 'LAOS', 'a3-tagline': 'Legal Assistant Operating System', 'a3-desc': 'AI-powered legal operating system. Automates emails, generates documents and manages deadlines in the lawyer\'s own style. Powered by Claude AI.',
    'a4-tag': 'Monitor · IP', 'a4-name': 'Sentinel Alloy', 'a4-tagline': 'Intellectual Property Surveillance', 'a4-desc': 'Continuous trademark monitoring with infringement alerts across Chile and international markets. Proactive protection of intangible assets.',
  }
};

const domMap = [
  { sel: '.eyebrow',                    key: 'eyebrow',          html: false },
  { sel: '.hero-line',                  key: 'hero-line',        html: true  },
  { sel: '.btn-primary',               key: 'btn-primary',      html: false },
  { sel: '.btn-ghost',                 key: 'btn-ghost',        html: false },
  { sel: '.nav-cta',                   key: 'nav-cta',          html: false },
  { sel: '#sec1-eyebrow',              key: 'sec1-eyebrow',     html: false },
  { sel: '#sec1-title',                key: 'sec1-title',       html: true  },
  { sel: '#sec1-desc',                 key: 'sec1-desc',        html: false },
  { sel: '#sec2-eyebrow',              key: 'sec2-eyebrow',     html: false },
  { sel: '#sec2-title',                key: 'sec2-title',       html: true  },
  { sel: '#sec2-desc',                 key: 'sec2-desc',        html: false },
  { sel: '#footer-copy',               key: 'footer-copy',      html: false },
  { sel: '[data-navkey="empresas"]',   key: 'nav-empresas',     html: false },
  { sel: '[data-navkey="plataformas"]',key: 'nav-plataformas',  html: false },
  { sel: '[data-navkey="contacto"]',   key: 'nav-contacto',     html: false },
  { sel: '#c1-type', key: 'c1-type', html: false }, { sel: '#c1-name', key: 'c1-name', html: true  }, { sel: '#c1-desc', key: 'c1-desc', html: false }, { sel: '#c1-link', key: 'c1-link', html: false },
  { sel: '#c2-type', key: 'c2-type', html: false }, { sel: '#c2-name', key: 'c2-name', html: true  }, { sel: '#c2-desc', key: 'c2-desc', html: false }, { sel: '#c2-link', key: 'c2-link', html: false },
  { sel: '#c3-type', key: 'c3-type', html: false }, { sel: '#c3-name', key: 'c3-name', html: true  }, { sel: '#c3-desc', key: 'c3-desc', html: false }, { sel: '#c3-link', key: 'c3-link', html: false },
  { sel: '#c4-type', key: 'c4-type', html: false }, { sel: '#c4-name', key: 'c4-name', html: true  }, { sel: '#c4-desc', key: 'c4-desc', html: false }, { sel: '#c4-link', key: 'c4-link', html: false },
  { sel: '#c5-type', key: 'c5-type', html: false }, { sel: '#c5-name', key: 'c5-name', html: true  }, { sel: '#c5-desc', key: 'c5-desc', html: false }, { sel: '#c5-link', key: 'c5-link', html: false },
  { sel: '#c6-type', key: 'c6-type', html: false }, { sel: '#c6-name', key: 'c6-name', html: true  }, { sel: '#c6-desc', key: 'c6-desc', html: false }, { sel: '#c6-link', key: 'c6-link', html: false },
  { sel: '#a1-tag', key: 'a1-tag', html: false }, { sel: '#a1-name', key: 'a1-name', html: false }, { sel: '#a1-tagline', key: 'a1-tagline', html: false }, { sel: '#a1-desc', key: 'a1-desc', html: false },
  { sel: '#a2-tag', key: 'a2-tag', html: false }, { sel: '#a2-name', key: 'a2-name', html: false }, { sel: '#a2-tagline', key: 'a2-tagline', html: false }, { sel: '#a2-desc', key: 'a2-desc', html: false },
  { sel: '#a3-tag', key: 'a3-tag', html: false }, { sel: '#a3-name', key: 'a3-name', html: false }, { sel: '#a3-tagline', key: 'a3-tagline', html: false }, { sel: '#a3-desc', key: 'a3-desc', html: false },
  { sel: '#a4-tag', key: 'a4-tag', html: false }, { sel: '#a4-name', key: 'a4-name', html: false }, { sel: '#a4-tagline', key: 'a4-tagline', html: false }, { sel: '#a4-desc', key: 'a4-desc', html: false },
];

function applyLang(lang) {
  const t = translations[lang];
  domMap.forEach(({ sel, key, html }) => {
    const el = document.querySelector(sel);
    if (!el || !t[key]) return;
    if (html) el.innerHTML = t[key];
    else el.textContent = t[key];
  });
  document.getElementById('html-root').lang = lang;
  pi = 0; ci = 0; del = false;
}

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  document.getElementById('langBtn').textContent = currentLang === 'es' ? 'EN' : 'ES';
  applyLang(currentLang);
}

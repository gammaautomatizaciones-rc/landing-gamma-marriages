// GAMMA Marriages — i18n EN/ES + reveal on scroll + form via Worker (Resend)
const FORM_URL = 'https://gamma-marriages-form.gammasg.workers.dev/';
const WA_NUMBER = '5493855134762';

const I18N = {
  en: {
    'meta.title': 'GAMMA Marriages — Get Legally Married Online, From Anywhere',
    'meta.desc': 'We guide couples separated by borders through a 100% legal online marriage under Utah (USA) law. Ceremony by video call, official certificate, Hague Apostille. USD 1,000 flat.',
    'nav.how': 'How it works', 'nav.included': "What's included", 'nav.price': 'Pricing', 'nav.faq': 'FAQ', 'nav.cta': 'Talk to us',
    'hero.eyebrow': 'International marriage agency',
    'hero.h1a': 'Married.', 'hero.h1b': 'Legally.', 'hero.h1c': 'From two different countries.',
    'hero.sub': 'We guide couples separated by borders through a 100% legal online marriage under Utah (USA) law — real ceremony by video call, official certificate, Hague Apostille included. No flights, no embassies, no guesswork.',
    'hero.cta1': 'Start on WhatsApp', 'hero.cta2': 'See how it works',
    'hero.price': 'USD 1,000 flat — guided from first question to certificate in hand.',
    'trust.1': '100% legal — Utah Code 30-1-6', 'trust.2': 'Hague Apostille managed', 'trust.3': 'Fully remote — no travel', 'trust.4': 'IDs from 200+ countries accepted',
    'story.label': 'Our story',
    'story.h2': "We're not consultants. We got married this way.",
    'story.p': 'GAMMA Marriages was born from our own wedding: he was in Argentina, she was in Indonesia, and in April 2026 they were legally married by a licensed Utah officiant — over a video call, from two continents. Certificate, apostille, translations: we hit every obstacle ourselves, so you can skip all of them.',
    'story.card1': 'Married April 2026 · Utah County, USA', 'story.card2': '15,000 km apart. One certificate.',
    'how.h2': 'How it works',
    'how.s1.t': 'Tell us your case', 'how.s1.p': 'A free assessment: we check both IDs, countries and situation, and confirm you can marry this way — before you pay anything.',
    'how.s2.t': 'We prepare everything', 'how.s2.p': 'Marriage license application, documents, witnesses, scheduling — we handle the paperwork with you, step by step, even the weird edge cases.',
    'how.s3.t': 'Your ceremony, by video call', 'how.s3.p': 'A licensed Utah officiant marries you live on a video call. You can each join from a different country — a phone is enough.',
    'how.s4.t': 'Certificate + apostille', 'how.s4.p': 'You receive the official marriage certificate, apostilled under the Hague Convention and shipped to your door — plus a clear guide for the next steps in your countries.',
    'inc.h2': 'One fee. Everything handled.',
    'inc.1': 'Eligibility review of both partners', 'inc.2': 'Utah marriage license application, done with you',
    'inc.3': 'Non-standard names and tricky documents handled', 'inc.4': 'Ceremony scheduling across time zones',
    'inc.5': 'Witness coordination — we tell you exactly what they do', 'inc.6': 'Hague Apostille management',
    'inc.7': 'International shipping of your certificate', 'inc.8': 'WhatsApp support through the whole process',
    'price.label': 'Pricing', 'price.sub': 'One flat fee for the full guided service.',
    'price.note': 'Government, platform and shipping fees are paid separately to third parties (approx. USD 500 total). We tell you every number upfront — no surprises.',
    'price.cta': 'Check if we can marry you',
    'faq.h2': 'Questions couples always ask',
    'faq.q1': 'Is this actually legal?',
    'faq.a1': 'Yes. Utah (USA) has allowed fully remote marriages by video call since 2020, under Utah Code 30-1-6. Your certificate is a real US marriage certificate — the same one an American couple gets.',
    'faq.q2': 'Do we have to travel or visit an embassy?',
    'faq.a2': 'No. The entire process is remote: application, ceremony and paperwork. The only thing that travels is your certificate, by courier.',
    'faq.q3': 'Can we be in two different countries during the ceremony?',
    'faq.a3': 'Yes — that is exactly how we did ours. Each of you joins the video call from wherever you are, with two witnesses connected online.',
    'faq.q4': 'Will our marriage be recognized in our countries?',
    'faq.a4': 'Your certificate is an official, apostilled US marriage document. Most countries recognize marriages that are valid where they were celebrated; the local registration step varies by country, and we guide you through what applies to yours.',
    'faq.q5': 'How long does it take?',
    'faq.a5': 'Typically 1-2 weeks from starting the paperwork to your digital certificate. The physical apostilled copy arrives by courier a few weeks later.',
    'contact.h2': 'Tell us about you two', 'contact.p': 'We answer within 24 hours, in English or Spanish.',
    'contact.wa.t': 'Chat with us on WhatsApp', 'contact.wa.p': "The fastest way — tell us your countries and we'll assess your case for free.", 'contact.wa.btn': 'Open WhatsApp',
    'f.name': 'Your name', 'f.email': 'Email', 'f.c1': 'Your country', 'f.c2': "Your partner's country",
    'f.msg': 'Anything we should know? (optional)', 'f.send': 'Send', 'f.sending': 'Sending...',
    'f.ok': "Got it — we'll write you within 24 h.", 'f.err': 'Something failed. Write us on WhatsApp instead.',
    'footer.by': 'An agency by GAMMA AUTOMATIZACIONES',
    'footer.disc': 'GAMMA Marriages is a guidance and concierge service, not a law firm. Marriages are performed by licensed Utah officiants; certificates and apostilles are issued by US government offices.',
    'wa.text': "Hi! We want to get married online (we're in different countries). Can you assess our case?",
  },
  es: {
    'meta.title': 'GAMMA Marriages — Cásense legalmente online, desde cualquier país',
    'meta.desc': 'Guiamos a parejas separadas por fronteras en un casamiento online 100% legal bajo la ley de Utah (EE.UU.). Ceremonia por videollamada, certificado oficial, Apostilla de La Haya. USD 1.000 único.',
    'nav.how': 'Cómo funciona', 'nav.included': 'Qué incluye', 'nav.price': 'Precio', 'nav.faq': 'Preguntas', 'nav.cta': 'Escribinos',
    'hero.eyebrow': 'Agencia de matrimonios internacionales',
    'hero.h1a': 'Casados.', 'hero.h1b': 'Legalmente.', 'hero.h1c': 'Desde dos países distintos.',
    'hero.sub': 'Guiamos a parejas separadas por fronteras en un casamiento online 100% legal bajo la ley de Utah (EE.UU.) — ceremonia real por videollamada, certificado oficial y Apostilla de La Haya incluida. Sin vuelos, sin embajadas, sin adivinar trámites.',
    'hero.cta1': 'Empezar por WhatsApp', 'hero.cta2': 'Ver cómo funciona',
    'hero.price': 'USD 1.000 único — te guiamos desde la primera duda hasta el certificado en mano.',
    'trust.1': '100% legal — Utah Code 30-1-6', 'trust.2': 'Apostilla de La Haya gestionada', 'trust.3': 'Todo remoto — sin viajar', 'trust.4': 'Aceptan documentos de 200+ países',
    'story.label': 'Nuestra historia',
    'story.h2': 'No somos consultores. Nosotros nos casamos así.',
    'story.p': 'GAMMA Marriages nace de nuestro propio casamiento: él en Argentina, ella en Indonesia, y en abril de 2026 quedaron legalmente casados por un oficiante habilitado de Utah — por videollamada, desde dos continentes. Certificado, apostilla, traducciones: chocamos con cada obstáculo nosotros, para que ustedes se los salteen todos.',
    'story.card1': 'Casados en abril 2026 · Condado de Utah, EE.UU.', 'story.card2': '15.000 km de distancia. Un solo certificado.',
    'how.h2': 'Cómo funciona',
    'how.s1.t': 'Contanos su caso', 'how.s1.p': 'Evaluación gratis: revisamos documentos, países y situación, y confirmamos que pueden casarse así — antes de pagar nada.',
    'how.s2.t': 'Preparamos todo', 'how.s2.p': 'Solicitud de licencia, documentos, testigos, fechas — hacemos el papeleo con ustedes paso a paso, incluso los casos raros.',
    'how.s3.t': 'La ceremonia, por videollamada', 'how.s3.p': 'Un oficiante habilitado de Utah los casa en vivo por videollamada. Cada uno puede estar en un país distinto — con el celular alcanza.',
    'how.s4.t': 'Certificado + apostilla', 'how.s4.p': 'Reciben el certificado oficial de matrimonio, apostillado según el Convenio de La Haya y enviado a su puerta — más una guía clara de los próximos pasos en sus países.',
    'inc.h2': 'Un solo pago. Todo resuelto.',
    'inc.1': 'Revisión de elegibilidad de los dos', 'inc.2': 'Solicitud de licencia de Utah, hecha con ustedes',
    'inc.3': 'Nombres no estándar y documentos difíciles, resueltos', 'inc.4': 'Coordinación de la ceremonia entre husos horarios',
    'inc.5': 'Coordinación de testigos — te decimos exactamente qué hacen', 'inc.6': 'Gestión de la Apostilla de La Haya',
    'inc.7': 'Envío internacional del certificado', 'inc.8': 'Acompañamiento por WhatsApp durante todo el proceso',
    'price.label': 'Precio', 'price.sub': 'Un único pago por el servicio completo guiado.',
    'price.note': 'Las tasas de gobierno, plataforma y envío se pagan aparte a terceros (aprox. USD 500 en total). Te decimos cada número antes de empezar — sin sorpresas.',
    'price.cta': 'Averiguá si podemos casarlos',
    'faq.h2': 'Las preguntas que todas las parejas hacen',
    'faq.q1': '¿Es realmente legal?',
    'faq.a1': 'Sí. Utah (EE.UU.) permite matrimonios totalmente remotos por videollamada desde 2020, bajo el Utah Code 30-1-6. El certificado es un certificado de matrimonio estadounidense real — el mismo que recibe una pareja americana.',
    'faq.q2': '¿Hay que viajar o ir a una embajada?',
    'faq.a2': 'No. Todo el proceso es remoto: solicitud, ceremonia y papeleo. Lo único que viaja es el certificado, por courier.',
    'faq.q3': '¿Podemos estar en dos países distintos durante la ceremonia?',
    'faq.a3': 'Sí — exactamente así hicimos el nuestro. Cada uno entra a la videollamada desde donde esté, con dos testigos conectados online.',
    'faq.q4': '¿Nuestro matrimonio va a ser reconocido en nuestros países?',
    'faq.a4': 'El certificado es un documento de matrimonio estadounidense oficial y apostillado. La mayoría de los países reconocen los matrimonios válidos donde se celebraron; el paso de registro local varía según el país, y los guiamos en el que les corresponda.',
    'faq.q5': '¿Cuánto tarda?',
    'faq.a5': 'Normalmente 1-2 semanas desde el inicio del papeleo hasta el certificado digital. La copia física apostillada llega por courier unas semanas después.',
    'contact.h2': 'Cuéntennos de ustedes dos', 'contact.p': 'Respondemos en menos de 24 horas, en inglés o español.',
    'contact.wa.t': 'Hablá con nosotros por WhatsApp', 'contact.wa.p': 'Lo más rápido — decinos sus países y evaluamos su caso gratis.', 'contact.wa.btn': 'Abrir WhatsApp',
    'f.name': 'Tu nombre', 'f.email': 'Email', 'f.c1': 'Tu país', 'f.c2': 'El país de tu pareja',
    'f.msg': '¿Algo que debamos saber? (opcional)', 'f.send': 'Enviar', 'f.sending': 'Enviando...',
    'f.ok': 'Recibido — te escribimos en menos de 24 h.', 'f.err': 'Algo falló. Escribinos por WhatsApp.',
    'footer.by': 'Una agencia de GAMMA AUTOMATIZACIONES',
    'footer.disc': 'GAMMA Marriages es un servicio de guía y gestión, no un estudio jurídico. Los casamientos los celebran oficiantes habilitados de Utah; los certificados y apostillas los emiten oficinas de gobierno de EE.UU.',
    'wa.text': '¡Hola! Queremos casarnos online (estamos en países distintos). ¿Pueden evaluar nuestro caso?',
  },
  id: {
    'meta.title': 'GAMMA Marriages — Menikah Resmi Secara Online, dari Mana Saja',
    'meta.desc': 'Kami memandu pasangan yang terpisah jarak untuk menikah online 100% legal berdasarkan hukum Utah (AS). Upacara lewat video call, akta resmi, Apostille Den Haag. Biaya tetap USD 1.000.',
    'nav.how': 'Cara kerjanya', 'nav.included': 'Yang termasuk', 'nav.price': 'Harga', 'nav.faq': 'Tanya jawab', 'nav.cta': 'Hubungi kami',
    'hero.eyebrow': 'Agen pernikahan internasional',
    'hero.h1a': 'Menikah.', 'hero.h1b': 'Resmi.', 'hero.h1c': 'Dari dua negara berbeda.',
    'hero.sub': 'Kami memandu pasangan yang terpisah jarak melalui pernikahan online 100% legal berdasarkan hukum Utah (AS) — upacara nyata lewat video call, akta pernikahan resmi, termasuk Apostille Den Haag. Tanpa penerbangan, tanpa kedutaan, tanpa bingung mengurus dokumen.',
    'hero.cta1': 'Mulai lewat WhatsApp', 'hero.cta2': 'Lihat cara kerjanya',
    'hero.price': 'USD 1.000 biaya tetap — dipandu dari pertanyaan pertama sampai akta di tangan.',
    'trust.1': '100% legal — Utah Code 30-1-6', 'trust.2': 'Apostille Den Haag diurus', 'trust.3': 'Sepenuhnya online — tanpa bepergian', 'trust.4': 'Menerima dokumen dari 200+ negara',
    'story.label': 'Kisah kami',
    'story.h2': 'Kami bukan konsultan. Kami menikah dengan cara ini.',
    'story.p': 'GAMMA Marriages lahir dari pernikahan kami sendiri: sang suami di Argentina, sang istri di Indonesia — dan pada April 2026 mereka resmi dinikahkan oleh penghulu berlisensi Utah, lewat video call, dari dua benua. Akta, apostille, terjemahan: kami sudah melewati semua rintangannya, supaya kalian tidak perlu.',
    'story.card1': 'Menikah April 2026 · Utah County, AS', 'story.card2': 'Terpisah 15.000 km. Satu akta pernikahan.',
    'how.h2': 'Cara kerjanya',
    'how.s1.t': 'Ceritakan kasus kalian', 'how.s1.p': 'Penilaian gratis: kami periksa identitas, negara, dan situasi kalian, lalu memastikan kalian bisa menikah dengan cara ini — sebelum membayar apa pun.',
    'how.s2.t': 'Kami siapkan semuanya', 'how.s2.p': 'Pengajuan surat izin nikah, dokumen, saksi, jadwal — kami urus semua berkas bersama kalian, langkah demi langkah, termasuk kasus yang rumit.',
    'how.s3.t': 'Upacara kalian, lewat video call', 'how.s3.p': 'Penghulu berlisensi Utah menikahkan kalian secara langsung lewat video call. Kalian boleh berada di negara berbeda — cukup pakai HP.',
    'how.s4.t': 'Akta + apostille', 'how.s4.p': 'Kalian menerima akta pernikahan resmi, dengan Apostille sesuai Konvensi Den Haag, dikirim sampai ke rumah — plus panduan jelas untuk langkah selanjutnya di negara masing-masing.',
    'inc.h2': 'Satu biaya. Semua diurus.',
    'inc.1': 'Pemeriksaan kelayakan kedua pasangan', 'inc.2': 'Pengajuan surat izin nikah Utah, bersama kalian',
    'inc.3': 'Nama tidak standar dan dokumen rumit? Kami tangani', 'inc.4': 'Penjadwalan upacara lintas zona waktu',
    'inc.5': 'Koordinasi saksi — kami jelaskan persis tugas mereka', 'inc.6': 'Pengurusan Apostille Den Haag',
    'inc.7': 'Pengiriman internasional akta kalian', 'inc.8': 'Pendampingan via WhatsApp sepanjang proses',
    'price.label': 'Harga', 'price.sub': 'Satu biaya tetap untuk seluruh layanan terpandu.',
    'price.note': 'Biaya pemerintah, platform, dan pengiriman dibayar terpisah ke pihak ketiga (total sekitar USD 500). Semua angka kami beri tahu di awal — tanpa kejutan.',
    'price.cta': 'Cek apakah kalian bisa menikah',
    'faq.h2': 'Pertanyaan yang selalu ditanyakan pasangan',
    'faq.q1': 'Apakah ini benar-benar legal?',
    'faq.a1': 'Ya. Utah (AS) mengizinkan pernikahan sepenuhnya jarak jauh lewat video call sejak 2020, berdasarkan Utah Code 30-1-6. Akta kalian adalah akta pernikahan AS yang asli — sama dengan yang diterima pasangan Amerika.',
    'faq.q2': 'Apakah harus bepergian atau ke kedutaan?',
    'faq.a2': 'Tidak. Seluruh proses dilakukan online: pengajuan, upacara, dan berkas. Yang bepergian hanya akta kalian, lewat kurir.',
    'faq.q3': 'Bolehkah kami berada di dua negara berbeda saat upacara?',
    'faq.a3': 'Boleh — persis seperti itu pernikahan kami. Masing-masing bergabung ke video call dari mana pun berada, dengan dua saksi yang terhubung online.',
    'faq.q4': 'Apakah pernikahan kami diakui di negara kami?',
    'faq.a4': 'Akta kalian adalah dokumen pernikahan AS resmi yang sudah di-apostille. Sebagian besar negara mengakui pernikahan yang sah di tempat dilangsungkannya; langkah pencatatan lokal berbeda di tiap negara, dan kami memandu sesuai negara kalian.',
    'faq.q5': 'Berapa lama prosesnya?',
    'faq.a5': 'Biasanya 1-2 minggu dari mulai berkas sampai akta digital. Salinan fisik yang sudah di-apostille tiba lewat kurir beberapa minggu kemudian.',
    'contact.h2': 'Ceritakan tentang kalian berdua', 'contact.p': 'Kami balas dalam 24 jam (bahasa Inggris atau Spanyol).',
    'contact.wa.t': 'Chat kami di WhatsApp', 'contact.wa.p': 'Cara tercepat — sebutkan negara kalian dan kami nilai kasusnya gratis.', 'contact.wa.btn': 'Buka WhatsApp',
    'f.name': 'Nama kamu', 'f.email': 'Email', 'f.c1': 'Negara kamu', 'f.c2': 'Negara pasanganmu',
    'f.msg': 'Ada yang perlu kami tahu? (opsional)', 'f.send': 'Kirim', 'f.sending': 'Mengirim...',
    'f.ok': 'Diterima — kami hubungi dalam 24 jam.', 'f.err': 'Gagal terkirim. Chat kami lewat WhatsApp saja.',
    'footer.by': 'Agensi dari GAMMA AUTOMATIZACIONES',
    'footer.disc': 'GAMMA Marriages adalah layanan pendampingan dan pengurusan, bukan firma hukum. Pernikahan dilangsungkan oleh penghulu berlisensi Utah; akta dan apostille diterbitkan oleh kantor pemerintah AS.',
    'wa.text': 'Halo! Kami ingin menikah secara online (kami berada di negara berbeda). Bisakah kalian menilai kasus kami?',
  },
};

const LANGS = ['en', 'es', 'id'];
const NAV = navigator.language.toLowerCase();
let lang = localStorage.getItem('gm-lang');
if (!LANGS.includes(lang)) lang = NAV.startsWith('es') ? 'es' : NAV.startsWith('id') ? 'id' : 'en';

function applyLang(l) {
  lang = l;
  localStorage.setItem('gm-lang', l);
  const dict = I18N[l];
  document.documentElement.lang = l;
  document.title = dict['meta.title'];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-content]').forEach((el) => {
    const v = dict[el.dataset.i18nContent];
    if (v) el.setAttribute('content', v);
  });
  LANGS.forEach((code) => {
    const btn = document.getElementById(`lang-${code}`);
    if (btn) btn.classList.toggle('active', l === code);
  });
  document.querySelectorAll('.fab-menu button').forEach((b) => b.classList.toggle('active', b.dataset.lang === l));
  document.getElementById('fab-code').textContent = l.toUpperCase();
  const wa = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(dict['wa.text'])}`;
  document.querySelectorAll('.wa-link').forEach((a) => {
    a.setAttribute('href', wa);
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener');
  });
}
LANGS.forEach((code) => {
  const btn = document.getElementById(`lang-${code}`);
  if (btn) btn.addEventListener('click', () => applyLang(code));
});

// Botón flotante de idioma
const fab = document.getElementById('lang-fab');
const fabMenu = fab.querySelector('.fab-menu');
document.getElementById('fab-toggle').addEventListener('click', () => {
  fabMenu.hidden = !fabMenu.hidden;
});
fabMenu.querySelectorAll('button').forEach((b) =>
  b.addEventListener('click', () => { applyLang(b.dataset.lang); fabMenu.hidden = true; })
);
document.addEventListener('click', (ev) => {
  if (!fab.contains(ev.target)) fabMenu.hidden = true;
});
applyLang(lang);

// Reveal on scroll
const obs = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));

// Form -> Worker -> Resend
const form = document.getElementById('lead-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  const btn = form.querySelector('button[type=submit]');
  const data = Object.fromEntries(new FormData(form));
  if (!data.name || !data.email || !data.email.includes('@')) {
    status.className = 'err';
    status.textContent = I18N[lang]['f.err'];
    return;
  }
  btn.disabled = true;
  btn.textContent = I18N[lang]['f.sending'];
  status.textContent = '';
  try {
    const r = await fetch(FORM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!r.ok) throw new Error('bad status');
    status.className = 'ok';
    status.textContent = I18N[lang]['f.ok'];
    form.reset();
  } catch {
    status.className = 'err';
    status.textContent = I18N[lang]['f.err'];
  }
  btn.disabled = false;
  btn.textContent = I18N[lang]['f.send'];
});

/* =====================================================
   AYAS TOUR — script.js
   🔧 Чтобы изменить тексты — отредактируйте объект `translations` ниже
   ===================================================== */

// ─────────────────────────────────────────
// ПЕРЕВОДЫ
// Ключи соответствуют атрибутам data-key в HTML
// ─────────────────────────────────────────
const translations = {

  /* ── РУССКИЙ ── */
  ru: {
    // Навигация
    nav_tours:   "Туры",
    nav_why:     "Почему мы",
    nav_reviews: "Отзывы",
    nav_contact: "Контакты",
    nav_book:    "Забронировать",

    // Hero
    hero_badge:  "✦ Официальный туроператор",
    hero_title1: "Откройте",
    hero_title2: "Армению",
    hero_sub:    "Незабываемые путешествия по стране древних монастырей, величественных гор и живописных озёр",
    hero_cta:    "Смотреть туры",
    hero_cta2:   "Оставить заявку",
    stat1: "довольных клиентов",
    stat2: "маршрутов",
    stat3: "лет опыта",

    // Туры
    tours_tag:   "Наши маршруты",
    tours_title: "Популярные туры",
    tours_desc:  "Каждый тур — тщательно продуманный маршрут с профессиональным гидом",
    from: "от",
    book: "Забронировать",

    tour1_badge: "Хит сезона",
    tour1_days:  "3 дня",
    tour1_group: "2–12 чел.",
    tour1_name:  "Ереван — Сердце Армении",
    tour1_desc:  "Розовый город, Каскад, Матенадаран, Цицернакаберд и лучшие рестораны армянской кухни",

    tour2_badge: "Природа",
    tour2_days:  "2 дня",
    tour2_group: "2–15 чел.",
    tour2_name:  "Озеро Севан",
    tour2_desc:  "Бирюзовое высокогорное озеро, монастырь Севанаванк и свежайшая форель прямо с воды",

    tour3_badge: "Приключение",
    tour3_days:  "4 дня",
    tour3_group: "2–10 чел.",
    tour3_name:  "Татев и Юг Армении",
    tour3_desc:  "Крепость Смбатаберд, канатная дорога «Крылья Татева», монастырь и горные пейзажи Сюника",

    tour4_days:  "7 дней",
    tour4_group: "2–8 чел.",
    tour4_name:  "Grand Армения",
    tour4_desc:  "Полный тур: Ереван, Гегард, Хор Вирап, Нораванк, Татев, Дилижан и Севан",

    // Почему мы
    why_tag:   "Наши преимущества",
    why_title: "Почему выбирают нас",
    why1_t: "Местные эксперты",
    why1_d: "Наши гиды — коренные армяне, влюблённые в свою страну. Они знают каждый уголок Армении",
    why2_t: "Полная безопасность",
    why2_d: "Страховка, надёжный транспорт и постоянная связь — вы в надёжных руках",
    why3_t: "Лучшая цена",
    why3_d: "Работаем напрямую с отелями и партнёрами, без посредников",
    why4_t: "Индивидуальный подход",
    why4_d: "Составим тур под ваши пожелания, бюджет и даты. Группы и индивидуальные туры",
    why5_t: "Поддержка 24/7",
    why5_d: "На связи в любое время суток. Решим любой вопрос во время путешествия",
    why6_t: "Вкус Армении",
    why6_d: "Гастрономические остановки, дегустация коньяка, домашняя кухня — в каждом туре",

    // Отзывы
    rev_tag:   "Отзывы",
    rev_title: "Что говорят клиенты",
    rev1_text: "«Поездка в Армению с Ayas Tour стала лучшим путешествием в моей жизни. Гид Арам знал всё о каждом камне! Вернусь обязательно.»",
    rev1_city: "Москва, Россия",
    rev2_text: "«Татев и Севан превзошли все ожидания. Организация на высшем уровне — трансфер, отели, питание — всё включено и отлично.»",
    rev2_city: "Тбилиси, Грузия",
    rev3_text: "«Заказывали индивидуальный тур на 7 дней. Всё было идеально: маршрут, гостиницы, питание. Армения — это волшебство!»",
    rev3_city: "Ереван, Армения",

    // Форма
    form_tag:   "Бронирование",
    form_title: "Оставьте заявку",
    form_desc:  "Мы свяжемся с вами в течение 1 часа и подберём идеальный тур",
    perk1: "✓ Бесплатная консультация",
    perk2: "✓ Индивидуальный маршрут",
    perk3: "✓ Гарантия лучшей цены",
    f_name:   "Ваше имя",
    f_phone:  "Телефон",
    f_email:  "Email",
    f_msg:    "Сообщение (необязательно)",
    f_submit: "Отправить заявку →",
    form_ok:  "✓ Заявка принята! Мы свяжемся с вами в ближайшее время.",
    form_err: "Ошибка отправки. Пожалуйста, позвоните нам напрямую.",

    // Контакты
    contact_tag:    "Контакты",
    contact_title:  "Как нас найти",
    c_addr_label:   "Адрес",
    c_addr:         "ул. Абовяна 15, Ереван, Армения",
    c_phone_label:  "Телефон",
    c_hours_label:  "Часы работы",
    c_hours:        "Пн–Пт 9:00–19:00, Сб 10:00–16:00",

    // Footer
    footer_copy: "© 2025 Ayas Tour. Все права защищены.",
  },

  /* ── АРМЯНСКИЙ ── */
  hy: {
    // Навигация
    nav_tours:   "Տուրեր",
    nav_why:     "Ինչու մենք",
    nav_reviews: "Կարծիքներ",
    nav_contact: "Կապ",
    nav_book:    "Ամրագրել",

    // Hero
    hero_badge:  "✦ Պաշտոնական Տուրօպերատոր",
    hero_title1: "Բացահայտեք",
    hero_title2: "Հայաստանը",
    hero_sub:    "Անմոռանալի ճամփորդություններ դեպի հին վանքերի, վեհ լեռների ու գեղատեսիլ լճերի երկիր",
    hero_cta:    "Տեսնել Տուրերը",
    hero_cta2:   "Թողնել Հայտ",
    stat1: "գոհ հաճախորդ",
    stat2: "երթուղի",
    stat3: "տարվա փորձ",

    // Туры
    tours_tag:   "Մեր Երթուղիները",
    tours_title: "Հայտնի Տուրեր",
    tours_desc:  "Յուրաքանչյուր տուր՝ մանրամասնորեն մտածված երթուղի մասնագիտական ուղեկցորդի հետ",
    from: "սկսած",
    book: "Ամրագրել",

    tour1_badge: "Սեզոնի Հիթ",
    tour1_days:  "3 օր",
    tour1_group: "2–12 հոգի",
    tour1_name:  "Երևան — Հայաստանի Սիրտը",
    tour1_desc:  "Վարդագույն քաղաք, Կասկադ, Մատենադարան, Ծիծեռնակաբերդ և հայկական խոհանոցի լավագույն ռեստորաններ",

    tour2_badge: "Բնություն",
    tour2_days:  "2 օր",
    tour2_group: "2–15 հոգի",
    tour2_name:  "Սևանա Լիճ",
    tour2_desc:  "Բիրյուզագույն բարձրլեռնային լիճ, Սևանավանք վանք և ամենաթարմ իշխան ձուկ",

    tour3_badge: "Արկածախնդրություն",
    tour3_days:  "4 օր",
    tour3_group: "2–10 հոգի",
    tour3_name:  "Տաթև և Հայաստանի Հարավ",
    tour3_desc:  "Սմբատաբերդ բերդ, «Տաթևի Թևերը» ճոպանուղի, Տաթևի վանք և Սյունիքի լեռնային բնանկարներ",

    tour4_days:  "7 օր",
    tour4_group: "2–8 հոգի",
    tour4_name:  "Grand Հայաստան",
    tour4_desc:  "Ամբողջական տուր. Երևան, Գեղարդ, Խոր Վիրապ, Նորավանք, Տաթև, Դիլիջան, Սևան",

    // Почему мы
    why_tag:   "Մեր Առավելությունները",
    why_title: "Ինչու Ընտրել Մեզ",
    why1_t: "Տեղական Փորձագետներ",
    why1_d: "Մեր ուղեկցորդները բնիկ հայեր են, որոնք սիրում են իրենց երկիրը և գիտեն յուրաքանչյուր անկյուն",
    why2_t: "Լիակատար Անվտանգություն",
    why2_d: "Ապահովագրություն, հուսալի տրանսպորտ և մշտական կապ — դուք լավ ձեռքերում եք",
    why3_t: "Լավագույն Գներ",
    why3_d: "Ուղղակի համագործակցություն հյուրանոցների հետ — առանց միջնորդների",
    why4_t: "Անհատական Մոտեցում",
    why4_d: "Կազմենք տուր ըստ ձեր ցանկությունների, բյուջեի և ամսաթվերի",
    why5_t: "24/7 Աջակցություն",
    why5_d: "Կապի մեջ ենք ցանկացած ժամանակ: Կլուծենք ցանկացած հարց ճամփորդության ժամանակ",
    why6_t: "Հայաստանի Համը",
    why6_d: "Գաստրոնոմիական կանգառներ, կոնյակի համտեսում, տնական խոհանոց — յուրաքանչյուր տուրում",

    // Отзывы
    rev_tag:   "Կարծիքներ",
    rev_title: "Ինչ Են Ասում Հաճախորդները",
    rev1_text: "«Ayas Tour-ի հետ Հայաստան կատարած ուղևորությունն իմ կյանքի լավագույն ճամփորդությունն էր: Ուղեկցորդ Արամը ամեն ինչ գիտեր:»",
    rev1_city: "Մոսկվա, Ռուսաստան",
    rev2_text: "«Տաթևը և Սևանը գերազանցեցին բոլոր ակնկալիքները: Կազմակերպությունը բարձրագույն մակարդակի էր:»",
    rev2_city: "Թբիլիսի, Վրաստան",
    rev3_text: "«Պատվիրեցինք անհատական 7-օրյա տուր: Ամեն ինչ կատարյալ էր: Հայաստանը հեքիաթ է:»",
    rev3_city: "Երևան, Հայաստան",

    // Форма
    form_tag:   "Ամրագրում",
    form_title: "Թողեք Հայտ",
    form_desc:  "Մենք կկապվենք ձեզ հետ 1 ժամվա ընթացքում և կընտրենք կատարյալ տուրը",
    perk1: "✓ Անվճար Խորհրդատվություն",
    perk2: "✓ Անհատական Երթուղի",
    perk3: "✓ Լավագույն Գնի Երաշխիք",
    f_name:   "Ձեր Անուն",
    f_phone:  "Հեռախոս",
    f_email:  "Էլ. Փոստ",
    f_msg:    "Հաղորդագրություն (ոչ պարտադիր)",
    f_submit: "Ուղարկել Հայտ →",
    form_ok:  "✓ Հայտն ընդունվեց: Շուտով կկապվենք ձեզ հետ:",
    form_err: "Ուղարկման սխալ: Խնդրում ենք զանգահարել մեզ:",

    // Контакты
    contact_tag:    "Կապ",
    contact_title:  "Ինչպես Գտնել Մեզ",
    c_addr_label:   "Հասցե",
    c_addr:         "Աբովյան 15, Երևան, Հայաստան",
    c_phone_label:  "Հեռախոս",
    c_hours_label:  "Աշխատանքային Ժամեր",
    c_hours:        "Երկ–Ուրբ 9:00–19:00, Շաբ 10:00–16:00",

    // Footer
    footer_copy: "© 2025 Ayas Tour: Բոլոր Իրավունքները Պահպանված են:",
  },

  /* ── ENGLISH ── */
  en: {
    // Nav
    nav_tours:   "Tours",
    nav_why:     "Why Us",
    nav_reviews: "Reviews",
    nav_contact: "Contact",
    nav_book:    "Book Now",

    // Hero
    hero_badge:  "✦ Official Tour Operator",
    hero_title1: "Discover",
    hero_title2: "Armenia",
    hero_sub:    "Unforgettable journeys through a land of ancient monasteries, majestic mountains, and breathtaking lakes",
    hero_cta:    "Explore Tours",
    hero_cta2:   "Send Inquiry",
    stat1: "happy clients",
    stat2: "routes",
    stat3: "years experience",

    // Tours
    tours_tag:   "Our Routes",
    tours_title: "Popular Tours",
    tours_desc:  "Every tour is a carefully crafted itinerary with a professional guide",
    from: "from",
    book: "Book Now",

    tour1_badge: "Top Pick",
    tour1_days:  "3 days",
    tour1_group: "2–12 pax",
    tour1_name:  "Yerevan — Heart of Armenia",
    tour1_desc:  "The Pink City, Cascade, Matenadaran, Tsitsernakaberd and the best Armenian cuisine restaurants",

    tour2_badge: "Nature",
    tour2_days:  "2 days",
    tour2_group: "2–15 pax",
    tour2_name:  "Lake Sevan",
    tour2_desc:  "Turquoise alpine lake, Sevanavank Monastery and the freshest trout straight from the water",

    tour3_badge: "Adventure",
    tour3_days:  "4 days",
    tour3_group: "2–10 pax",
    tour3_name:  "Tatev & Southern Armenia",
    tour3_desc:  "Smbataberd fortress, Wings of Tatev ropeway, the monastery and mountain landscapes of Syunik",

    tour4_days:  "7 days",
    tour4_group: "2–8 pax",
    tour4_name:  "Grand Armenia",
    tour4_desc:  "Full tour: Yerevan, Geghard, Khor Virap, Noravank, Tatev, Dilijan and Sevan",

    // Why us
    why_tag:   "Our Advantages",
    why_title: "Why Choose Us",
    why1_t: "Local Experts",
    why1_d: "Our guides are native Armenians who love their country and know every corner of it",
    why2_t: "Full Safety",
    why2_d: "Insurance, reliable transport and constant communication — you're in good hands",
    why3_t: "Best Price",
    why3_d: "Direct partnerships with hotels — no middlemen, only great value",
    why4_t: "Personal Approach",
    why4_d: "We tailor tours to your wishes, budget and dates. Groups and private tours available",
    why5_t: "24/7 Support",
    why5_d: "Always available. We resolve any issue during your trip immediately",
    why6_t: "Taste of Armenia",
    why6_d: "Gastronomic stops, brandy tastings, home-cooked meals — part of every tour",

    // Reviews
    rev_tag:   "Reviews",
    rev_title: "What Clients Say",
    rev1_text: "\"The trip to Armenia with Ayas Tour was the best journey of my life. Guide Aram knew everything about every stone! Will definitely return.\"",
    rev1_city: "Moscow, Russia",
    rev2_text: "\"Tatev and Sevan exceeded all expectations. Top-level organisation — transfers, hotels, food — all included and excellent.\"",
    rev2_city: "Tbilisi, Georgia",
    rev3_text: "\"We ordered a private 7-day tour. Everything was perfect: the route, hotels, food. Armenia is pure magic!\"",
    rev3_city: "Yerevan, Armenia",

    // Form
    form_tag:   "Booking",
    form_title: "Send an Inquiry",
    form_desc:  "We'll contact you within 1 hour and find your perfect tour",
    perk1: "✓ Free Consultation",
    perk2: "✓ Personalised Itinerary",
    perk3: "✓ Best Price Guarantee",
    f_name:   "Your Name",
    f_phone:  "Phone",
    f_email:  "Email",
    f_msg:    "Message (optional)",
    f_submit: "Send Inquiry →",
    form_ok:  "✓ Inquiry received! We'll be in touch shortly.",
    form_err: "Sending failed. Please call us directly.",

    // Contact
    contact_tag:    "Contact",
    contact_title:  "Find Us",
    c_addr_label:   "Address",
    c_addr:         "15 Abovyan St, Yerevan, Armenia",
    c_phone_label:  "Phone",
    c_hours_label:  "Working Hours",
    c_hours:        "Mon–Fri 9:00–19:00, Sat 10:00–16:00",

    // Footer
    footer_copy: "© 2025 Ayas Tour. All rights reserved.",
  }
};

// ─────────────────────────────────────────
// CURRENT LANGUAGE (default: ru)
// ─────────────────────────────────────────
let currentLang = localStorage.getItem('ayasLang') || 'ru';

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;
  localStorage.setItem('ayasLang', lang);

  // Apply to all [data-key] elements
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update <html lang>
  document.documentElement.lang = lang;
}

// ─────────────────────────────────────────
// LANGUAGE SWITCHER
// ─────────────────────────────────────────
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyTranslations(lang);
  });
});

// ─────────────────────────────────────────
// STICKY HEADER
// ─────────────────────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ─────────────────────────────────────────
// MOBILE BURGER MENU
// ─────────────────────────────────────────
const burger = document.getElementById('burger');
const nav    = document.getElementById('nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
});

// Close nav on link click
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    nav.classList.remove('open');
  });
});

// ─────────────────────────────────────────
// SCROLL FADE-IN (IntersectionObserver)
// ─────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger children of grids
      const delay = (entry.target.closest('.tours-grid, .why-grid, .reviews-grid')
        ? [...entry.target.parentElement.children].indexOf(entry.target) * 100
        : 0);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ─────────────────────────────────────────
// CONTACT FORM — POST to /api/lead
// ─────────────────────────────────────────
const form       = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const t = translations[currentLang];

  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = '...';

  const body = {
    name:    form.name.value.trim(),
    phone:   form.phone.value.trim(),
    email:   form.email.value.trim(),
    message: form.message.value.trim(),
    lang:    currentLang,
  };

  try {
    const res = await fetch('/api/lead', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(body),
    });

    if (res.ok) {
      formStatus.textContent = t.form_ok;
      formStatus.className   = 'form-status success';
      form.reset();
    } else {
      throw new Error('Server error');
    }
  } catch {
    formStatus.textContent = t.form_err;
    formStatus.className   = 'form-status error';
  } finally {
    btn.disabled = false;
    applyTranslations(currentLang); // restore button text
    setTimeout(() => { formStatus.className = 'form-status'; }, 6000);
  }
});

// ─────────────────────────────────────────
// INIT
// ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);

  // Restore active lang button
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === currentLang);
  });
});

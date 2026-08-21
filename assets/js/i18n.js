(function () {
  const translations = {
    en: {
      "meta.title": "Wendy Shu ‧ Portfolio",
      "meta.description": "Wendy Shu (徐雅玟) software engineer portfolio — full-stack development, accessible web, and information security experience.",

      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.work": "Work",

      "hero.role": "Software Engineer",
      "hero.bio": "Currently a Software Engineer at CHANGING Information Technology INC., building document imaging management systems for banks and government agencies with Vue.js and C# / .NET Core, and leading accessible web development — helping Bank SinoPac's WebATM achieve AAA certification.",
      "hero.emailBtn": "Email Me",
      "hero.cvBtn": "Download CV",

      "about.title": "About",
      "about.text1": "Currently a Software Engineer at CHANGING Information Technology INC., developing and maintaining document imaging management systems for banks and government agencies using Vue.js and C# / .NET Core. Work spans front-end and back-end development, localization, accessibility, unit testing, and vulnerability scanning to ensure usability, compatibility, and information security. Led the accessibility development of WebATM, helping Bank SinoPac's WebATM achieve AAA accessibility certification.",
      "about.text2": "Full-stack development experience across front-end interfaces, back-end APIs, database design and integration, unit testing, and vulnerability scanning — covering the full cycle from development to verification. Skilled at identifying real needs from user feedback and daily work context, turning problems into practical solutions, and continuously refining existing features and workflows.",
      "about.dt.name": "Name",
      "about.dt.title": "Title",
      "about.dd.title": "Software Engineer",
      "about.dt.email": "Email",
      "about.dt.cv": "Resume",
      "about.dd.cv": "Download CV (PDF)",

      "skills.title": "Skills",
      "skills.visual": "Visual Design",
      "skills.frontend": "Frontend Development",
      "skills.backend": "Backend Development",
      "skills.other": "Others",
      "skills.tag.graphic": "Graphic Design",
      "skills.tag.edm": "EDM Design",
      "skills.tag.slicing": "Web Markup",
      "skills.tag.seo": "SEO Optimization",
      "skills.tag.a11y": "Accessible Web Development",
      "certs.title": "Certifications",

      "experience.title": "Experience",

      "exp.e1.date": "2024.07 – Present",
      "exp.e1.h3": "Software Engineer ‧ CHANGING Information Technology INC.",
      "exp.e1.p": "Maintain and develop front-end and back-end features of the company's document imaging management system, helping banks and government agencies digitize documents into a centralized, better-preserved system. Enforce access control through permission management so sensitive information is only accessible to authorized personnel, strengthening enterprise document security. Build and maintain the system with Vue.js and C# / .NET Core, covering localization, accessibility, unit testing, vulnerability scanning, and troubleshooting to ensure strong usability, compatibility, and information security.",
      "exp.e1.li1": "Led accessibility development for WebATM, helping <a href=\"https://webatm.sinopac.com/\">Bank SinoPac WebATM</a> achieve AAA certification.",
      "exp.e1.li2": "Contributed to 3 Document Imaging Management System (DIMS) and Document Viewer (DIWV) implementation projects, plus maintenance and upgrade projects for 12 banks and government agencies.",
      "exp.e1.li3": "Developed the e-form system (DIAS) and integrated it with DIMS template forms, further enhancing the Document Imaging Management System.",
      "exp.e1.li4": "Built encryption/decryption tools to improve project managers' efficiency.",

      "exp.e2.h3": "Frontend Engineer ‧ LIANG SHING ECLIFE CORP.",
      "exp.e2.p": "Responsible for internal web development, as well as maintenance and project development for brand-operated storefronts such as <a href=\"https://www.eclife.com.tw/\">EcLife</a> and <a href=\"https://myepson.epson.com.tw/\">Epson</a>. Developed Hoya 2.0, enabling service staff to resolve customer issues more promptly — used by 78 staff in its first week and has since resolved issues for hundreds of customers.",
      "exp.e2.li1": "Led front-end design for projects, working with UI/UX designers to build interfaces with HTML5 and SCSS on Bootstrap, then developed with Vue.js.",
      "exp.e2.li2": "Coordinated with the back-end team on required data and completed API integration using Postman for JSON data.",
      "exp.e2.li3": "Identified and fixed site issues with Google Search Console, improving SEO ranking from 63rd to 22nd.",
      "exp.e2.li4": "Analyzed retail sales strategy using Power BI and Google Search Console.",
      "exp.e2.li5": "Started as a web design intern designing newsletters and EDM templates, tracked results with GA UTM parameters, and was promoted to full-time after the internship.",

      "exp.e3.h3": "Finland ‧ Business Information Technology Program",
      "exp.e3.p": "The program combined trade and technology; in the Introduction to Mobile App Design and Development course, learned to build and develop websites.",
      "exp.e3.li1": "Designed a UI in Figma for a group project, earning recognition from instructors and Nokia judges.",
      "exp.e3.li2": "Built a movie app in Angular for an individual project, integrating The Movie Database (TMDb) API.",

      "exp.e4.h3": "AI ‧ Machine Learning Research",
      "exp.e4.li1": "Capstone project used OpenCV to train a model on a custom dataset for real-time face detection and recognition via camera.",
      "exp.e4.li2": "Trained a species classification model with Microsoft Azure AI, scoring 873 on the AI-900 exam.",

      "exp.e5.h3": "LINE FRESH 2021 Campus Competition",
      "exp.e5.p": "Used LINE tools such as LINE Points and LINE Shopping, combined with API integration and LINE Bot technology, to drive digital transformation.",
      "exp.e5.li1": "First hands-on experience with APIs — after learning how LINE Bot works, built simple automated replies (text and stickers) with the Messaging API.",
      "exp.e5.li2": "Served as team project lead and advanced to the semifinal round.",

      "work.title": "Projects",
      "work.hoya.p": "Static markup and API integration for internal digital tool dashboards (chat module, permission management, analytics), helping service staff resolve customer issues more quickly.",
      "work.hoya.tags": "Vue ‧ Static Site Development ‧ API Integration ‧ RWD",
      "work.movieapp.p": "Built with Angular during study abroad in Finland, integrating The Movie Database (TMDb) API for movie data.",
      "work.movieapp.tag": "Data Integration",
      "work.tetris.p": "Inspired by Tetris, designed a complete game flow — from name entry to gameplay to the scoreboard — entirely written in Java.",
      "work.tetris.tag1": "Database",
      "work.tetris.tag2": "Game Development",
      "work.viewLink": "View →",
      "work.eye.p": "Built using a laptop's webcam with OpenCV to help users correct their gaze direction without looking directly at the camera.",
      "work.eye.tags": "AI ‧ Machine Learning ‧ Face Recognition ‧ OpenCV ‧ TensorFlow",
      "work.paperLink": "View Paper →",
      "work.cooking.p": "Designed an online teaching platform with teammates during COVID-19, and self-studied UI design to present the system flow in Figma.",
      "work.cooking.tag": "System Flow Design",
      "work.edm.h3": "Brand EDM Design",
      "work.edm.p": "Monthly and seasonal campaign materials, one-page sites, and newsletters for partner brands (Epson, Linksys, etc.).",
      "work.edm.tags": "Graphic Design ‧ Markup ‧ RWD",
    },
  };

  const original = new Map();

  function capture() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      original.set(el, el.textContent);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      original.set(el, el.innerHTML);
    });
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === "en" ? "en" : "zh-Hant";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = lang === "en" ? translations.en[key] : null;
      el.textContent = value || original.get(el);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const value = lang === "en" ? translations.en[key] : null;
      el.innerHTML = value || original.get(el);
    });

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      if (!metaDesc.dataset.orig) metaDesc.dataset.orig = metaDesc.getAttribute("content");
      metaDesc.setAttribute(
        "content",
        lang === "en" ? translations.en["meta.description"] : metaDesc.dataset.orig
      );
    }

    const toggle = document.getElementById("lang-toggle");
    if (toggle) toggle.textContent = lang === "en" ? "中" : "EN";

    localStorage.setItem("lang", lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    capture();

    let saved = "zh";
    try {
      saved = localStorage.getItem("lang") || "zh";
    } catch (e) {}

    applyLang(saved);

    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const current = document.documentElement.lang === "en" ? "en" : "zh";
        applyLang(current === "en" ? "zh" : "en");
      });
    }
  });
})();

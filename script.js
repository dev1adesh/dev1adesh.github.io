/* =========================================================
   Adesh Partap Singh — Portfolio interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Project data ---------- */
  // category: one of robotics | embedded | software | digital
  const ICON = {
    ai: '<svg viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="12" rx="3"/><path d="M9 3v4M15 3v4M9 13h.01M15 13h.01M8 19l-2 2M16 19l2 2"/></svg>',
    vision: '<svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  };

  const projects = [
    {
      title: "Ball-Balancing Wheelchair",
      category: "robotics", catLabel: "Capstone · Controls",
      featured: true,
      images: ["assets/projects/wheelchair-capstone.jpg", "assets/projects/wheelchair-build.jpg", "assets/projects/wheelchair-team.jpg"],
      blurb: "A self-balancing, lean-controlled basketball wheelchair riding on a single omnidirectional ball — a ballbot platform that frees a player's hands to dribble, pass, and shoot.",
      details: "My 4th-year Mechatronics capstone: a ballbot-style wheelchair balancing on one omnidirectional ball. I built the controls and electronics subsystem — developing and tuning a MATLAB/Simulink model of the self-balancing algorithm to reject lateral disturbances and convert body-lean into motion, validating a sub-100 ms response target ahead of fabrication. I specified the core hardware stack (microcontroller, high-torque BLDC motors, IMU, encoders), sizing the drivetrain for a 5 mph top speed, full 360° on-axis rotation, and 2+ hours of runtime, then implemented the embedded control logic in C/C++ and owned the simulation-to-firmware handoff within a 5-person team.",
      tags: ["MATLAB/Simulink", "C/C++", "BLDC", "IMU", "PID", "Embedded"],
    },
    {
      title: "Stewart Platform Ball-Balancing Robot",
      category: "robotics", catLabel: "Robotics",
      featured: true,
      images: ["assets/projects/stewart-cad.jpg", "assets/projects/stewart-robot.jpg"],
      blurb: "A 6-DOF Stewart platform that balances a ball in real time with custom PID control and synchronized sensing.",
      details: "Built a Stewart-platform ball-balancing robot using an Arduino and Raspberry Pi, with real-time stabilization via custom PID control algorithms. Implemented I²C communication to synchronize data flow between sensors and controllers, enabling precise 6-DOF motion stabilization that keeps a ball centered on the moving platform surface. Covered the full loop: inverse kinematics for the six servo linkages, sensor fusion, and control tuning.",
      tags: ["Arduino", "Raspberry Pi", "PID", "I²C", "6-DOF", "Inverse Kinematics"],
    },
    {
      title: "6-DOF Robotic Arm",
      category: "robotics", catLabel: "Robotics",
      images: ["assets/projects/robotic-arm.jpg"],
      blurb: "A servo-driven articulated arm programmed for precise, repeatable automated pick-and-place tasks.",
      details: "Engineered and programmed a multi-axis robotic arm for precise automated tasks. Designed the mechanical linkage and gripper, drove the joints with coordinated servo control, and implemented inverse-kinematics motion planning to position the end-effector accurately for repeatable pick-and-place sequences.",
      tags: ["Robotics", "Servo Control", "Inverse Kinematics", "Embedded"],
    },
    {
      title: "Tesla Real-Time Monitoring Dashboard",
      category: "software", catLabel: "Controls · Data",
      featured: true,
      images: ["assets/projects/tesla-grafana.jpg", "assets/projects/tesla-coils.jpg"],
      blurb: "A live Grafana + InfluxDB dashboard for a Tesla manufacturing line, streaming mixer speed, RPM, torque, and bearing temperatures.",
      details: "Built during my Controls Engineering internship at Tesla: a real-time Grafana dashboard integrated with InfluxDB to monitor and visualize critical line metrics — mixer speed, RPM, torque, bearing temperatures, and user logins. It improved data observability and enabled faster issue detection and performance analysis. The work sat alongside a Python TCP/IP data-transmission system for remote label printing and PLC programming in Siemens TIA Portal V18.",
      tags: ["Grafana", "InfluxDB", "Python", "PLC", "TIA Portal", "Data Viz"],
    },
    {
      title: "JARVIS — AI Voice Assistant (RAG)",
      category: "software", catLabel: "Software · ML",
      icon: "ai",
      images: ["assets/projects/jarvis.jpg"],
      blurb: "A voice-enabled AI assistant built on the OpenAI API with a custom retrieval-augmented-generation pipeline and text-to-speech.",
      details: "Built “JARVIS”, a conversational AI assistant using the OpenAI library with custom RAG capability for grounded, context-aware answers, plus a text-to-voice system for natural spoken responses. Designed the retrieval pipeline to inject relevant context into prompts and to manage multi-turn conversations, so answers stay accurate to a private knowledge base rather than the model's defaults.",
      tags: ["Python", "OpenAI API", "RAG", "Text-to-Speech", "NLP"],
    },
    {
      title: "Facial Recognition Attendance",
      category: "software", catLabel: "Computer Vision",
      icon: "vision",
      images: ["assets/projects/facial-recognition.jpg"],
      blurb: "Automated attendance tracking that detects and identifies faces from a live camera feed using OpenCV.",
      details: "Developed a facial-recognition attendance system with OpenCV that detects and identifies faces from a live camera feed and logs attendance automatically, replacing manual roll-call. Handled the full vision pipeline — detection, encoding, matching against an enrolled set, and record-keeping.",
      tags: ["Python", "OpenCV", "Computer Vision"],
    },
    {
      title: "Quantitative Finance in C++",
      category: "software", catLabel: "Quant · Software",
      images: ["assets/projects/finance-cpp.jpg"],
      blurb: "An options-pricing and trading toolkit in C++ — Black-Scholes pricing, Monte Carlo simulation, and a mortgage amortization engine.",
      details: "Developed C++ algorithms for options trading, using the Black-Scholes model to price calls/puts and inform strategy, and Monte Carlo simulation to model real-time outcomes for a stock-trading and poker bot. Also built an Amortization Engine that computes mortgage payment schedules with detailed principal-vs-interest breakdowns. The work combines financial mathematics with performant, well-structured software.",
      tags: ["C++", "Black-Scholes", "Monte Carlo", "Quant", "Algorithms"],
    },
    {
      title: "Waterloop Motor Controller Board",
      category: "embedded", catLabel: "PCB · Power",
      images: ["assets/projects/motor-controller.jpg"],
      blurb: "A 12 V H-bridge motor controller PCB designed in Altium around the Renesas HIP4081A full-bridge FET driver.",
      details: "Designed a 12 V H-bridge motor controller on Altium for the Waterloop hyperloop team. The primary focus was integrating the Renesas HIP4081A high-frequency full-bridge FET driver for optimal performance and efficiency. The board incorporates protection mechanisms — overcurrent and overtemperature detection — to safeguard the system under load.",
      tags: ["Altium", "PCB Design", "H-Bridge", "HIP4081A", "Power Electronics"],
    },
    {
      title: "Buck / Boost Converter",
      category: "embedded", catLabel: "Power Electronics",
      images: ["assets/projects/buck-boost.jpg"],
      blurb: "A switched-mode DC-DC converter designed, simulated, and bench-tested for efficient voltage regulation.",
      details: "Designed switched-mode buck/boost power converters for efficient DC-DC voltage regulation. Completed the board layout, simulated the analog behaviour in LTspice / MATLAB Simulink, and validated efficiency and output ripple on the bench — part of a broader focus on advanced power-electronics systems.",
      tags: ["Power Electronics", "LTspice", "PCB", "DC-DC", "Altium / KiCad"],
    },
    {
      title: "Solar Charger System",
      category: "embedded", catLabel: "Power Electronics",
      images: ["assets/projects/solar-charger.jpg"],
      blurb: "A custom solar-charging PCB that conditions photovoltaic panel output to safely charge a battery.",
      details: "Built a solar charger system from schematic to fabricated board, conditioning photovoltaic panel output to charge a battery safely and efficiently. Took it through full PCB design, layout, and hardware bring-up.",
      tags: ["Power Electronics", "PCB Design", "Solar", "Altium / KiCad"],
    },
    {
      title: "Battery Passport & Energy Control Unit",
      category: "embedded", catLabel: "Embedded · BMS",
      images: ["assets/projects/ecu-board.jpg"],
      blurb: "A company-first Battery Passport system for secure, cell-level data logging on a battery management system.",
      details: "At Neutron Controls, I prototyped the company's first Battery Passport system, enabling secure logging of cell-level data using SEMPER NOR Flash and the Infineon TLE9018 over SPI. I supported the BMS architecture upgrade from 12 to 18 cells — increasing overall energy capacity — and worked on the Energy Control Unit hardware that ties the pack together.",
      tags: ["Embedded C", "SPI", "NOR Flash", "Infineon TLE9018", "BMS"],
    },
    {
      title: "BMS LED Indicator Board",
      category: "embedded", catLabel: "PCB · BMS",
      images: ["assets/projects/led-indicator.jpg"],
      blurb: "A custom indicator board that visualizes real-time charge / discharge cycles on a battery management system.",
      details: "Engineered a custom LED indicator board to visually display real-time charge and discharge cycles on the BMS, giving technicians an at-a-glance view of pack state. Designed the schematic and PCB layout and validated the board on hardware.",
      tags: ["PCB Design", "Embedded", "BMS", "Altium / KiCad"],
    },
    {
      title: "FPGA Digital Design",
      category: "digital", catLabel: "Digital Design",
      images: ["assets/projects/fpga-cyclone.jpg"],
      blurb: "State-machine and combinational-logic designs on the Altera Cyclone IV, written in VHDL / RTL.",
      details: "Programmed FPGAs on the Altera Cyclone IV, developing state-machine projects and implementing combinational logic — comparators, multiplexers, and gate-level designs — in VHDL / RTL. Built a solid foundation in digital design and hardware-description languages.",
      tags: ["FPGA", "VHDL", "RTL", "Cyclone IV", "Digital Design"],
    },
    {
      title: "3D-Printed Tape Dispenser",
      category: "digital", catLabel: "Mechanical · CAD",
      images: ["assets/projects/tape-dispenser.jpg"],
      blurb: "A weighted tape dispenser modeled in CAD and 3D-printed, iterated for a stable base and smooth feed.",
      details: "A compact mechanical-design and DFM exercise: modeled a tape dispenser in CAD (front and isometric studies) and 3D-printed it, iterating on the geometry for a stable, weighted base and smooth tape feed.",
      tags: ["SolidWorks", "CAD", "3D Printing", "DFM"],
    },
  ];

  /* ---------- Render project cards ---------- */
  const grid = document.getElementById("projectsGrid");

  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function buildCard(p, idx) {
    const card = el("button", "project-card reveal" + (p.featured ? " is-featured" : ""));
    card.type = "button";
    card.setAttribute("data-category", p.category);
    card.setAttribute("aria-label", p.title + " — view details");

    const media = el("div", "project-card__media");
    if (p.images && p.images.length) {
      const img = el("img");
      img.src = p.images[0];
      img.alt = p.title;
      img.loading = "lazy";
      img.decoding = "async";
      media.appendChild(img);
    } else {
      const cover = el("div", "project-card__cover", ICON[p.icon] || ICON.ai);
      media.appendChild(cover);
    }
    media.appendChild(el("span", "project-card__cat", p.catLabel));
    card.appendChild(media);

    const body = el("div", "project-card__body");
    body.appendChild(el("h3", null, p.title));
    body.appendChild(el("p", null, p.blurb));
    const foot = el("div", "project-card__foot");
    p.tags.slice(0, 3).forEach((t) => foot.appendChild(el("span", "chip chip--tag", t)));
    foot.appendChild(el("span", "project-card__more", "Details →"));
    body.appendChild(foot);
    card.appendChild(body);

    card.addEventListener("click", () => openModal(idx));
    return card;
  }

  projects.forEach((p, i) => grid.appendChild(buildCard(p, i)));

  /* ---------- Filters ---------- */
  const filters = document.getElementById("filters");
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    filters.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const f = btn.dataset.filter;
    grid.querySelectorAll(".project-card").forEach((card) => {
      const show = f === "all" || card.dataset.category === f;
      card.classList.toggle("is-hidden", !show);
    });
  });

  /* ---------- Modal ---------- */
  const modal = document.getElementById("modal");
  const modalMedia = document.getElementById("modalMedia");
  const modalCat = document.getElementById("modalCat");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalTags = document.getElementById("modalTags");
  let lastFocused = null;

  function openModal(idx) {
    const p = projects[idx];
    modalMedia.innerHTML = "";
    if (p.images && p.images.length) {
      p.images.forEach((src, i) => {
        const img = el("img");
        img.src = src;
        img.alt = p.images.length > 1 ? p.title + " — image " + (i + 1) + " of " + p.images.length : p.title;
        img.loading = i === 0 ? "eager" : "lazy";
        img.decoding = "async";
        modalMedia.appendChild(img);
      });
    } else {
      const cover = el("div", "project-card__cover", ICON[p.icon] || ICON.ai);
      cover.style.aspectRatio = "16 / 7";
      modalMedia.appendChild(cover);
    }
    modalMedia.scrollTop = 0;
    modalCat.textContent = p.catLabel;
    modalTitle.textContent = p.title;
    modalDesc.textContent = p.details;
    modalTags.innerHTML = "";
    p.tags.forEach((t) => modalTags.appendChild(el("span", "chip chip--tag", t)));

    lastFocused = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal__close").focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal(); });

  /* ---------- Theme toggle ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const stored = localStorage.getItem("theme");
  if (stored) {
    root.setAttribute("data-theme", stored);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    root.setAttribute("data-theme", "light");
  }
  themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ---------- Nav: scroll state + mobile menu ---------- */
  const nav = document.getElementById("nav");
  const navLinks = document.getElementById("navLinks");
  const burger = document.getElementById("navBurger");

  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  burger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Active link on scroll ---------- */
  const sections = ["about", "experience", "projects", "skills", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const linkFor = {};
  navLinks.querySelectorAll("a").forEach((a) => { linkFor[a.getAttribute("href").slice(1)] = a; });

  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.querySelectorAll("a").forEach((a) => a.classList.remove("is-active"));
        const a = linkFor[entry.target.id];
        if (a) a.classList.add("is-active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => spy.observe(s));

  /* ---------- Reveal on scroll ---------- */
  const revealObs = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach((n) => revealObs.observe(n));

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll(".stat__num[data-count]");
  const countObs = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const node = entry.target;
      const target = +node.dataset.count;
      const dur = 1300;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        node.textContent = Math.round(eased * target);
        if (t < 1) requestAnimationFrame(tick);
        else node.textContent = target;
      };
      requestAnimationFrame(tick);
      obs.unobserve(node);
    });
  }, { threshold: 0.6 });
  counters.forEach((c) => countObs.observe(c));

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

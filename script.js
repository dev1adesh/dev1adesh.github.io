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

  const GH_ICON = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.8 1.3 2.5 1.6.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.3.8 1 .8 2.1v3.1c0 .3.2.6.8.5A11.5 11.5 0 0 0 12 .5z"/></svg>';

  const projects = [
    {
      title: "Ball-Balancing Wheelchair",
      category: "robotics", catLabel: "Capstone · Controls",
      featured: true,
      images: ["assets/projects/wheelchair-capstone.jpg", "assets/projects/wheelchair-build.jpg", "assets/projects/wheelchair-team.jpg"],
      blurb: "A self-balancing, lean-controlled basketball wheelchair riding on a single omnidirectional ball — a ballbot platform that frees a player's hands to dribble, pass, and shoot.",
      details: "My 4th-year Mechatronics capstone: a ballbot-style wheelchair balancing on one omnidirectional ball. I owned the controls and electronics subsystem end-to-end within a 5-person team — from Simulink model to embedded C/C++ to hardware bring-up.",
      highlights: [
        "Developed and tuned a MATLAB/Simulink model of the self-balancing controller to reject lateral disturbances and convert body-lean into motion — validated a sub-100 ms disturbance response before fabrication.",
        "Specified the full hardware stack (MCU, high-torque BLDC motors, IMU, encoders), sizing the drivetrain for 5 mph top speed, 360° on-axis rotation, and 2+ hours of runtime.",
        "Implemented the embedded control logic in C/C++ and owned the simulation-to-firmware handoff.",
      ],
      links: [{ label: "Code on GitHub", href: "https://github.com/dev1adesh/CapstoneGroup52" }],
      tags: ["MATLAB/Simulink", "C/C++", "BLDC", "IMU", "PID", "Embedded"],
    },
    {
      title: "Parallel MJPEG Decoder on Kria KV260",
      category: "digital", catLabel: "ARM + FPGA Co-Design",
      featured: true,
      images: ["assets/projects/kria-decoder.jpg"],
      blurb: "A real-time parallel MJPEG video decoder on the Xilinx Kria KV260 — ARM A53 + FPGA co-design hitting ~50 FPS at 1080p, down to a modified Linux kernel driver.",
      details: "Designed and implemented a real-time parallel MJPEG video decoder on the Xilinx Kria KV260, splitting the pipeline across the ARM Cortex-A53 cores and the FPGA fabric. This is the deepest systems project I've built — spanning RTL, a hardware/software pipeline, POSIX threading, and Linux kernel work.",
      highlights: [
        "Achieved ~50 FPS at 1080p via a two-thread pipelined architecture with strip-level CPU–FPGA overlap.",
        "Built timerfd-based 60 Hz periodic rendering with triple-buffered ring-queue synchronization (pthreads mutex/condvar).",
        "Modified the Linux CMA kernel driver to allocate 24 MiB of contiguous DMA memory across 6 DMA channels.",
      ],
      links: [{ label: "GitHub Profile", href: "https://github.com/dev1adesh" }],
      tags: ["FPGA", "ARM", "C/C++", "pthreads", "Linux Kernel", "DMA", "Video"],
    },
    {
      title: "Stewart Platform Ball-Balancing Robot",
      category: "robotics", catLabel: "Robotics",
      featured: true,
      images: ["assets/projects/stewart-cad.jpg", "assets/projects/stewart-robot.jpg"],
      blurb: "A 6-DOF Stewart platform that balances a ball in real time with custom PID control and synchronized sensing.",
      details: "Built a Stewart-platform ball-balancing robot using an Arduino and Raspberry Pi, with real-time stabilization via custom PID control. Covered the full loop from math to hardware: inverse kinematics for the six servo linkages, sensor fusion, and control tuning.",
      highlights: [
        "Custom PID control loop keeps the ball centered on the moving platform in real time.",
        "I²C communication synchronizes data flow between sensors and both controllers for precise 6-DOF motion.",
        "Derived and implemented the inverse kinematics mapping platform pose to the six servo angles.",
      ],
      tags: ["Arduino", "Raspberry Pi", "PID", "I²C", "6-DOF", "Inverse Kinematics"],
    },
    {
      title: "Tesla Real-Time Monitoring Dashboard",
      category: "software", catLabel: "Controls · Data",
      featured: true,
      images: ["assets/projects/tesla-grafana.jpg", "assets/projects/tesla-coils.jpg"],
      blurb: "A live Grafana + InfluxDB dashboard for a Tesla manufacturing line, streaming mixer speed, RPM, torque, and bearing temperatures.",
      details: "Built during my Controls Engineering internship at Tesla: a real-time Grafana dashboard integrated with InfluxDB to monitor critical line metrics, alongside PLC programming in Siemens TIA Portal V18.",
      highlights: [
        "Streams mixer speed, RPM, torque, bearing temperatures, and user logins live from the production line.",
        "Improved data observability, enabling faster issue detection and performance analysis for line engineers.",
        "Paired with PLC logic in TIA Portal V18 processing real-time sensor data (heat-exchange rate, torque %).",
      ],
      tags: ["Grafana", "InfluxDB", "Python", "PLC", "TIA Portal", "Data Viz"],
    },
    {
      title: "STM32 Gesture-Controlled RC Car",
      category: "embedded", catLabel: "Embedded · PCB",
      images: ["assets/projects/stm32-rc-render.jpg", "assets/projects/stm32-rc-board.jpg", "assets/projects/stm32-rc-layout.jpg"],
      blurb: "A custom STM32 board I designed, fabricated, and programmed — an onboard MPU-6050 reads hand orientation to steer an RC car by gesture.",
      details: "A fully custom STM32 controller board — schematic, layout, fabrication, and firmware — that turns hand motion into drive commands. The MPU-6050 IMU captures hand-orientation angles, and the firmware translates them into precise motor commands for responsive, gesture-based driving.",
      highlights: [
        "Designed the 2-layer board in Altium (STM32 MCU, MPU-6050 IMU, SWD debug, USB, GPIO breakout) and brought up the fabricated hardware.",
        "Wrote firmware to fuse IMU angle data and map hand orientation to direction and speed in real time.",
        "The board silkscreen carries my name — I ship what I design.",
      ],
      links: [{ label: "Code on GitHub", href: "https://github.com/dev1adesh/STM32-uC" }],
      tags: ["STM32", "Altium", "MPU-6050", "IMU", "Embedded C", "PCB Design"],
    },
    {
      title: "8-Bit Computer from Scratch",
      category: "digital", catLabel: "Digital Design",
      images: ["assets/projects/8bit-pcb.jpg", "assets/projects/8bit-breadboard.jpg", "assets/projects/8bit-schematic.jpg"],
      blurb: "A fully functional 8-bit computer built from first principles — registers, ALU, RAM, program counter, clock, and CPU control logic — from breadboard to custom PCB.",
      details: "Built a working 8-bit computer from digital-logic first principles, then took it from a sprawling breadboard prototype to a clean custom PCB. It runs programs through its own fetch-decode-execute cycle.",
      highlights: [
        "Designed every subsystem: registers, system clock, ALU, RAM module, program counter, and CPU control logic.",
        "Progressed from full schematic capture to breadboard validation to a fabricated single-board PCB.",
        "Demonstrates ground-up understanding of how a CPU actually works — bus arbitration, microcode-style control words, timing.",
      ],
      links: [{ label: "Code on GitHub", href: "https://github.com/dev1adesh/8-bitComputer" }],
      tags: ["Digital Logic", "CPU Architecture", "PCB Design", "Electronics"],
    },
    {
      title: "Tesla Label-Printing Automation",
      category: "software", catLabel: "Manufacturing · Python",
      images: ["assets/projects/tesla-printing.jpg"],
      blurb: "A Python + Zebra-scripting automation that segregates anodes and cathodes at Tesla's San Diego plant with real-time inventory-integrated label printing.",
      details: "Developed a Python automation system at Tesla's San Diego plant to segregate anodes and cathodes using Zebra label scripting, integrated with the plant's live inventory system.",
      highlights: [
        "Custom Zebra (ZPL) labels identify and sort materials by type, scanned and categorized in real time.",
        "Integrated with plant inventory for end-to-end tracking with minimal errors.",
        "Streamlined the sorting process and improved production efficiency on the line.",
      ],
      tags: ["Python", "Zebra ZPL", "Automation", "Manufacturing", "TCP/IP"],
    },
    {
      title: "JARVIS — AI Voice Assistant (RAG)",
      category: "software", catLabel: "Software · ML",
      icon: "ai",
      images: ["assets/projects/jarvis.jpg"],
      blurb: "A voice-enabled AI assistant built on the OpenAI API with a custom retrieval-augmented-generation pipeline and text-to-speech.",
      details: "Built “JARVIS”, a conversational AI assistant using the OpenAI library with custom RAG capability for grounded, context-aware answers, plus a text-to-voice system for natural spoken responses.",
      highlights: [
        "Custom retrieval pipeline injects relevant context into prompts so answers stay grounded in a private knowledge base.",
        "Full voice loop: speech-to-text in, text-to-speech out, with multi-turn conversation management.",
        "Performs real tasks — opening apps and websites, playing music, answering from indexed documents.",
      ],
      links: [{ label: "Code on GitHub", href: "https://github.com/dev1adesh/JarvisAI" }],
      tags: ["Python", "OpenAI API", "RAG", "Text-to-Speech", "NLP"],
    },
    {
      title: "Facial Recognition Attendance",
      category: "software", catLabel: "Computer Vision",
      icon: "vision",
      images: ["assets/projects/facial-recognition.jpg"],
      blurb: "Automated attendance tracking that detects and identifies faces from a live camera feed using OpenCV.",
      details: "Developed a facial-recognition attendance system with OpenCV that detects and identifies faces from a live camera feed and logs attendance automatically, replacing manual roll-call.",
      highlights: [
        "Full vision pipeline: detection, face encoding, matching against an enrolled set, and automatic record-keeping.",
        "Runs on a live camera feed — no manual check-in step.",
      ],
      links: [{ label: "Code on GitHub", href: "https://github.com/dev1adesh/Artificial-Intelligence-Projects" }],
      tags: ["Python", "OpenCV", "Computer Vision"],
    },
    {
      title: "Quantitative Finance in C++",
      category: "software", catLabel: "Quant · Software",
      images: ["assets/projects/finance-cpp.jpg"],
      blurb: "An options-pricing and trading toolkit in C++ — Black-Scholes pricing, Monte Carlo simulation, and a mortgage amortization engine.",
      details: "Developed C++ algorithms for options trading and financial analysis, combining financial mathematics with performant, well-structured software.",
      highlights: [
        "Black-Scholes engine prices calls/puts to inform trading strategy.",
        "Monte Carlo simulation models real-time outcomes for a stock-trading and poker bot.",
        "Amortization engine computes mortgage schedules with principal-vs-interest breakdowns.",
      ],
      links: [{ label: "Code on GitHub", href: "https://github.com/dev1adesh/FinanceInCpp" }],
      tags: ["C++", "Black-Scholes", "Monte Carlo", "Quant", "Algorithms"],
    },
    {
      title: "Waterloop Motor Controller Board",
      category: "embedded", catLabel: "PCB · Power",
      images: ["assets/projects/motor-controller.jpg"],
      blurb: "A 12 V H-bridge motor controller PCB designed in Altium around the Renesas HIP4081A full-bridge FET driver.",
      details: "Designed a 12 V H-bridge motor controller on Altium for the Waterloop hyperloop team, where I led the electrical team for the 6th-gen pod.",
      highlights: [
        "Integrated the Renesas HIP4081A high-frequency full-bridge FET driver for performance and efficiency.",
        "Built in overcurrent and overtemperature protection to safeguard the system under load.",
        "Part of leading Waterloop's electrical team — levitating pod, motor control unit, and exterior lighting.",
      ],
      links: [
        { label: "Board on GitHub", href: "https://github.com/dev1adesh/Motor_Controller" },
        { label: "Waterloop Pod Project", href: "https://github.com/dev1adesh/Waterloop_Gosling_project" },
      ],
      tags: ["Altium", "PCB Design", "H-Bridge", "HIP4081A", "Power Electronics"],
    },
    {
      title: "Buck / Boost Converter",
      category: "embedded", catLabel: "Power Electronics",
      images: ["assets/projects/buck-boost.jpg"],
      blurb: "A switched-mode DC-DC converter designed, simulated, and bench-tested for efficient voltage regulation.",
      details: "Designed switched-mode buck/boost power converters for efficient DC-DC voltage regulation — part of a broader focus on advanced power-electronics systems.",
      highlights: [
        "Simulated the analog behaviour in LTspice and MATLAB Simulink before committing to copper.",
        "Completed board layout, then validated efficiency and output ripple on the bench.",
      ],
      links: [{ label: "Altium Projects on GitHub", href: "https://github.com/dev1adesh/Altium_projects" }],
      tags: ["Power Electronics", "LTspice", "PCB", "DC-DC", "Altium / KiCad"],
    },
    {
      title: "Solar Charger System",
      category: "embedded", catLabel: "Power Electronics",
      images: ["assets/projects/solar-charger.jpg"],
      blurb: "A custom solar-charging PCB that conditions photovoltaic panel output to safely charge a battery.",
      details: "Built a solar charger system from schematic to fabricated board, conditioning photovoltaic panel output to charge a battery safely and efficiently — full PCB design, layout, and hardware bring-up.",
      links: [{ label: "Design on GitHub", href: "https://github.com/dev1adesh/Solar_Charger" }],
      tags: ["Power Electronics", "PCB Design", "Solar", "Altium / KiCad"],
    },
    {
      title: "Battery Passport & Energy Control Unit",
      category: "embedded", catLabel: "Embedded · BMS",
      images: ["assets/projects/ecu-board.jpg"],
      blurb: "A company-first Battery Passport system for secure, cell-level data logging on a battery management system.",
      details: "At Neutron Controls, I prototyped the company's first Battery Passport system for secure cell-level data logging, working at the intersection of firmware and battery hardware.",
      highlights: [
        "Secure cell-level logging via SEMPER NOR Flash and the Infineon TLE9018 over SPI — a company first.",
        "Supported the BMS architecture upgrade from 12 to 18 cells, increasing pack energy capacity by 50%.",
        "Worked on the Energy Control Unit hardware that ties the pack together.",
      ],
      links: [{ label: "Aurix Firmware on GitHub", href: "https://github.com/dev1adesh/InfineonAurix" }],
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
      details: "Programmed FPGAs on the Altera Cyclone IV, developing state-machine projects and implementing combinational logic — comparators, multiplexers, and gate-level designs — in VHDL / RTL.",
      links: [{ label: "VHDL on GitHub", href: "https://github.com/dev1adesh/VHDL" }],
      tags: ["FPGA", "VHDL", "RTL", "Cyclone IV", "Digital Design"],
    },
    {
      title: "Multi-Axis Robotic Arm",
      category: "robotics", catLabel: "Robotics",
      images: ["assets/projects/robotic-arm.jpg"],
      blurb: "A servo-driven articulated arm programmed for precise, repeatable automated pick-and-place tasks.",
      details: "Engineered and programmed a multi-axis robotic arm for precise automated tasks. Designed the mechanical linkage and gripper, drove the joints with coordinated stepper/servo control, and implemented inverse-kinematics motion planning for repeatable pick-and-place sequences.",
      links: [{ label: "Code on GitHub", href: "https://github.com/dev1adesh/3axes_roboticarm" }],
      tags: ["Robotics", "Servo Control", "Inverse Kinematics", "Embedded"],
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
    if (p.links && p.links.length) {
      media.appendChild(el("span", "project-card__code", GH_ICON + "Code"));
    }
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
  const modalHighlights = document.getElementById("modalHighlights");
  const modalLinks = document.getElementById("modalLinks");
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

    modalHighlights.innerHTML = "";
    if (p.highlights && p.highlights.length) {
      const ul = el("ul", "modal__highlights");
      p.highlights.forEach((h) => ul.appendChild(el("li", null, h)));
      modalHighlights.appendChild(ul);
    }

    modalLinks.innerHTML = "";
    if (p.links && p.links.length) {
      p.links.forEach((l) => {
        const a = el("a", "btn btn--ghost btn--sm modal__link", GH_ICON + "<span>" + l.label + "</span>");
        a.href = l.href;
        a.target = "_blank";
        a.rel = "noopener";
        modalLinks.appendChild(a);
      });
    }

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

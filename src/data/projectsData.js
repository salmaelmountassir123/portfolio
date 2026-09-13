export const projectsData = [
  {
    id: "stockpro",
    number: "01",
    name: "STOCKPRO",
    category: "MICROSERVICES ARCHITECTURE",
    tagline: "High-throughput stock management platform engineered with a decoupled Microservices architecture and API Gateway.",
    description: "A resilient stock-management platform designed to eliminate monolithic single-points-of-failure. Structured around an intelligent API Gateway routing requests to 6 decoupled microservices: Authentication (JWT/RBAC), Product Catalog, Supplier Network, Stock Movement Logs, and Analytics Dashboard.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Recharts", "Vite"],
    highlight: "6 Decoupled Independent Services + Centralized API Gateway",
    architectureNodes: [
      { name: "API GATEWAY", role: "Routing, Auth & Rate Limiting", port: ":8000", status: "ONLINE", latency: "12ms" },
      { name: "AUTH SERVICE", role: "JWT Verification & RBAC", port: ":8001", status: "ONLINE", latency: "18ms" },
      { name: "PRODUCTS SERVICE", role: "Catalog & SKU Indexing", port: ":8002", status: "ONLINE", latency: "22ms" },
      { name: "SUPPLIERS SERVICE", role: "Vendor Relational Data", port: ":8003", status: "ONLINE", latency: "15ms" },
      { name: "MOVEMENTS SERVICE", role: "Stock Auditing & Logs", port: ":8004", status: "ONLINE", latency: "28ms" },
      { name: "DASHBOARD SERVICE", role: "Aggregations & Metrics", port: ":8005", status: "ONLINE", latency: "34ms" }
    ],
    technicalHighlights: [
      "Engineered an API Gateway pattern for unified routing, client decoupling, and token verification.",
      "Implemented role-based permissions (Admin, Stock Controller, Auditor) with secure stateless JWT tokens.",
      "Developed an immutable stock movement transaction log for strict inventory traceability.",
      "Built interactive data visualization panels with Recharts for replenishment forecasting."
    ],
    github: "https://github.com/elmountassirsalma12",
    demo: "#live-demo-stockpro",
    accentColor: "#6E2435"
  },
  {
    id: "hajz",
    number: "02",
    name: "HAJZ",
    category: "RESERVATION PLATFORM",
    tagline: "Precision reservation management system with multi-step workflows and centralized Redux state.",
    description: "An intuitive reservation platform built for effortless booking management. Features time-slot allocation, collision prevention algorithms, client verification, and synchronized Redux Toolkit state throughout the entire booking lifecycle.",
    technologies: ["React.js", "Redux Toolkit", "CSS3", "JavaScript ES6+", "Responsive UI"],
    highlight: "Deterministic Redux State Flow & Collision-Free Booking",
    workflowSteps: [
      { step: "01", title: "Slot Selection", desc: "Interactive calendar & real-time seat availability matrix" },
      { step: "02", title: "Guest Credentials", desc: "Form validation with sanitized client inputs" },
      { step: "03", title: "State Sync", desc: "Redux Toolkit slice updates & collision protection" },
      { step: "04", title: "Instant Confirmation", desc: "Summary generation & notification dispatch" }
    ],
    technicalHighlights: [
      "Engineered centralized Redux Toolkit state slices for slots, guest data, and session filters.",
      "Prevented double-booking conflicts with optimistic UI updates and instant availability polling.",
      "Crafted a bespoke, responsive CSS3 design system with zero layout shifts.",
      "Optimized React render trees using memoized selectors and efficient action dispatchers."
    ],
    github: "https://github.com/elmountassirsalma12",
    demo: "#live-demo-hajz",
    accentColor: "#4A1824"
  },
  {
    id: "ecommerce",
    number: "03",
    name: "E-COMMERCE",
    category: "FULL-STACK PLATFORM",
    tagline: "Robust online store connecting a reactive modern frontend with a secure Laravel RESTful backend.",
    description: "A modern full-stack commercial platform combining a fluid React interface with a high-integrity Laravel REST API and MySQL database. Features structured category taxonomies, secure cart sessions, input sanitation, and transactional order records.",
    technologies: ["React.js", "Laravel", "MySQL", "REST API", "Axios"],
    highlight: "Secure RESTful Backend + Relational Database Integrity",
    apiEndpoints: [
      { method: "GET", path: "/api/v1/products", response: "200 OK — Paginated Catalogue" },
      { method: "POST", path: "/api/v1/cart/sync", response: "200 OK — Session Cart State" },
      { method: "POST", path: "/api/v1/orders/checkout", response: "201 CREATED — DB Transaction" }
    ],
    technicalHighlights: [
      "Developed structured Laravel API controllers with request validation rules and clean JSON responses.",
      "Designed normalized relational MySQL schemas for products, stock units, orders, and customer accounts.",
      "Built resilient shopping cart state synchronized across browser sessions.",
      "Configured Axios interceptors for automated authentication headers and unified error notifications."
    ],
    github: "https://github.com/elmountassirsalma12",
    demo: "#live-demo-ecommerce",
    accentColor: "#651F32"
  },
  {
    id: "cema",
    number: "04",
    name: "PARC INFORMATIQUE",
    category: "CEMA BOIS DE L'ATLAS — INTERNAL IT ASSET MANAGEMENT",
    tagline: "From a simple phone tracker to a full internal IT asset management platform, built during a professional internship.",
    description: "Originally developed during an internship at CEMA BOIS DE L'ATLAS to track and assign the company's telephones, this application was progressively extended into a broader internal platform for managing the company's IT equipment. It now centralizes phones, computers, SIM cards, rooms, and machines, tracks which employee holds which equipment, keeps a history of assignments and changes, raises renewal alerts, and includes a basic server-verification workflow — giving the IT department a single, structured view of the equipment lifecycle.",
    technologies: ["React.js", "Vite", "Django REST Framework", "MySQL", "REST API"],
    highlight: "Evolved from a Phone Tracker into a Full Internal IT Asset Management Platform",
    architectureFlow: ["React.js (Vite)", "Django REST API", "MySQL"],
    screenshotCategories: [
      { id: "auth", label: "Authentification", image: "/assets/projects/cema/login.png", caption: "Secure login screen for the application." },
      { id: "dashboard", label: "Dashboard", image: "/assets/projects/cema/Dashboard.png", caption: "Overview of the equipment fleet: assigned devices, stock, and access levels." },
      { id: "phones", label: "Téléphones", image: "/assets/projects/cema/telephones.png", caption: "Phone inventory with search and filters by employee, brand, and supplier." },
      { id: "alerts", label: "Alertes", image: "/assets/projects/cema/alertes.png", caption: "Renewal alerts flagging equipment nearing its replacement deadline." },
      { id: "computers", label: "Ordinateurs", image: null },
      { id: "sim", label: "Puces / SIM", image: null },
      { id: "rooms", label: "Salles", image: null },
      { id: "machines", label: "Machines", image: null },
      { id: "servers", label: "Vérification des serveurs", image: null },
      { id: "history", label: "Historique", image: null },
      { id: "admin", label: "Administration", image: null }
    ],
    technicalHighlights: [
      "Started as a phone-tracking tool and was progressively extended into a full internal IT asset management platform.",
      "Centralized equipment records for phones, computers, SIM cards, rooms, and machines in a single system.",
      "Built employee-to-equipment assignment tracking with a full history of assignments and changes.",
      "Added renewal/expiry alerts and a basic server-verification workflow to support IT equipment follow-up."
    ],
    github: "https://github.com/elmountassirsalma12",
    demo: "#live-demo-cema",
    accentColor: "#6E2435"
  },
  {
    id: "gestion-client",
    number: "05",
    name: "GESTION CLIENT",
    category: "CLIENT MANAGEMENT WEB APP",
    status: "in-progress",
    statusLabel: "EN COURS DE DÉVELOPPEMENT",
    tagline: "Application de gestion client — a new project, actively being built, not a finished product yet.",
    description: "A new web application currently under development, designed to make client management and business activity tracking easier through a modern, professional web interface. It includes a dashboard tracking total and active clients, revenue, and payments, with features for managing clients and related business data still being built out progressively.",
    technologies: ["React.js", "Vite", "Django REST Framework", "MySQL"],
    highlight: "Early-Stage Project — Actively Being Built",
    screenshotCategories: [
      { id: "dashboard", label: "Dashboard", image: "/assets/projects/gestion-client/dashboard.png", caption: "Current state of the client management dashboard (work in progress)." }
    ],
    technicalHighlights: [
      "Started recently and currently under active development.",
      "Building a dashboard to manage clients, revenues, and related business activity.",
      "Architecture and feature set are still evolving as the project progresses."
    ],
    github: "https://github.com/elmountassirsalma12",
    demo: "#live-demo-gestion-client",
    accentColor: "#8E2F48"
  }
];

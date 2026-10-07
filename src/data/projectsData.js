export const projectsData = [
  {
    id: "cema",
    number: "01",
    name: "Gestion des Téléphones",
    shortName: "Gestion des Téléphones",
    company: "CEMA Bois de l'Atlas",
    category: "CEMA Bois de l'Atlas",
    badgeType: "Professional Experience",
    tagline: "Internal IT asset management and equipment assignment platform developed during internship.",
    description: "A web application to manage phones, employees and equipment within the company. It includes inventory tracking, alerts and administration features. Originally developed to track and assign company telephones, it progressively expanded to manage the full IT asset fleet (computers, SIM cards, rooms, and machines) with full assignment history and renewal alerts.",
    technologies: ["React", "Django", "Python", "MySQL", "Vite"],
    techBadges: ["React", "Django", "Python", "MySQL", "Vite"],
    previewImage: "/assets/projects/cema/Dashboard.png",
    thumbnails: [
      { id: "dash", image: "/assets/projects/cema/Dashboard.png", label: "Dashboard" },
      { id: "phones", image: "/assets/projects/cema/telephones.png", label: "Téléphones" },
      { id: "alerts", image: "/assets/projects/cema/alertes.png", label: "Alertes" },
      { id: "login", image: "/assets/projects/cema/login.png", label: "Authentification" }
    ],
    keyFeatures: [
      "Authentication / Login",
      "Status tracking",
      "Dashboard",
      "Alerts",
      "Telephone inventory management",
      "Administration",
      "Employee assignment",
      "CRUD operations"
    ],
    sections: {
      overview: "A comprehensive internal IT asset management web application built during a professional internship at CEMA Bois de l'Atlas. Centralizes hardware, telephone lines, assignments, and replacement lifecycles.",
      context: "The IT department required a structured, reliable tool to replace spreadsheet-based equipment tracking and maintain precise accountability of employee assignments.",
      role: "Sole developer responsible for end-to-end architecture: React frontend with Vite, Django REST API backend, MySQL database schema, and role-based authentication.",
      technologies: "React.js, Vite, Django REST Framework, Python, MySQL, CSS Modules, JWT.",
      features: "Phone inventory tracking, employee assignment workflows, renewal alert notifications, server verification logs, and role-based permissions.",
      challenges: "Designing a flexible data model accommodating different hardware types while maintaining clean relational integrity and historical tracking.",
      whatILearned: "Bridging software engineering with real IT operations; managing edge cases in corporate hardware lifecycles; designing user-friendly enterprise interfaces."
    },
    github: "https://github.com/elmountassirsalma12",
    demo: "#live-demo-cema",
    accentColor: "#2563EB"
  },
  {
    id: "gestion-client",
    number: "02",
    name: "Gestion Client",
    shortName: "Gestion Client",
    company: "Freelance Project",
    category: "Freelance Project",
    badgeType: "Active Development",
    statusLabel: "EN COURS DE DÉVELOPPEMENT",
    tagline: "Modern client management web application for tracking business activity, clients, and revenues.",
    description: "A new web application currently under active development, designed to streamline client management and business activity tracking through an intuitive, modern dashboard. Includes metrics for active clients, revenue tracking, and payment statuses.",
    technologies: ["React", "Laravel", "PHP", "MySQL"],
    techBadges: ["React", "Laravel", "PHP", "MySQL"],
    previewImage: "/assets/projects/gestion-client/dashboard.png",
    thumbnails: [
      { id: "dash", image: "/assets/projects/gestion-client/dashboard.png", label: "Dashboard" }
    ],
    keyFeatures: [
      "Client Directory & Profiles",
      "Revenue & Payment Metrics",
      "Activity Timeline",
      "Status Filtering",
      "Invoice Tracking",
      "Responsive Layout",
      "RESTful API Integration",
      "Data Export & Reports"
    ],
    sections: {
      overview: "Client relationship and financial activity tracker built to provide small businesses and freelancers with a clean, actionable overview of their client pipelines.",
      context: "Initiated as a practical freelance solution to replace convoluted spreadsheets with a responsive, role-protected web portal.",
      role: "Full-stack development: Frontend dashboard in React and backend API endpoints.",
      technologies: "React.js, Laravel / Django REST, PHP / Python, MySQL, Tailwind / Vanilla CSS.",
      features: "Client directory, invoice summaries, payment tracking, activity dashboard.",
      challenges: "Structuring reactive dashboard widgets with dynamic filtering and real-time state updates.",
      whatILearned: "Optimizing dashboard rendering performance and modeling financial transaction lifecycles."
    },
    github: "https://github.com/elmountassirsalma12",
    demo: "#live-demo-gestion-client",
    accentColor: "#2563EB"
  },
  {
    id: "stockpro",
    number: "03",
    name: "StockPro",
    shortName: "StockPro",
    company: "Stock Management",
    category: "Stock Management",
    badgeType: "Microservices Architecture",
    tagline: "High-throughput stock management platform engineered with a decoupled Microservices architecture and API Gateway.",
    description: "A resilient stock-management platform structured around an intelligent API Gateway routing requests to 6 decoupled microservices: Authentication (JWT/RBAC), Product Catalog, Supplier Network, Stock Movement Logs, and Analytics Dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    techBadges: ["React", "Node.js", "MongoDB"],
    previewImage: "/assets/Stockpro/dashboard.png",
    thumbnails: [
      { id: "dash", image: "/assets/Stockpro/dashboard.png", label: "Dashboard" },
      { id: "prod", image: "/assets/Stockpro/products.png", label: "Products" },
      { id: "rep", image: "/assets/Stockpro/reports.png", label: "Reports" }
    ],
    keyFeatures: [
      "API Gateway Routing (:8000)",
      "Role-Based JWT Authentication",
      "Catalog & SKU Indexing",
      "Supplier Relationship Data",
      "Stock Movement Audit Trail",
      "Interactive Analytics (Recharts)",
      "Low-Stock Alerts & ETA",
      "Decoupled Microservice Nodes"
    ],
    sections: {
      overview: "A distributed stock management system engineered with 6 standalone services coordinated through a central API Gateway.",
      context: "Built to demonstrate scalable backend architecture, eliminating single points of failure in traditional monolithic inventory software.",
      role: "System architect and full-stack engineer: designed service contracts, API gateway routing, and React monitoring interface.",
      technologies: "React.js, Node.js, Express, MongoDB, Recharts, Vite, JWT.",
      features: "Stateless token verification, inventory audit logs, vendor tracking, analytics graphs.",
      challenges: "Maintaining data consistency across microservices and handling request routing with low latency.",
      whatILearned: "Microservice decoupling patterns, API Gateway token verification, and asynchronous event handling."
    },
    github: "https://github.com/elmountassirsalma12",
    demo: "#live-demo-stockpro",
    accentColor: "#2563EB"
  },
  {
    id: "hajz",
    number: "04",
    name: "HAJZ.ma",
    shortName: "HAJZ.ma",
    company: "Booking Platform",
    category: "Booking Platform",
    badgeType: "Frontend & State Machine",
    tagline: "Precision reservation management system with multi-step workflows and centralized Redux state.",
    description: "An intuitive booking platform built for effortless reservation management. Features time-slot allocation, collision prevention algorithms, client verification, and synchronized Redux Toolkit state throughout the entire booking lifecycle.",
    technologies: ["React", "JavaScript", "Bootstrap", "Redux Toolkit"],
    techBadges: ["React", "JavaScript", "Bootstrap"],
    previewImage: "/assets/projects/hajz-preview.jpg",
    thumbnails: [
      { id: "main", image: "/assets/projects/hajz-preview.jpg", label: "Booking Workflow" }
    ],
    keyFeatures: [
      "Multi-Step Booking Wizard",
      "Collision-Free Slot Allocation",
      "Centralized Redux State",
      "Real-Time Availability Polling",
      "Client Input Sanitization",
      "Booking Confirmation Dispatches",
      "Optimistic UI Updates",
      "Zero Layout-Shift Responsive Design"
    ],
    sections: {
      overview: "A responsive reservation engine designed for high-concurrency booking workflows with zero double-booking errors.",
      context: "Created to solve availability race conditions and provide a smooth, frictionless multi-step booking process.",
      role: "Frontend Engineer: designed state hierarchy, UI/UX interaction flows, and validation rules.",
      technologies: "React.js, Redux Toolkit, JavaScript ES6+, Bootstrap 5, CSS3.",
      features: "Interactive calendar, seat/slot availability matrix, client credential validation, instant booking confirmation.",
      challenges: "Preventing conflicting slot reservations during concurrent guest sessions with optimistic state management.",
      whatILearned: "Advanced Redux Toolkit slice architecture, memoized selectors, and deterministic state transitions."
    },
    github: "https://github.com/elmountassirsalma12",
    demo: "#live-demo-hajz",
    accentColor: "#2563EB"
  },
  {
    id: "ecommerce",
    number: "05",
    name: "E-commerce Website",
    shortName: "E-commerce Website",
    company: "Online Store",
    category: "Online Store",
    badgeType: "Full-Stack Architecture",
    tagline: "Robust online store connecting a reactive modern frontend with a secure Laravel RESTful backend.",
    description: "A modern commercial platform combining a fluid React interface with a high-integrity Laravel REST API and MySQL database. Features structured category taxonomies, secure cart sessions, input sanitation, and transactional order records.",
    technologies: ["React", "Laravel", "MySQL", "REST API", "Axios"],
    techBadges: ["React", "Laravel", "MySQL"],
    previewImage: "/assets/projects/ecommerce-preview.jpg",
    thumbnails: [
      { id: "main", image: "/assets/projects/ecommerce-preview.jpg", label: "Storefront & Cart" }
    ],
    keyFeatures: [
      "Paginated Product Catalog",
      "Category & Price Filtering",
      "Persistent Shopping Cart Session",
      "Laravel RESTful API Controllers",
      "Relational MySQL Schema (ACID)",
      "Laravel Sanctum Auth & CSRF",
      "Axios Interceptors & Error Catching",
      "Checkout Order Transactions"
    ],
    sections: {
      overview: "A full-featured e-commerce store with reactive cart management, category filtering, and relational database integrity.",
      context: "Built to demonstrate secure REST API development, session-independent shopping cart state, and normalized relational databases.",
      role: "Full-Stack Developer: authored Laravel backend controllers, database migrations, and React storefront.",
      technologies: "React.js, Laravel, MySQL, REST API, Axios, Sanctum.",
      features: "Product catalog, dynamic cart synchronizer, order placement transactions, authentication middleware.",
      challenges: "Synchronizing browser cart state with backend inventory levels and maintaining transactional consistency.",
      whatILearned: "Laravel controller patterns, MySQL indexing for product catalogues, and token-based API authentication."
    },
    github: "https://github.com/elmountassirsalma12",
    demo: "#live-demo-ecommerce",
    accentColor: "#2563EB"
  }
];

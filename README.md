client/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/           # Images, icons, logos
│   │   └── logo.svg
│   │
│   ├── components/       # Reusable UI component
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── AnimatedCounter.jsx
│   │   └── ReelCard.jsx
│   │
│   ├── pages/            # Page-level components
│   │   ├── LandingPage.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Jobs.jsx
│   │   ├── Freelance.jsx
│   │   ├── Reels.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── layouts/          # Page wrappers
│   │   └── MainLayout.jsx
│   │
│   ├── hooks/            # Custom hooks
│   │   ├── useAuth.js
│   │   ├── useCounter.js
│   │   └── useSocket.js
│   │
│   ├── context/          # Global state
│   │   ├── AuthContext.jsx
│   │   └── UserContext.jsx
│   │
│   ├── services/         # API calls
│   │   ├── authService.js
│   │   ├── jobService.js
│   │   └── reelService.js
│   │
│   ├── utils/            # Helper functions
│   │   ├── constants.js
│   │   └── formatDate.js
│   │
│   ├── routes/           # Protected routes
│   │   └── PrivateRoute.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── tailwind.config.js
├── package.json
└── vite.config.js (or CRA config)

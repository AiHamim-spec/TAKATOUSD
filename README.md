# BDT Currency Converter Dashboard

A lightweight, single-page currency converter that transforms Bangladeshi Taka (BDT) into US Dollar (USD), British Pound (GBP), and Malaysian Ringgit (MYR) in real time.

## Features
- Live conversion while typing
- Hardcoded, easy-to-adjust exchange rates
- Clear button to reset the dashboard instantly
- Responsive layout with accessible markup

## Exchange rates
The dashboard uses the following fixed rates for demonstration purposes:

| Currency | Rate (per 1&nbsp;BDT) |
|----------|------------------------|
| USD      | 0.0091                 |
| GBP      | 0.0071                 |
| MYR      | 0.0360                 |

You can adjust these values in [`assets/js/main.js`](assets/js/main.js) if you need different rates.

## Getting started
Open `index.html` in any modern web browser. No build step or dependency installation is required.

## Project structure
```
.
├── assets
│   ├── css
│   │   └── styles.css
│   └── js
│       └── main.js
├── index.html
└── README.md
```

## Customisation tips
- Update styles in `assets/css/styles.css` to change the visual appearance.
- Replace the hardcoded rates in `assets/js/main.js` to reflect up-to-date exchange values.

'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    /* Colors - Background Hierarchy */
    --bg-primary: #0f0f0f;        /* Fundo principal da app */
    --bg-secondary: #1a1a2e;      /* Fundo de seções/cards elevados */
    --bg-tertiary: #2a2a3e;       /* Fundo de cards/elementos */
    --bg-light: #374151;          /* Fundo claro para contrastes */
    --bg-extra-light: #4b5563;    /* Fundo muito claro */
    --bg-modal: rgba(0, 0, 0, 0.8); /* Overlay de modals */

    /* Colors - Purple Brand */
    --purple-50: rgba(139, 92, 246, 0.1);  /* Background sutil */
    --purple-100: #a78bfa;                  /* Light variant */
    --purple-500: #8b5cf6;                  /* Primary brand */
    --purple-700: #7c3aed;                  /* Dark variant */
    --purple-900: #5b21b6;                  /* Muito dark */

    /* Colors - Status Hierarchy */
    --success-light: #34d399;
    --success: #10b981;
    --success-dark: #047857;

    --warning-light: #fbbf24;
    --warning: #ff9900;
    --warning-dark: #d97706;

    --error-bg: rgba(239, 68, 68, 0.1);  /* Fundo de erro sutil */
    --error-light: #f87171;
    --error: #ef4444;
    --error-dark: #dc2626;


    /* Colors - Text Hierarchy */
    --text-primary: #ffffff;      /* Texto principal - alta ênfase */
    --text-secondary: #d1d5db;    /* Texto secundário - média ênfase */
    --text-tertiary: #9ca3af;     /* Texto terciário - baixa ênfase */
    --text-disabled: #6b7280;     /* Texto desabilitado */

    /* Colors - Border Hierarchy */
    --border-subtle: #333;        /* Bordas sutis, divisores */
    --border-default: var(--bg-light);    /* Bordas padrão */
    --border-emphasis: var(--bg-extra-light);   /* Bordas com ênfase */
    --border-focus: var(--purple-500); /* Bordas de foco */

    /* Typography - Sizes */
    --font-size-xs: 0.75rem;    /* 12px */
    --font-size-sm: 0.875rem;   /* 14px */
    --font-size-base: 1rem;     /* 16px */
    --font-size-lg: 1.125rem;   /* 18px */
    --font-size-xl: 1.25rem;    /* 20px */
    --font-size-2xl: 1.5rem;    /* 24px */
    --font-size-3xl: 1.875rem;  /* 30px */

    /* Typography - Weights */
    --font-weight-thin: 100;
    --font-weight-extralight: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    /* Typography - Line Heights */
    --leading-tight: 1.25;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;

    /* Spacing - Consistent Scale */
    --space-1: 0.25rem;   /* 4px */
    --space-2: 0.5rem;    /* 8px */
    --space-3: 0.75rem;   /* 12px */
    --space-4: 1rem;      /* 16px */
    --space-5: 1.25rem;   /* 20px */
    --space-6: 1.5rem;    /* 24px */
    --space-8: 2rem;      /* 32px */
    --space-10: 2.5rem;   /* 40px */
    --space-12: 3rem;     /* 48px */
    --space-16: 4rem;     /* 64px */

    /* Border Radius - Progressive Scale */
    --radius-sm: 0.25rem;   /* 4px */
    --radius-md: 0.5rem;    /* 8px */
    --radius-lg: 0.75rem;   /* 12px */
    --radius-xl: 1rem;      /* 16px */
    --radius-full: 9999px;

    /* Shadows - Layered System */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-brand: 0 4px 12px rgba(139, 92, 246, 0.4);

    /* Z-Index - Consistent Scale */
    --z-base: 1;
    --z-dropdown: 10;
    --z-sticky: 20;
    --z-fixed: 30;
    --z-modal-backdrop: 40;
    --z-modal: 50;
    --z-toast: 60;
    --z-tooltip: 70;

    /* Transitions - Semantic Naming */
    --transition-fast: 150ms ease-out;
    --transition-normal: 200ms ease-out;
    --transition-slow: 300ms ease-out;
    --transition-bounce: 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

    /* Mobile Safe Areas */
    --safe-area-top: env(safe-area-inset-top);
    --safe-area-bottom: env(safe-area-inset-bottom);
    --safe-area-left: env(safe-area-inset-left);
    --safe-area-right: env(safe-area-inset-right);

    /* Breakpoints as CSS Custom Properties */
    --breakpoint-sm: 640px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%; /* 1rem = 16px */
    /* Melhor renderização de texto */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-normal);
    line-height: var(--leading-normal);
    color: var(--text-primary);
    background-color: var(--bg-primary);

    /* Previne scroll horizontal no mobile */
    overflow-x: hidden;
    /* Melhor scroll no iOS */
    -webkit-overflow-scrolling: touch;
  }

  /* Reset de botões */
  button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    cursor: pointer;
    outline: none;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  /* Reset de inputs */
  input, textarea {
    background: none;
    border: none;
    outline: none;
    font: inherit;
    color: inherit;

    &::placeholder {
      color: var(--text-tertiary);
    }
  }

  /* Reset de listas */
  ul, ol {
    list-style: none;
  }

  /* Reset de links */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Estados de foco para acessibilidade */
  *:focus-visible {
    outline: 2px solid var(--border-focus);
    outline-offset: 2px;
  }

  /* Classe utilitária para screen readers */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Estilização da scrollbar para browsers webkit */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  *::-webkit-scrollbar-thumb {
    background: var(--border-default);
    border-radius: var(--radius-full);
  }

  *::-webkit-scrollbar-thumb:hover {
    background: var(--text-tertiary);
  }

  /* Animação de pulse para skeletons */
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  /* Classes utilitárias para truncate */
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

export default GlobalStyles

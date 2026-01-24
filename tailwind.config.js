module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        /* Primary Color System */
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          medium: "var(--primary-medium)",
          dark: "var(--primary-dark)",
        },
        /* Secondary Color System */
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          overlay: "var(--secondary-overlay)",
        },
        /* Accent Color System */
        accent: {
          primary: "var(--accent-primary)",
          'primary-light': "var(--accent-primary-light)",
          success: "var(--accent-success)",
          'success-alt': "var(--accent-success-alt)",
          warning: "var(--accent-warning)",
          purple: "var(--accent-purple)",
        },
        /* Background Color System */
        background: {
          main: "var(--bg-main)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          overlay: "var(--bg-overlay)",
          neutral: "var(--bg-neutral)",
          light: "var(--bg-light)",
          dark: "var(--bg-dark)",
        },
        /* Text Color System */
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          accent: "var(--text-accent)",
          link: "var(--text-link)",
          inverse: "var(--text-inverse)",
        },
        /* Border Color System */
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
        },
        /* Component-specific Colors */
        header: {
          background: "var(--header-background)",
          text: "var(--header-text)",
          accent: "var(--header-accent)",
        },
        button: {
          'primary-bg': "var(--button-primary-bg)",
          'secondary-bg': "var(--button-secondary-bg)",
          text: "var(--button-text)",
        },
        line: {
          primary: "var(--line-primary)",
          neutral: "var(--line-neutral)",
        },
        input: {
          background: "var(--input-background)",
          border: "var(--input-border)",
        },
        icon: {
          background: "var(--icon-background)",
        }
      },
      /* Typography System */
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'md': 'var(--font-size-md)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)',
        'black': 'var(--font-weight-black)',
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'md': 'var(--line-height-md)',
        'base': 'var(--line-height-base)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)',
        '6xl': 'var(--line-height-6xl)',
      },
      /* Spacing System */
      spacing: {
        '1': 'var(--spacing-1)',
        '1.5': 'var(--spacing-1-5)',
        '2': 'var(--spacing-2)',
        '2.5': 'var(--spacing-2-5)',
        '3': 'var(--spacing-3)',
        '3.5': 'var(--spacing-3-5)',
        '4': 'var(--spacing-4)',
        '4.5': 'var(--spacing-4-5)',
        '5': 'var(--spacing-5)',
        '5.5': 'var(--spacing-5-5)',
        '6': 'var(--spacing-6)',
        '6.5': 'var(--spacing-6-5)',
        '7': 'var(--spacing-7)',
        '7.5': 'var(--spacing-7-5)',
        '8': 'var(--spacing-8)',
        '8.5': 'var(--spacing-8-5)',
        '10': 'var(--spacing-10)',
        '10.5': 'var(--spacing-10-5)',
        '11.5': 'var(--spacing-11-5)',
        '12.5': 'var(--spacing-12-5)',
        '13': 'var(--spacing-13)',
        '14': 'var(--spacing-14)',
        '14.5': 'var(--spacing-14-5)',
        '16.5': 'var(--spacing-16-5)',
        '17': 'var(--spacing-17)',
        '19.5': 'var(--spacing-19-5)',
        '22': 'var(--spacing-22)',
        '24.5': 'var(--spacing-24-5)',
        '28.5': 'var(--spacing-28-5)',
        '29.5': 'var(--spacing-29-5)',
        '40.5': 'var(--spacing-40-5)',
        '44.5': 'var(--spacing-44-5)',
        '61.5': 'var(--spacing-61-5)',
        '69.5': 'var(--spacing-69-5)',
      },
      /* Border Radius System */
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)',
        '5xl': 'var(--radius-5xl)',
      },
      /* Font Family */
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      }
    }
  },
  plugins: []
};
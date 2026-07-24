@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-cream-50 text-coffee-900 font-sans antialiased;
  }
}

@layer utilities {
  .reveal {
    opacity: 0;
  }
  .reveal.is-visible {
    animation: fade-up 0.8s ease-out forwards;
  }
}

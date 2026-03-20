export function renderNavbar(): string {
  return `
    <nav class="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-lg">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" class="flex items-center gap-3">
          <img src="/logo-alanturing.webp" alt="CPIFP Alan Turing" class="h-8 w-auto" />
        </a>

        <ul class="hidden items-center gap-8 text-sm font-medium text-gray-400 md:flex">
          <li><a href="#projects" class="transition hover:text-white">Proyectos</a></li>
          <li><a href="#about" class="transition hover:text-white">Sobre nosotros</a></li>
        </ul>

        <a
          href="#projects"
          class="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
        >
          Ver proyectos
        </a>
      </div>
    </nav>
  `;
}

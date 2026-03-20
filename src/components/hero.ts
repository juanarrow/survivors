import { asset } from "../utils";

export function renderHero(): string {
  return `
    <section class="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 pt-20">
      <div class="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl"></div>
      <div class="pointer-events-none absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-purple-600/15 blur-3xl"></div>

      <div class="relative z-10 mx-auto max-w-4xl text-center">
        <div class="animate-fade-in mb-8 flex justify-center">
          <img src="${asset("logo-alanturing.webp")}" alt="CPIFP Alan Turing" class="h-16 w-auto sm:h-20" />
        </div>

        <span
          class="animate-fade-in mb-6 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-300 uppercase"
        >
          1&ordm; DAM &mdash; Programación &mdash; Curso 2025 / 2026
        </span>

        <h1
          class="animate-fade-in-up text-5xl leading-tight font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
          style="animation-delay: 100ms"
        >
          Proyectos de
          <span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            nuestros alumnos
          </span>
        </h1>

        <p
          class="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl"
          style="animation-delay: 200ms"
        >
          Explora los proyectos creados por los alumnos de 1&ordm; de DAM en el módulo de Programación.
          Haz clic en cualquier tarjeta para abrirlo en una nueva pestaña.
        </p>

        <div class="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" style="animation-delay: 300ms">
          <a
            href="#projects"
            class="rounded-xl bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-500 hover:shadow-indigo-500/40"
          >
            Ver proyectos
          </a>
          <a
            href="https://fpalanturing.es/"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-xl border border-white/10 px-8 py-3.5 text-sm font-semibold text-gray-300 transition hover:border-white/25 hover:text-white"
          >
            Visitar CPIFP Alan Turing
          </a>
        </div>
      </div>
    </section>
  `;
}

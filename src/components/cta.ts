export function renderAbout(): string {
  return `
    <section id="about" class="relative py-32 px-6">
      <div class="mx-auto max-w-5xl">
        <div class="fade-in-section overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-indigo-600/10 to-transparent">
          <!-- Campus image -->
          <div class="relative h-48 w-full overflow-hidden sm:h-64">
            <img
              src="/campus-slider1.jpg"
              alt="CPIFP Alan Turing — Campus"
              class="h-full w-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950"></div>
          </div>

          <div class="px-8 pb-12 pt-6 text-center sm:px-16 sm:pb-16">
            <img src="/logo-dam.png" alt="DAM" class="mx-auto mb-6 h-14 w-auto" />

            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sobre este espacio
            </h2>
            <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
              Esta web recopila los proyectos del módulo de
              <span class="font-semibold text-white">Programación</span> de 1&ordm; de
              <span class="font-semibold text-white">Desarrollo de Aplicaciones Multiplataforma</span>
              en el
              <a href="https://fpalanturing.es/" target="_blank" rel="noopener noreferrer" class="font-semibold text-indigo-400 underline decoration-indigo-400/30 transition hover:decoration-indigo-400">CPIFP Alan Turing</a>.
              Cada tarjeta enlaza directamente al proyecto desplegado, junto con los
              perfiles de GitHub y LinkedIn de su autor.
            </p>

            <div class="mt-10 flex flex-wrap items-center justify-center gap-8 text-gray-500">
              <div class="flex items-center gap-2">
                <svg class="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 51.39 51.39 0 0 0-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" /></svg>
                <span class="text-sm">1&ordm; DAM &mdash; Programación</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                <span class="text-sm">Málaga TechPark, Campanillas</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
                <span class="text-sm">Curso 2025 / 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

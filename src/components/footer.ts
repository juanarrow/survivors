export function renderFooter(): string {
  const year = new Date().getFullYear();

  return `
    <footer class="border-t border-white/5 py-10 px-6">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div class="flex items-center gap-4">
          <img src="/logos-footer.png" alt="Logos institucionales" class="h-10 w-auto opacity-60" />
        </div>
        <span class="text-sm text-gray-500">&copy; ${year} Survivors &mdash; CPIFP Alan Turing &mdash; C/ Frederick Terman, 3 &mdash; 29590 Campanillas, Málaga</span>
        <a href="#" class="text-sm text-gray-500 transition hover:text-white">Volver arriba</a>
      </div>
    </footer>
  `;
}

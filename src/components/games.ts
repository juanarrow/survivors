interface Student {
  name: string;
  projectUrl: string;
  projectTitle: string;
  description?: string;
  github?: string;
  linkedIn?: string;
  portfolio?: string;
}

const students: Student[] = [
  {
    name: "Juan Manuel Fernández Rodríguez",
    projectUrl: "https://genetix-arena.vercel.app/",
    projectTitle: "Genetix Arena",
    description:
      "Simulador táctico de combate autónomo con inteligencia artificial emergente. Migración de alta fidelidad (Java a TS) con interfaz React 19.",
    github: "https://github.com/Ju4nmaFd3z",
    linkedIn: "https://www.linkedin.com/in/juanma-fernández-rodríguez",
    portfolio: "https://juanma-dev-portfolio.vercel.app",
  },
  {
    name: "Jazmín Gutiérrez Castro",
    projectUrl: "https://haru-jzmprg.github.io/proyecto-juego-js/",
    projectTitle: "Genshin Battle",
    description:
      "Batalla por turnos inspirada en Genshin Impact con facciones, visiones elementales y combates estratégicos.",
    github: "https://github.com/Haru-jzmPRG",
  },
  {
    name: "Adrián Gutiérrez Fernández",
    projectUrl: "https://adrigufe.github.io/DungeonsAndSurvivors/",
    projectTitle: "Dungeons and Survivors",
    description:
      "Combate por turnos con selección de aliados y criaturas en un entorno de mazmorra.",
    github: "https://github.com/AdriGuFe",
  },
  {
    name: "Victor Pagola Del Pino",
    projectUrl: "https://knightsagainstmonsters.vercel.app/",
    projectTitle: "Battle of Elements",
    description:
      "Tower defense táctico con héroes, muros y rayos contra oleadas de enemigos.",
    github: "https://github.com/Paagola",
    linkedIn: "https://www.linkedin.com/in/pagola/",
    portfolio: "https://victorpagola-seven.vercel.app/",
  },
  {
    name: "Curro Portillo Guerrero",
    projectUrl: "https://survival-game-two.vercel.app/",
    projectTitle: "SurvivalGame",
    description:
      "Simulación de persecución y huida con modo sandbox, oleadas y sistema de mejoras.",
    github: "https://github.com/CurroPG",
  },
  {
    name: "Sergio Rodríguez Espinosa",
    projectUrl: "https://sergiore2007.github.io/Dungeon-Tide/web/",
    projectTitle: "Dungeon Tide",
    description:
      "Sandbox, oleadas, bullet hell y mazmorra roguelike en un solo juego con editor de mapas.",
    github: "https://github.com/SergioRE2007",
  },
  {
    name: "Samuel Ruiz Martín",
    projectUrl: "https://theyinyan.github.io/Trabajo_VideoJuego_JS/",
    projectTitle: "Survivors Arcade",
    description:
      "Juego estilo arcade retro con sistema de monedas, tienda, clases de personajes y rankings.",
    github: "https://github.com/TheYinYan",
  },
  {
    name: "Adrián Sánchez Muñoz",
    projectUrl: "https://hopelessdespair.netlify.app/",
    projectTitle: "Hopeless Despair",
    description:
      "Dark fantasy con simulación, oleadas y bullet hell. Sistema de maestría y clases jugables.",
    github: "https://github.com/asanmun1905",
  },
  {
    name: "Miguel Trujillo Rojas",
    projectUrl: "https://poio-o.github.io/survivors2/",
    projectTitle: "Tactical Survivors",
    description:
      "Survivors táctico con estrategia y combate en tiempo real.",
    github: "https://github.com/Poio-o",
  },
  {
    name: "Ana Isabel Sánchez",
    projectUrl: "https://anasan24.github.io/RogueLike_VERSION_2/",
    projectTitle: "RogueLike Simple",
    description:
      "Conejitos vs Dinosaurios en un roguelike con música y combate por turnos.",
    github: "https://github.com/ANASAN24",
  },
  {
    name: "Ismael Parra Moussaif",
    projectUrl: "https://radiant-gelato-19abff.netlify.app/",
    projectTitle: "Survivor",
    description:
      "Simulación autónoma de cazadores vs presas con bitácora táctica en tiempo real.",
    github: "https://github.com/is13mael",
  },
  {
    name: "Santiago Luque Villanueva",
    projectUrl: "https://survivoor.netlify.app/",
    projectTitle: "Hunger Games",
    description:
      "Sandbox con editor drag-and-drop y modo singleplayer con movimiento WASD y disparos.",
    github: "https://github.com/SantiagoLuqueVillanueva",
  },
  {
    name: "María de la Paz Jiménez Martín",
    projectUrl: "https://mpjmar.github.io/Particles/",
    projectTitle: "Particles",
    description:
      "Simulación de partículas cuánticas con modos de observación, PvE y campaña por niveles.",
    github: "https://github.com/mpjmar",
  },
];

function avatarFromName(name: string): string {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return `<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-bold text-indigo-300">${initials}</div>`;
}

function renderCard(student: Student, index: number): string {
  const socialLinks = [
    student.github
      ? `<a href="${student.github}" target="_blank" rel="noopener noreferrer" class="text-gray-500 transition hover:text-white" title="GitHub">
           <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"/></svg>
         </a>`
      : "",
    student.linkedIn
      ? `<a href="${student.linkedIn}" target="_blank" rel="noopener noreferrer" class="text-gray-500 transition hover:text-white" title="LinkedIn">
           <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"/></svg>
         </a>`
      : "",
    student.portfolio
      ? `<a href="${student.portfolio}" target="_blank" rel="noopener noreferrer" class="text-gray-500 transition hover:text-white" title="Portfolio">
           <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.73-3.56"/></svg>
         </a>`
      : "",
  ]
    .filter(Boolean)
    .join("");

  const desc = student.description
    ? `<p class="mt-1 text-sm leading-relaxed text-gray-500">${student.description}</p>`
    : "";

  return `
    <div
      class="fade-in-section group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition hover:border-indigo-500/30 hover:bg-white/[0.04]"
      style="transition-delay: ${index * 80}ms"
    >
      <a
        href="${student.projectUrl}"
        target="_blank"
        rel="noopener noreferrer"
        class="relative block aspect-video w-full overflow-hidden bg-gray-900"
      >
        <div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-gray-900">
          <span class="text-3xl font-extrabold tracking-tight text-white/10 sm:text-4xl">${student.projectTitle}</span>
        </div>
        <div class="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/40">
          <span class="scale-90 rounded-full bg-indigo-600 p-3 text-white opacity-0 shadow-lg transition group-hover:scale-100 group-hover:opacity-100">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>
          </span>
        </div>
      </a>

      <div class="flex flex-1 flex-col gap-4 p-5">
        <div>
          <a
            href="${student.projectUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="text-lg font-semibold text-white transition hover:text-indigo-400"
          >
            ${student.projectTitle}
          </a>
          ${desc}
        </div>

        <div class="mt-auto flex items-center justify-between">
          <div class="flex items-center gap-3">
            ${avatarFromName(student.name)}
            <span class="text-sm text-gray-400">${student.name}</span>
          </div>
          <div class="flex items-center gap-2">
            ${socialLinks}
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderGames(): string {
  const cards = students.map((s, i) => renderCard(s, i)).join("");

  return `
    <section id="projects" class="relative py-32 px-6">
      <div class="mx-auto max-w-7xl">
        <div class="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div class="max-w-2xl">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Proyectos
              <span class="text-indigo-400">destacados</span>
            </h2>
            <p class="mt-4 text-lg text-gray-400">
              Haz clic en cualquier tarjeta para abrir el proyecto en una nueva pestaña.
            </p>
          </div>
          <span class="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm tabular-nums text-gray-400">
            ${students.length} proyectos
          </span>
        </div>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

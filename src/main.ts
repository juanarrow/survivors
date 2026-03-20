import "./style.css";
import { renderNavbar } from "./components/navbar";
import { renderHero } from "./components/hero";
import { renderGames } from "./components/games";
import { renderAbout } from "./components/cta";
import { renderFooter } from "./components/footer";
import { initScrollAnimations } from "./animations";

function render(): void {
  const app = document.querySelector<HTMLDivElement>("#app")!;

  app.innerHTML = `
    ${renderNavbar()}
    <main>
      ${renderHero()}
      ${renderGames()}
      ${renderAbout()}
    </main>
    ${renderFooter()}
  `;

  initScrollAnimations();
}

render();

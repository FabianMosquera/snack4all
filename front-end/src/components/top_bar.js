const topBar = () => {
  const $app = document.getElementById("header");
  const $topBar = document.createElement("nav");

  $topBar.classList.add("nav");
  $topBar.innerHTML = `    
  <div class="nav__container wrapper">
    <img class="nav__logo" src="src/assets/img/Logo.svg" alt="Logo of snack4all">
  </div>
  <!-- Toggle -->
  <div class="nav__toggle wrapper" id="toggle">
    <i class="fas fa-bars" id="toggle_change"></i>
  </div>
    
  <ul class="menu">
      <div class="menu__container"></div>
      <li class="menu__item">
          <a class="menu__link" href=".">Home</a>
      </li>
      <li class="menu__item">
          <a class="menu__link" href="menu.html">Menu</a>
      </li>
      <li class="menu__item">
          <a class="menu__link" href="#reserve">Reserves</a>
      </li>
      <li class="menu__item">
          <a class="menu__link" href="#about">About Us</a>
      </li>
  </ul>
    `;

  $app.appendChild($topBar);

  (() => {
    const $toggle = document.getElementById("toggle");
    const $toggleChange = document.getElementById("toggle_change");
    const $menu = document.querySelector(".menu");
    const $menuLink = document.querySelectorAll(".menu__link");

    const openCloseNav = () => {
      $menu.classList.toggle("menu--visible");

      if ($menu.classList.contains("menu--visible")) {
        $toggleChange.setAttribute("class", "fas fa-times");
        $toggle.style.color = "white";
      } else {
        $toggleChange.setAttribute("class", "fas fa-bars");
        $toggle.style.color = "var(--color-orange-main)";
      }
    };

    $toggle.addEventListener("click", () => openCloseNav());

    $menuLink.forEach((a) => {
      a.addEventListener("click", () => openCloseNav());
    });
  })();
};

export { topBar };

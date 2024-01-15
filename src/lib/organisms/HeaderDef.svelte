<header>
  <ul id="links">
    <a href="/">Home</a>
    <a href="/all_stekjes">Stekjes</a>
    <a href="/workshops">Workshops</a>
    <a href="/contact">Contact</a>
  </ul>

  <nav role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />

      <span />
      <span />
      <span />

      <div class="toggle">
        <ul id="menu">
          <a href="/home">Home</a>
          <a href="/stekjes_overzicht">Stekjes</a>
          <a href="/workshops">Workshops</a>
          <a href="/contact">Contact</a>
        </ul>
      </div>
    </div>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 15vh;
    -webkit-box-shadow: 0px 1px 5px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 1px 5px 0px rgba(66, 68, 90, 1);
    box-shadow: 0px 1px -1px 0px rgb(66, 68, 90);
    font-size: 1em;
    z-index: 500;
    /* padding-right: 2em; */
  }

  #links {
    display: flex;
    justify-content: space-between;
    width: 25rem;
  }

  #links a {
    color: var(--color-primair);
  }

  /* Hamburger menu, it's all css no javascript */

  nav,
  #links {
    padding: 1rem;
  }

  #menuToggle {
    position: relative;
    display: block;
    z-index: 1;
    user-select: none;
  }

  #menuToggle a,
  #links a {
    text-decoration: none;
  }

  #links a:hover,
  #menu a:hover {
    color: var(--color-secundair);
  }

  #menuToggle input {
    display: block;
    position: absolute;
    height: 40px;
    width: 32px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }

  #menuToggle span {
    background: var(--color-primair);
    display: block;
    position: relative;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    border-radius: 3px;
    z-index: 2;
    transform-origin: 4px 0px;
    transition:
      transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: var(--color-primair);
  }

  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  .toggle {
    display: none;
  }

  #menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 60vh;
    top: 0;
    right: 0;
    margin: -100px -16px 0 0;
    margin-top: 3rem;
    padding-top: 3rem;
    background: var(--color-primair);
    z-index: 2;
  }

  #menu a {
    color: white;
    padding: 1rem;
    font-size: 24px;
  }

  #menuToggle input:checked ~ .toggle {
    display: block;
  }

  @media (min-width: 670px) {
    nav {
      display: none;
    }
  }

  @media (max-width: 670px) {
    #links {
      display: none;
    }
  }
</style>

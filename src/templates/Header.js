const Header = () => {
  const view = `

<header>
  <nav class="nav-container">
    <section class="nav-container-logo">
      <a href="/">
        <img
          class="logo"
          src="https://i.ibb.co/41R00n4/pngwing-com.png"
          alt="Logo"
        />
      </a>
    </section>

    <section class="nav-container-links">
      <h1><a href="/">Home</a></h1>
      <h1><a href="#/about/">About</a></h1>
      <h1><a href="#/contact/">Contact</a></h1>
    </section>
  </nav>
</header>
`;
  return view;
};

export default Header;

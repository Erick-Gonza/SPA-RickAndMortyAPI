const Header = () => {
  const view = `
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
      <h1><a href="/">Rick and Morty Characters</a></h1>
    </section>
  </nav>
`;
  return view;
};

export default Header;

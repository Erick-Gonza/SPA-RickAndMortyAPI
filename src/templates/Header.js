const Header = () => {
  const view = `
  <nav>
    <section class="">
      <a href="/">
        <img
          class="logo"
          src="../assets/images/logo.png"
          alt="Logo"
        />
      </a>
    </section>

    <section>
      <ol>
        <li ><a href="/" class="item">Home</a></li>
        <li ><a href="#social" class="item">Contact</a></li>
      </ol>
    </section>
  </nav>
`;
  return view;
};

export default Header;

function Header() {
  return (
    <header className="Header p-10 flex justify-between items-center border-b">
      <h1 className="text-2xl font-bold text-gradient-reverse">Pokemon Type Matchup</h1>
      <a
        href="https://github.com/shah-a/int2.2-pokemon-type-matchup/"
        target="_blank"
        rel="noreferrer"
        className="text-teal-900 hover:text-teal-700 transition-colors motion-safe:hover:animate-wiggle"
      >
        <i className="fab fa-github-alt fa-3x" />
      </a>
    </header>
  );
}

export default Header;

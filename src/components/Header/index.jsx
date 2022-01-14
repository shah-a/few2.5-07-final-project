function Header() {
  return (
    <header className="Header p-10 flex justify-between border-b">
      <h1 className="text-4xl font-bold text-gradient">Pokemon Type Matchup</h1>
      <a
        href="https://github.com/shah-a/int2.2-pokemon-type-matchup/"
        target="_blank"
        rel="noreferrer"
        className="gh-hover transition-colors motion-safe:hover:animate-wiggle"
      >
        <i className="fab fa-github-alt fa-3x" />
      </a>
    </header>
  );
}

export default Header;

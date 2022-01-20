function Header() {
  return (
    <header className="Header p-10 border-b flex justify-between">
      <h1 className="text-4xl font-bold text-gradient">Pokemon Type Matchup</h1>
      <a
        href="https://github.com/shah-a/few2.5-07-final-project/"
        target="_blank"
        rel="noreferrer"
        className="gh-green transition-colors motion-safe:hover:animate-wiggle self-center"
      >
        <i className="fab fa-github-alt fa-3x" />
      </a>
    </header>
  );
}

export default Header;

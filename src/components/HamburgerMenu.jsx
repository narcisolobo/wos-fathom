function HamburgerMenu() {
  return (
    <button
      className="navbar-toggler d-lg-none"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvas"
      aria-controls="offcanvas"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}
export default HamburgerMenu;

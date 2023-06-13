import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="header_box">
      <div>
        <img src={Logo} alt="Rast Logo" />
      </div>
      <nav className="header_box_nav">
        <a href="../App">Hakkımızda</a>

        <a href="../App">Jüri - Yarışma Yazılımı</a>

        <a href="../App">Word Ninja</a>

        <a href="../App">Word Pyramids</a>
      </nav>
      <div>Symbols</div>
    </div>
  );
};

export default Header;

import { rast_svg } from '../assets/svgFiles';
import { instagram_svg } from '../assets/svgFiles';
import { linkedin_svg } from '../assets/svgFiles';
import { youtube_svg } from '../assets/svgFiles';
import { be_svg } from '../assets/svgFiles';

const Header = () => {
  return (
    <div className="header_box">
      <div>{rast_svg}</div>
      <nav className="header_box_nav1">
        <a href="../App" className="header_box_nav_item">
          Hakkımızda
        </a>
        <a href="../App" className="header_box_nav_item">
          Jüri - Yarışma Yazılımı
        </a>
        <a href="../App" className="header_box_nav_item">
          Word Ninja
        </a>
        <a href="../App" className="header_box_nav_item">
          Word Pyramids
        </a>
      </nav>
      <nav className="header_box_nav2">
        <div className="header_box_nav2_item">{youtube_svg}</div>
        <div className="header_box_nav2_item">{instagram_svg}</div>
        <div className="header_box_nav2_item">{be_svg}</div>
        <div className="header_box_nav2_item">{linkedin_svg}</div>
      </nav>
    </div>
  );
};

export default Header;

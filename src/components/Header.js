import { useState } from 'react';
import { rast_svg } from '../assets/svgFiles';
import { instagram_svg } from '../assets/svgFiles';
import { linkedin_svg } from '../assets/svgFiles';
import { youtube_svg } from '../assets/svgFiles';
import { be_svg } from '../assets/svgFiles';
import { FcMenu } from 'react-icons/fc';
import { GrClose } from 'react-icons/gr';
import './Header.css';

const Header = () => {
  const [responsiveMenuIsOpen, setResponsiveMenuIsOpen] = useState(false);

  return (
    <header className="header_box">
      <div className={responsiveMenuIsOpen ? `hide` : null}>{rast_svg}</div>
      <div className={responsiveMenuIsOpen ? `narrowMenu` : `wideMenu`}>
        <GrClose
          onClick={() => setResponsiveMenuIsOpen(false)}
          className="menu_close_button"
          size={40}
        />
        <nav>
          <a href="..." className="header_box_nav_item">
            Hakkımızda
          </a>
          <a href="..." className="header_box_nav_item">
            Jüri - Yarışma Yazılımı
          </a>
          <a href="..." className="header_box_nav_item">
            Word Ninja
          </a>
          <a href="..." className="header_box_nav_item">
            Word Pyramids
          </a>
        </nav>
        <div className="header_box_nav2">
          <a
            target="_blank"
            href="https://www.youtube.com"
            rel="noreferrer"
            className="header_box_nav2_item"
          >
            {youtube_svg}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/mobilerast/"
            className="header_box_nav2_item"
          >
            {instagram_svg}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.behance.net/rastmobile"
            className="header_box_nav2_item"
          >
            {be_svg}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/rastmobile/"
            className="header_box_nav2_item"
          >
            {linkedin_svg}
          </a>
        </div>
      </div>

      <FcMenu
        onClick={() => setResponsiveMenuIsOpen(true)}
        className={responsiveMenuIsOpen ? `hide` : 'menu_icon'}
        size={30}
      />
    </header>
  );
};

export default Header;

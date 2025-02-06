import menu_data from '@data/menu-data';
import Link from 'next/link';
import React from 'react';

const Menus = () => {
  return (
    <ul className="menu">
      {menu_data.map((menu, i) => (
        <li
          key={i}
          className={`menu-item ${
            menu.megaMenu ? "menu-item-has-children has-mega-menu" : ""
          } ${menu.hasDropdown ? "menu-item-has-children" : ""}`}
        >
          <Link className="menu-link" href={menu.link}>
            {menu.title}
          </Link>
          {/* Render Dropdown */}
          {menu.hasDropdown && menu.submenus?.length > 0 && (
            <ul className="sub-menu">
              {menu.submenus.map((sub, j) => (
                <li key={j}>
                  <Link href={sub.link}>{sub.title}</Link>
                </li>
              ))}
            </ul>
          )}
          {/* Render Mega Menu */}
          {menu.mega_menus && (
            <ul className="mega-menu">
              {menu.mega_menus.map((mega, k) => (
                <li key={k} className="mega-menu-item">
                  <Link href={mega.link} className="mega-menu-title">
                    {mega.title}
                  </Link>
                  {mega.submenus?.length > 0 && (
                    <ul className="sub-menu">
                      {mega.submenus.map((subMega, l) => (
                        <li key={l}>
                          <Link href={subMega.link}>{subMega.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menus;

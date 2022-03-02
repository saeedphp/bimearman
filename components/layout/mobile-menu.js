import React, {useState} from 'react';
import styles from './mobile-menu.module.css';
import {getAllMenu} from "../../data/menu";
import Link from "next/link";
import HamburIcon from "../icons/hambur";
import MenuCross from "../icons/menu-cross";

const HamburMenu = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [submenu, setSubmenu] = useState(false);

    const showSidebar = () => {
        setShowMenu(!showMenu);
    };

    const showSubmenu = () => {
        setSubmenu(!submenu);
    }

    const menuItems = getAllMenu();

    return (
        <div className={styles.menu}>
            <div>
                <HamburIcon onClick={showSidebar}/>
            </div>
            <nav className={showMenu ? 'nav active' : 'nav'}>
                <ul onClick={showSidebar}>
                    <li>
                        <MenuCross />
                    </li>
                    {menuItems.map((menuItem) => (
                        <li key={menuItem.id}>
                            <Link href={`/${menuItem.link}`}>
                                <a onClick={menuItem.children && showSubmenu} className={menuItem.children && 'has-children'}>
                                    {menuItem.title}
                                </a>
                            </Link>
                            {menuItem.children && <ul className={submenu ? 'submenu active' : 'submenu'}>
                                {menuItem.children.map((item,index) => (
                                    <li key={index}>
                                        {item.title}
                                    </li>
                                ))}
                            </ul>}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default HamburMenu;
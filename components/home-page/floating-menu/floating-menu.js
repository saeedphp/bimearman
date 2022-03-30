import {Fragment} from "react";
import User from "../../icons/floating-menu/user";
import styles from './floating-menu.module.css';
import {getFloatingMenu} from "../../../data/floating-menu";
import Image from "next/image";

const FloatingMenu = () => {

    const menuItems = getFloatingMenu();

    return (
        <Fragment>
            <div className={styles.menu}>
                <ul>
                    {menuItems.map((menuItem) => (
                        <li key={menuItem.id}>
                            <a href={menuItem.link}>
                                {menuItem.icon}
                                <span>
                              {menuItem.title}
                          </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default FloatingMenu;
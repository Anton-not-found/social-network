import React from 'react';
import s from './Navbar.module.css';
const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.navbarItem}>
                <a>Profile</a>
            </div>
            <div className={`${s.navbarItem} ${s.active}`}>
                <a>Messages</a>
            </div>
            <div className={s.navbarItem}>
                <a>News</a>
            </div>
            <div className={s.navbarItem}>
                <a>Musics</a>
            </div>
        </div>
    );
};

export default Navbar;
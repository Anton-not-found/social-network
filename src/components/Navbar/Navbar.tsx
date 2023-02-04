import React from 'react';
import s from './Navbar.module.css';
const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.navbarItem}>
                Profile
            </div>
            <div className={s.navbarItem}>
                Messages
            </div>
            <div className={s.navbarItem}>
                News
            </div>
            <div className={s.navbarItem}>
                Musics
            </div>
        </div>
    );
};

export default Navbar;
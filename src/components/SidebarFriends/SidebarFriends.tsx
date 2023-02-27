import React from 'react';
import s from './SidebarFriends.module.css';




export const SidebarFriends = () => {
    return (
        <div className={s.sidebarFriends}>
            <div className={s.title}>
                <h3>Friends</h3>
            </div>
            <div className={s.sidebarFriendsItem}>
                <div className={s.item}>
                    <img
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-v74w_uZSYXuvEJFYrWfZu2-RX6H-a47Sg&usqp=CAU'}/>
                    <span>Andrew</span>
                </div>
                <div className={s.item}>
                    <img
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ncq29aJ4GfgVT5TiTHxvfT3Xq3KJW5vKpg&usqp=CAU'}/>
                    <span>Sasha</span>
                </div>
                <div className={s.item}>
                    <img
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQasU9Syo5lB7riSy7w0dr3H4dEh9czdSQt2Q&usqp=CAU'}/>
                    <span>Sveta</span>
                </div>
            </div>

        </div>
    );
};


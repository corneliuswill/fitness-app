import React from 'react';
import MenuIcon from '../menu-icon/menu-icon';
import './app-header.css';

const AppHeader = (props) => {
    return (
        <div className="app-header">
            <MenuIcon menu="app-menu"/>
            <div className="title">{props.title}</div>
            <div className="add-icon"><a href="#"><i class="material-icons">add</i></a></div>
        </div>
    )
}

export default AppHeader;
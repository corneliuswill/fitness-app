import React, { Component } from 'react';
import './menu-icon.css';

export default class MenuIcon extends Component {
    handleMenuClick = (e) => {
        const menuIcon = document.getElementById('hamburger-menu');
        const menu = document.getElementById(this.props.menu);
        menuIcon.classList.toggle("change");
        menu.classList.toggle("menu-visible");

    }

    render() {
        return (
            <div id="hamburger-menu" className="menu-icon" onClick={this.handleMenuClick}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        );
    }
}
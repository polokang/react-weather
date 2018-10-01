import React from 'react';

export default function Header() {
    return (
        <header>
            <img className='header__logo' src={require('./icon/logo.png')} alt="" />
            <h1 className="header__title">Weather Channel</h1>
        </header>
    );
}
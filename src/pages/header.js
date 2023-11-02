import React from 'react';
import "./header.css";

export default function Header(props) {
    return (
        <div className="Header">
            <a href='/about'>About</a>
            <a href='/mytown'>My Town</a>
        </div>
    );
}
import React, { Component } from 'react';
import './App.css';

class Footer extends React.Component {
    render() {
        return <div className="footer">
            <div className="footer__counter">2 items left</div>
            <button className="footer-button footer__all">All</button>
            <button className="footer-button footer__active">Active</button>
            <button className="footer-button footer__completed">Completed</button>
        </div>;
    }
}

export default Footer;
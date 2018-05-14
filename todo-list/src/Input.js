import React, { Component } from 'react';
import './App.css';

class Header extends React.Component {
    render() {
        return <div className="header">
            <button className="header__check-button">&#9660;</button>
            <input className="header__todo-input" value={ this.props.defaultValue } onChange={ this.props.getNewTodo } placeholder="ToDo" />
        </div>;
    }
}

export default Header;
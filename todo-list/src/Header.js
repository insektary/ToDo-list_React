import React, { Component } from 'react';
import './App.css';

class Header extends React.Component {
    render() {
        return <div className="header">
            <button className={ this.props.open ? "header__check-button" : "header__check-button--done" } onClick={ this.props.checkAll }>&#9660;</button>
            <input className="header__todo-input" value={ this.props.defaultValue } onChange={ this.props.getNewTodo } placeholder="ToDo" />
        </div>;
    }
}

export default Header;
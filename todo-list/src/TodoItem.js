import React, { Component } from 'react';
import './App.css';

class TodoItem extends React.Component {
    render() {
        return <div id={ this.props.id } className="item">
            <button className={ this.props.open ? "item__check-button" : "item__check-button--done"} onClick={ this.props.changeStatus }>&#10004;</button>
            <input className={ this.props.open ? "item__todo-title" : "item__todo-title--done"} readOnly="readonly" value={ this.props.title } />
            <button className="item__delete-button" onClick={ this.props.deleteTodo }>&#10006;</button>
        </div>;
    }
}

export default TodoItem;
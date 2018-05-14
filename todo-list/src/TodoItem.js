import React, { Component } from 'react';
import './App.css';

const TodoTitle = ({ title }) => <input className="item__todo-title" readOnly="readonly" value={ title } />;

class TodoItem extends React.Component {
    render() {
        return <div className="item">
            <button className="item__check-button">&#10004;</button>
            <TodoTitle title={ this.props.title }/>
            <button className="item__delete-button" id={ this.props.id } onClick={ this.props.deleteTodo }>&#10006;</button>
        </div>;
    }
}

export default TodoItem;
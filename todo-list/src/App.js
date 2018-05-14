import React, { Component } from 'react';
import './App.css';
import Header from './Input';
import Footer from './Footer';
import TodoItem from './TodoItem';

const ENTER = 'Enter';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todoArray: [],
            newTodo: ''
        };
    }
    addTodo(event) {
        if (event.key === ENTER) {
            this.state.todoArray.push({
                title: this.state.newTodo,
                id: new Date().getTime().toString().substr(5),
                status: 'active'
            });
            this.state.newTodo = '';

            this.forceUpdate();
        }
    }
    getNewTodo(input) {
        this.state.newTodo = input.target.value;

        this.forceUpdate();
    }
    deleteTodo(item) {
        this.state.todoArray.splice(this.state.todoArray.findIndex((elem) => elem.id === item.target.id), 1);

        this.forceUpdate();
    }
    render() {
        return <div className="list" onKeyPress={this.addTodo.bind(this)}>
            <Header defaultValue={ this.state.newTodo } getNewTodo={ this.getNewTodo.bind(this) }/>
            {this.state.todoArray.map((elem) => <TodoItem title={ elem.title } deleteTodo={ this.deleteTodo.bind(this) } id={ elem.id } key={ elem.id }/>)}
            <Footer />
        </div>;
    }
}

export default App;

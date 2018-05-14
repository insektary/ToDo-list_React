import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import TodoItem from './TodoItem';

const ENTER = 'Enter';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todoArray: [],
            newTodo: '',
            commonOpen: true
        };
    }
    addTodo(event) {
        if (event.key === ENTER && this.state.newTodo) {
            this.state.todoArray.push({
                title: this.state.newTodo,
                id: new Date().getTime().toString().substr(5),
                open: true
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
        this.state.todoArray.splice(this.state.todoArray.findIndex((elem) => elem.id === item.target.parentNode.id), 1);

        this.forceUpdate();
    }
    changeStatus(item) {
        this.state.todoArray.some((elem) => {
            if (elem.id === item.target.parentNode.id) {
                elem.open = !elem.open;

                return true;
            }
        });

        this.state.commonOpen = this.state.todoArray.every((elem) => elem.open);

        this.forceUpdate();
    }
    checkAll() {
        this.state.commonOpen = !this.state.commonOpen;
        this.state.todoArray.forEach((elem) => elem.open = this.state.commonOpen);

        this.forceUpdate();
    }
    render() {
        return <div className="list" onKeyPress={this.addTodo.bind(this)}>
            <Header defaultValue={ this.state.newTodo } open={ this.state.commonOpen } checkAll={ this.checkAll.bind(this) } getNewTodo={ this.getNewTodo.bind(this) }/>
            {this.state.todoArray.map((elem) => <TodoItem title={ elem.title } open={ elem.open } changeStatus={ this.changeStatus.bind(this) } deleteTodo={ this.deleteTodo.bind(this) } id={ elem.id } key={ elem.id }/>)}
            <Footer />
        </div>;
    }
}

export default App;

import React from 'react';
import Header from './header/header'
import List from './list/list'
import todoStyle from './todo.module.css'

function Todo() {
    return (
        <div className={todoStyle.todo}>
            <Header></Header>
            <List></List>
        </div>
    );
}

export default Todo;

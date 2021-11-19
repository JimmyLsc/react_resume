import React from 'react';
import Header from './header/header'
import List from './list/list'
import Footer from "./footer/footer";
import "./todo.css"


function Todo() {
    return (
        <div className={"todo"}>
            <Header></Header>
            <List></List>
            <Footer></Footer>
        </div>
    );
}

export default Todo;

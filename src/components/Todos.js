import React, { Component } from 'react';
import TodoItem from "./TodoItem"

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <div>
                <TodoItem key={todo.id} todo={todo}  markCompleted={this.props.markCompleted} delTodo={this.props.delTodo} />
            </div>
        ));
    }
  }
  
export default Todos;

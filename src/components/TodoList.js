import React from 'react';
import Item from './TodoItem';

class TodoList extends React.Component {
    render() {
        return (


            <section>
                <h2>todolist</h2>
                <Item />
            </section>
        )
    }
}

export default TodoList;
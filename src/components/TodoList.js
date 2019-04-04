import React from 'react';
import Item from './TodoItem';

class TodoList extends React.Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo List</h3>
                {items.map((item) => {
                    return (
                        <Item key={item.id} title={item.title} handleDelete={() => { handleDelete(item.id) }} />
                    )
                })}
            </ul>
        )
    }
}

export default TodoList;
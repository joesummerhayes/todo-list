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
                        <Item
                            key={item.id}
                            title={item.title}
                            handleEdit={() => handleEdit(item.id)}
                            handleDelete={() => { handleDelete(item.id) }}
                        />
                    )
                })}
                <button
                    type="button"
                    className="btn btn-danger btn-block text-uppercase mt-5"
                    onClick={clearList}
                > Clear List</button>
            </ul>
        )
    }
}

export default TodoList;
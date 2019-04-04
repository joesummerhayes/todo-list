import React from 'react';

class Item extends React.Component {

    render() {
        const { key, handleDelete, title } = this.props;
        return (
            <li>{title}</li>
        )
    }
}


export default Item;
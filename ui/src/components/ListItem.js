import React, { Component } from 'react';

const ItemData = [
    {
        id: 1,
        title: 'Тестовая страница для демо React-Router'
    },
    {
        id: 2,
        title: 'Lorem Ipsum'
    },
    {
        id: 3,
        title: 'Lorem Ipsum'
    },
    {
        id: 4,
        title: 'Lorem Ipsum'
    },
    {
        id: 5,
        title: 'Lorem Ipsum'
    }
];
export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ItemData[props.match.params.id - 1]
        }
        console.log(props.match.params.id);
    }
    render() {
        return (
            <div className="ListItem">
                <h1>{this.state.item.title}</h1>
            </div>
        );
    }
}
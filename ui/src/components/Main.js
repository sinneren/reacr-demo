import React, { Component } from 'react';
import List from './List';

const AppData = {
    items: [
        {
            id: 1,
            title: 'Ссылка на тестовую страницу для демо React-Router',
            date: '19.10.2017'
        },
        {
            id: 2,
            title: 'Lorem Ipsum it Dolore sit amet',
            date: '12.10.2017'
        }
    ]
}

export default class Main extends Component {
    render() {
        return (
            <div className="Main">
                <h1>Демо React</h1>
                <List data={AppData} />
            </div>
        );
    }
}
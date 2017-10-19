import React, { Component } from 'react';
import MainList from './MainList';
const AppData = {
    items: [
        {
            id: 1,
            title: 'Lorem Ipsum it Dolore sit amet',
            date: '12.10.2017'
        },
        {
            id: 2,
            title: 'Lorem Ipsum it Dolore sit amet',
            date: '12.10.2017'
        },
        {
            id: 3,
            title: 'Lorem Ipsum it Dolore sit amet',
            date: '12.10.2017'
        },
        {
            id: 4,
            title: 'Lorem Ipsum it Dolore sit amet',
            date: '12.10.2017'
        },
        {
            id: 5,
            title: 'Lorem Ipsum it Dolore sit amet',
            date: '12.10.2017'
        }
    ]
}

export default class Main extends Component {
    render() {
        return (
            <div className="Main">
                <MainList data={AppData} />
            </div>
        );
    }
}
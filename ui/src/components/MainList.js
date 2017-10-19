import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.data.items
        }
        console.log(this.state.list);
    }
    render() {
        const list = this.state.list.map((item) => {
            return <Link to={'items/' + item.id} key={item.id} className="ListItem">{item.title} <small>({item.date})</small></Link>;
        });
        return (
            <div className="List">
                {list}
            </div>
        );
    }
}
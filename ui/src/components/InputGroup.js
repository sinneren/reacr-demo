import React, { Component } from 'react';
export default class InputGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            stateless: 0
        }
    }
    inputMoneyChange(e) {
        if (e.target.value.length > 0) {
            const val = e.target.value.replace(/₽/gi, '').replace(/ /g, '');
            this.setState({ value: val });
            if (e.target.value.length === 1) {
                this.setState({ stateless: 1 });
            }
        } else {
            this.setState({ stateless: 0 });
        }
    }
    render() {
        return (
            <div className="CalcTable_Input">
                <input type="text" placeholder="Зарплата" />
                <input type="text" placeholder={this.state.value + ' ₽'} value={this.state.value + ' ₽'} onChange={value => this.inputMoneyChange(value)} />
            </div>
        );
    }
}
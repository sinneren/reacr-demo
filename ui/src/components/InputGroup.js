import React, { Component } from 'react';
export default class InputGroup extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        if (e.target.value.length > 0) {
            const val = e.target.value.replace(/₽/gi, '').replace(/ /g, '');
            this.props.onInputChange(val, 1)
        } else {
            this.props.onInputChange(0, 0)
        }
    }
    render() {
        let val = this.props.sum;
        return (
            <div className="CalcTable_Input">
                <input type="text" placeholder="Зарплата" />
                <input type="text" placeholder={val + ' ₽'} value={(val > 0) ? val + ' ₽' : ''} onChange={this.onChange} />
            </div>
        );
    }
}
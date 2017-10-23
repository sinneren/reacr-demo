import React, { Component } from 'react';
export default class InputGroup extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        //const val = e.target.value.replace(/₽/gi, '').replace(/ /g, '');
        if (this.props.onInputDebitChange) {
            this.props.onInputDebitChange(this.props.id, e.target.value, e.target.value.length);
        } else {
            this.props.onInputCreditChange(this.props.id, e.target.value, e.target.value.length);
        }
    }
    render() {
        let val = this.props.sum;
        return (
            <div className="CalcTable_Input">
                <input type="text" placeholder="Зарплата" />
                <input type="text" placeholder='0 ₽' id={this.props.id} value={(val > 0) ? val : ''} onChange={this.onChange} />
            </div>
        );
    }
}
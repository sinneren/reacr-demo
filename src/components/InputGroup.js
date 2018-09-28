import React, { Component } from 'react';
export default class InputGroup extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    onChange(e) {
        let val = e.currentTarget.value;
        if (!this.isNumeric(val)) {
            return false;
        }
        if (this.props.onInputDebitChange) {
            this.props.onInputDebitChange(this.props.id, val, val.length);
        } else {
            this.props.onInputCreditChange(this.props.id, val, val.length);
        }
    }
    render() {
        let val = this.props.sum;
        return (
            <div className="CalcTable_Input">
                <input type="text" placeholder={this.props.placeholder} />
                <input type="text" placeholder='0 ₽' id={this.props.id} value={(val > 0) ? val : ''} onChange={this.onChange} />
            </div>
        );
    }
}
import React, { Component } from 'react';
import InputGroup from './InputGroup';

export default class Calc extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = {
            value: 0,
            stateless: 0
        }
    }
    onInputChange(value, stateless) {
        console.log(this);
       this.setState({
           value: parseInt(value),
           stateless: stateless
       })
    }
    render() {
        const value = this.state.value;
        return (
            <div className="Calc">
                <h1>Калькулятор</h1>
                <div className="CalcWrapper">
                    <div className="CalcTable">
                        <div className="CalcTable_Wrapper">
                            <div>Заработок</div>
                            <InputGroup sum={value} onInputChange={this.onInputChange} />
                        </div>
                    </div>
                    <div className="CalcSeparator">&ndash;</div>
                    <div className="CalcTable">
                        <div className="CalcTable_Wrapper">
                            <div>Траты</div>
                            <InputGroup sum={value} onInputChange={this.onInputChange} />
                        </div>
                    </div>
                    <div className="CalcSeparator">=</div>
                    <div className="CalcSum">0</div>
                </div>
            </div>
        );
    }
}
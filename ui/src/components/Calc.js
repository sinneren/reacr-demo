import React, { Component } from 'react';
import InputGroup from './InputGroup';

export default class Calc extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Calc">
                <h1>Калькулятор</h1>
                <div className="CalcWrapper">
                    <div className="CalcTable">
                        <div className="CalcTable_Wrapper">
                            <div>Заработок</div>
                            <InputGroup />
                        </div>
                    </div>
                    <div className="CalcSeparator">&ndash;</div>
                    <div className="CalcTable">
                        <div className="CalcTable_Wrapper">
                            <div>Траты</div>
                            <InputGroup />
                        </div>
                    </div>
                    <div className="CalcSeparator">=</div>
                    <div className="CalcSum">0</div>
                </div>
            </div>
        );
    }
}
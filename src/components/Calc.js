import React, { Component } from 'react';
import InputGroup from './InputGroup';

export default class Calc extends Component {
    constructor(props) {
        super(props);
        this.onInputDebitChange = this.onInputDebitChange.bind(this);
        this.onInputCreditChange = this.onInputCreditChange.bind(this);
        this.state = {
            debit: [
                {
                    value: 0,
                }
            ],
            credit: [
                {
                    value: 0
                }
            ],
            summary: 0
        }
    }
    calculateSum() {
        let debitArr = this.state.debit;
        let creditArr = this.state.credit;
        let debitSum = 0;
        let creditSum = 0;

        for (let arrLength = debitArr.length; arrLength >= 0; arrLength--) {
            if (arrLength !== 0) {
                debitSum += parseInt(+debitArr[arrLength - 1].value, 10)
            }
        }
        for (let arrLength = creditArr.length; arrLength >= 0; arrLength--) {
            if (arrLength !== 0) {
                creditSum += parseInt(+creditArr[arrLength - 1].value, 10)
            }
        }
        let summary = debitSum - creditSum;
        this.setState({
            summary: summary
        });
    }
    onInputDebitChange(id, val, st) {
        let valuesArr = this.state.debit;
        valuesArr[id] = {
            value: parseInt(+val, 10)
        }
        this.setState({
            debit: valuesArr
        });
        if (st === 1) {
            if (id !== valuesArr.length - 2) {
                valuesArr.push({ value: 0 });
                this.setState({
                    debit: valuesArr
                });
            }
        } else if (st === 0) {
            valuesArr.pop();
            this.setState({
                debit: valuesArr
            });
        }
        this.calculateSum();
    }
    onInputCreditChange(id, val, st) {
        let valuesArr = this.state.credit;
        valuesArr[id] = {
            value: parseInt(+val, 10)
        }
        this.setState({
            credit: valuesArr
        });
        if (st === 1) {
            if (id !== valuesArr.length - 2) {
                valuesArr.push({ value: 0 });
                this.setState({
                    credit: valuesArr
                });
            }
        } else if (st === 0) {
            valuesArr.pop();
            this.setState({
                credit: valuesArr
            });
        }
        this.calculateSum();
    }
    render() {
        const debitInputs = [];
        this.state.debit.forEach((item,index) => {
            debitInputs.push(<InputGroup placeholder="Зарплата" sum={item.value} key={index} id={index} onInputDebitChange={this.onInputDebitChange} />);
        });
        const creditInputs = [];
        this.state.credit.forEach((item, index) => {
            creditInputs.push(<InputGroup placeholder="Аренда" sum={item.value} key={index} id={index} onInputCreditChange={this.onInputCreditChange} />);
        });
        return (
            <div className="Calc">
                <h1>Калькулятор</h1>
                <div className="CalcWrapper">
                    <div className="CalcTable">
                        <div className="CalcTable_Wrapper">
                            <div>Заработок</div>
                            {debitInputs}
                        </div>
                    </div>
                    <div className="CalcSeparator">&ndash;</div>
                    <div className="CalcTable">
                        <div className="CalcTable_Wrapper">
                            <div>Траты</div>
                            {creditInputs}
                        </div>
                    </div>
                    <div className="CalcSeparator">=</div>
                    <div className="CalcSum">{this.state.summary}</div>
                </div>
            </div>
        );
    }
}
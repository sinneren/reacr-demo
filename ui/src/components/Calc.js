import React, { Component } from 'react';

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
                        <svg className="CalcTable_Left" xmlns="http://www.w3.org/2000/svg" width="16" height="100%" viewBox="0 0 16 126" version="1.1" preserveAspectRatio="none">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <path d="M15.7 125C7.6 125 1 97.2 1 63 1 28.8 7.6 1 15.7 1" stroke="#0000FF" stroke-width="0.5"></path>
                            </g>
                        </svg>
                        <svg className="CalcTable_Right" xmlns="http://www.w3.org/2000/svg" width="15" height="100%" viewBox="0 0 15 126" version="1.1" preserveAspectRatio="none">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <path d="M14.7 125C6.6 125 0 97.2 0 63 0 28.8 6.6 1 14.7 1" stroke="#0000FF" stroke-width="0.5" transform="translate(7.335000, 63.000000) scale(-1, 1) translate(-7.335000, -63.000000) "></path>
                            </g>
                        </svg>
                        <div className="CalcTable_Wrapper">
                            <div>Заработок</div>
                            <div className="CalcTable_Input">
                                <input type="text" placeholder="Зарплата" />
                                <input type="text" placeholder="0 Р" />
                            </div>
                        </div>
                    </div>
                    <div className="CalcSeparator">&ndash;</div>
                    <div className="CalcTable">
                        <svg className="CalcTable_Left" xmlns="http://www.w3.org/2000/svg" width="16" height="100%" viewBox="0 0 16 126" version="1.1" preserveAspectRatio="none">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <path d="M15.7 125C7.6 125 1 97.2 1 63 1 28.8 7.6 1 15.7 1" stroke="#0000FF" stroke-width="0.5"></path>
                            </g>
                        </svg>
                        <svg className="CalcTable_Right" xmlns="http://www.w3.org/2000/svg" width="15" height="100%" viewBox="0 0 15 126" version="1.1" preserveAspectRatio="none">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <path d="M14.7 125C6.6 125 0 97.2 0 63 0 28.8 6.6 1 14.7 1" stroke="#0000FF" stroke-width="0.5" transform="translate(7.335000, 63.000000) scale(-1, 1) translate(-7.335000, -63.000000) "></path>
                            </g>
                        </svg>
                        <div className="CalcTable_Wrapper">
                            <div>Траты</div>
                            <div className="CalcTable_Input">
                                <input type="text" placeholder="Зарплата" />
                                <input type="text" placeholder="0 Р" />
                            </div>
                        </div>
                    </div>
                    <div className="CalcSeparator">=</div>
                    <div className="CalcSum">0</div>
                </div>
            </div>
        );
    }
}
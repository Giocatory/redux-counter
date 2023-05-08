import React from 'react';

export default class Counter extends React.Component {
    render() {
        return (
                    <div className='container'>
                        <button className='buttons' onClick={this.props.decreaseCount}>-</button>
                        <span className='countValue'>{this.props.countValue}</span>
                        <button className='buttons' onClick={this.props.increaseCount}>+</button>
                    </div>
                );
    }
}

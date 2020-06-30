import React, { Component } from 'react';


class Item extends Component {
   
    render() {
        return (
            <div>
                    <input type='checkbox' checked={this.props.completed}/>
                    <label>{this.props.task}</label>
            </div>
            
        )
    }
    
}

export default Item;
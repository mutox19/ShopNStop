import React, {Component} from 'react';

import { connect } from 'react-redux'

import { AddGroceryById } from '../Action'

class Grocery extends Component{
    render(){
        
        
        return(
            <div className="col-md-3 grocery-bg">
                <h2 className="text-center">Grocery Items</h2>
                <ul className="list-group">
                    {this.props.grocery.map((item) => {
                        return  <li key={item.id} className="list-group-item"
                        onClick={()=>this.props.AddGroceryById(item.id)}>
                            <b>{item.name}</b> - <span className="list-group-item-success">${item.cost}</span>  - 
                            <span className="list-group-item-warning"> {item.calories} KCal</span> - 
                            <span className="list-group-item-primary"> {item.weight} mg</span></li>
                    })}
                </ul>
            </div>
        );
    }
}


function MapStateToProps(state)
{
    
    return {
        grocery: state.grocery
    }
}

export default connect(MapStateToProps, { AddGroceryById})(Grocery); 
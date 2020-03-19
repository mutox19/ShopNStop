import React, {Component} from 'react';

import { connect } from 'react-redux'

import { RemoveGroceryById } from '../Action'


class ShoppingBag extends Component{


    DisplayShoppingBag()
    {
        if(this.props.shoppingBag.length > 0)
        {
            return(
                <div className="col-md-6 shopping-bag-bg">
                    <ul className="list-group">
                        {this.props.shoppingBag.map((item) => {
                            return  <li key={item.id} className="list-group-item"
                            onClick={()=>this.props.RemoveGroceryById(item.id)}>
                                <b>{item.name}</b> - <span className="list-group-item-success">${item.cost}</span>  - 
                                <span className="list-group-item-warning"> {item.calories} KCal</span> - 
                                <span className="list-group-item-primary"> {item.weight} mg</span></li>
                        })}
                    </ul>
                </div>
            );
        }
        else
        {
            return(
                <div className="col-md-6 shopping-bag-bg">
                    <ul className="list-group">
                      <li>Please Add to the bag</li>
                    </ul>
                </div>
            );
        }
    }
    render(){
        return(
            <div className="col-md-6 shopping-bag-bg">
                <h1>Shopping Bag</h1>
                <ul className="list-group">
                  {this.DisplayShoppingBag()}
                </ul>
            </div>
        );
    }
}

function MapStateToProps(state)
{
    
    return {
        shoppingBag: state.shoppingBag
    }
}

export default connect(MapStateToProps, { RemoveGroceryById})(ShoppingBag); 
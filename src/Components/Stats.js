import React, {Component} from 'react';
import { connect } from 'react-redux'

class Stats extends Component{
    Cost()
    {
        let totalCost = 0;
        this.props.shoppingBag.forEach(item => totalCost += item.cost);
        return totalCost;
    }
    Calories()
    {
        let totalCalories = 0;
        this.props.shoppingBag.forEach(item => totalCalories += item.calories);
        return totalCalories;
    }
    Weight()
    {
        let totalWeight = 0;
        this.props.shoppingBag.forEach(item => totalWeight += item.weight);
        return totalWeight;
    }
    render(){
        
        
        return(
            <div className="col-md-2 stats-bg">
                <h2>Stats</h2>
                <ul className="list-group">
        <li className="list-group-item">Cost - ${this.Cost()}</li>
                    <li className="list-group-item">Kal - {this.Calories()}KCal</li>
                    <li className="list-group-item">Weight - {this.Weight()}mg</li>
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

export default connect(MapStateToProps, null)(Stats); 
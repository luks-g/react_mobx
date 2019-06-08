import React from 'react';
import {observer} from 'mobx-react'

class Product extends React.Component{

    handleClick = () => {
        this.props.onBuyClick(this.props.id);
    }
    render(){
        let style={fontWeight: 900};
        return(
            <div>
                <span>
                {
                    this.props.promo 
                    ? 
                    <span style={style}>
                        {this.props.name}
                     </span>
                    : 
                    <span >
                        {this.props.name}

                    </span>
                }
                </span>
                <button 
                    onClick={this.handleClick}>
                    Buy
                </button>
            </div>
        )
    }
}
export default observer(Product);
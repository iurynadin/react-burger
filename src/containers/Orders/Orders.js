import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => { //getting back a object
                const fetchedOrdes = [];
                for (let key in res.data) {
                    fetchedOrdes.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, orders: fetchedOrdes });
                // console.log(res.data, fetchedOrdes);
            }).catch(err => {
                this.setState({ loading: false });
            })
    }

    render () {
        return (
            
            <div>
                {this.state.orders.map(order=>(
                    <Order key={order.id} 
                    ingredients={order.ingredients} 
                    price={order.price} />
                ))}
            </div>
        );
    }
}

// export default Orders;
export default withErrorHandler(Orders, axios);
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/Auth_Context';
import DetailsHadingPart from '../../Components/DetailsHadingPart/DetailsHadingPart';
import OrderStatus from '../../Components/OrderStatus/OrderStatus';

const OrderDetails = () => {
    const { user } = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/details?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    console.log(orders);
    return (
        <div className='container mx-auto'>
            <DetailsHadingPart Children={'Order Details'}></DetailsHadingPart>

            <div className="grid lg:grid-cols-2 gap-12 pb-10">
                {
                    orders.map(order => <OrderStatus key={order._id} order={order}></OrderStatus>)
                }
            </div>
        </div>
    );
};

export default OrderDetails;
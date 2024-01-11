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

    const handleStatus = id => {
        fetch(`http://localhost:5000/service/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({status: 'Complete'})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(booking => booking._id !== id);
                    const updated = orders.find(booking => booking._id === id);
                    updated.status = 'Complete';
                    const newBooking = [updated, ...remaining];
                    setOrders(newBooking)
                }
            })
    }
    return (
        <div className='container mx-auto'>
            <DetailsHadingPart Children={'Order Details'}></DetailsHadingPart>

            <div className="grid lg:grid-cols-2 gap-12 pb-10">
                {
                    orders.map(order => <OrderStatus key={order._id} order={order}
                    handleStatus={handleStatus}
                    ></OrderStatus>)
                }
            </div>
        </div>
    );
};

export default OrderDetails;
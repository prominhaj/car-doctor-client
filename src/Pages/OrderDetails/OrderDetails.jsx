import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/Auth_Context';
import DetailsHadingPart from '../../Components/DetailsHadingPart/DetailsHadingPart';
import OrderStatus from '../../Components/OrderStatus/OrderStatus';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const OrderDetails = () => {
    const { user } = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    const url = `https://car-doctor-server-rho-eight.vercel.app/details?email=${user?.email}`;
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setOrders(data)
                }
                else{
                    navigate('/')
                }
            })
    }, [url, navigate])

    const handleStatus = id => {
        fetch(`https://car-doctor-server-rho-eight.vercel.app/service/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: 'Complete' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(booking => booking._id !== id);
                    const updated = orders.find(booking => booking._id === id);
                    updated.status = 'Complete';
                    const newBooking = [updated, ...remaining];
                    setOrders(newBooking)
                }
            })
    }

    const deleteOrder = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be Deleted",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-rho-eight.vercel.app/service/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            const remaining = orders.filter(order => order._id !== id);
                            setOrders(remaining)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    return (
        <div className='container mx-auto'>
            <DetailsHadingPart Children={'Order Details'}></DetailsHadingPart>

            <div className="grid lg:grid-cols-2 gap-12 pb-10">
                {
                    orders.map(order => <OrderStatus key={order._id} order={order}
                        handleStatus={handleStatus}
                        deleteOrder={deleteOrder}
                    ></OrderStatus>)
                }
            </div>
        </div>
    );
};

export default OrderDetails;
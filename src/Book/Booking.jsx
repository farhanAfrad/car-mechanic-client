import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import checkout from '../../src/assets/images/checkout/checkout.png';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Booking = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext)
    const [message, setMessage] = useState('');
    const { _id, title, price, img } = service;
    const handleTextArea = e =>{
        setMessage(e.target.value);
    }
    const handleOnSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.  name.value;
        const date = form.date.value;
        const email = user?.email;
        const phone = form.phone.value;

        const orderedService = {
            serviceId: _id,
            name,
            date,
            email,
            phone,
            message,
            title,
            price,
            img
        }

        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(orderedService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('oder confirmed')
            }
        })
        console.log(orderedService);
    }
    return (
        <div>
            <p>Title:{title}</p>
            <div>
                <div className='relative'>
                    <img src={checkout} alt="" className='w-full' />
                    <div className='absolute top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full rounded-xl flex items-center'>
                        <span className='text-white text-5xl font-bold ml-24'>Check Out</span>
                    </div>
                </div>
                <div className='bg-[#F3F3F3] my-20 p-24 rounded-md'>

                    <form className="card-body" onSubmit={handleOnSubmit}>
                        <div className='grid grid-cols-2 gap-6 mb-6'>
                            <div className="form-control">
                                <input type="text" placeholder="Name" className="input input-bordered" name='name' required />
                            </div>
                            <div className="form-control">
                                <input type="Date" placeholder="Last Name" className="input input-bordered" name='date' required />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Your Phone" className="input input-bordered" name='phone' required />
                            </div>
                            <div className="form-control">
                                <input type="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" name='email' required />
                            </div>
                        </div>

                        <div className="form-control">
                            <textarea value={message} onChange={handleTextArea} name="" id="" cols="30" rows="10" className='rounded-lg p-4' placeholder='Your Message'></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value='Order Confirm' className="bg-[#FF3811] rounded-md text-white text-xl font-semibold py-3 active:scale-95 transition-transform cursor-pointer" />
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default Booking;
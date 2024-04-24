import { useEffect, useState } from 'react';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    console.log(services.length);
    return (
        <div className='mb-28'>
            <div className='text-center mb-12'>
                <h4 className='text-xl text-[#FF3811] font-bold mb-2'>Service</h4>
                <h2 className='text-5xl font-bold mb-5'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                {
                    services.map(service => <div key={service._id} className="rounded-lg border">
                        <figure className="px-8 pt-8">
                            <img src={service.img} alt="Shoes" className="rounded-lg h-60" />
                        </figure>
                        <div className="px-8 pb-8">
                            <h2 className="card-title my-5">{service.title}</h2>
                            <div className='flex justify-between items-center'>
                                <p className='text-xl font-medium text-[#FF3811]'>Price : {service.price}</p>
                                <GoArrowRight className='text-[#FF3811] text-xl'></GoArrowRight>
                            </div>
                            <Link to={`/book/${service._id}`}>
                                <button className='bg-[#FF3811] active:scale-95 transition-transform text-white px-3 py-2 rounded-lg mt-5'>Book now</button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default Services;
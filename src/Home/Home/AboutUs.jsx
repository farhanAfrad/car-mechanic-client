import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'


const AboutUs = () => {
    return (
        <div className="my-32">
            <div className="flex flex-col lg:flex-row gap-16">
                <div className="w-1/2 relative">
                   <img src={person} className="rounded-lg w-11/12 h-[400px]"/>
                   <img src={parts} alt="" className='w-2/3 absolute right-0 top-1/2 rounded-lg border-8 border-white h-[280px]'/>
                </div>
                <div className="w-2/5">
                    <h3 className='text-[#FF3811] text-lg font-semibold'>About Us</h3>
                    <h1 className="text-5xl font-bold mt-5 mb-8">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] mt-10 text-white px-8">Get More</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
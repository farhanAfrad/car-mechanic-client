
import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'

const Slider = () => {
    return (
        <div className="carousel w-full rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full h-[600px]" />
                <div className='absolute flex items-center w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] p-24'>
                    <div className='w-2/5 space-y-7'>
                        <h2 className='text-6xl text-white'>Affordable<br></br> Price For Car Servicing</h2>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        bu
                        <div className='space-x-5'>
                            <button className="btn bg-[#FF3811] text-white">Discover More</button>
                            <button className='btn btn-primary'>Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute right-12 transform bottom-12">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full h-[600px]" />
                <div className='absolute flex items-center w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] p-24'>
                    <div className='w-2/5 space-y-7'>
                        <h2 className='text-6xl text-white'>Affordable<br></br> Price For Car Servicing</h2>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        bu
                        <div className='space-x-5'>
                            <button className="btn bg-[#FF3811] text-white">Discover More</button>
                            <button className='btn btn-primary'>Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute right-12 transform bottom-12">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full h-[600px]" />
                <div className='absolute flex items-center w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] p-24'>
                    <div className='w-2/5 space-y-7'>
                        <h2 className='text-6xl text-white'>Affordable<br></br> Price For Car Servicing</h2>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        bu
                        <div className='space-x-5'>
                            <button className="btn bg-[#FF3811] text-white">Discover More</button>
                            <button className='btn btn-primary'>Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute right-12 transform bottom-12">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full h-[600px]" />
                <div className='absolute flex items-center w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] p-24'>
                    <div className='w-2/5 space-y-7'>
                        <h2 className='text-6xl text-white'>Affordable<br></br> Price For Car Servicing</h2>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        bu
                        <div className='space-x-5'>
                            <button className="btn bg-[#FF3811] text-white">Discover More</button>
                            <button className='btn btn-primary'>Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute right-12 transform bottom-12">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;
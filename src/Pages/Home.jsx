import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative p-3">
                                <img
                                    src="images/clothify-1.jpg" className='img-fluid rounded-3' alt="clothify-1" />
                                <div className="main-banner-content position-absolute">
                                    <h4>Welcome To</h4>
                                    <h5 className='text-white'>Clothify Me</h5>
                                    <p className='text-white'>Your styling, our Priority</p>
                                    <Link className='button'>Make an Order Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                                <div className="small-banner position-relative p-3">
                                    <img
                                        src="images/clothify-9.png" className='img-fluid rounded-3' alt="clothify-9" />
                                    <div className="small-banner-content position-absolute">
                                        <h5 className='text-white'>Welcome To</h5>
                                        <p className='clothify-m'>Your styling, our Priority</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3">
                                    <img
                                        src="images/clothify-2.jpg" className='img-fluid rounded-3' alt="clothify-2" />
                                    <div className="small-banner-content position-absolute">
                                        <h4></h4>
                                        <h5 className='text-white'></h5>
                                        <p className='text-white'></p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3">
                                    <img
                                        src="images/clothify-3.jpg" className='img-fluid rounded-3' alt="clothify-3" />
                                    <div className="small-banner-content position-absolute">
                                        <h4></h4>
                                        <h5 className='text-white'></h5>
                                        <p className='text-white'></p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3">
                                    <img
                                        src="images/clothify-05.jpg" className='img-fluid rounded-3' alt="clothify-05" />
                                    <div className="small-banner-content position-absolute">
                                        <h4></h4>
                                        <h5 className='text-white'></h5>
                                        <p className='text-white'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;

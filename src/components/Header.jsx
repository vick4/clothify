import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';
const Header = () => {
    return (
        <>
            <header className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'>
                                Your styling, our Priority
                            </p>
                        </div>
                        <div className='col-6'>
                            <p className='text-end text-white mb-0' >
                                Hotline:
                                <a className='text-white' href='tel:+234 8134089928'>
                                    +234 813408928
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

            </header>
            <header className='header-upper py-3'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <h2>
                                <Link className='text-white'>CLOTHIFY ME</Link>
                            </h2>
                        </div>
                        <div className='col-5'>
                            <div className="input-group">
                                <input type="text" className="form-control py-1" placeholder="Serach Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                                <span className="input-group-text p-2" id="basic-addon2"> <BsSearch className='fs-6' /> </span>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='header-upper-links d-flex align-items-center justify-content-between'>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='images/user img.png' alt='user' />
                                        <p className='mb-0'>
                                            compare <br /> Products
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='images/love.png' alt='love' />
                                        <p className='mb-0'>
                                            Favourite <br /> wishlist
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='images/bag.png' alt='bag' />
                                        <p className='mb-0'>
                                            Log in <br /> My Account
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='images/basket.png' alt='basket' />
                                        <div className='d-flex flex-column gap-10'>
                                            <span className="badge bg-white text-dark">0</span>
                                            <p className='mb-0'>$ 500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                    <div class="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-1Lin d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src='images/menu.png' alt='' />
                                            <span className='me-5 d-inline-block'>Shop Categories</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link className="dropdown-item text-white" to="">Sweater</Link></li>
                                            <li><Link className="dropdown-item text-white" to="">Denim</Link></li>
                                            <li><Link className="dropdown-item text-white" to="">Workwear</Link></li>
                                            <li><Link className="dropdown-item text-white" to="">Outwear</Link></li>
                                            <li><Link className="dropdown-item text-white" to="">Tops and Tees</Link></li>
                                            <li><Link className="dropdown-item text-white" to="">Pants and Bottom</Link></li>
                                            <li><Link className="dropdown-item text-white" to="">Dresses</Link></li>
                                            <li><Link className="dropdown-item text-white" to="">Lounge</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <div className="d-flex align-itmes-center gap-15">
                                        <NavLink to="/">Resources</NavLink>
                                        <NavLink to="/">Customers</NavLink>
                                        <NavLink to="/">Workwear</NavLink>

                                        <NavLink to="/">Tops & Tees</NavLink>
                                        <NavLink to="/">Pants & Bottoms</NavLink>
                                        <NavLink to="/">Dresses</NavLink>
                                        <NavLink to="/">Support</NavLink>
                                        <NavLink to="/athleisure">Athleisure</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header

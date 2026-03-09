import React from 'react'
import Button from '../ui/Button'
import { RiAccountPinCircleFill, RiAB } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    let navigate = useNavigate()
    return (
        <header class="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7 bg-navbar">
            <nav class="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
                <div class="lg:col-span-3 flex items-center">

                    <Link class="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80" to="/" aria-label="Preline">
                        Campa
                    </Link>

                    <div class="ms-1 sm:ms-2">

                    </div>
                </div>

                <div class="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">

                    {/* <Button
                        icon={<RiAB />}
                    /> */}
                    {/* <Button icon={<RiAccountPinCircleFill />} /> */}
                    <Button onClick={() => navigate('/login')} title={"sign in"} icon={<RiAccountPinCircleFill />} />


                </div>
                <div id="hs-pro-hcail" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6" aria-labelledby="hs-pro-hcail-collapse" role="region">
                    <div class="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
                        <div>
                            <Link to="/" class="relative inline-block text-foreground focus:outline-hidden before:absolute before:bottom-0.5 before:start-0 before:w-full before:h-1 before:bg-primary" aria-current="page">Home</Link>
                        </div>
                        {/* <div>
                            <Link class="relative inline-block text-foreground focus:outline-hidden " to="#">Listings</Link>
                        </div>
                        <div>
                            <Link class="relative inline-block text-foreground focus:outline-hidden " to="#">Product</Link>
                        </div>
                        <div>
                            <Link class="relative inline-block text-foreground focus:outline-hidden " to="#">Bag</Link>
                        </div>
                        <div>
                            <Link class="relative inline-block text-foreground focus:outline-hidden " to="#">Checkout</Link>
                        </div> */}
                        <div>
                            <Link class="relative inline-block text-foreground focus:outline-hidden " to="/register">Register</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
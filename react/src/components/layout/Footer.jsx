import React from 'react'
import { FaFacebook, FaLinkedin, FaApple, FaGithub, FaGoogle } from "react-icons/fa";



function Footer() {
    return (
        <footer class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
            <div class="text-center">
                <div>
                    <a class="flex-none text-xl font-semibold text-foreground" href="#" aria-label="Brand">Brand</a>
                </div>

                <div class="mt-3">
                    <p class="text-muted-foreground-1">We're part of the <a class="text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">Htmlstream</a> family.</p>
                    <p class="text-muted-foreground-1">
                        © 2026 Preline Labs.
                    </p>
                </div>

                <div class="mt-3 space-x-2">
                    <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-muted-foreground-1 hover:bg-muted-hover focus:outline-hidden focus:bg-muted-focus disabled:opacity-50 disabled:pointer-events-none" href="#">
                        <FaGoogle />
                    </a>
                    <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-muted-foreground-1 hover:bg-muted-hover focus:outline-hidden focus:bg-muted-focus disabled:opacity-50 disabled:pointer-events-none" href="#">
                        <FaApple />
                    </a>
                    <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-muted-foreground-1 hover:bg-muted-hover focus:outline-hidden focus:bg-muted-focus disabled:opacity-50 disabled:pointer-events-none" href="#">
                        <FaFacebook />
                    </a>
                    <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-muted-foreground-1 hover:bg-muted-hover focus:outline-hidden focus:bg-muted-focus disabled:opacity-50 disabled:pointer-events-none" href="#">
                        <FaGithub />
                    </a>
                    <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-muted-foreground-1 hover:bg-muted-hover focus:outline-hidden focus:bg-muted-focus disabled:opacity-50 disabled:pointer-events-none" href="#">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
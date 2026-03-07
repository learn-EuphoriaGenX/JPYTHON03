import React from 'react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

function Login() {
    return (
        <div className='w-full h-full flex items-center justify-center py-20'>
            <div class="bg-card border border-card-line rounded-xl shadow-2xl">
                <div class="p-4 sm:p-7">
                    <div class="text-center">
                        <h3 id="hs-modal-signin-label" class="block text-2xl font-bold text-foreground">Sign in</h3>
                        <p class="mt-2 text-sm text-muted-foreground-2">
                            Don't have an account yet?
                            <a class="text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">
                                Sign up here
                            </a>
                        </p>
                    </div>

                    <div class="mt-5">
                        <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-layer-focus" href="#">
                            <svg class="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                                <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                                <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                                <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                            </svg>
                            Sign in with Google
                        </a>

                        <div class="py-3 flex items-center text-xs text-muted-foreground uppercase before:flex-1 before:border-t before:border-line-2 before:me-6 after:flex-1 after:border-t after:border-line-2 after:ms-6">Or</div>

                        <form>
                            <div class="grid gap-y-4">

                                <Input label={"Email Address"} type={"email"} name={"email"} placeholder={"johndoe@gmail.com"} />
                                <Input label={"Password"} type={"password"} name={"password"} placeholder={"your password"} />

                                <div class="flex items-center">
                                    <div class="flex">
                                        <input id="checkbox" name="checkbox" type="checkbox" class="shrink-0 size-4 bg-transparent border-line-3 rounded-sm shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none" />
                                    </div>
                                    <div class="ms-3">
                                        <label for="checkbox" class="text-sm text-foreground">
                                            Remember me
                                        </label>
                                    </div>
                                </div>

                                <Button title={"Sign in"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
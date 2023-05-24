<script setup>
import {ref} from 'vue'

const isOpen = ref(false)
</script>

<template>
    <!-- header -->
    <header class="py-4 shadow-sm bg-pink-100 lg:bg-white">
        <div class="container flex items-center justify-between">
            <!-- logo -->
            <RouterLink to="/" class="block w-32">
                <img src="/images/logo.svg" alt="logo" class="w-full">
            </RouterLink>
            <!-- logo end -->

            <!-- searchbar -->
            <div class="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
                <span class="absolute left-4 top-3 text-lg text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </span>
                <input type="text"
                    class="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
                    placeholder="search">
                <button type="submit"
                    class="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition">
                    Search
                </button>
            </div>
            <!-- searchbar end -->

            <!-- navicons -->
            <div class="space-x-4 flex items-center">
                <button @click="isOpen = !isOpen" class="lg:hidden relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <!-- dropdown -->
                <div v-show="isOpen = false" class="w-40 bg-gray-100 rounded-sm absolute right-5 top-12 lg:hidden">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-50 transition">Cart</a>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-50 transition">Account</a>
                </div>
                <!-- dropdown end -->
                <RouterLink to="/cart"
                    class="lg:flex flex-col items-center justify-center text-center text-gray-700 hover:text-primary transition hidden relative">
                    <span
                        class="absolute -right-3 -top-2 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">3</span>
                    <div class="text-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                    <div class="text-xs leading-3">Cart</div>
                </RouterLink>
                <RouterLink to="/account"
                    class="lg:flex flex-col items-center justify-center text-center text-gray-700 hover:text-primary transition hidden">
                    <div class="text-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </div>
                    <div class="text-xs leading-3">Account</div>
                </RouterLink>
            </div>
            <!-- navicons end -->

        </div>
    </header>
    <!-- header end -->

    <!-- navbar -->
    <nav class="bg-gray-800 hidden lg:block">
        <div class="container">
            <div class="flex">

                <!-- all category -->
                <div class="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
                    <span class="text-white">
                        <i class="fas fa-bars"></i>
                    </span>
                    <span class="capitalize ml-2 text-white">All categories</span>

                    <div
                        class="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
                        <!-- single category -->
                        <div class="relative hover-active">
                            <!-- If sub menu -->
                            <span class="absolute right-2 top-3.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                            <!-- Menu -->
                            <a href="#" class="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                <img src="images/icons/bed.svg" class="w-5 h-5 object-contain">
                                <span class="ml-6 text-gray-600 text-sm">Bedroom</span>
                            </a>
                            <!-- sub menu -->
                            <div
                                class="show-on-hover absolute left-full top-0 w-full bg-white shadow-md invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
                                <!-- single category -->
                                <a href="#" class="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                    <img src="images/icons/sofa.svg" class="w-5 h-5 object-contain">
                                    <span class="ml-6 text-gray-600 text-sm">Sofa</span>
                                </a>
                                <div class="relative hover-active">
                                    <!-- If sub menu -->
                                    <span class="absolute right-2 top-3.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </span>
                                    <!-- Menu -->
                                    <a href="#" class="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                        <img src="images/icons/office.svg" class="w-5 h-5 object-contain">
                                        <span class="ml-6 text-gray-600 text-sm">Office</span>
                                    </a>
                                    <!-- sub menu -->
                                    <div
                                        class="show-on-hover absolute left-full top-0 w-full bg-white shadow-md invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
                                        <!-- single category -->
                                        <a href="#" class="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                            <img src="images/icons/sofa.svg" class="w-5 h-5 object-contain">
                                            <span class="ml-6 text-gray-600 text-sm">Sofa</span>
                                        </a>
                                        <!-- single category -->
                                        <a href="#" class="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                            <img src="images/icons/office.svg" class="w-5 h-5 object-contain">
                                            <span class="ml-6 text-gray-600 text-sm">Office</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- single category end -->
                        <!-- single category -->
                        <a href="#" class="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                            <img src="images/icons/sofa.svg" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Sofa</span>
                        </a>
                        <!-- single category end -->
                        <!-- single category -->
                        <a href="#" class="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                            <img src="images/icons/office.svg" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Office</span>
                        </a>
                        <!-- single category end -->
                        <!-- single category -->
                        <a href="#" class="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                            <img src="images/icons/terrace.svg" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
                        </a>
                        <!-- single category end -->
                        <!-- single category -->
                        <a href="#" class="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                            <img src="images/icons/bed-2.svg" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Mattress</span>
                        </a>
                        <!-- single category end -->
                        <!-- single category -->
                        <a href="#" class="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                            <img src="images/icons/restaurant.svg" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Sofa</span>
                        </a>
                        <!-- single category end -->
                    </div>
                </div>
                <!-- all category end -->

                <!-- nav menu -->
                <div class="flex items-center justify-between flex-grow pl-12">
                    <div class="flex items-center space-x-6 text-base capitalize">
                        <RouterLink to="/" class="text-gray-200 hover:text-white transition">Home</RouterLink>
                        <RouterLink to="/shop" class="text-gray-200 hover:text-white transition">Shop</RouterLink>
                        <RouterLink to="/about" class="text-gray-200 hover:text-white transition">About us</RouterLink>
                        <RouterLink to="/contact" class="text-gray-200 hover:text-white transition">Contact us
                        </RouterLink>
                    </div>
                    <a href="tel:1234567890" class="ml-auto justify-self-end text-gray-200 hover:text-white transition">
                        Tel &nbsp; (1-234-567-890)
                    </a>
                </div>
                <!-- nav menu end -->

            </div>
        </div>
    </nav>
    <!-- navbar end -->
</template>
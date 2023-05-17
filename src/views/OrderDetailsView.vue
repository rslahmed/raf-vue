<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AccountSidebar from "@/components/AccountSidebar.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
</script>

<template>
    <Header/>

    <Breadcrumbs/>

    <div class="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <AccountSidebar/>
        <div class="mt-4 md:mt-0 lg:col-span-9 space-y-4">
            <div class="block px-4 py-5 bg-white rounded-md shadow">
                <div class="flex items-start justify-between mb-4">
                    <div class="space-y-1"><h4 class="text-xl font-semibold">Order Number <span
                            class="hover:underline hover:text-primary">#Q9YRT6N4</span></h4>
                        <div class="bg-gray-200 font-semibold rounded-full px-4 py-0.5 text-xs inline-block">Pending
                        </div>
                    </div>
                </div>
                <div class="space-y-4">
                    <div class="grid sm:grid-cols-2 gap-4">
                        <div class="shadow bg-white rounded-md p-4 w-full">
                            <div class="relative mb-3 flex justify-between items-center">
                                <div class="flex items-center">
                                    <div class="rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br w-10 h-9 flex items-center justify-center bg-primary/5">
                                        <svg class="h-6 w-6 text-gray-700" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                  stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2"></path>
                                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round"
                                                  stroke-linejoin="round" stroke-width="2"></path>
                                        </svg>
                                    </div>
                                    <h4 class="text-gray-700 pl-2">Address</h4>
                                </div>
                            </div>
                            <h3 class="font-semibold text-lg mb-1 text-gray-700">Suzon</h3>
                            <h5 class="font-semibold text-sm mb-1 text-gray-800">055437697876</h5>
                            <p class="text-gray-600 text-sm">Ati</p>
                        </div>
                        <div class="shadow bg-white rounded-md p-4 w-full">
                            <h5 class="font-semibold text-sm mb-1 text-gray-800"> Payment Status: Unpaid</h5>
                            <a class="secondary-btn" href="https://shopay.programmingkit.xyz/order/Q9YRT6N4/payment">
                                Pay now
                            </a>
                        </div>
                    </div>
                    <div class="col-span-2 rounded-md shadow bg-white overflow-hidden"><h2
                            class="font-semibold text-gray-800 px-4 py-4 bg-primary/5 text-center uppercase"> Order
                        summary </h2>
                        <div class="flex gap-4 p-4 border-b border-gray-200 pb-4">
                            <div class="flex-shrink-0">
                                <img src="https://shopay.programmingkit.xyz/storage/products/5/thumbnail/2iXpahwAnXTCSpgeNveHCUDCCiANzEtw3ElCo9Du.png"
                                     alt="product image" class="w-20 h-20 object-cover rounded-md">
                            </div>
                            <div class="flex-grow relative">
                                <div>
                                    <p class="font-semibold text-gray-800">Mackbok Pro</p>
                                </div>
                                <div class="flex justify-between items-center mt-3"><p
                                        class="text-gray-600 text-sm">$ 2500.00 x 3</p><h4
                                        class="text-primary text-lg font-bold">$ 7500.00</h4></div>
                            </div>
                        </div>
                        <div class="p-4 border-b border-gray-200">
                            <div class="flex justify-between items-center mb-3">
                                <div class="space-y-1 text-sm"><p>Subtotal</p>
                                    <p>Delivery charge</p>
                                </div>
                                <div class="space-y-1 text-right text-sm">
                                    <p>$ 7,500.00</p>
                                    <p>$ 80.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between text-sm pt-4 mt-6 border-t border-gray-200">
                    <p class="text-gray-600">
                        Order placement <b>17 May 2023</b>
                    </p>
                    <p class="flex items-center space-x-2"><span>Total price:</span>
                        <span class="text-xl text-primary font-bold">$ 7,580.00</span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <Footer/>
</template>

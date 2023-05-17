<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
    <Header/>

    <div class="container py-16 px-4">
        <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 lg:col-span-5 xl:col-span-6 space-y-6">
                <div class="rounded-md shadow bg-white overflow-hidden">
                    <h2 class="font-semibold text-gray-800 px-4 py-3 bg-primary/10 flex items-center space-x-3">
                        <span class="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">1</span>
                        <span>Customer Details</span>
                    </h2>
                    <div class="px-4 py-6 grid grid-cols-2 items-center gap-6">
                        <div><img alt="" class="w-full" src="/images/login.svg"></div>
                        <div>
                            <p>You can register our website with just one click.</p>
                            <div class="mt-4">
                                <button class="primary-btn">Login / Register now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rounded-md shadow bg-white overflow-hidden">
                    <h2 class="font-semibold text-gray-800 px-4 py-3 bg-primary/10 flex items-center space-x-3">
                        <span class="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">2</span>
                        <span>Delivery Details</span>
                    </h2>
                    <div class="p-4">
                        <h4 class="text-gray-700 font-semibold mb-2"> Delivery type </h4>
                        <div class="grid lg:grid-cols-2 gap-4">
                            <div class="shadow bg-white rounded-md p-4 transition-all hover:shadow-lg duration-300 group border cursor-pointer">
                                <div class="w-full text-left">
                                    <div class="flex justify-between items-center mb-2">
                                        <h3>Home Delivery</h3>
                                        <input class="cursor-pointer rounded-sm text-primary"
                                               type="checkbox">
                                    </div>
                                    <h4 class="text-sm text-gray-600">Good</h4>
                                    <h5>$ 80</h5>
                                </div>
                            </div>
                            <div class="shadow bg-white rounded-md p-4 transition-all hover:shadow-lg duration-300 group border cursor-pointer">
                                <div class="w-full text-left">
                                    <div class="flex justify-between items-center mb-2">
                                        <h3>Cash On delivery</h3>
                                        <input class="cursor-pointer rounded-sm text-primary"
                                               type="checkbox"></div>
                                    <h4 class="text-sm text-gray-600">Good</h4>
                                    <h5>$ 80</h5>
                                </div>
                            </div>
                            <div class="mt-2" style="display: none;"><p class="text-sm text-red-600 mt-2"></p></div>
                        </div>
                        <h4 class="text-gray-700 font-semibold mb-2 mt-4"> Shipping address </h4>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="border shadow-sm rounded-md p-4 mb-4 md:mb-0 lg:mb-4 xl:mb-0 transition-all hover:shadow-lg duration-300 cursor-pointer">
                                <div class="w-full text-left">
                                    <div class="relative mb-3 flex justify-between items-start">
                                        <div class="flex items-center">
                                            <div class="rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br w-10 h-9 flex items-center justify-center bg-primary/10">
                                                <svg class="h-6 w-6 text-gray-700" fill="none" stroke="currentColor"
                                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                          stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"></path>
                                                </svg>
                                            </div>
                                            <h4 class="text-gray-700 pl-3">Suzon</h4></div>
                                        <div><input class="text-primary rounded-sm" type="checkbox">
                                        </div>
                                    </div>
                                    <h3 class="font-semibold mb-1 text-gray-700">055437697876</h3>
                                    <p class="text-gray-600 text-sm">Ati</p>
                                </div>
                            </div>
                            <a class="shadow bg-white rounded-md p-4 transition-all hover:shadow-lg duration-300 group flex items-center justify-center space-x-3 cursor-pointer"
                               href="https://shopay.programmingkit.xyz/customer/delivery-addresses/create?returnToCheckout=1">
                                <div class="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"></path>
                                    </svg>
                                </div>
                                <p class="text-gray-600">Add New Address</p></a>
                            <div class="mt-2" style="display: none;">
                                <p class="text-sm text-red-600 mt-2"></p>
                            </div>
                        </div>
                        <div class="mt-4 text-right">
                            <button class="primary-btn">Place Order</button>
                        </div>
                    </div>
                </div>
                <div class="rounded-md shadow bg-white overflow-hidden">
                    <h2 class="font-semibold text-gray-800 px-4 py-3 bg-primary/10 flex items-center space-x-3"><span
                            class="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">3</span>
                        <span>Payment</span>
                    </h2>
                    <div class="p-4 pt-6">
                        <div class="grid grid-cols-2 items-center gap-4">
                            <label class="flex items-center px-3 py-2 rounded-md shadow cursor-pointer"
                                   for="cash-on-delivery">
                                <div class="text-primary">
                                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                                    </svg>
                                </div>
                                <p class="ml-3">Cash On Delivery</p>
                                <input id="cash-on-delivery"
                                       class="text-primary ml-auto"
                                       name="payment-methods" type="radio"
                                       value="[object Object]">
                            </label>
                            <label class="flex items-center px-3 py-2 rounded-md shadow cursor-pointer"
                                   for="bank-transfer">
                                <div class="text-primary">
                                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                                    </svg>
                                </div>
                                <p class="ml-3">Bank Transfer</p>
                                <input id="bank-transfer" class="text-primary ml-auto"
                                       name="payment-methods" type="radio"
                                       value="[object Object]"></label>
                            <label class="flex items-center px-3 py-2 rounded-md shadow cursor-pointer"
                                   for="check-or-money-order">
                                <div class="text-primary">
                                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                                    </svg>
                                </div>
                                <p class="ml-3">Check / Money Order</p>
                                <input id="check-or-money-order"
                                       class="text-primary ml-auto"
                                       name="payment-methods" type="radio"
                                       value="[object Object]">
                            </label>
                        </div>
                        <div class="mt-4 text-left">
                            <h3>Instructions</h3>
                            <div>Please send your payment to the following account.
                                <br>
                                Bank Name: Lorem Ipsum.
                                <br>
                                Beneficiary Name: John Doe.
                                <br>
                                Account Number/IBAN: 123456789
                            </div>
                        </div>
                        <div class="mt-4 text-right">
                            <button class="primary-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-7 xl:col-span-6">
                <div class="rounded-md shadow bg-white overflow-hidden">
                    <h2 class="font-semibold text-gray-800 px-4 py-4 bg-primary/10 text-center uppercase">
                        Order summary
                    </h2>
                    <div class="flex gap-4 p-4 border-b border-gray-200 pb-4">
                        <div class="flex-shrink-0 w-24">
                            <img src="https://shopay.programmingkit.xyz/storage/products/5/thumbnail/2iXpahwAnXTCSpgeNveHCUDCCiANzEtw3ElCo9Du.png"
                                 class="w-full"></div>
                        <div class="flex-grow relative">
                            <div><p class="font-semibold text-gray-800">Mackbok Pro</p>
                                <p class="text-gray-500 text-xs">Large</p></div>
                            <div class="flex justify-between items-center mt-3"><p
                                    class="text-gray-600 text-sm">$ 2500.00 x 3</p><h4
                                    class="text-gray-800 font-semibold">$
                                7500</h4>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 border-b border-gray-200">
                        <div class="flex justify-between items-center mb-3">
                            <div class="space-y-1 text-sm"><p>Subtotal</p>
                                <p>Delivery charge</p>
                            </div>
                            <div class="space-y-1 text-right text-sm"><p>$ 7,500.00</p>
                                <p>$ 80.00</p>
                            </div>
                        </div>
                        <div class="flex justify-between border-t border-gray-300 pt-5 pb-1">
                            <p class="font-bold"> TOTAL</p>
                            <p class="font-bold">$ 7,580.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer/>
</template>
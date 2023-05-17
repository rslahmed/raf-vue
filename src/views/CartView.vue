<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
    <Header/>
  <!-- breadcrumbs -->
    <div class="container py-4 flex justify-between">
        <div class="flex gap-3 items-center">
            <a href="index.html" class="text-primary text-base">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                     stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                </svg>
            </a>
            <span class="text-sm text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                </svg>
            </span>
            <RouterLink to="/" class="text-gray-600 font-medium hover:text-primary">Shop</RouterLink>
            <span class="text-sm text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                </svg>
            </span>
            <p class="text-gray-600 font-medium">Office</p>
        </div>
    </div>
  <!-- breadcrumbs end -->

  <!-- cart wrapper -->
    <div class="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
        <!-- product cart -->
        <div class="xl:col-span-9 lg:col-span-8">
            <!-- cart title -->
            <div class="bg-gray-200 py-2 pl-12 pr-20 xl:pr-28 mb-4 hidden md:flex">
                <p class="text-gray-600 text-center">Product</p>
                <p class="text-gray-600 text-center ml-auto mr-16 xl:mr-24">Quantity</p>
                <p class="text-gray-600 text-center">Total</p>
            </div>
            <!-- cart title end -->

            <!-- shipping carts -->
            <div class="space-y-4">
                <!-- single cart -->
                <div
                        class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
                    <!-- cart image -->
                    <div class="w-32 flex-shrink-0">
                        <img alt="" src="/images/products/product9.jpg" class="w-full">
                    </div>
                    <!-- cart image end -->
                    <!-- cart content -->
                    <div class="md:w-1/3 w-full">
                        <h2 class="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
                            Italian L Shape Sofa
                        </h2>
                        <p class="text-primary font-semibold">$45.00</p>
                        <p class="text-gray-500">Size: M</p>
                    </div>
                    <!-- cart content end -->
                    <!-- cart quantity -->
                    <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
                        <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                        <div class="h-8 w-10 flex items-center justify-center">4</div>
                        <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                    </div>
                    <!-- cart quantity end -->
                    <div class="ml-auto md:ml-0">
                        <p class="text-primary text-lg font-semibold">$320.00</p>
                    </div>
                    <div class="text-gray-600 hover:text-primary cursor-pointer">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
                <!-- single cart end -->
                <!-- single cart -->
                <div
                        class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
                    <!-- cart image -->
                    <div class="w-32 flex-shrink-0">
                        <img alt src="/images/products/product9.jpg" class="w-full">
                    </div>
                    <!-- cart image end -->
                    <!-- cart content -->
                    <div class="md:w-1/3 w-full">
                        <h2 class="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
                            Italian L Shape Sofa
                        </h2>
                        <p class="text-primary font-semibold">$45.00</p>
                        <p class="text-gray-500">Size: M</p>
                    </div>
                    <!-- cart content end -->
                    <!-- cart quantity -->
                    <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
                        <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                        <div class="h-8 w-10 flex items-center justify-center">4</div>
                        <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                    </div>
                    <!-- cart quantity end -->
                    <div class="ml-auto md:ml-0">
                        <p class="text-primary text-lg font-semibold">$320.00</p>
                    </div>
                    <div class="text-gray-600 hover:text-primary cursor-pointer">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
                <!-- single cart end -->
            </div>
            <!-- shipping carts end -->
        </div>
        <!-- product cart end -->
        <!-- order summary -->
        <div class="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
            <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">ORDER SUMMARY</h4>
            <div class="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
                <div class="flex justify-between font-medium">
                    <p>Subtotal</p>
                    <p>$320</p>
                </div>
                <div class="flex justify-between">
                    <p>Delivery</p>
                    <p>Free</p>
                </div>
                <div class="flex justify-between">
                    <p>Tax</p>
                    <p>Free</p>
                </div>
            </div>
            <div class="flex justify-between my-3 text-gray-800 font-semibold uppercase">
                <h4>Total</h4>
                <h4>$320</h4>
            </div>

            <!-- searchbar -->
            <div class="flex mb-5">
                <input type="text"
                       class="pl-4 w-full border border-r-0 border-primary py-2 px-3 rounded-l-md focus:ring-primary focus:border-primary text-sm"
                       placeholder="Coupon">
                <button type="submit"
                        class="bg-primary border border-primary text-white px-5 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition text-sm font-roboto">
                    Apply
                </button>
            </div>
            <!-- searchbar end -->

            <!-- checkout -->
            <a href="checkout.html" class="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent
             hover:text-primary transition text-sm w-full block text-center">
                Process to checkout
            </a>
            <!-- checkout end -->
        </div>
        <!-- order summary end -->
    </div>
  <!-- cart wrapper end -->

    <Footer/>
</template>
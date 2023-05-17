<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductCard from "@/components/ProductCard.vue";
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

  <!-- shop wrapper -->
    <div class="container pt-4 pb-16 items-start relative">
        <!-- products -->
        <div>
            <!-- sorting -->
            <div class="mb-4 flex justify-between items-center">
                <h3 class="text-3xl text-gray-600">Let's Shop</h3>
                <select
                        class="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
                    <option>Default sorting</option>
                    <option>Price low-high</option>
                    <option>Price high-low</option>
                    <option>Latest product</option>
                </select>
            </div>
            <!-- sorting end -->
            <!-- product wrapper -->
            <div class="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-6">
                <ProductCard v-for="n in 8" :key="n"/>
            </div>
            <!-- product wrapper end -->
        </div>
        <!-- products end -->
    </div>
  <!-- shop wrapper end -->

    <Footer/>
</template>
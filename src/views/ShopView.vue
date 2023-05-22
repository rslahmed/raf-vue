<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductCard from "@/components/ProductCard.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
</script>

<template>
    <Header/>

    <Breadcrumbs/>

  <!-- shop wrapper -->
    <div class="container pt-4 pb-16 items-start relative">
        <!-- products -->
        <div>
            <!-- sorting -->
            <div class="mb-4 sm:flex justify-between items-center">
                <h3 class="text-3xl text-gray-600">Let's Shop</h3>
                <select
                        class="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary mt-3 sm:mt-0">
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
<script setup>

import Header from "@/components/Header.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Footer from "@/components/Footer.vue";
import AccountSidebar from "@/components/AccountSidebar.vue";
</script>

<template>
    <Header/>
    <Breadcrumbs/>

  <!-- account -->
    <div class="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <!--  account sidebar  -->
        <AccountSidebar/>
        <!-- account content -->
        <div class="col-span-9 mt-6 lg:mt-0 space-y-4">
            <!-- Single order -->
            <div class="shadow-md px-6 py-8">
                <div class="text-center flex justify-between sm:items-center mt-4 md:mt-0">
                    <div class="flex gap-3 justify-center">
                        <img v-for="n in 2" class="w-[80px] h-[50px]" src="/images/products/product9.jpg" alt="product">
                    </div>
                    <div class="mt-4 md:mt-0">
                        <a href="order-details.html"
                           class="border border-primary text-primary text-sm font-medium px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-primary hover:text-white transition duration-300">View
                            Order</a>
                    </div>
                </div>
                <div class="flex flex-wrap gap-5 justify-between items-center mt-6">
                    <div>
                        <h5>Order Number</h5>
                        <p>23E34RT3</p>
                    </div>
                    <div>
                        <h5>Purchased</h5>
                        <p>01 March 2021</p>
                    </div>
                    <div>
                        <h5>Quantity</h5>
                        <p>x3</p>
                    </div>
                    <div>
                        <h5>Total</h5>
                        <p>$120</p>
                    </div>
                    <div>
                        <h5>Status</h5>
                        <p class="text-primary">Cancelled</p>
                    </div>
                </div>
            </div>

            <!-- Single order -->
            <div class="shadow-md px-6 py-8 mt-8">
                <div class="text-center flex justify-between sm:items-center mt-4 md:mt-0">
                    <div class="flex gap-3 justify-center">
                        <img v-for="n in 2" class="w-[80px] h-[50px] object-contain" src="/images/products/product9.jpg"
                             alt="product">
                    </div>
                    <div class="mt-4 md:mt-0">
                        <a href="order-details.html"
                           class="border border-primary text-primary text-sm font-medium px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-primary hover:text-white transition duration-300">View
                            Order</a>
                    </div>
                </div>
                <div class="flex flex-wrap gap-5 justify-between items-center mt-6">
                    <div>
                        <h5>Order Number</h5>
                        <p>23E34RT3</p>
                    </div>
                    <div>
                        <h5>Purchased</h5>
                        <p>01 March 2021</p>
                    </div>
                    <div>
                        <h5>Quantity</h5>
                        <p>x3</p>
                    </div>
                    <div>
                        <h5>Total</h5>
                        <p>$120</p>
                    </div>
                    <div>
                        <h5>Status</h5>
                        <p class="text-[#08B54C]">Delivered</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer/>
</template>

<style scoped>

</style>
<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
    <Header/>
  <!-- About banner -->
    <div class="bg-cover bg-center bg-no-repeat h-[350px]"
         style="background-image: url('/images/contact-banner.jpg')">
        <div class="container mx-auto py-36">
            <h1 class="text-center text-3xl uppercase text-white mb-1">Contact us</h1>
            <div class="flex justify-center items-center">
                <RouterLink to="/" class="text-primary">
                    <svg width="17" height="17" viewBox="0 0 32 32">
                        <path fill="currentColor"
                              d="m16 2.594l-.719.687l-13 13L3.72 17.72L5 16.437V28h9V18h4v10h9V16.437l1.281 1.282l1.438-1.438l-13-13zm0 2.844l9 9V26h-5V16h-8v10H7V14.437z"></path>
                    </svg>
                </RouterLink>
                <span class="text-white">
                    <svg width="22" height="22" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z"></path></svg>
                </span>
                <RouterLink to="/contact" class="text-white">contact us</RouterLink>
            </div>
        </div>
    </div>

  <!-- History -->
    <div class="about_history section_padding">
        <div class="container py-14">
            <div class="grid grid-cols-12 gap-6">
                <div class="col-span-12 lg:col-span-6 self-center">
                    <div>
                        <h2 class="text-sm text-primary font-bold mb-2">OUR HISTORY</h2>
                        <h3 class="text-2xl lg:text-3xl uppercase mb-3">Creative and New fashion <br
                                class="d-none d-xl-block"> trends
                            collection</h3>
                        <p class="mb-4">
                            Fashion is a potent visual marker of our times,” says Caroline Stevenson, head of cultural
                            and ... “Trend analysis of any given era will reveal society's values and aspirations.” ...
                            The urge to creative expression runs deep
                        </p>
                        <div class="flex justify-between pt-2">
                            <div>
                                <h4 class="text-3xl text-primary mb-1 font-bold">12</h4>
                                <p>Years Exprience</p>
                            </div>
                            <div>
                                <h4 class="text-3xl text-primary mb-1 font-bold">20K</h4>
                                <p>Happy Customer</p>
                            </div>
                            <div>
                                <h4 class="text-3xl text-primary mb-1 font-bold">100%</h4>
                                <p>Clients Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6">
                    <div class="about_imgs">
                        <img loading="lazy" src="/images/about-img.jpg" class="w-100">
                    </div>
                </div>
            </div>
        </div>
    </div>

  <!-- Partners -->
    <div class="container pb-14 pt-14">
        <h2 class="text-2xl uppercase mb-3 text-center text-gray-600 font-bold">OUR PARTNERS</h2>
        <!-- swiper -->
        <div class="grid grid-cols-6">
            <img loading="lazy" src="/images/brand1.png" alt="brand">
            <img loading="lazy" src="/images/brand2.png" alt="brand">
            <img loading="lazy" src="/images/brand3.png" alt="brand">
            <img loading="lazy" src="/images/brand4.png" alt="brand">
            <img loading="lazy" src="/images/brand1.png" alt="brand">
            <img loading="lazy" src="/images/brand2.png" alt="brand">
        </div>
    </div>

    <Footer/>
</template>
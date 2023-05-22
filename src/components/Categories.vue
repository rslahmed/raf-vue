<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Navigation, Pagination} from "swiper";

const modules = [Pagination, Autoplay, Navigation]
  
</script>

<template>
  <!-- categories -->
    <div class="container pb-16">
        <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
        <div class="relative nice-slider-arrow">
            <Swiper
                :autoplay="true"
                :loop="true"
                :modules="modules"
                :navigation="true"
                :slidesPerView="6"
                :spaceBetween="30"
                :breakpoints="{
                    320: {slidesPerView: 2},
                    620: {slidesPerView: 3},
                    1024: {slidesPerView: 6}
                }"
                class="mySwiper"
               
            >
                <SwiperSlide v-for="n in 8" :key="n">
                    <a href="#"
                       class="hover:border-primary border border-gray-200 rounded-2xl p-4 flex flex-col space-y-3 items-center justify-center transition">
                        <div class="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-full">
                            <img src="/images/pizza.png" alt=""
                                 class="w-12 h-12 object-contain"/>
                        </div>
                        <h4 class="text-lg font-semibold text-gray-700">Pizza</h4>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  <!-- categories end -->
</template>
<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Navigation, Pagination} from "swiper";
import ProductCard from "@/components/ProductCard.vue";

const modules = [Pagination, Autoplay, Navigation]
</script>

<template>
  <!-- top new arrival -->
    <div class="container pb-16">
        <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
        <!-- product wrapper -->
        <div class="relative nice-slider-arrow">
            <Swiper :autoplay="true"
                    :loop="true"
                    :modules="modules"
                    :navigation="true"
                    :slidesPerView="4"
                    :spaceBetween="30"
                    class="mySwiper">
                <SwiperSlide v-for="n in 6" :key="n">
                    <ProductCard/>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>

</template>
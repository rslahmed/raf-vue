<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductCard from "@/components/ProductCard.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import {
    Navigation
} from "swiper";
import {
    Swiper,
    SwiperSlide
} from "swiper/vue";
import {
    reactive,
    ref
} from 'vue'

import "swiper/css";
import "swiper/css/navigation";

const modules = [Navigation];


const productNav = [{
    image: "/images/products/product9.jpg",
},
    {
        image: "/images/products/product1.jpg",
    },
    {
        image: "/images/products/product8.jpg",
    },
    {
        image: "/images/products/product12.jpg",
    },
    {
        image: "/images/products/product11.jpg",
    },
];

const sliderIndex = ref(0);

const tabIndex = ref('info')

const ratingForm = reactive({
    body: '',
    star: 0
})

</script>

<template>
    <Header/>

    <Breadcrumbs/>

    <div class="container pb-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- product image -->
        <div>
            <div>
                <img id="main-img" :src="productNav[sliderIndex].image" alt="product" class="w-full">
            </div>
            <swiper :modules="modules" :slidesPerView="4" :breakpoints="{
                320: {slidesPerView : 2},
                768:{slidesPerView : 3},
                1024:{slidesPerView : 4}
            }"
                    :navigation="true" class="nice-slider-arrow cursor-pointer">
                <swiper-slide v-for="(nav, index) in productNav" :key="index">
                    <div class="mt-2">
                        <img :class="{ '!border-primary': index === sliderIndex }" loading="lazy" :src="nav.image"
                             @click="sliderIndex = index" alt="product"/>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <!-- product image end -->

        <!-- product content -->
        <div>
            <h2 class="md:text-3xl text-2xl font-medium uppercase mb-2">Italian L Shape Sofa</h2>
            <div class="flex items-center mb-4">
                <div class="flex gap-1 text-sm text-yellow-400">
                    <svg v-for="n in 5" :key="n" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         fill="currentColor" class="w-4 h-4">
                        <path fill-rule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clip-rule="evenodd"/>
                    </svg>
                </div>
                <div class="text-xs text-gray-500 ml-3">(150 Reviews)</div>
            </div>
            <div class="space-y-2">
                <p class="text-gray-800 font-semibold space-x-2">
                    <span>Availability: </span>
                    <span class="text-green-600">In Stock</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">Brand: </span>
                    <span class="text-gray-600">Apex</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">Category: </span>
                    <span class="text-gray-600">Sofa</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">SKU: </span>
                    <span class="text-gray-600">BE45VGRT</span>
                </p>
            </div>
            <div class="mt-4 flex items-baseline gap-3">
                <span class="text-primary font-semibold text-xl">$450.00</span>
                <span class="text-gray-500 text-base line-through">$500.00</span>
            </div>
            <p class="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi
                labore blanditiis
            </p>
            <!-- size -->
            <div class="mt-4">
                <h3 class="text-base text-gray-800 mb-1">Size</h3>
                <div class="flex items-center gap-2">
                    <!-- single size -->
                    <div class="size-selector">
                        <input type="radio" name="size" class="hidden" id="size-xs">
                        <label for="size-xs"
                               class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                            XS
                        </label>
                    </div>
                    <!-- single size end -->
                    <!-- single size -->
                    <div class="size-selector">
                        <input type="radio" name="size" class="hidden" id="size-s">
                        <label for="size-s"
                               class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                            S
                        </label>
                    </div>
                    <!-- single size end -->
                    <!-- single size -->
                    <div class="size-selector">
                        <input type="radio" name="size" class="hidden" id="size-m" checked>
                        <label for="size-m"
                               class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                            M
                        </label>
                    </div>
                    <!-- single size end -->
                    <!-- single size -->
                    <div class="size-selector">
                        <input type="radio" name="size" class="hidden" id="size-l">
                        <label for="size-l"
                               class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                            L
                        </label>
                    </div>
                    <!-- single size end -->
                    <!-- single size -->
                    <div class="size-selector">
                        <input type="radio" name="size" class="hidden" id="size-xl">
                        <label for="size-xl"
                               class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                            XL
                        </label>
                    </div>
                    <!-- single size end -->
                </div>
            </div>
            <!-- size end -->
            <!-- color -->
            <div class="mt-4">
                <h3 class="text-base text-gray-800 mb-1">Color</h3>
                <div class="flex items-center gap-2">
                    <!-- single color -->
                    <div class="color-selector">
                        <input type="radio" name="color" class="hidden" id="color-red" checked>
                        <label for="color-red" style="background-color : #fc3d57"
                               class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                        </label>
                    </div>
                    <!-- single color end -->
                    <!-- single color -->
                    <div class="color-selector">
                        <input type="radio" name="color" class="hidden" id="color-white">
                        <label for="color-white" style="background-color : #fff"
                               class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                        </label>
                    </div>
                    <!-- single color end -->
                    <!-- single color -->
                    <div class="color-selector">
                        <input type="radio" name="color" class="hidden" id="color-black">
                        <label for="color-black" style="background-color : #000"
                               class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                        </label>
                    </div>
                    <!-- single color end -->
                </div>
            </div>
            <!-- color end -->
            <!-- quantity -->
            <div class="mt-4">
                <h3 class="text-base text-gray-800 mb-1">Quantity</h3>
                <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                    <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                    <div class="h-8 w-10 flex items-center justify-center">4</div>
                    <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                </div>
            </div>
            <!-- color end -->
            <!-- add to cart button -->
            <div class="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                <a href="#" class="bg-primary border border-primary text-white px-3 sm:px-8 py-2 font-medium rounded uppercase
                    hover:bg-transparent hover:text-primary transition text-sm flex items-center">
                    <span class="mr-2"><i class="fas fa-shopping-bag"></i></span> Add to cart
                </a>
                <a href="#" class="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase
                    hover:bg-transparent hover:text-primary transition text-sm">
                    <span class="mr-2"><i class="far fa-heart"></i></span> Wishlist
                </a>
            </div>
            <!-- add to cart button end -->
            <!-- product share icons -->
            <div class="flex space-x-3 mt-4">
                <a href="#"
                   class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 512 512">
                        <path
                                d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64z"
                                fill="currentColor"/>
                    </svg>
                </a>
                <a href="#"
                   class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 512 512">
                        <path fill="currentColor"
                              d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3a97.51 97.51 0 0 0 43.33-53.6a197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1a280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4a94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8c0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5Z"/>
                    </svg>
                </a>
                <a href="#"
                   class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 512 512">
                        <path fill="currentColor"
                              d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32Z"/>
                        <path fill="currentColor"
                              d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28ZM256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112Z"/>
                    </svg>
                </a>
            </div>
            <!-- product share icons end -->
        </div>
        <!-- product content end -->
    </div>
  <!-- product info & review btn -->
    <div class="container">
        <div class="flex gap-2 border-b border-gray-200">
            <div :class="{'block text-primary border-primary': tabIndex === 'info'}" @click="tabIndex = 'info'"
                 class="border px-1 sm:px-4 py-2 rounded text-xs sm:text-base cursor-pointer border-gray-200 rounded-b-none border-b-0">
                Product Info
            </div>
            <div :class="{ 'block text-primary border-primary': tabIndex === 'review' }" @click="tabIndex = 'review'"
                 class="border px-1 sm:px-4 py-2 rounded text-xs sm:text-base cursor-pointer border-gray-200 rounded-b-none border-b-0">
                Review (10)
            </div>
        </div>
    </div>
  <!-- product info & review btn end -->

  <!-- product details and review -->
    <div :class="{'!block': tabIndex === 'info'}" class="container pb-16 hidden">
        <!-- details content -->
        <div class="lg:w-4/5 xl:w-3/5 pt-6">
            <div class="space-y-3 text-gray-600">
                <p>
                    Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than
                    ever. For the first time, content creators can edit and seamlessly play back multiple streams of
                    full‑quality 4K video without dropping a frame.
                </p>
                <p>
                    Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than
                    ever. For the first time, content creators can edit and seamlessly play back multiple streams of
                    full‑quality 4K video without dropping a frame.
                </p>
                <p>
                    Apps on MacBook Air can use machine learning (ML) to automatically retouch photos like a pro,
                    make smart tools such as magic wands and audio filters more accurate at auto‑detection, and so
                    much more. That’s not just brain power — that’s the power of a full stack of ML technologies.
                </p>
            </div>
            <!-- details table -->
            <table class="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                <tr>
                    <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
                    <td class="py-2 px-4 border border-gray-300">Black, Brown, Red</td>
                </tr>
                <tr>
                    <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Material</th>
                    <td class="py-2 px-4 border border-gray-300">Artificial Leather</td>
                </tr>
                <tr>
                    <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Weight</th>
                    <td class="py-2 px-4 border border-gray-300">55kg</td>
                </tr>
            </table>
            <!-- details table -->
        </div>
        <!-- details content end -->
    </div>
  <!-- product details and review end -->

  <!-- review details -->
    <div :class="{'!block': tabIndex === 'review'}" class="container p-5 hidden">
        <!-- write review -->
        <div class="max-w-2xl">
            <h3 class="text-lg font-semibold">Write review</h3>
            <div class="flex mt-2 mb-2">
                <button @click="ratingForm.star = n" v-for="n in 5" :key="n" class="text-[#F6BC3E]">
                    <svg v-if="ratingForm.star >= n" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 cursor-pointer">
                        <path fill-rule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clip-rule="evenodd"/>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-8 h-8 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                    </svg>
                </button>
            </div>

            <textarea v-model="ratingForm.body" class="w-full mt-2 rounded border-gray-300"></textarea>

            <div class="flex justify-end mt-4">
                <button class="bg-primary hover:bg-primary/90 transition text-white px-8 py-2 rounded">Submit</button>
            </div>
        </div>

        <div class="mt-8 pt-8 border-t border-gray-200 max-w-2xl">
            <p class="mt-4 text-semibold text-xl">Product Reviews</p>
            <div class="sm:flex gap-5 mt-6">
                <div class="w-12 h-12 rounded-full flex-shrink-0">
                    <img loading="lazy" src="/public/images/avatar.png" alt="user" class="w-full h-full object-cover">
                </div>
                <!-- review content -->
                <div class="mt-2 sm:mt-0">
                    <h5>by Sadat A.</h5>
                    <!-- rating -->
                    <div class="flex mt-2">
                        <span v-for="n in 5" class="text-[#F6BC3E]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div class="text-xs mt-2">30 Jul 2021</div>
                    <p class="mt-2">Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean
                        sollicitudin, lorem
                        quis bibendum auctor, nisi elit consequat ipsum, nec
                        sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate</p>
                </div>
            </div>
        </div>


    </div>
  <!-- review details -->

  <!-- related products -->
    <div class="container py-8 lg:mt-12">
        <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">related products</h2>
        <!-- product wrapper -->
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
            <ProductCard/>
        </div>
        <!-- product wrapper end -->
    </div>
  <!-- related products end -->

    <Footer/>
</template>

<style scoped>

</style>
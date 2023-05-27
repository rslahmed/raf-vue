<script setup>

</script>

<template>
  <!-- single product -->
    <div class="group rounded bg-white shadow overflow-hidden">
        <!-- product image -->
        <div class="relative">
            <img src="/images/products/product9.jpg" class="w-full">
            <div
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <RouterLink to="/view"
                            class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"/>
                    </svg>
                </RouterLink>
                <RouterLink to="/cart"
                            class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                    </svg>
                </RouterLink>
            </div>
        </div>
        <!-- product image end -->
        <!-- product content -->
        <div class="pt-4 pb-3 px-4">
            <RouterLink to="/view">
                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Guyer chair
                </h4>
            </RouterLink>
            <div class="flex items-baseline mb-1 space-x-2">
                <p class="text-xl text-primary font-roboto font-semibold">$45.00</p>
                <p class="text-sm text-gray-400 font-roboto line-through">$55.00</p>
            </div>
            <div class="flex items-center">
                <div class="flex gap-1 text-sm text-yellow-400">
                    <svg v-for="n in 5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         class="w-4 h-4">
                        <path fill-rule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clip-rule="evenodd"/>
                    </svg>
                </div>
                <div class="text-xs text-gray-500 ml-3">(150)</div>
            </div>
        </div>
        <!-- product content end -->
        <!-- product button -->
        <!--        <RouterLink to="/cart"-->
        <!--                    class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">-->
        <!--            Add to Cart-->
        <!--        </RouterLink>-->

        <div class="flex items-center w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
            <button class="px-2 hover:scale-125 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"/>
                </svg>
            </button>
            <div class="flex-grow">1 In Cart</div>
            <button class="px-2 hover:scale-125 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                </svg>
            </button>
        </div>
        <!-- product button end -->
    </div>
</template>

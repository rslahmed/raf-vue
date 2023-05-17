import glide from "@glidejs/glide";

export function setupCarousel(target) {
    new glide(target, {
        type: 'carousel',
        autoplay: 4000,
        animationDuration: 1000,
        perView: 1,
        keyboard: true,
    }).mount()
}

export function productSlider(target) {
    new glide(target, {
        type: 'slider',
        autoplay: false,
        perView: 4,
        gap: 16,
        keyboard: true,
        breakpoints: {
            1200: {
                perView: 3,
            },
            768: {
                perView: 2,
                gap: 12
            },
            480: {
                perView: 1,
            }
        }
    }).mount()
}
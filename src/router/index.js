import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import ShopView from "@/views/ShopView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ProductView from "@/views/ProductView.vue";
import CartView from "@/views/CartView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import CompleteOrderView from "@/views/CompleteOrderView.vue";
import WishlistView from "@/views/WishlistView.vue";
import AccountView from "@/views/AccountView.vue";
import ProfileView from "@/views/ProfileView.vue";
import AddressView from "@/views/AddressView.vue";
import PasswordView from "@/views/PasswordView.vue";
import OrderView from "@/views/OrderView.vue";
import ContactView from "@/views/ContactView.vue";
import AboutView from "@/views/AboutView.vue";
import OrderDetailsView from "@/views/OrderDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/view',
      name: 'view',
      component: ProductView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/complete-order',
      name: 'completeOrder',
      component: CompleteOrderView
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishlistView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    },
    {
      path: '/profile-view',
      name: 'profileView',
      component: ProfileView
    },
    {
      path: '/address',
      name: 'address',
      component: AddressView
    },
    {
      path: '/password',
      name: 'password',
      component: PasswordView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrderView
    },
    {
      path: '/order-details',
      name: 'ordersDetails',
      component: OrderDetailsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
  ]
})

export default router

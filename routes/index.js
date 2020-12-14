import Vue from 'vue'
import VueRouter from 'vue-router'
import AppFeeds from "../src/components/Feeds/AppFeeds.vue"
import FeedComponent from "../src/components/Feeds/FeedComponent.vue"

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: AppFeeds
        },
        {
            path: '/:id',
            component: FeedComponent
        }
    ]
})
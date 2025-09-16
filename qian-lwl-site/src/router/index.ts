import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home.vue'
import Characters from '@/pages/Characters.vue'
import World from '@/pages/World.vue'
import About from '@/pages/About.vue'
import Gallery from '@/pages/Gallery.vue'

const routes = [
    {path: '/', name:'Home',component:Home},
    {path: '/characters', name:'Characters',component:Characters},
    {path: '/world', name:'World',component:World},
    {path: '/about', name:'About',component:About},
    {path: '/gallery', name:'Gallery',component:Gallery},
]
const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router
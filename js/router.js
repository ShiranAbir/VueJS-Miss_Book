import bookApp from './views/book-app.cmp.js';
import bookDetails from './views/book-details.cmp.js';
import homePage from './views/home-page.cmp.js';
import aboutPage from './views/about-page.cmp.js';


const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
    {
        path: '/about',
        component: aboutPage
    },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})
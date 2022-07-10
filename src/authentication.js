import store from '@/store'
import router from '@/router'

router.beforeEach((to, from, next) => {
    const token = store.state.login.token
    if (token) {
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else {
        next('/login')
    }
})
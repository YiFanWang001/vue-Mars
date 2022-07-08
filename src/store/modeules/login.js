import { login } from '@/api/Login'
import { setItem, getItem } from '@/utils/storage'
import router from '@/router'
// const router = useRouter()
export default {
    namespaced: true,
    state: {
        token: getItem('token') || '',
    },
    getters: {},
    mutations: {},
    actions: {
        async login({ commit }, form) {
            console.log(form)
            try {
                const { data } = await login(form)
                setItem('token', data.data.token)
                if (data.data.token) {
                    router.push('/')
                }
            } catch (error) {
                console.log(error)
            }
        },
    },
}
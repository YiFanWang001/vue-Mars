import { login } from '@/api/Login'

import { setItem, getItem, removeAllItem } from '@/utils/storage'
import router from '@/router'
// const router = useRouter()
export default {
    namespaced: true,
    state: {
        token: getItem('token') || '',
        userEmail: getItem('Email') || '',
        userName: getItem('Name') || ''
    },
    getters: {},
    mutations: {
        getlogin(state, data) {
            state.token = data.token
            setItem('token', data.token)
            setItem('Email', data.userEmail)
            setItem('Name', data.userName)
        }
    },
    actions: {
        async login({ commit }, form) {
            const { data } = await login(form)
            console.log(data)
            if (data.data.token) {
                commit('getlogin', data.data)
                router.push('/')
            }
        },
        async error({ commit }) {
            try {
                removeAllItem()
                router.push('/login')
            } catch (error) {}
        }
    }
}
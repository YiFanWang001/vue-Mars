import { setItem, getItem } from '@/utils/storage'
import { getPermissionList } from '@/api/User'
import router from '@/router'
// const router = useRouter()
export default {
    namespaced: true,
    state: {
        menu: ''
    },
    getters: {},
    mutations: {
        getMenu(state, data) {
            state.menu = data
        }
    },
    actions: {
        async getlist({ commit }) {
            try {
                const { data } = await getPermissionList()
                commit('getMenu', data.data)
                console.log(data)
            } catch (error) {}
        }
    }
}
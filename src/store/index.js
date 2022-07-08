import { createStore } from 'vuex'
import login from './modeules/login'
export default createStore({
    modules: {
        login,
    },
})
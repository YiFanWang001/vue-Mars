import { createStore } from 'vuex'
import login from './modeules/login'
import user from './modeules/user'

export default createStore({
    modules: {
        login,
        user
    }
})
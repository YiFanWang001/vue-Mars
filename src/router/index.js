import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,

        children: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('../views/about.vue'),
            meta: {
                title: '欢迎体验Vue3全栈课程',
                path: '/'
            }
        }]
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Login/index.vue')
    },
    {
        path: '/system',
        name: 'system',
        component: HomeView,
        redirect: '/system/user',
        children: [{
                path: '/system/user',
                component: () =>
                    import ('../views/system-user'),
                meta: {
                    title: '用户管理'
                }
            },
            {
                path: '/system/menu',
                component: () =>
                    import ('../views/system-menu'),
                meta: {
                    title: '菜单管理'
                }
            },
            {
                path: '/system/role',
                component: () =>
                    import ('../views/system-role'),
                meta: {
                    title: '角色管理'
                }
            },
            {
                path: '/system/dept',
                component: () =>
                    import ('../views/system-dept'),
                meta: {
                    title: '部门管理'
                }
            },
            {
                path: '/staff',
                component: () =>
                    import ('../views/staff'),
                meta: {
                    title: '员工管理'
                }
            },
            {
                path: '/salary',
                component: () =>
                    import ('../views/salary'),
                meta: {
                    title: '薪酬管理'
                }
            }
        ]
    },
    {
        path: '/audit',
        name: 'audit',
        component: HomeView,
        redirect: '/audit/leave',
        children: [{
                path: '/audit/leave',
                component: () =>
                    import ('../views/audit-leave'),
                meta: {
                    title: '休假申请'
                }
            },
            {
                path: '/audit/approve',
                component: () =>
                    import ('../views/audit-approve'),
                meta: {
                    title: '审批管理'
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
const input = () => import(/* webpackChunkName: "input" */ './input')

export default [
    {
        path:'/input',
        component: input,
        name: 'input'
    }
]
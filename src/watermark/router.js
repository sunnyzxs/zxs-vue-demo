const watermark = () => import(/* webpackChunkName: "watermark" */ './watermark');

export default [{
    path:'/',
    component: watermark,
    name: 'watermark'
}]
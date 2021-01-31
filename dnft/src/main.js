import Vue from 'vue'
import App from "./App"
import './styles/quasar.scss'
import './font/iconfont.css'
import './index.css'

import {Quasar} from 'quasar'

Vue.use(Quasar, {
    config: {},
    components: {},
    directives: {},
    plugins: {}
})




new Vue({
    render: h => h(App),
}).$mount('#app')
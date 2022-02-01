import { createStore } from "vuex";

import aboutModule from './modules/base/about.js' 
import workModule from './modules/base/work.js'

const store = createStore({
    modules :{
        about: aboutModule,
        work: workModule
    }
})

export default store
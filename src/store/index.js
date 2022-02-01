import { createStore } from "vuex";

import aboutModule from './modules/base/about.js' 

const store = createStore({
    modules :{
        about: aboutModule
    }
})

export default store
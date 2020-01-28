import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import first from "./first.vue"
import addtodo from "./addtodo.vue"
import counter from "./counter.vue"

Vue.use(VueRouter)

export default new VueRouter ({
    routes:[
        {
            path:"/",
            component: App,
            children:[
                {
                    path: "first",
                    name: "first",
                    component: first
                },{
                    path:"addtodo",
                    name:"addtodo",
                    component: addtodo
                },{
                    path:"counter",
                    name:"counter",
                    component: counter
                }
            ]
        }
    ]
})
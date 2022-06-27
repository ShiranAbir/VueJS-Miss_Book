import { eventBus } from "../services/eventBus-service.js";
export default {
    template: `
 <section v-if="msg" class="user-msg" :class="msg.type">
    <button @click="close">X</button>
    <h3>{{msg.txt}}</h3>
 </section>
`,
    data() {
        return {
            unsubscribe: null,
            msg: null
        };
    },
    created() {
        this.unsubscribe = eventBus.on('show-msg', this.showMsg)
    },
    methods: {
        showMsg(msg) {
            this.msg = msg
            setTimeout(() => {
                this.msg = null
            }, 3000)
        },
        close(){
            this.msg = null
        }
    },
    computed: {},
    unmounted() {
        this.unsubscribe()
    },
};
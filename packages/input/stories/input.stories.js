import LgInput from '../'
export default {
    title: 'LgInput',
    component: LgInput
}
export const Text = () => ({
    components: { LgInput },
    template: '<kl-input v-model="value"></kl-input>',
    data () {
        return {
            value: 'admin'
        }
    }
})
export const Password = () => ({
    components: {
        LgInput
    },
    template: '<kl-input type="password" v-model="value"></kl-input>',
    data () {
        return {
            value: 'admin'
        }
    }
})
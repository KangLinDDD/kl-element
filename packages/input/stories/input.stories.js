import klInput from '../'
export default {
    title: 'klInput',
    component: klInput
}
export const Text = () => ({
    components: { klInput },
    template: '<kl-input v-model="value"></kl-input>',
    data () {
        return {
            value: 'admin'
        }
    }
})
export const Password = () => ({
    components: {
        klInput
    },
    template: '<kl-input type="password" v-model="value"></kl-input>',
    data () {
        return {
            value: 'admin'
        }
    }
})
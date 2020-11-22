<template>
    <div>
        <form>
            <slot></slot>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LgForm',
    provide () {
        return {
            form: this
        }
    },
    props: {
        model: {
            type: Object,
            default: () => { }
        },
        rules: {
            type: Object,
            default: () => { }
        }
    },
    methods: {
        validate (cb) {
            const task = this.$children.filter(child => child.prop).map(child => child.validate())
            Promise.all(task).then(() => cb(true)).catch(() => cb(false))
        }
    }
}
</script>

<style>
</style>
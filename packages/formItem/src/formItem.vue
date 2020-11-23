<template>
    <div>
        <label for="">{{ label }}</label>
        <div>
            <slot></slot>
            <p v-if="errMsg">{{ errMsg }}</p>
        </div>
    </div>
</template>

<script>
import AsyncValiadte from 'async-validator'
export default {
    name: 'KlFormItem',
    inject: ['form'],
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            errMsg: ''
        }
    },
    mounted () {
        this.$on('validate', () => {
            this.validate()
        })
    },
    methods: {
        validate () {
            if (!this.prop) {
                return
            }
            const value = this.form.model[this.prop]
            const rules = this.form.rules[this.prop]

            const descriptor = { [this.prop]: rules }
            const validator = new AsyncValiadte(descriptor)
            return validator.validate({ [this.prop]: value }, err => {
                if (err) {
                    this.errMsg = err[0].message
                } else {
                    this.errMsg = ''
                }
            })
        }
    }
}
</script>

<style>
</style>
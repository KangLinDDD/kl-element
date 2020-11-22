import LgForm from '../'
import LgFormItem from '../../formItem'
import LgInput from '../../input'
import LgButton from '../../button'

export default {
    title: 'LgForm',
    component: {
        LgForm
    }
}
export const Login = () => ({
    components: {
        LgForm,
        LgFormItem,
        LgInput,
        LgButton
    },
    template: `<template>
        <kl-form class="form" ref="form" :model="user" :rules="rules">
          <kl-form-item label="用户名" prop="username">
            <!-- <kl-input v-model="user.username"></kl-input> -->
            <kl-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></kl-input>
          </kl-form-item>
          <kl-form-item label="密码" prop="password">
            <kl-input type="password" v-model="user.password"></kl-input>
          </kl-form-item>
          <kl-form-item>
            <kl-button type="primary" @click="login">登 录</kl-button>
          </kl-form-item>
        </kl-form>
    </template>`,
    data () {
        return {
            user: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: '请输入用户名'
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码'
                    },
                    {
                        min: 6,
                        max: 12,
                        message: '请输入6-12位密码'
                    }
                ]
            }
        }
    },
    methods: {
        login () {
            console.log('button')
            this.$refs.form.validate(valid => {
                if (valid) {
                    alert('验证成功')
                } else {
                    alert('验证失败')
                    return false
                }
            })
        }
    }
})
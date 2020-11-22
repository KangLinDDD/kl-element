<template>
    <div class="lg-steps">
        <div class="lg-steps-line"></div>
        <div v-for="index in count"
             :key="index"
             :style="{color: active >= index ? activeColor : defaultColor}"
             class="lg-step">
            {{index}}
        </div>
    </div>
</template>

<script>
import './steps.css'
export default {
    name: 'LgSteps',
    props: {
        count: {
            type: Number,
            default: 3
        },
        active: {
            type: Number,
            default: 1
        },
        activeColor: {
            type: String,
            default: 'red'
        },
        defaultColor: {
            type: String,
            default: 'green'
        }
    }
}
</script>

<style>
</style>
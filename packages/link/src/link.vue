<template>
    <a :href="disabled ? null : href" :class="[disabled && 'disabled', !underline && 'no-underline']">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: 'KlLink',
    props: {
        href: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        underline: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.disabled {
    cursor: not-allowed;
}
.no-underline {
    text-decoration: none;
}
</style>

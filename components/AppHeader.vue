
<template>
    <div>
    <button @click="show = !show">Toggle</button>
    <div class="">
        <transition name="slide-toggle">
            <p v-if="show">Hello</p>
        </transition>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>
<style>
    .slide-toggle-enter-active,
    .slide-toggle-leave-active {
        height: 30px;
        transition: height 2s;
    }

    .slide-toggle-enter,
    .slide-toggle-leave-active {
        height: 0;
    }

</style>
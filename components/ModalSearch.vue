<template>
    <transition name="slide-fade">
    <div class="modal-search-header flex-c-m trans-04 js-hide-modal-search" v-if="showModalSearch">
        <div class="container-search-header">
            <button class="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search"
                    @click="$store.dispatch('toggleModalSearch')">
                <img src="~assets/images/icons/icon-close2.png" alt="CLOSE">
            </button>

            <form class="wrap-search-header flex-w p-l-15">
                <button class="flex-c-m trans-04">
                    <i class="zmdi zmdi-search"></i>
                </button>
                <input class="plh3" type="text" name="search" placeholder="Search...">
            </form>
        </div>
    </div>
    </transition>
</template>

<script type="text/babel">
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'showModalSearch',
            ])
        },
    }
</script>

<style>
    .slide-fade-enter-active,
    .slide-fade-leave-active{
        transition: all .5s ease;
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active до версии 2.1.8 */ {
        transform: translateY(-100%);
        opacity: 0;
    }
</style>
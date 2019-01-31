<template>
    <div v-if="showContent">
        <!-- Header -->
        <app-header/>
        <nuxt/>
        <app-footer/>
    </div>
</template>
<script>
    import AppHeader from '~/components/AppHeader.vue';
    import AppFooter from '~/components/AppFooter';
    import {mapActions} from 'vuex'

    export default {
        data: () => ({
           showContent: false
        }),
        components: {
            AppHeader,
            AppFooter
        },
        created() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start();
                this.showContent = true;

                Promise.all([
                    this.fetchProducts(),
                    this.fetchBrands(),
                    this.fetchCategories(),
                    this.fetchColors(),
                    this.fetchTags(),
                ]).then(result => {
                    console.log(result);
                    this.$nuxt.$loading.finish();
                })
            });
        },
        mounted() {
            this.fetchCartProducts(); /// created - window is not defined
        },
        methods: {
            ...mapActions([
                'fetchBrands',
                'fetchCategories',
                'fetchProducts',
                'fetchColors',
                'fetchTags',
                'fetchCartProducts'
            ])
        }
    }
</script>
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

                 let brand = window.localStorage.getItem('selectedBrand')
                     ? Number(window.localStorage.getItem('selectedBrand'))
                    : 0;

                let phoneModel = window.localStorage.getItem('selectedPhoneModel')
                    ? Number(window.localStorage.getItem('selectedPhoneModel'))
                    : 0;

                Promise.all([
                    this.fetchProducts(),
                    this.fetchBrands(),
                    this.fetchCategories(),
                    this.fetchColors(),
                    this.fetchTags(),
                    this.selectBrand(brand),
                    this.selectPhoneModel(phoneModel)

                ]).then(result => {
                    console.log(result);
                    this.$nuxt.$loading.finish();
                });
                //console.log(brand)
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
                'fetchCartProducts',
                'selectBrand',
                'selectPhoneModel'
            ])
        }
    }
</script>
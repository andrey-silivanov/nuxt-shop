<template>
    <div>
        <!-- Header -->
        <app-header/>
        <nuxt/>
        <app-footer/>
    </div>
</template>
<script>
    import AppHeader from '~/components/AppHeader.vue';
    import AppFooter from '~/components/AppFooter';

    export default {
        components: {
            AppHeader,
            AppFooter
        },
        created() {
            this.$store.dispatch('fetchBrands');
            this.$store.dispatch('fetchCategories');
            this.$store.dispatch('fetchProducts');
            this.$store.dispatch('fetchColors');
            this.$store.dispatch('fetchTags');
        }
    }
</script>
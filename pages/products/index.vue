<template>
    <div class="product-wrapper">
        <products/>
    </div>
</template>

<script>
    import Products from '~/components/Products'

    export default {
        name: "products-page",
        components: {
            Products
        }
    }
</script>

<style scoped lang="scss">
    .product-wrapper {
        padding-top: 90px;
    }
    @media (max-width: 768px) {
        .product-wrapper {
            padding-top: 10px;
        }
    }
</style>
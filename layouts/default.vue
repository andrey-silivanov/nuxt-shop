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
    }
  }
</script>
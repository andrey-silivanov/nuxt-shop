<template lang="html">
    <div class="page-loading">
        <div class="wrapper">
            <div class="wrapper-loader" v-if="loading">
                <svg class="svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 200 200"><circle stroke-width="10" stroke-miterlimit="10" class="cls-1 path" cx="100" cy="100" r="94"/></svg>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            loading: false
        }),
        methods: {
            start () {
                this.loading = true;
                document.body.style.overflow = 'hidden'
            },
            finish () {
                this.loading = false;
                document.body.style.overflow = 'auto'
            }
        }
    }
</script>

<style scoped lang="scss">

    $backgroundColor: #181d27;
    $strokeColor    : #717fe0;
    // Animation --------------------------------------------------- //
    $duration       : 2s;
    $timingEase     : cubic-bezier(.51, .92, .24, 1);
    $rotationStart  : -360deg;
    $dashStart      : 1200;


    body.page-loading {
        overflow: hidden;
    }

    .page-loading {
        position: fixed;
        z-index: 9999;
        width: 100%;
    }
    .wrapper {
       // position: absolute;
        background: $backgroundColor;
        display: flex;
        align-items: center;
        justify-content: center;
       // top: 50px;
       // left: 0;
        width: 100%;
        height: 100%;
        color: #ffffff;
        background: rgba(30, 30, 30, 1);
        text-align: center;
      //  padding-top: 200px;
        //font-size: 30px;
        font-family: sans-serif;
    }
    // Styling ----------------------------------------------------- //

    .wrapper-loader {
        max-width: 5%;
    }
    @media (max-width: 1024px) {
        .wrapper-loader {
            max-width: 10%;
        }
    }
    @media (max-width: 768px) {
        .wrapper-loader {
            max-width: 15%;
        }
    }
    .svg {
        width: 100%;
        height: 100vh;
        transform: rotate(0);
        animation: rotate $duration $timingEase forwards infinite;
    }
    .path {
        stroke-dasharray: 590;
        stroke-dashoffset: 0;
        stroke: $strokeColor;
        fill: none;
        animation: dash $duration $timingEase forwards infinite;
    }

    @keyframes dash {
        from {
            stroke-dashoffset: $dashStart;
        }
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes rotate {
        from {
            transform: rotate($rotationStart);
        }
        to {
            transform: rotate(0);
        }
    }
</style>
<template>
    <div class="flex-w flex-sb-m p-b-52">
        <div class="col-sm-6 col-md-4 col-lg-3 p-b-35">
            <label class="my-1 mr-2" for="brand">Brand</label>
            <select class="custom-select my-1 mr-sm-2" v-model="activeBrand" id="brand" @change="changeBrand">
                <option value="0">Choose...</option>
                <option :value="brand.id" v-for="brand in brands" :key="brand.id"> {{ brand.name }}</option>
            </select>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 p-b-35">
            <label class="my-1 mr-2" for="phoneModel">Phone model</label>
            <select class="custom-select my-1 mr-sm-2" v-model="activePhoneModel" @change="changePhoneModel"
                    id="phoneModel" :disabled="activeBrand === 0">
                <option value="0">Choose...</option>
                <option :value="model.id" :key="model.id" v-for="model in phoneModels"> {{ model.name }}</option>
            </select>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 p-b-35">
            <label class="my-1 mr-2" for="category">Category</label>
            <select class="custom-select my-1 mr-sm-2" id="category" v-model="payloadProduct.categoryId" @change="changeCategory">
                <option value="0">Choose...</option>
                <option :value="category.id" :key="category.id" v-for="category in categories">{{ category.name }}
                </option>
            </select>
        </div>

        <div class="flex-w flex-c-m m-tb-10">
            <div @click="toggleFilter"
                 class="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                <i class="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                <i class="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Filter
            </div>

            <div @click="toggleSearch"
                 class="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                <i class="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                <i class="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Search
            </div>
        </div>

        <!-- Search product -->
        <transition name="slide">
            <div v-if="showSearch" class="panel-search w-full p-t-10 p-b-15">
                <div class="bor8 dis-flex p-l-15">
                    <button class="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                        <i class="zmdi zmdi-search"></i>
                    </button>

                    <input class="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product"
                           placeholder="Search">
                </div>
            </div>
        </transition>
        <!-- Filter -->
        <transition name="slide">
            <div class="panel-filter w-full p-t-10" v-if="showFilter">
                <div class="wrap-filter flex-w bg6  p-lr-40 p-t-27 p-lr-15-sm">

                    <div class="col-sm-6 col-md-5  p-r-15 p-b-27">
                        <div class="mtext-102 cl2 p-b-15">
                            Color
                        </div>

                        <ul>
                            <li class="p-b-6 color-item m-r-15" @click="selectColor('')">All</li>
                            <li @click="selectColor(color.id)" class="p-b-6 color-item" v-for="color in colors"
                                :key="color.id">
									<span class="fs-15 lh-12 m-r-6">
										<i :class="{'active-color': payloadProduct.colorId === color.id}" class="zmdi zmdi-circle" :style="{'color': color.hex}"></i>
									</span>
                            </li>
                        </ul>
                    </div>

                    <div class="col-sm-6 col-md-7  p-b-27">
                        <div class="mtext-102 cl2 p-b-15">
                            Tags
                        </div>

                        <div class="flex-w p-t-4 m-r--5">
                            <a href="#" v-for="tag in tags" @click.prevent="selectTag(tag.id)"
                               :key="tag.id" :class="{'active-tag': payloadProduct.tagId === tag.id}"
                               class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                {{ tag.name }}
                            </a>
                        </div>
                        <a href="#" @click.prevent="selectTag('')"
                           :class="{'active-tag': payloadProduct.tagId === ''}"
                           class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                            All
                        </a>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "ProductsFilter",
        data: () => ({
            activeBrand: 0,
            activePhoneModel: 0,
            showFilter: false,
            showSearch: false,
            payloadProduct: {
                categoryId: 0,
                colorId: 0,
                tagId: ''
            }
        }),
        computed: {
            ...mapGetters([
                'categories',
                'brands',
                'phoneModels',
                'colors',
                'tags',
                'selectedBrand',
                'selectedPhoneModel'
            ]),
        },
        created() {
            this.activeBrand = this.selectedBrand;
            this.activePhoneModel = this.selectedPhoneModel
        },
        methods: {
            toggleFilter() {
                this.showSearch = false;
                this.showFilter = !this.showFilter;
            },
            toggleSearch() {
                this.showFilter = false;
                this.showSearch = !this.showSearch;
            },
            changeBrand() {
                this.$store.dispatch('selectBrand', this.activeBrand);
            },
            changePhoneModel() {
                this.$store.dispatch('selectPhoneModel', this.activePhoneModel);
            },
            changeCategory() {
                this.getProducts()
            },
            selectColor(value) {
                this.payloadProduct.colorId = value;
                this.getProducts()
            },
            selectTag(value) {
                this.payloadProduct.tagId = value;
                this.getProducts()
            },
            getProducts()
            {
                this.$store.dispatch('fetchProducts', this.payloadProduct)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .custom-select {
        margin-bottom: 0 !important;
        height: 40px !important;
    }

    .js-show-filter, .js-show-search {
        margin-bottom: 5px;
    }

    .filter-link {
        color: #000000;
    }

    .color-item {
        display: inline;
        cursor: pointer;
        font-size: 25px;
        i {
            font-size: 25px;
        }
        .active-color {
            border: 1px solid #6C7FDA;
            border-radius: 20%;
        }
    }
    .active-tag, .hov-tag1:hover {
        background: #6c7fda;
        color: #ffffff;
        border: none;
    }
</style>
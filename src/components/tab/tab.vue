<template>
    <div class="nav">
        <router-link tag="div" class="tab-item" to="/recommand">
            <span>推荐</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/singer">
            <span>歌手</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/rank">
            <span>排行</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/search">
            <span>搜索</span>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"
.nav
    display flex
    flex-direction row
    height 44px
    line-height 44px
    font-size $font-size-medium
    .tab-item
        flex 1
        text-align center
        span
            padding-bottom 5px
            color $color-text-l
        &.active
            span
                color: $color-theme
                border-bottom: 2px solid $color-theme
</style>

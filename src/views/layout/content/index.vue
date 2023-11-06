<template>
    <div class="header">
        <!-- 顶部 -->
        <div class="open">
            <span v-if="!isCollapse" class="iconfont icon-right-indent" @click="changMenu"></span>
            <span v-else class="iconfont icon-bx-right-indent" @click="changMenu"></span>
        </div>

        <!-- 内容 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: ["isCollapse"],
    methods: {
        changMenu() {
            this.$emit("changShow")
        }
    }
}

</script>

<style scoped lang="scss">
.header {
    height: 50px;
    background-color: #1e78bf;
    color: #FFF;
    line-height: 50px;
}

.iconfont {
    font-size: 22px;
    cursor: pointer; //鼠标悬浮成为小手
}
</style>
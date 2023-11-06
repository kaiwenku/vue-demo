<template>
    <div class="layout">
        <!-- 左侧导航 -->
        <div class="menu">
            <Menu :isCollapse="isCollapse"></Menu>
        </div>
        <!-- 右侧内容 -->
        <div class="content" :class="{ small: isCollapse }">
            <Content @changShow="changShow" :isCollapse="isCollapse"></Content>
        </div>
    </div>
</template>

<script>
import Menu from "./menu/index.vue"
import Content from "./content/index.vue"
export default {
    data() {
        return {
            isCollapse: false
        }
    },
    components: {
        Menu,
        Content
    },
    methods: {
        changShow() {
            this.isCollapse = !this.isCollapse
        }
    }
}

</script>

<style scoped lang="scss">
.layout {
    // display: flex;

    .menu {
        // width: 200px;
        background-color: #112f50;
        position: fixed; //固定定位
        left: 0;
        top: 0;
        bottom: 0;
    }

    .content {
        // flex: 1; //这通常用于实现弹性盒子容器中的自适应布局效果。
        padding-left: 200px;


    }

    .small {
        padding-left: 64px;
    }
}
</style>
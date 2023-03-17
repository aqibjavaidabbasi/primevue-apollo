<template>
    <div class="bg">
        <Menu></Menu>
        <Header></Header>
        <Content></Content>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import Menu from '@/components/admin/Menu.vue';
    import Header from '@/components/admin/Header.vue';
    import Content from '@/components/admin/Content.vue';

    @Options({
        components: {
            Menu,
            Header,
            Content
        }
    })
    export default class Admin extends Vue {
        
    }
</script>
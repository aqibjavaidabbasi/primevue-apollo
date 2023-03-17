<template>
    <Header></Header>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import Header from '@/components/public/Header.vue';

    @Options({
        components: {
            Header
        }
    })
    export default class Home extends Vue {
        
    }
</script>
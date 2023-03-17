<template>
    <div class="bg" style="min-height: 100vh">
        <Header></Header>
        <Navbar></Navbar>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import Header from '@/components/public/Header.vue';
    import Navbar from '@/components/admin/Header.vue';
    @Options({
        components: {
            Header,
            Navbar
        }
    })
    export default class Home extends Vue {
        
    }
</script>
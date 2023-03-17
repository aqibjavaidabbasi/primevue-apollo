<template>
    <div class="bg-transparent border-0 relative z-2">
        <div class="flex">
            <div class="flex justify-content-center">
                <Breadcrumb :home="home" :model="breadcrumb" class="border-0 bg-transparent zindex-0"/>
            </div>
            <div class="ml-auto flex">
                <div class="p-2">
                    <input type="text" class="rounded-lg p-inputtext p-component p-filled" placeholder="Search" />
                </div>
                <button
                    @click="toggle"
                    label="Toggle"
                    aria-haspopup="true"
                    aria-controls="overlay_menu"
                    class="w-full p-link flex align-items-center p-2 h-100 text-color border-noround p-menubar-start"
                    >
                    <Avatar
                        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                        class="mr-2"
                        shape="circle"
                    />
                    <div class="flex flex-column align-left">
                        <span class="font-bold">Amy Elsner</span>
                        <span class="text-sm">Agent</span>
                    </div>
                    </button>
                    <DropdownMenu ref="menu" id="overlay_menu" :model="dropdown" :popup="true">
                        
                    </DropdownMenu>
            </div>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import Breadcrumb from 'primevue/breadcrumb';
  import Avatar from 'primevue/avatar';
  import DropdownMenu from 'primevue/menu';   
  
    @Options({
        components: {
            Breadcrumb,
            Avatar,
            DropdownMenu
        },
        methods: {
            toggle(event: any) {
                this.$refs.menu.toggle(event);
            }
        }
    })
  export default class Menu extends Vue {
    public home = {
                icon: 'pi pi-home',
                to: '/',
            };
    public breadcrumb = [
                {label: 'Dashboard'},
            ]
    public dropdown = [
                { label: 'User Name', icon: 'pi pi-user'},
                { separator: true },
                { label: 'Profile', icon: 'pi pi-fw pi-user' },
                { label: 'Settings', icon: 'pi pi-fw pi-cog' },
                { separator: true },
                { label: 'Log Out', icon: 'pi pi-fw pi-power-off' }
        ];
  }
  </script>
  
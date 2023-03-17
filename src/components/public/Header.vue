
<template>
    <div class="relative z-2">
        <Menubar :model="items">
            <template #start>
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" height="30" class="mr-2" />
            </template>
            <template #end>
                <!-- <button
                    @click="toggle"
                    label="Toggle"
                    aria-haspopup="true"
                    aria-controls="overlay_menu"
                    class="w-full p-link flex align-items-center h-100 text-color hover:surface-200 border-noround p-menubar-start"
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
                    <Menu ref="menu" id="overlay_menu" :model="dropdown" :popup="true">
                        
                    </Menu> -->
            </template>
        </Menubar>
    </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
import Menubar from 'primevue/menubar';
import Menu from 'primevue/menu';
import Avatar from 'primevue/avatar';

@Options({
    components: {
        Menubar,
        Avatar,
        Menu
    },
    methods: {
        toggle(event: any) {
            this.$refs.menu.toggle(event);
        }
    }
})

export default class Header extends Vue {
    public items = [
                {
                    label: 'File',
                    icon: 'pi pi-fw pi-file',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-fw pi-plus',
                            items: [
                                {
                                    label: 'Bookmark',
                                    icon: 'pi pi-fw pi-bookmark'
                                },
                                {
                                    label: 'Video',
                                    icon: 'pi pi-fw pi-video'
                                }
                            ]
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-trash'
                        },
                        {
                            separator: true
                        },
                        {
                            label: 'Export',
                            icon: 'pi pi-fw pi-external-link'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Left',
                            icon: 'pi pi-fw pi-align-left'
                        },
                        {
                            label: 'Right',
                            icon: 'pi pi-fw pi-align-right'
                        },
                        {
                            label: 'Center',
                            icon: 'pi pi-fw pi-align-center'
                        },
                        {
                            label: 'Justify',
                            icon: 'pi pi-fw pi-align-justify'
                        }
                    ]
                },
                {
                    label: 'Users',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-fw pi-user-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-user-minus'
                        },
                        {
                            label: 'Search',
                            icon: 'pi pi-fw pi-users',
                            items: [
                                {
                                    label: 'Filter',
                                    icon: 'pi pi-fw pi-filter',
                                    items: [
                                        {
                                            label: 'Print',
                                            icon: 'pi pi-fw pi-print'
                                        }
                                    ]
                                },
                                {
                                    icon: 'pi pi-fw pi-bars',
                                    label: 'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [
                        {
                            label: 'Edit',
                            icon: 'pi pi-fw pi-pencil',
                            items: [
                                {
                                    label: 'Save',
                                    icon: 'pi pi-fw pi-calendar-plus'
                                },
                                {
                                    label: 'Delete',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        },
                        {
                            label: 'Archieve',
                            icon: 'pi pi-fw pi-calendar-times',
                            items: [
                                {
                                    label: 'Remove',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Quit',
                    icon: 'pi pi-fw pi-power-off'
                }
            ];
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
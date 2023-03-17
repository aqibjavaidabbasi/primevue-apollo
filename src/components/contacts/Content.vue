<template>
    <div class="">
        <div class="grid m-2">
            <div class="col-12 lg:col-12" data-v-45b24a1a="">
                <div class="card" data-v-45b24a1a="">
                    <div class="flex flex-column md:flex-row md:align-items-start md:justify-content-between mb-3"
                        data-v-45b24a1a="">
                        <!-- add create button -->
                        <!-- add h1 -->
                        <h1 class="text-2xl font-bold">Contacts</h1>
                        <Button type="button" icon="pi pi-plus" label="Create" class="p-button-raised p-button-rounded p-button-success" @click="dialogVisible = true" />
                    </div>
                    <DataTable :value="contacts" paginator :rows="10" dataKey="id" >
                        <!-- add actions -->
                        <Column headerStyle="width: 5rem; text-align: center" bodyStyle="text-align: center; overflow: visible" header="Actions">
                            <template #body="{ data }">
                                <div class="flex gap-2">
                                    <Button type="button" class="" @click="dialogVisible = true" icon="pi pi-pencil" rounded />
                                    <Button type="button" class="btn-warning" @click="confirm(data.id)" icon="pi pi-trash" severity="danger" rounded />
                                </div>
                            </template>
                        </Column>
                        <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"
                            filterMatchMode="contains">
                            <template #body="{ data }">
                                {{ getFullName(data) }}
                            </template>
                        </Column>
                        <Column field="email" header="Email" sortable filter filterPlaceholder="Search by email"
                            filterMatchMode="contains"></Column>
                        <Column field="phone" header="Phone" sortable filter filterPlaceholder="Search by phone"
                            filterMatchMode="contains"></Column>
                    </DataTable>
                    <Dialog v-model:visible="dialogVisible" header="Create Contact" class="rounded-lg" maximizable modal >
                        <div class="grid">
                            <div class="col-12 md:col-4 flex flex-column gap-2 p-2">
                                <label for="first_name">First Name</label>
                                <InputText id="first_name" />
                            </div>
                            <div class="col-12 md:col-4 flex flex-column gap-2 p-2">
                                <label for="middle_name">Middle Name</label>
                                <InputText id="middle_name" />
                            </div>
                            <div class="col-12 md:col-4 flex flex-column gap-2 p-2">
                                <label for="last_name">Last Name</label>
                                <InputText id="last_name" />
                            </div>
                            <div class="col-12 md:col-6 flex flex-column gap-2 p-2">
                                <label for="email">Email</label>
                                <InputText id="email" />
                            </div>
                            <div class="col-12 md:col-6 flex flex-column gap-2 p-2">
                                <label for="phone">Phone</label>
                                <InputText id="phone" />
                            </div>
                        </div>
                        <template #footer>
                            <Button label="Close" class="bg-light runded-lg" icon="pi pi-times" @click="dialogVisible = false" />
                            <Button label="Save" icon="pi pi-check" class="rounded-lg" @click="dialogVisible = false" />
                        </template>
                    </Dialog>
                    <ConfirmDialog class="rounded-lg"></ConfirmDialog>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';
    import Card from 'primevue/card';
    import Knob from 'primevue/knob';
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import ColumnGroup from 'primevue/columngroup';   // optional
    import Row from 'primevue/row'; 
    import Tag from 'primevue/tag';
    import MultiSelect from 'primevue/multiselect';
    import Dropdown from 'primevue/dropdown';
    import TriStateCheckbox from 'primevue/tristatecheckbox';
    import DataView from 'primevue/dataview';
    import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'   // optional
    import Button from 'primevue/button';
    import Dialog  from 'primevue/dialog';
    import InputText from 'primevue/inputtext';
    import ConfirmDialog from 'primevue/confirmdialog';

    @Options({
        components: {
            Card,
            Knob,
            Button,
            Dialog ,
            DataTable,
            Column,
            ColumnGroup,
            Row,
            Tag,
            MultiSelect,
            Dropdown,
            TriStateCheckbox,
            DataView,
            DataViewLayoutOptions,
            InputText,
            ConfirmDialog
        },
        methods: {
            getFullName(data: object) {
                let fullName = '';
                // exclude any one having  value
                if (data.firstName != '') {
                    fullName += data.firstName;
                }
                if (data.middleName != '') {
                    fullName += ' ' + data.middleName;
                }
                if (data.lastName != '') {
                    fullName += ' ' + data.lastName;
                }
                console.log(fullName);
                return fullName;
            },
            confirm(id: any) {
                let ab = id;
                this.$confirm.require({
                    message: 'Do you want to delete this record?',
                    header: 'Delete Confirmation',
                    icon: 'pi pi-info-circle',
                    acceptClass: 'p-button-danger',
                    accept: () => {
                        // close dialge
                        this.dialogVisible = false;
                        ab++;
                    },
                    reject: () => {
                        // close dialge
                        this.dialogVisible = false;
                        ab++;
                    }
                });
            }

        },
    })
 
  export default class Content extends Vue {
        public dialogVisible = false;
        public new = {
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            phone: '',
        };
        public contacts = [
            {
                id: 1000,
                firstName: 'James',
                middleName: '',
                lastName: 'Butt',
                email: 'james@gmail.com',
                phone: '504-621-8927',
            },
            {
                id: 1001,
                firstName: 'Josephine',
                middleName: 'Darakjy',
                lastName: '',
                email: 'josephine@gmail.com',
                phone: '810-292-9388',
            },
            {
                id: 1002,
                firstName: 'Art',
                middleName: '',
                lastName: 'Venere',
                email: 'art@gmail.com',
                phone: '856-636-8749',
            },
            {
                id: 1003,
                firstName: 'Lenna',
                middleName: 'Paprocki',
                lastName: '',
                email: 'lenna@gmail.com',
                phone: '907-385-4412',
            },
            {
                id: 1004,
                firstName: 'Donette',
                middleName: 'Foller',
                lastName: '',
                email: 'donnette@gmail.com',
                phone: '513-570-1893',
            },
            {
                id: 1005,
                firstName: 'Simona',
                middleName: 'Morasca',
                lastName: '',
                email: 'simona@gmail.com',
                phone: '419-503-2484',
            },
            {
                id: 1006,
                firstName: 'Mitsue',
                middleName: 'Tollner',
                lastName: '',
                email: 'mitsue@gmail.com',
                phone: '773-573-6914',
            },
        ];
    }
  </script>
  
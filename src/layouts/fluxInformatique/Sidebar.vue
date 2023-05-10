<template>
  <v-row>
    <WorkshopComponent :workshop-list="appData.workshopdata"/>
    <ActionComponent/>
  </v-row>
</template>
<script setup>
import { ref } from 'vue';
import WorkshopComponent from '@/components/Workshop.vue';
import ActionComponent from '@/components/ActionComponent.vue';
import { useAppStore } from '@/store/app';
const appData = useAppStore();
</script>

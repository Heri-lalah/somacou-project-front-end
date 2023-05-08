<template>
  <v-row>
    <WorkshopComponent :workshop-list="workshoplistData.data"/>
    <ActionComponent :action-event="actionEvent"/>
  </v-row>
</template>
<script setup>
import { ref } from 'vue';
import WorkshopComponent from '@/components/Workshop.vue';
import ActionComponent from '@/components/ActionComponent.vue';
import { useWorkshopStore } from '@/store/app';
const workshoplistData = useWorkshopStore();
const actionEvent = ref(false);
</script>

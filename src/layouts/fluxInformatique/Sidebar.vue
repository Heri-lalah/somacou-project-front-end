<template>
  <v-row>
    <WorkshopComponent :workshop-list="workshoplist"/>
    <ActionComponent :action-event="actionEvent"/>
  </v-row>
</template>
<script setup>
import { ref } from 'vue';
import workshop from '@/composables/workshop'
import WorkshopComponent from '@/components/Workshop.vue';
import ActionComponent from '@/components/ActionComponent.vue';
const {getContent} = workshop();
const workshoplist = getContent();
const actionEvent = ref(false);
</script>

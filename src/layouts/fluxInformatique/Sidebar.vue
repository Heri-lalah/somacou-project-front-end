<template>
  <div>
    <p class="font-weight-bold text-primary">ATELIERS</p>
    <WorkshopComponent :workshop-list="workshoplist"/>
    <ActionComponent :action-event="actionEvent"/>
  </div>
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

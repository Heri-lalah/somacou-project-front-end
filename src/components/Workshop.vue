<template>
<v-col class="px-0 mx-0" cols="6" md="12">
  <p class="font-weight-bold text-primary">ATELIERS</p>
  <v-list height="250">
      <v-list-item
      v-for="(item, i) in props.workshopList"
      :key="i"
      :value="item"
      lines="false"
      nav
      @click="setActive(item)"
      density="comfortable"
      active-class="bg-primary"
      >
          <template v-slot:prepend>
              <v-icon icon="mdi-star-outline"></v-icon>
          </template>
          <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
  </v-list>
</v-col>
</template>
<script  setup>
const props = defineProps({
  workshopList : Array,
});
import { useAppStore } from '@/store/app';
const appData = useAppStore();
const setActive = (param) => {
  appData.ActiveworkshopSource = param.title;
}
</script>

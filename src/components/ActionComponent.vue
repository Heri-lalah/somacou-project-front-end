<template>
<v-col class="mx-0 px-0" cols="6" md="12">
  <p class="font-weight-bold text-danger">ACTIONS</p>
  <v-list>
      <v-list-item nav title="Production" prepend-icon="mdi-folder-plus-outline" lines="false"
          active-class="bg-danger"
          value="production"
          :active="!actionEvent"
          @click="[actionEvent=false, this.$router.push({name: 'productionByInfoTeam'}), alert('test')]"
      >

      </v-list-item>
      <v-list-item nav title="Mouvement"  prepend-icon="mdi-pencil-plus-outline" value="mouvement" lines="false"
          active-class="bg-danger"
          :active="actionEvent"
          @click="actionEvent=true"
      >
      </v-list-item>
      <v-expand-transition>
        <v-list class="ml-3">
          <v-list-item nav @click="[actionEvent=true, this.$router.push({name : 'movementIncreaseByInfoTeam'})]" lines="false" density="confortable" title="Entrée" prepend-icon="mdi-text-box-plus-outline" active-color="danger" value="increase"></v-list-item>
          <v-list-item nav @click="[actionEvent=true, this.$router.push({name : 'movementDecreaseByInfoTeam'})]" lines="false" density="confortable" title="Sortie" prepend-icon="mdi-receipt-text-minus-outline" active-color="danger" value="decrease"></v-list-item>
          <v-list-item nav @click="[actionEvent=true, this.$router.push({name : 'readMovementByInfoTeam'})]" lines="false" density="confortable" title="Visualisation" prepend-icon="mdi-format-list-bulleted" active-color="danger" value="read"></v-list-item>
        </v-list>
      </v-expand-transition>
  </v-list>

</v-col>
</template>
<script setup>
const props = defineProps({
  actionEvent: Boolean
});
</script>

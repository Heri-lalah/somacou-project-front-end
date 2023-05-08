<template>
  <v-app>
    <AppBar/>
    <v-main>
      <v-row class="px-8 mt-1">
        <v-col md="2" cols="12">
          <sidebar/>
        </v-col>
        <v-col><router-view/></v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<script setup>
import AppBar from "./AppBar.vue";
import Sidebar from "./Sidebar.vue";
</script>

<template>
  <div>
    <v-form>
      <v-row>
          <v-col cols="12" md="3">
          <v-text-field
          color="primary"
          label="Date"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
          color="primary"
          label="Atelier de déstination"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
          color="primary"
          label="Numéro Bon"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-switch
            class="text-center"
            color="primary"
            label="Stock"
            v-model="isEnabled"
          />
        </v-col>
      </v-row>
      <v-row justify-md="center"  class="pa-0 ma-0">
        <v-col cols="12" md="6">
          <v-text-field
          color="primary"
          :label="isEnabled ? 'combo Article' : 'Article  '"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-select
            label="Qualité"
            variant="underlined"
            :items="['1er Choix', '2ème Choix', '3ème Choix']"
          ></v-select>
        </v-col>
        <v-col cols="12" md="3">
          <v-autocomplete
          color="primary"
          label="Couleur"
          variant="underlined"
          :items="['Bleu', 'Vert', 'Jaune', 'Jaune poussin', 'Rouge fuschia']"
          >
          </v-autocomplete>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
          color="primary"
          label="Qté demandé"
          type="number"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col align-self="end">
          <v-radio-group inline>
              <v-radio label="KG" value="KG" color="primary"></v-radio>
              <v-radio label="PIECE" value="PIECE" color="primary"></v-radio>
              <v-radio label="METRE" value="METRE" color="primary"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>
<script setup>
import { ref } from "vue";

const isEnabled = ref(true);
</script>

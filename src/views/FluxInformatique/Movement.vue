<template>
  <div>
    <v-form>
      <v-row class="py-0 my-0">
          <v-col cols="4" md="3">
          <v-text-field
          color="primary"
          label="Date"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="4" md="3">
          <v-text-field
          color="primary"
          label="Atelier de déstination"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="4" md="3">
          <v-text-field
          color="primary"
          label="Numéro Bon"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col class="d-flex">
          <v-spacer></v-spacer>
          <v-switch
            class="text-center"
            color="primary"
            label="Stock"
            v-model="isEnabled"
          />
        </v-col>
      </v-row>
      <v-row class="py-0 my-0">
        <v-col cols="4" md="6">
          <v-text-field
          color="primary"
          :label="isEnabled ? 'combo Article' : 'Article  '"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="4" md="3">
          <v-select
            label="Qualité"
            variant="underlined"
            :items="['1er Choix', '2ème Choix', '3ème Choix']"
          ></v-select>
        </v-col>
        <v-col cols="4" md="3">
          <v-autocomplete
          color="primary"
          label="Couleur"
          variant="underlined"
          :items="['Bleu', 'Vert', 'Jaune', 'Jaune poussin', 'Rouge fuschia']"
          >
          </v-autocomplete>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4" md="2" class="py-0 my-0">
          <v-text-field
          color="primary"
          label="Qté demandé"
          type="number"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="6" md="3" class="py-0 my-0">
          <v-radio-group inline v-model="measure" class="mt-2">
              <v-radio label="KG" value="KG"  color="primary"></v-radio>
              <v-radio label="PIECE" value="PIECE" color="primary"></v-radio>
              <v-radio label="METRE" value="METRE" color="primary"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="4" md="2"  class="py-0 my-0">
          <v-text-field
          color="primary"
          label="Pièce"
          type="number"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="4" md="2" class="py-0 my-0">
          <v-text-field
          color="primary"
          label="Poids"
          type="number"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="4" md="3" class="py-0 my-0">
          <v-text-field
          color="primary"
          label="Longueur"
          type="number"
          variant="underlined"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row justify-md="space-around">
        <v-col cols="5" class="py-0 my-0">
          <v-text-field
          color="primary"
          label="Objectif"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="5" class="py-0 my-0">
          <v-text-field
          color="primary"
          label="Secteur"
          variant="underlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn prepend-icon="mdi-content-save-edit-outline" color="primary" width="250">Valider</v-btn>
      </v-row>
    </v-form>
  </div>
</template>
<script setup>
import { ref } from "vue";

const isEnabled = ref(true);
const measure = ref('KG');
</script>

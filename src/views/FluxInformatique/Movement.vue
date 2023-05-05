<template>
  <div>
    <v-form v-model="validForm">
      <v-row class="py-0 my-0">
          <v-col cols="4" md="3">
          <v-text-field
          color="primary"
          label="Date"
          v-model="form.date"
          :rules="[ v => !!v || '*']"
          variant="underlined"
          required
          ></v-text-field>
        </v-col>
        <v-col cols="4" md="3">
          <v-text-field
          color="primary"
          v-model="form.toWorkshop"
          label="Atelier de déstination"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="4" md="3">
          <v-text-field
          color="primary"
          label="Numéro Bon"
          v-model="form.idBon"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col class="d-flex">
          <v-spacer></v-spacer>
          <v-switch
            class="text-center"
            color="primary"
            label="Stock"
            v-model="form.stockEnabled"
          />
        </v-col>
      </v-row>
      <v-row class="py-0 my-0">
        <v-col cols="4" md="6">
          <v-text-field
          color="primary"
          :label="form.stockEnabled ? 'combo Article' : 'Article  '"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="4" md="3">
          <v-select
            label="Qualité"
            variant="underlined"
            v-model="form.quality"
            :value="[1, 2, 3]"
            :items="['1er Choix', '2ème Choix', '3ème Choix']"
          ></v-select>
        </v-col>
        <v-col cols="4" md="3">
          <v-autocomplete
          color="primary"
          label="Couleur"
          v-model="form.color"
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
          v-model="form.quantity"
          type="number"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="6" md="3" class="py-0 my-0">
          <v-radio-group inline v-model="form.measure" class="mt-2">
              <v-radio label="KG" value="KG"  color="primary"></v-radio>
              <v-radio label="PIECE" value="PIECE" color="primary"></v-radio>
              <v-radio label="METRE" value="METRE" color="primary"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="4" md="2"  class="py-0 my-0">
          <v-text-field
          color="primary"
          label="Pièce"
          v-model="form.quantityPiece"
          type="number"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="4" md="2" class="py-0 my-0">
          <v-text-field
          color="primary"
          label="Poids"
          v-model="form.quantityWeight"
          type="number"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="4" md="3" class="py-0 my-0">
          <v-text-field
          color="primary"
          label="Longueur"
          v-model="form.quantityLength"
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
          v-model="form.objective"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="5" class="py-0 my-0">
          <v-text-field
          color="primary"
          label="Secteur"
          v-model="form.Sector"
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
import { ref, reactive, watch} from "vue";
import {formattedDate} from '@/helpers';
const validForm =ref(false);
const validField = ref([v => !! v || '']);

const form = reactive({
  date : "",
  toWorkshop : "",
  idBon : "",
  stockEnabled : true,
  quality : 1,
  color: '',
  quantity : '',
  measure: 'KG',
  quantityPiece : '',
  quantityWeight : '',
  quantityLength : '',
  objective : '',
  sector : '',
  textRules : [v=> !! v || '*']
})

watch(() => {
   form.date = formattedDate(form.date),
})
</script>

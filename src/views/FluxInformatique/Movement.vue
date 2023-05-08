<template>
  <div>
    <v-form v-model="validForm">
      <v-row class="py-0 my-0">
          <v-col cols="4" md="3">
          <v-text-field
          color="primary"
          label="Date"
          v-model="form.date"
          :error-messages="$v.date.$errors.map(e => e.$message = '')"
          @input="$v.date.$touch"
          @blur="$v.date.$touch"
          required
          :rules="[ v => !!v || '*']"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="4" md="3">
          <v-text-field
          color="primary"
          v-model="form.toWorkshop"
          label="Atelier de déstination"
          variant="underlined"
          :error-messages="$v.toWorkshop.$errors.map(e => e.$message = '')"
          @input="$v.toWorkshop.$touch"
          required
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
          v-model="form.article"
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
          v-model="form.sector"
          variant="underlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn type="submit" @click.prevent="handleSubmit" prepend-icon="mdi-content-save-edit-outline" color="primary" width="250">Valider</v-btn>
      </v-row>
    </v-form>
    <v-snackbar v-model="snackbar" timeout="2000" :color="snackbarColor">
      {{ snackbarMessage }}
    </v-snackbar>
  </div>
</template>
<script setup>
import { ref, reactive, watch} from "vue";
import {formattedDate} from '@/helpers';
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
const validForm =ref(false);
const snackbar = ref(false);
const snackbarMessage = ref("");
const snackbarColor = ref("");
const validField = ref([v => !! v || '']);

const form = reactive({
  date : "",
  toWorkshop : "",
  idBon : "",
  stockEnabled : true,
  article:"",
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
   form.date = formattedDate(form.date)
})

const rules = {
  date : { required },
  toWorkshop : { required },
  //stockEnabled : {required},
  article: {required},
  idBon : { required },
  quality : { required },
  color: { required },
  quantity : { required },
  objective : { required },
  sector : { required },
}

const $v = useVuelidate(rules, form);

const formValidation=  async () => {
  $v.value.$validate.call()
  const validationErrors = $v.value.$errors;
  return validationErrors.values
}

const handleSubmit = () => {
  $v.value.$validate.call()
  const validationErrors = $v.value.$errors;

  if(validationErrors.length > 0){
    snackbar.value = true;
    snackbarMessage.value = "Juste test";
    snackbarColor.value="danger"
  }else{
    snackbar.value = true;
    snackbarMessage.value = "Juste test";
    snackbarColor.value="success"
  }
}
</script>

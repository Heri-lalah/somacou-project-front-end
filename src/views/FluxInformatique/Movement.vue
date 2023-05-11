<template>
  <div class="parent">
    <v-form>
      <v-row class="py-0 my-0">
          <v-col cols="4" md="3">
          <v-text-field
          color="primary"
          label="Date"
          v-model="form.date"
          :error-messages="$v.date.$errors.map(e => e.$message)"
          @blur="$v.date.$touch"
          required
          :rules="[ v => !!v || '*']"
          autofocus
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="4" md="3">
          <v-autocomplete
          color="primary"
          v-model="form.toWorkshop"
          label="Atelier de déstination"
          variant="underlined"
          :error-messages="$v.toWorkshop.$errors.map(e => e.$message)"
          @input="$v.toWorkshop.$touch"
          @blur="$v.toWorkshop.$touch"
          required
          :items="appStore.workshopdata"
          >
          </v-autocomplete>
        </v-col>
        <v-col cols="4" md="3">
          <v-text-field
          color="primary"
          label="Numéro Bon"
          v-model="form.idBon"
          :error-messages="$v.idBon.$errors.map(e => e.$message)"
          @blur="$v.idBon.$touch"
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
          @keypress="setFilterArticle"
          @keyup="$v.article.$touch"
          :error-messages="$v.article.$errors.map(e => e.$message)"
          required
          >
        </v-text-field>
        <ul v-if="filteredArticle" id="articleList" style="width:500px">
          <li id="filteredArticle" v-for="(item, key) in filteredArticle" :key="key" @click="[form.article=item, filteredArticle ='']"> <v-btn id="article" block width="100" class="text-right">{{ item }}</v-btn> </li>
        </ul>
          <!-- <v-autocomplete
          color="primary"
          :label="form.stockEnabled ? 'combo Article' : 'Article  '"
          variant="underlined"
          v-model="form.article"
          :error-messages="$v.article.$errors.map(e => e.$message)"
          required
          :items="articles"
          >
          </v-autocomplete> -->
        </v-col>
        <v-col cols="4" md="3">
          <v-select
            label="Qualité"
            variant="underlined"
            v-model="form.quality"
            :items="['1ER CHOIX', '2EME CHOIX', '3EME CHOIX']"
          ></v-select>
        </v-col>
        <v-col cols="4" md="3">
          <!-- <v-autocomplete
          color="primary"
          label="Couleur"
          v-model="form.color"
          variant="underlined"
          :items="appStore.color"
          >
          </v-autocomplete> -->
          <v-text-field
          color="primary"
          label="Couleur"
          variant="underlined"
          v-model="form.color"
          @keypress="setFilterColors"
          >
        </v-text-field>
          <ul v-if="filteredColor" class="article" style="width:200px">
            <li id="filteredColors" v-for="(item, key) in filteredColor" :key="key" @click="[form.color=item, filteredColor ='']"> <v-btn id="article" block class="text-right">{{ item }}</v-btn> </li>
          </ul>

        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4" md="3" class="py-0 my-0">
          <v-text-field
          color="primary"
          label="Qté demandé"
          v-model="form.quantity"
          :error-messages="$v.quantity.$errors.map(e => e.$message)"
          @blur="$v.quantity.$touch"
          type="number"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="6" md="3" class="py-0 my-0">
          <v-radio-group inline v-model="form.measure" class="mt-2">
              <v-radio label="KG" value="KG"  color="primary"></v-radio>
              <v-radio label="PIECE" value="PEACE" color="primary"></v-radio>
              <v-radio label="METRE" value="METER" color="primary"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="4" md="2"  class="py-0 my-0">
          <v-text-field
          color="primary"
          label="Pièce"
          v-model="form.quantityPeace"
          :disabled="form.measure=='PEACE'"
          type="number"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="4" md="2" class="py-0 my-0">
          <v-text-field
          color="primary"
          label="Poids"
          v-model="form.quantityWeight"
          :disabled="form.measure=='KG'"
          type="number"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="4" md="2" class="py-0 my-0">
          <v-text-field
          color="primary"
          label="Longueur"
          v-model="form.quantityLength"
          :disabled="form.measure=='METER'"
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
          :error-messages="$v.objective.$errors.map(e => e.$message)"
          @blur="$v.objective.$touch"
          variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="5" class="py-0 my-0">
          <v-text-field
          color="primary"
          label="Secteur"
          v-model="form.sector"
          :error-messages="$v.sector.$errors.map(e => e.$message)"
          @blur="$v.sector.$touch"
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
import { ref, reactive, watchEffect} from "vue";
import {formattedDate, dataFilter} from '@/helpers';
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { useAppStore } from "@/store/app";
const appStore = useAppStore()

const snackbar = ref(false);
const snackbarMessage = ref("");
const snackbarColor = ref("");
const errorCount = ref(null);
const articles = appStore.articles;
const form = reactive({
  date : "",
  sourceWorkshop : appStore.ActiveworkshopSource,
  toWorkshop : "",
  idBon : "",
  stockEnabled : true,
  article:"",
  quality : '1ER CHOIX',
  color: '',
  quantity : '',
  measure: 'KG',
  quantityPeace : '',
  quantityWeight : '',
  quantityLength : '',
  objective : '',
  sector : '',
  textRules : [v=> !! v || '*']
})
const filteredArticle = ref("");
const filteredColor = ref("");
const setFilterArticle = () => {
  if(form.article == ""){
    filteredArticle.value = []
  }else{
    filteredArticle.value = dataFilter(articles, form.article);
  }
}
const colors = appStore.color;

const setFilterColors = () => {
  if(form.color == ""){
    filteredColor.value = []
  }else{
    filteredColor.value = dataFilter(colors, form.color);
  }
}

watchEffect(() => {
   form.date = formattedDate(form.date)
   form.article = form.article.toUpperCase();
   form.color = form.color.toUpperCase();

   switch (form.measure) {
    case "KG" :
      form.quantityWeight = form.quantity;
      form.quantityPeace = "";
      form.quantityLength = ""
      break;
    case "PEACE" :
      form.quantityPeace = form.quantity
      form.quantityLength= "";
      form.quantityWeight =""
      break;
    case "METER" :
      form.quantityLength = form.quantity;
      form.quantityPeace = "";
      form.quantityWeight =""
      break;
    default :
      form.quantityWeight = form.quantity;
      break;
   }
})

const articleRules = (value) => articles.includes(value)
const colorRules = (value) => colors.includes(value)

const rules = {
  date : { required : helpers.withMessage('Ce champ ne peut pas être vide', required)
    , },
  toWorkshop : { required : helpers.withMessage('Ce champ ne peut pas être vide', required) },
  //stockEnabled : {required},
  article: {
    required : helpers.withMessage('Ce champ ne peut pas être vide', required),
    articleRules : helpers.withMessage('Article introuvable ', articleRules)
  },
  idBon : { required : helpers.withMessage('Ce champ ne peut pas être vide', required) },
  quantity : { required : helpers.withMessage('Ce champ ne peut pas être vide', required) },
  objective : { required : helpers.withMessage('Ce champ ne peut pas être vide', required) },
  sector : { required : helpers.withMessage('Ce champ ne peut pas être vide', required), colorRules },
  sourceWorkshop : { required : helpers.withMessage('Ce champ ne peut pas être vide', required) },
}

const $v = useVuelidate(rules, form);

const handleSubmit = () => {
  $v.value.$validate.call()
  const validationErrors = $v.value.$errors;

  if(validationErrors.length > 0){
    errorCount.value = validationErrors.length
    snackbar.value = true;
    snackbarMessage.value = "Veillez remplir correctement tous les champs obligatoire";
    snackbarColor.value="danger"
    console.log(form);
  }else{
    console.log(form, 'ok');
  }
}
</script>
<style lang="scss">
li{
  list-style : none;
}
.parent {
  position: relative;
  ul{
    position: absolute;
    max-height: 200px;
    overflow: hidden;
    left: 50;
    z-index: 5000;
  }
}
</style>

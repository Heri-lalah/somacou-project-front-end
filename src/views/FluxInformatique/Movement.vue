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
            label="stock"
            value="stockChecked"
            hide-details
          ></v-switch>
        </v-col>
      </v-row>
      <v-row justify-md="center">
        <v-col cols="12" md="6">
          <v-text-field
          color="primary"
          label="Article"
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
      </v-row>
    </v-form>
  </div>
</template>

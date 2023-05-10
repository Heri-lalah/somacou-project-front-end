// Utilities
import { defineStore } from 'pinia'
import { article } from './article'
export const useAppStore = defineStore('app', {
  state: () => ({
    workshopdata : [{value :1, title : "ATELCO"},{value :2, title : "ATELIER ELECTRIQUE"},{value :3, title : "ATELIER MECANIQUE"},{value :4, title : "BATIMENTS"},{value :5, title : "BATTAGE"},{value :6, title : "BLANCHISSERIE"},{value :7, title : "CASSE CROUTE"},{value :8, title : "CMT"},{value :9, title : "COMMERCIALE"},{value :10, title : "COMPAGNIE MALAGASY DE TEX"},{value :11, title : "COMPRESSE GAZE"},{value :12, title : "COMPTA"},{value :13, title : "COTON HYDROPHILE"},{value :14, title : "DG"},{value :15, title : "ECOTEINTURE"},{value :16, title : "EFFILOCHAGE"},{value :17, title : "EMBALLAGE"},{value :18, title : "ETS RAHARINIAINA"},{value :19, title : "FFF ASSEMBLAGE"},{value :20, title : "FFF BOBINAGE"},{value :21, title : "FFF FILATURE"},{value :22, title : "FFF MAGASIN"},{value :23, title : "FFF PREPARATION"},{value :24, title : "FILATURE 2"},{value :25, title : "FINITION"},{value :26, title : "FLT"},{value :27, title : "FOURNISSEUR EXTERIEUR"},{value :28, title : "GRAZE"},{value :29, title : "IMPRESSION"},{value :30, title : "INFORMATIQUE"},{value :31, title : "J11"},{value :32, title : "LIBRE"},{value :33, title : "LOGISTIQUE"},{value :34, title : "MAGASIN CENTRAL"},{value :35, title : "MAGASIN D'USINE"},{value :36, title : "MATIERES PREMIERES"},{value :37, title : "MCV"},{value :38, title : "MECHE A BOUGIE"},{value :39, title : "MENUISERIE"},{value :40, title : "MERCERISAGE"},{value :41, title : "OURDISSAGE"},{value :42, title : "PADELLE"},{value :43, title : "PERSONNEL"},{value :44, title : "PLOMBERIE"},{value :45, title : "PRESSE"},{value :46, title : "RABENIJANONANA JONNAH M."},{value :47, title : "RANDRIANINDRINA Jean Jacques"},{value :48, title : "RASOAZANAMANANA Sahondra"},{value :49, title : "SEBRO"},{value :50, title : "SECRETARIAT"},{value :51, title : "SECURITE"},{value :52, title : "TEINTURE"},{value :53, title : "TISSAGE 1"},{value :54, title : "TISSAGE 2"},{value :55, title : "TRANSIT"},{value :56, title : "TRANSPORT"},{value :57, title : "TRICOTAGE"},{value :58, title : "TRICOTAGE FESTIVAL"}],
    ActiveworkshopSource : '',
    color : [
      {
         title : "Abricot",
         value:"E67E30"
      },
      {
         title : "Acajou",
         value:"88421D"
      },
      {
         title : "Aigue-marine",
         value:"79F8F8"
      },
      {
         title : "Alezan (chevaux)",
         value:"A76726"
      },
      {
         title : "Amande",
         value:"82C46C"
      },
      {
         title : "Amarante",
         value:"91283B"
      },
      {
         title : "Ambre",
         value:"F0C300"
      },
      {
         title : "Améthyste",
         value:"884DA7"
      },
      {
         title : "Anthracite",
         value:"303030"
      },
      {
         title : "Aquilain (chevaux)",
         value:"AD4F09"
      },
      {
         title : "Ardoise",
         value:"5A5E6B"
      },
      {
         title : "Argent (héraldique)",
         value:"FFFFFF"
      },
      {
         title : "Aubergine",
         value:"370028"
      },
      {
         title : "Auburn (cheveux)",
         value:"9D3E0C"
      },
      {
         title : "Aurore",
         value:"FFCB60"
      },
      {
         title : "Avocat",
         value:"568203"
      },
      {
         title : "Azur",
         value:"007FFF"
      },
      {
         title : "Azur (héraldique)",
         value:"1E7FCB"
      },
      {
         title : "Baillet (chevaux, vieilli)",
         value:"AE642D"
      },
      {
         title : "Basané (teint)",
         value:"8B6C42"
      },
      {
         title : "Beige ou Bureau",
         value:"C8AD7F"
      },
      {
         title : "Beurre",
         value:"F0E36B"
      },
      {
         title : "Bis",
         value:"766F64"
      },
      {
         title : "Bisque",
         value:"FFE4C4"
      },
      {
         title : "Bistre",
         value:"856D4D"
      },
      {
         title : "Bitume (pigment)",
         value:"4E3D28"
      },
      {
         title : "Blanc",
         value:"FFFFFF"
      },
      {
         title : "Blanc cassé",
         value:"FEFEE2"
      },
      {
         title : "Blanc lunaire",
         value:"F4FEFE"
      },
      {
         title : "Blé",
         value:"E8D630"
      },
      {
         title : "Bleu",
         value:"0080FF"
      },
      {
         title : "Bleu acier",
         value:"3A8EBA"
      },
      {
         title : "Bleu barbeau ou bleuet",
         value:"5472AE"
      },
      {
         title : "Bleu canard",
         value:"048B9A"
      },
      {
         title : "Bleu céleste",
         value:"26C4EC"
      },
      {
         title : "Bleu charrette",
         value:"8EA2C6"
      },
      {
         title : "Bleu ciel",
         value:"77B5FE"
      },
      {
         title : "Bleu de cobalt (pigment)",
         value:"22427C"
      },
      {
         title : "Bleu de Prusse (pigment), de Berlin ou bleu hussard",
         value:"24445C"
      },
      {
         title : "Bleu électrique",
         value:"2C75FF"
      },
      {
         title : "Bleu givré",
         value:"80D0D0"
      },
      {
         title : "Bleu Klein",
         value:"002FA7"
      },
      {
         title : "Bleu Majorelle",
         value:"6050DC"
      },
      {
         title : "Bleu marine",
         value:"03224C"
      },
      {
         title : "Bleu nuit",
         value:"0F056B"
      },
      {
         title : "Bleu outremer",
         value:"1B019B"
      },
      {
         title : "Bleu paon",
         value:"067790"
      },
      {
         title : "Bleu Persan",
         value:"6600FF"
      },
      {
         title : "Bleu pétrole",
         value:"1D4851"
      },
      {
         title : "Bleu roi ou de France",
         value:"318CE7"
      },
      {
         title : "Bleu turquin",
         value:"425B8A"
      },
      {
         title : "Blond (cheveux)",
         value:"E2BC74"
      },
      {
         title : "Blond vénitien (cheveux)",
         value:"E7A854"
      },
      {
         title : "Bordeaux",
         value:"6D071A"
      },
      {
         title : "Bouton d'or",
         value:"FCDC12"
      },
      {
         title : "Brique",
         value:"842E1B"
      },
      {
         title : "Bronze",
         value:"614E1A"
      },
      {
         title : "Brou de noix",
         value:"3F2204"
      },
      {
         title : "Brun",
         value:"5B3C11"
      },
      {
         title : "Caca d'oie",
         value:"CDCD0D"
      },
      {
         title : "Cacao",
         value:"614B3A"
      },
      {
         title : "Cachou (pigments)",
         value:"2F1B0C"
      },
      {
         title : "Cæruleum",
         value:"357AB7"
      },
      {
         title : "Café",
         value:"462E01"
      },
      {
         title : "Café au lait",
         value:"785E2F"
      },
      {
         title : "Cannelle",
         value:"7E5835"
      },
      {
         title : "Capucine",
         value:"FF5E4D"
      },
      {
         title : "Caramel (pigments)",
         value:"7E3300"
      },
      {
         title : "Carmin (pigment)",
         value:"960018"
      },
      {
         title : "Carmin d'alizarine (pigment PR83)",
         value:"B31F2F"
      },
      {
         title : "Carotte",
         value:"F4661B"
      },
      {
         title : "Chamois",
         value:"D0C07A"
      },
      {
         title : "Chartreuse",
         value:"7FFF00"
      },
      {
         title : "Châtain (cheveux)",
         value:"8B6C42"
      },
      {
         title : "Chaudron",
         value:"85530F"
      },
      {
         title : "Chocolat",
         value:"5A3A22"
      },
      {
         title : "Cinabre (pigment)",
         value:"DB1702"
      },
      {
         title : "Citrouille",
         value:"DF6D14"
      },
      {
         title : "Coquille d'œuf",
         value:"FDE9E0"
      },
      {
         title : "Corail",
         value:"E73E01"
      },
      {
         title : "Cramoisi",
         value:"DC143C"
      },
      {
         title : "Crème",
         value:"FDF1B8"
      },
      {
         title : "Cuisse de nymphe",
         value:"FEE7F0"
      },
      {
         title : "Cuivre",
         value:"B36700"
      },
      {
         title : "Cyan",
         value:"2BFAFA"
      },
      {
         title : "Écarlate",
         value:"ED0000"
      },
      {
         title : "Écru",
         value:"FEFEE0"
      },
      {
         title : "Émeraude",
         value:"01D758"
      },
      {
         title : "Fauve",
         value:"AD4F09"
      },
      {
         title : "Flave",
         value:"E6E697"
      },
      {
         title : "Fraise",
         value:"BF3030"
      },
      {
         title : "Fraise écrasée",
         value:"A42424"
      },
      {
         title : "Framboise",
         value:"C72C48"
      },
      {
         title : "Fuchsia",
         value:"FD3F92"
      },
      {
         title : "Fumée",
         value:"BBD2E1"
      },
      {
         title : "Garance (pigment)",
         value:"EE1010"
      },
      {
         title : "Glauque",
         value:"649B88"
      },
      {
         title : "Glycine",
         value:"C9A0DC"
      },
      {
         title : "Grège",
         value:"BBAE98"
      },
      {
         title : "Grenadine",
         value:"E9383F"
      },
      {
         title : "Grenat",
         value:"6E0B14"
      },
      {
         title : "Gris",
         value:"606060"
      },
      {
         title : "Gris acier",
         value:"AFAFAF"
      },
      {
         title : "Gris de Payne (mélange de pigments)",
         value:"677179"
      },
      {
         title : "Gris fer",
         value:"7F7F7F"
      },
      {
         title : "Gris perle",
         value:"CECECE"
      },
      {
         title : "Groseille",
         value:"CF0A1D"
      },
      {
         title : "Guède ou Pastel des teinturiers (pigment)",
         value:"56739A"
      },
      {
         title : "Gueules (héraldique)",
         value:"E21313"
      },
      {
         title : "Héliotrope",
         value:"DF73FF"
      },
      {
         title : "Incarnat",
         value:"FF6F7D"
      },
      {
         title : "Indigo",
         value:"791CF8"
      },
      {
         title : "Indigo (teinture)",
         value:"2E006C"
      },
      {
         title : "Isabelle",
         value:"785E2F"
      },
      {
         title : "Ivoire",
         value:"FFFFD4"
      },
      {
         title : "Jaune",
         value:"FFFF00"
      },
      {
         title : "Jaune canari",
         value:"E7F00D"
      },
      {
         title : "Jaune citron",
         value:"F7FF3C"
      },
      {
         title : "Jaune d'or",
         value:"EFD807"
      },
      {
         title : "Jaune de cobalt ou auréolin (pigment)",
         value:"FDEE00"
      },
      {
         title : "Jaune de Mars (pigment)",
         value:"EED153"
      },
      {
         title : "Jaune de Naples (pigment)",
         value:"FFF0BC"
      },
      {
         title : "Jaune impérial",
         value:"FFE436"
      },
      {
         title : "Jaune mimosa",
         value:"FEF86C"
      },
      {
         title : "Kaki",
         value:"94812B"
      },
      {
         title : "Lapis-lazuli",
         value:"26619C"
      },
      {
         title : "Lavallière (reliure)",
         value:"8F5922"
      },
      {
         title : "Lavande",
         value:"9683EC"
      },
      {
         title : "Lie de vin",
         value:"AC1E44"
      },
      {
         title : "Lilas",
         value:"B666D2"
      },
      {
         title : "Lime ou vert citron",
         value:"9EFD38"
      },
      {
         title : "Lin",
         value:"FAF0E6"
      },
      {
         title : "Magenta",
         value:"DB0073"
      },
      {
         title : "Maïs",
         value:"FFDE75"
      },
      {
         title : "Malachite",
         value:"1FA055"
      },
      {
         title : "Mandarine",
         value:"FEA347"
      },
      {
         title : "Marron",
         value:"582900"
      },
      {
         title : "Mastic",
         value:"B3B191"
      },
      {
         title : "Mauve (couleur)",
         value:"D473D4"
      },
      {
         title : "Menthe",
         value:"16B84E"
      },
      {
         title : "Moutarde",
         value:"C7CF00"
      },
      {
         title : "Nacarat",
         value:"FC5D5D"
      },
      {
         title : "Nankin",
         value:"F7E269"
      },
      {
         title : "Noir",
         value:"000000"
      },
      {
         title : "Noir animal (pigment)",
         value:"000000"
      },
      {
         title : "Noir d'aniline (pigment)",
         value:"120D16"
      },
      {
         title : "Noir d'ivoire (pigment)",
         value:"000000"
      },
      {
         title : "Noir de carbone (pigment)",
         value:"130E0A"
      },
      {
         title : "Noir de fumée (pigment)",
         value:"130E0A"
      },
      {
         title : "Noisette",
         value:"955628"
      },
      {
         title : "Ocre (pigment)",
         value:"DFAF2C"
      },
      {
         title : "Ocre rouge (pigment)",
         value:"DD985C"
      },
      {
         title : "Olive",
         value:"708D23"
      },
      {
         title : "Or",
         value:"FFD700"
      },
      {
         title : "Orange",
         value:"FF7F00"
      },
      {
         title : "Orange brûlé",
         value:"CC5500"
      },
      {
         title : "Orchidée",
         value:"DA70D6"
      },
      {
         title : "Orpiment (pigment)",
         value:"FCD21C"
      },
      {
         title : "Paille",
         value:"FEE347"
      },
      {
         title : "Parme",
         value:"CFA0E9"
      },
      {
         title : "Pelure d'oignon (œnologie)",
         value:"D58490"
      },
      {
         title : "Pervenche",
         value:"CCCCFF"
      },
      {
         title : "Pistache",
         value:"BEF574"
      },
      {
         title : "Poil de chameau",
         value:"B67823"
      },
      {
         title : "Ponceau ou Coquelicot",
         value:"C60800"
      },
      {
         title : "Pourpre (héraldique)",
         value:"9E0E40"
      },
      {
         title : "Prasin",
         value:"4CA66B"
      },
      {
         title : "Prune",
         value:"811453"
      },
      {
         title : "Puce",
         value:"4E1609"
      },
      {
         title : "Rose",
         value:"FD6C9E"
      },
      {
         title : "Rose Mountbatten",
         value:"997A8D"
      },
      {
         title : "Rouge",
         value:"F00020"
      },
      {
         title : "Rouge anglais",
         value:"F7230C"
      },
      {
         title : "Rouge cardinal",
         value:"B82010"
      },
      {
         title : "Rouge cerise",
         value:"BB0B0B"
      },
      {
         title : "Rouge d'Andrinople",
         value:"A91101"
      },
      {
         title : "Rouge de Falun (pigment)",
         value:"801818"
      },
      {
         title : "Rouge feu",
         value:"FF4901"
      },
      {
         title : "Rouge feu",
         value:"FE1B00"
      },
      {
         title : "Rouge sang",
         value:"850606"
      },
      {
         title : "Rouge tomette",
         value:"AE4A34"
      },
      {
         title : "Rouille",
         value:"985717"
      },
      {
         title : "Roux",
         value:"AD4F09"
      },
      {
         title : "Rubis",
         value:"E0115F"
      },
      {
         title : "Sable",
         value:"E0CDA9"
      },
      {
         title : "Sable (héraldique)",
         value:"000000"
      },
      {
         title : "Safre",
         value:"0131B4"
      },
      {
         title : "Sang de bœuf",
         value:"730800"
      },
      {
         title : "Sanguine",
         value:"850606"
      },
      {
         title : "Saphir",
         value:"0131B4"
      },
      {
         title : "Sarcelle",
         value:"008E8E"
      },
      {
         title : "Saumon",
         value:"F88E55"
      },
      {
         title : "Sépia (pigment)",
         value:"AE8964"
      },
      {
         title : "Sinople (héraldique)",
         value:"149414"
      },
      {
         title : "Smalt (pigment)",
         value:"003399"
      },
      {
         title : "Smaragdin (pigment)",
         value:"01D758"
      },
      {
         title : "Soufre",
         value:"FFFF6B"
      },
      {
         title : "Souris",
         value:"9E9E9E"
      },
      {
         title : "Tabac",
         value:"9F551E"
      },
      {
         title : "Taupe",
         value:"463F32"
      },
      {
         title : "Terre d'ombre",
         value:"926D27"
      },
      {
         title : "Terre de Sienne (pigment)",
         value:"8A3324"
      },
      {
         title : "Terre de Sienne brûlée (pigment)",
         value:"E97451"
      },
      {
         title : "Tomate",
         value:"DE2916"
      },
      {
         title : "Topaze",
         value:"FAEA73"
      },
      {
         title : "Tourterelle ou Colombin",
         value:"BBACAC"
      },
      {
         title : "Turquoise",
         value:"25FDE9"
      },
      {
         title : "Vanille",
         value:"E1CE9A"
      },
      {
         title : "Vermeil",
         value:"FF0921"
      },
      {
         title : "Vermillon",
         value:"DB1702"
      },
      {
         title : "Vert",
         value:"008020"
      },
      {
         title : "Vert bouteille",
         value:"096A09"
      },
      {
         title : "Vert céladon",
         value:"83A697"
      },
      {
         title : "Vert d'eau",
         value:"B0F2B6"
      },
      {
         title : "Vert de chrome",
         value:"18391E"
      },
      {
         title : "Vert de Hooker",
         value:"1B4F08"
      },
      {
         title : "Vert de vessie",
         value:"22780F"
      },
      {
         title : "Vert épinard",
         value:"175732"
      },
      {
         title : "Vert impérial",
         value:"00561B"
      },
      {
         title : "Vert lichen",
         value:"85C17E"
      },
      {
         title : "Vert perroquet",
         value:"3AF24B"
      },
      {
         title : "Vert poireau",
         value:"4CA66B"
      },
      {
         title : "Vert pomme",
         value:"34C924"
      },
      {
         title : "Vert prairie",
         value:"57D53B"
      },
      {
         title : "Vert printemps",
         value:"00FF7F"
      },
      {
         title : "Vert sapin",
         value:"095228"
      },
      {
         title : "Vert sauge",
         value:"689D71"
      },
      {
         title : "Vert tilleul",
         value:"A5D152"
      },
      {
         title : "Vert Véronèse (pigment)",
         value:"5A6521"
      },
      {
         title : "Vert-de-gris (pigment)",
         value:"95A595"
      },
      {
         title : "Vert-jaune",
         value:"ADFF2F"
      },
      {
         title : "Violet",
         value:"7F00FF"
      },
      {
         title : "Violet d'évêque",
         value:"723E64"
      },
      {
         title : "Violine (pigment)",
         value:"A10684"
      },
      {
         title : "Viride (pigment)",
         value:"40826D"
      },
      {
         title : "Zinzolin",
         value:"6C0277"
      }
   ],
   articles: article
  }),
})

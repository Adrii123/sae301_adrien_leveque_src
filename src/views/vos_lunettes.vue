<script setup>
  // Import éléments de vue
  import { ref,onMounted } from 'vue'

  // Import pocketbase
  import PocketBase from 'pocketbase'
  // Objet pocketBase
  const pb = new PocketBase("http://127.0.0.1:8090");

  // import pour formatage des dates
  import { format, parseISO } from 'date-fns'

  // Liste des videos
  let listeFilms = ref()

  // Au montage du composant
  onMounted(async() => {
    refresh()
  }) // Fin de onMounted

  const refresh = async()=>{
    listeFilms.value = await pb.collection('AllLunettes').getFullList({ sort: 'prix' })
    // Formattage des dates en français
    listeFilms.value.forEach( (lunettes)=>{
      lunettes.created = format(parseISO(lunettes.created), "dd/MM/yyyy HH:mm:ss")
      lunettes.updated = format(parseISO(lunettes.updated), "dd/MM/yyyy HH:mm:ss")
    })
  }


</script>

<template>
  <div class="container-fluid">
    <div class="mt-[50px]"><h1 class="text-center text-black font-inter text-5xl font-semibold uppercase mb-[50px]">Vos lunettes</h1></div>
    <div class="pb-[20px] mb-[30rem]">
        <div class="">
            <div class="grid grid-cols-7 grid-rows-10 justify-center gap-20 mx-[10rem] border-[2px] border-gray-900 px-[10px] py-[10px]">
                <div class="col-start-1 ">Libellé</div>
                <div class="col-start-2 ">Prix</div>
                <div class="col-start-3 ">Forme cadre</div>
                <div class="col-start-4 ">Matière cadre</div>
                <div class="col-start-5 ">Couleur cadre</div>
                <div class="col-start-6 ">Matière verre</div>
                <div class="col-start-7 ">Couleur verre</div>
            </div>
        </div>
        <div class="flex flex-col gap-[8px] mt-[20px]">
            <div v-for="item in listeFilms" :key="item.id" class="grid grid-cols-7 grid-rows-10 justify-center gap-20  mx-[10rem] border-[1px] border-gray-900 px-[10px] py-[10px]">
                <div class="col-start-1 ">{{ item.libelle }}</div>
                <div class="col-start-2 ">{{ item.prix }}</div>
                <div class="col-start-3 ">{{ item.forme_des_lunettes }}</div>
                <div class="col-start-4 ">{{ item.materiau_du_cadre }}</div>
                <div class="col-start-5 ">{{ item.couleur_du_cadre }}</div>
                <div class="col-start-6 ">{{ item.materiau_du_verre }}</div>
                <div class="col-start-7 ">{{item.couleur_du_verre}}</div>
            </div>
        </div>
    </div>
    <!-- Table des vidéos -->
    <!-- <table class="table table-light">
      <thead>
        <tr>
          <th>Libellé</th>
          <th>Prix</th>
          <th>Forme cadre</th>
          <th>Matière cadre</th>
          <th>Couleur cadre</th>
          <th>Matière verre</th>
          <th>Couleur verre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in listeFilms" :key="item.id">
          <td>
            <input type="text" v-model="item.libelle" />
          </td>
          <td>
            <input type="number" v-model="item.prix" />
          </td>
          <td>
            <input type="text" v-model="item.forme_des_lunettes" />
          </td>
          <td>
            <input type="text" v-model="item.materiau_du_cadre" />
          </td>
          <td>
            <input type="text" v-model="item.couleur_du_cadre" />
          </td>
          <td>
            <input type="text" v-model="item.materiau_du_verre" />
          </td>
          <td>
            <input type="text" v-model="item.couleur_du_verre" />
          </td>
        </tr>
      </tbody>

    </table> -->

    <!-- <pre style="color:rgb(0, 0, 0);">
      {{ listeFilms }}
    </pre> -->

  </div>
</template>

<style scoped>
a{
  color:black;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';   

import PocketBase from 'pocketbase'
const pb = new PocketBase("http://127.0.0.1:8090");

let colors = ref([]);

// let ifRectangulaireSelected = ref(true)
// let ifOvaleSelected = ref(false)
// console.log('ifRectangulaireSelected', ifRectangulaireSelected.value)

onMounted(async() => {
    getColors()
})

const getColors = async()=>{
    colors.value = await pb.collection('couleur').getFullList()
    console.log(colors.value)
    console.log('colors', colors.value)
}


let newLunettes = ref({
    prix: 150,
})

const selectedMaterial_verre = ref(null)

const selectedMaterial_cadre = ref(null)

const selectedForme_cadre = ref(null)

</script>

<template>
    <div class="grid grid-cols-12 grid-rows-10 justify-center gap-20 mr-[4.38rem]">
        <div class="col-start-1 col-span-8 h-[45rem] bg-slate-400 flex items-center">
            <img src="../assets/img/lunettes.svg" alt="lunettes svg" class="mx-auto">
        </div>
        <div class="col-start-9 col-span-4">
            <div class="grid grid-cols-12 grid-rows-20 justify-center flex-col gap-[10px] mt-[2.38rem]">
                <h5 class="col-start-1 col-span-12 row-start-1 uppercase text-gray-900 font-inter text-lg font-bold">La passe partout</h5>
                <hr class="col-start-1 col-span-12 row-start-2">
                <h5 class="col-start-1 col-span-12 row-start-3 mt-[1rem] uppercase">Cadre</h5>
                <h5 class="col-start-1 col-span-12 row-start-4 uppercase text-gray-900 font-inter text-sm font-normal">Forme</h5>
                <div v-bind:class="{ 'selected': selectedForme_cadre === 'rectangulaire' }" @click="selectedForme_cadre = 'rectangulaire'" class="row-start-5 col-start-1 col-span-6 bg-slate-300 mr-[10px] flex items-center pt-[0.7rem] pb-[0.7rem] cursor-pointer" >
                    <p class="mx-auto text-xs">Rectangulaire</p>
                </div>
                <div v-bind:class="{ 'selected': selectedForme_cadre === 'ovale' }" @click="selectedForme_cadre = 'ovale'" class="row-start-5 col-start-7 col-span-6 bg-slate-300 ml-[10px] flex items-center pt-[0.7rem] pb-[0.7rem] cursor-pointer">
                    <p class="mx-auto text-xs">Ovale</p>
                </div>
                <h5 class="col-start-1 col-span-12 row-start-6 uppercase text-gray-900 font-inter text-sm font-normal">Matériau</h5>
                <div v-bind:class="{ 'selected': selectedMaterial_cadre === 'metal' }" @click="selectedMaterial_cadre = 'metal'" class="row-start-7 col-start-1 col-span-6 bg-slate-300 mr-[10px] flex items-center pt-[0.7rem] pb-[0.7rem] cursor-pointer">
                    <p class="mx-auto text-xs">Métal</p>
                </div>
                <div v-bind:class="{ 'selected': selectedMaterial_cadre === 'plastique' }" @click="selectedMaterial_cadre = 'plastique'" class="row-start-7 col-start-7 col-span-6 bg-slate-300 ml-[10px] flex items-center pt-[0.7rem] pb-[0.7rem] cursor-pointer">
                    <p class="mx-auto text-xs">Plastique</p>
                </div>
                <h5 class="col-start-1 col-span-12 row-start-8 uppercase text-gray-900 font-inter text-sm font-normal">Couleur</h5>
                <div class="row-start-9 col-start-1 col-span-12 flex gap-[20px]">
                    <button v-for="color in colors" :key="colors.id" v-bind:style="{background: color.hexa}" class="w-[40px] h-[40px] rounded-full"></button>
                </div>
                <h5 class="col-start-1 col-span-12 row-start-10 mt-[1rem] uppercase">Verre</h5>
                <h5 class="col-start-1 col-span-12 row-start-11 uppercase text-gray-900 font-inter text-sm font-normal">Matériau</h5>
                <div v-bind:class="{ 'selected': selectedMaterial_verre === 'verre' }" @click="selectedMaterial_verre = 'verre'" class="row-start-12 col-start-1 col-span-6 bg-slate-300 mr-[10px] flex items-center pt-[0.7rem] pb-[0.7rem] cursor-pointer">
                    <p class="mx-auto text-xs">Verre trempé</p>
                </div>
                <div v-bind:class="{ 'selected': selectedMaterial_verre === 'plastique' }" @click="selectedMaterial_verre = 'plastique'" class="row-start-12 col-start-7 col-span-6 bg-slate-300 ml-[10px] flex items-center pt-[0.7rem] pb-[0.7rem] cursor-pointer">
                    <p class="mx-auto text-xs">Plastique</p>
                </div>
                <h5 class="col-start-1 col-span-12 row-start-13 uppercase text-gray-900 font-inter text-sm font-normal">Couleur</h5>
                <div class="row-start-14 col-start-1 col-span-12 flex gap-[20px]">
                    <button v-for="color in colors" :key="colors.id" v-bind:style="{background: color.hexa}" class="w-[40px] h-[40px] rounded-full"></button>
                </div>
                <!-- <button @click="createLunettes">ici</button> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.selected {
    background-color: rgb(55 65 81);
    color: white;
}
</style>
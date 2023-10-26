<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

import PocketBase from 'pocketbase'
const pb = new PocketBase("http://193.168.146.9:80");



let isConnected = ref(false)
let user = ref('')
let psw = ref('')

let currentUser = ref(null)
let avatar = ref(null)  

onMounted(async() => {  
    refresh()  
})  


const refresh = ()=>{
    if(pb.authStore.isValid){
        currentUser.value = pb.authStore.model
        isConnected.value = true

        avatar.value =
        "http://193.168.146.9:80/api/files/"  // Adresse serveur et repertoire des fichiers image
        +currentUser.value.collectionId     // Id ou name de la collection concernée
        +"/"
        +currentUser.value.id               // Id de l'utilisateur connecté
        +"/"
        +currentUser.value.avatar           // Nom fichier image pocketbase
        +"?thumb=100x100"                   // Taille par défaut
    }
}


const connect = async()=>{
    try{
        const authData = await pb.collection('utilisateurs')
        .authWithPassword(user.value, psw.value)
        refresh()
    }catch(error){
        alert("Erreur d'identification : mauvais login et/ou mot de passe")
        user.value = ""
        psw.value = ""
    }
}


const deconnect = ()=>{
    pb.authStore.clear()
    isConnected.value=false
    avatar.value = null
    router.push({name:"home"})
}



</script>


<template>
    <section>
        <h1 class="text-center text-black font-inter text-5xl font-semibold uppercase mt-[100px]">Connection / Deconnection</h1>
        <div class="grid grid-cols-12 grid-rows-10 justify-center gap-20 mx-[4.38rem]">

            
            <div v-if="isConnected" class="col-start-5 col-span-4 flex flex-col gap-[10px] mt-[110px] mb-[30rem]">
                <div class="mt-[2rem] flex flex-col gap-[10px]">
                    <p>Bienvenue <span class="font-bold">{{ currentUser.username }}</span></p>
                    <button class="bg-gray-300 w-full h-[2.5rem] px-1" @click.prevent="deconnect">Se déconnecter</button>
                    <!-- <button class="bg-gray-300 w-full h-[2.5rem] px-1" @click.prevent="connect">Créer un compte</button> -->
                </div>
            </div>
            <form v-else class="col-start-5 col-span-4 flex flex-col gap-[10px] mt-[110px] mb-[25rem]">
                <input class="bg-gray-300 w-full h-[2.5rem] px-1" placeholder="Nom d'utilisateur" v-model="user">
                <input class="bg-gray-300 w-full h-[2.5rem] px-1" type="password" placeholder="Mot de passe" v-model="psw">
                <div class="mt-[2rem] flex flex-col gap-[10px]">
                    <button class="bg-gray-300 w-full h-[2.5rem] px-1" @click.prevent="connect">Se connecter</button>
                    <!-- <button class="bg-gray-300 w-full h-[2.5rem] px-1" @click.prevent="connect">Créer un compte</button> -->
                </div>
                <div class=" flex flex-col gap-[10px]">
                    <button v-on:click="github()" class="bg-gray-300 w-full h-[2.5rem] px-1" >Se connecter avec Github</button>
                    <!-- <button class="bg-gray-300 w-full h-[2.5rem] px-1" @click.prevent="connect">Créer un compte</button> -->
                </div>
            </form>
            <!-- <div v-else class="flex flex-col gap-8 h-screen items-center justify-center">
                <button class="py-4 px-8 bg-black text-white" type="submit" @click="deconnect">Se Deconnecter</button>
            </div> -->
        </div>
    </section>
</template>

<script>

export default {
    methods: {
    async github() {
      await pb.collection("utilisateurs").authWithOAuth2({ provider: "github" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in";
        isConnected = true;
        currentUser = pb.authStore.model;
      }
    },
    }
}



</script>
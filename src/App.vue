<script setup>
  import PocketBase from 'pocketbase'
  const pb = new PocketBase("http://193.168.146.9:80");
</script>

<template>
  <div class="bg-gray-200 w-full h-16 flex items-center justify-center text-center text-black font-medium text-sm font-inter">
    <span class="font-bold">Dépêchez vous ! </span> Livraison gratuite pour toutes commandes avant ce soir !
  </div>
  <header class="bg-white mx-4 py-1 md:py-4">
    <nav class="container mx-auto md:flex md:items-center">
      <div class="mr-4 font-Pacifico text-3xl">
        <RouterLink to="/">TaVue</RouterLink>
      </div>
      <div class="flex justify-between items-center ml-auto">
        <RouterLink class="text-black mr-7 font-medium text-sm font-inter" to="/">ACCUEIL</RouterLink>
        <RouterLink to="/vos_lunettes" class="text-black mr-7 font-medium text-sm font-inter">VOS LUNETTES</RouterLink>
        <RouterLink to="/nosBoutiques" class="text-black mr-7 font-medium text-sm font-inter">NOS BOUTIQUES</RouterLink>
        <RouterLink to="/configurateur" class="text-black mr-7 font-medium text-sm font-inter">PERSONNALISER</RouterLink>
        <RouterLink to="/connexion" class="text-black mr-7 font-medium text-sm font-inter">
          <img src="./assets/icons/Vector-1.svg" alt="logo_panier" class="h-6 w-6" />
        </RouterLink>
        <RouterLink to="#" class="text-gray-800 font-medium text-sm font-inter">
          <img src="./assets/icons/Vector.svg" alt="logo_panier" class="h-6 w-6" />
        </RouterLink>
      </div>
    </nav>
  </header>
  <div class="bg-gray-700 w-full h-10 flex items-center justify-center text-center text-white font-bold text-xs font-inter">
    PROFITEZ D’UNE REDUCTION JUSQU’A -20% SUR NOS MONTURES
  </div>

  <RouterView />

  <footer class="bg-gray-200 w-full py-10">
  <div class="grid grid-cols-12 justify-center gap-20 mx-auto">
    <div class="col-span-2 col-start-2 flex items-center justify-center"><span class="text-black font-Pacifico font-medium text-6xl font-inter"><RouterLink to="/">TaVue</RouterLink></span></div>
    <div class="col-start-6 col-span-2 flex flex-col gap-2">
      <p class="text-black font-inter text-lg font-semibold">BESOIN D'AIDE ?</p>
      <div class="flex flex-col">
        <p class="cursor-pointer">FAQ</p>
        <p class="cursor-pointer">ASSISTANCE</p>
        <p class="cursor-pointer">RETOUR</p>
        <p class="cursor-pointer">SUIVI DES COMMANDES</p>
      </div>
    </div>
    <div class="col-start-8 col-span-2 flex flex-col gap-2">
      <p class="text-black font-inter text-lg font-semibold">SUIVEZ NOUS</p>
      <div class="flex">
        <img src="./assets/icons/Facebook.svg" alt="logo_panier" class="h-6 w-6 cursor-pointer" />
        <img src="./assets/icons/Instagram.svg" alt="logo_panier" class="h-6 w-6 cursor-pointer" />
        <img src="./assets/icons/Twitter.svg" alt="logo_panier" class="h-6 w-6 cursor-pointer" />
        <img src="./assets/icons/Youtube.svg" alt="logo_panier" class="h-6 w-6 cursor-pointer" />
      </div>
    </div>
    <div class="col-start-10 col-span-2 flex flex-col gap-2">
      <p class="text-black font-inter text-lg font-semibold">NAVIGATION</p>
      <div class="flex flex-col">
        <RouterLink to="/">ACCUEIL</RouterLink>
        <RouterLink to="/configurateur">CONFIGURATEUR</RouterLink>
        <RouterLink to="/vos_lunettes">VOS LUNETTES</RouterLink>
        <RouterLink to="#">PANIER</RouterLink>
      </div>
    </div>
  </div>
</footer>

  <!-- <footer class="bg-gray-200 w-full flex flex-col items-center justify-center py-10">
      <div class="flex items-center justify-center mb-4">
        <span class="text-black font-Pacifico font-medium text-sm font-inter">TaVue</span>
      </div>
      <div class="flex items-center justify-center mb-4">
        <RouterLink to="/" class="text-black font-medium text-sm font-inter mr-4">ACCUEIL</RouterLink>
        <RouterLink to="/" class="text-black font-medium text-sm font-inter mr-4">VOS LUNETTES</RouterLink>
        <RouterLink to="/" class="text-black font-medium text-sm font-inter mr-4">PERSONNALISEZ</RouterLink>
        <RouterLink to="/" class="text-black font-medium text-sm font-inter mr-4">CONTACTEZ-NOUS</RouterLink>
      </div>
      <div class="flex items-center justify-center">
        <span class="text-black font-medium text-sm font-inter mr-4">© 2023 TaVue</span>
        <span class="text-black font-medium text-sm font-inter mr-4">Politique de confidentialité</span>
        <span class="text-black font-medium text-sm font-inter">Conditions d'utilisation</span>
      </div>
    </footer> -->
</template>

<style scoped>
</style>
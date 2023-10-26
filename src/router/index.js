import { createRouter, createWebHistory } from 'vue-router'
import accueil from '../views/accueil.vue'
import configurateur from '../views/configurateur.vue'
import connexion from '../views/connexion.vue'
import vos_lunettes from '../views/vos_lunettes.vue'
import nosBoutiques from '../views/nosBoutiques.vue'

// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketBase
const pb = new PocketBase("http://127.0.0.1:8090/");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     { path: '/',              name: 'accueil',           component: accueil },
     { path: '/configurateur',              name: 'configurateur',           component: configurateur },
     { path: '/connexion',              name: 'connexion',           component: connexion },
      { path: '/vos_lunettes',              name: 'vos_lunettes',           component: vos_lunettes },
      { path: '/nosBoutiques',              name: 'nosBoutiques',           component: nosBoutiques },
  ]
})


// Vérification de route demandée
// to : où il veut aller
// from : d'où il vient 
// next : s'il peut y aller
router.beforeEach( (to, from, next) =>{
if (to.name == "accueil" || to.name == "connexion" || to.name == "nosBoutiques") {
// Si la page demandée est "home" ou "compte", on autorise l'accès
next();
} else {
// Sinon, on vérifie si l'utilisateur est connecté
if (pb.authStore.model != null) {
// Utilisateur connecté => OK
next();
} else {
// Utilisateur non connecté, redirection sur la page d'acceuil
router.push({ name: "accueil" });
alert("Vous devez être connecté pour accéder à cette page");
}
}
});

export default router

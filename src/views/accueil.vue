<template>
    <div>
        <img class="mb-[-10rem]" src="../assets/img/accueil.jpg" alt="image d'une femme avec des lunettes"/>
        <p class=" z-10 text-center text-white font-inter text-3xl font-bold uppercase">Votre vision, votre choix, vos lunettes</p>
        <div class="flex justify-center gap-2 mt-[3rem]">
            <RouterLink to="/configurateur"><button class="bg-white text-black font-inter font-semibold text-base py-2 px-4">CONFIGURER MES LUNETTES</button></RouterLink>
            <a href="#enSavoirPlus" style="scroll-behavior: smooth;"><button class="bg-white text-black font-inter font-semibold text-base py-2 px-4">EN SAVOIR PLUS</button></a>
        </div>
    </div>
    <section class="mt-[134px]">
        <h1 class="text-center text-black font-inter text-5xl font-semibold uppercase">NOTRE GAMME</h1>
        <div class="mt-[10rem] grid grid-cols-12 grid-rows-10 justify-center gap-20 mx-auto">
            <h4 id="enSavoirPlus" class="col-start-2 col-span-2 row-start-1 row-span-1 uppercase text-gray-900 font-inter text-lg font-bold">LA PASSE PARTOUT</h4>
            <p class="col-start-7 col-span-5 row-start-2 row-span-2 text-[0.9375rem]">Découvrez "La Passe-Partout" - la paire de lunettes qui incarne le raffinement du design français, tout en respectant l'environnement et votre budget. <br>♻️ Avec une conception éco-conçue, ces lunettes combinent élégance et durabilité. Le design épuré et intemporel de "La Passe-Partout" en fait la compagne parfaite pour toutes les occasions, que ce soit au travail, en ville ou en voyage. <br>💶 De plus, son prix abordable en fait une option accessible pour tous ceux qui recherchent à la fois style et qualité. Portez "La Passe-Partout" avec fierté, tout en contribuant à un avenir plus durable.</p>
            <img class="col-start-2 col-span-4 row-start-2 row-span-2" src="../assets/img/lunettes.svg" alt="lunettes"/>
        </div>
    </section>
    <section class="mt-[10rem]">
        <h1 class="text-center text-black font-inter text-5xl font-semibold uppercase">Ce que disent nos clients satisfaits</h1>
        <div class="mt-[10rem] grid grid-cols-12 grid-rows-10 justify-center gap-20 mx-[4.38rem]">
            <div class="col-start-1 col-span-4 row-start-1 row-span-4 bg-gray-300">
                <div class="grid grid-cols-12 grid-rows-10 justify-center">
                    <img src="../assets/img/photo1.svg" alt="photo de profil" class="col-start-2 mt-[2rem]">
                    <p class="col-start-3 col-span-2 mx-[10px] mt-[2.75rem] text-[0.75rem]">Claire B.</p>
                    <p class="row-start-2 col-start-2 col-span-10 mt-[1rem] mb-[1rem]">J'ai enfin trouvé le site parfait pour créer mes lunettes de rêve. La facilité d'utilisation du configurateur m'a permis de personnaliser chaque détail, des montures aux verres. La qualité est exceptionnelle, et je ne peux pas m'empêcher de sourire chaque fois que je les porte. Merci pour cette expérience exceptionnelle !</p>
                </div>
            </div>
            <div class="col-start-5 col-span-4 row-start-1 row-span-4 bg-gray-300">
                <div class="grid grid-cols-12 grid-rows-10 justify-center">
                    <img src="../assets/img/photo2.svg" alt="photo de profil" class="col-start-2 mt-[2rem]">
                    <p class="col-start-3 col-span-2 mx-[10px] mt-[2.75rem] text-[0.75rem]">Maxime G.</p>
                    <p class="row-start-2 col-start-2 col-span-10 mt-[1rem] mb-[1rem]">Je suis un client fidèle depuis des années, et ce site ne cesse de m'épater. J'ai construit une collection de lunettes pour toutes les occasions, et je suis toujours impressionné par la variété de choix de montures et de verres. Le service client est impeccable, et mes amis me demandent toujours où je les ai achetées. Je recommande vivement !</p>
                </div>
            </div>
            <div class="col-start-9 col-span-4 row-start-1 row-span-4 bg-gray-300">
                <div class="grid grid-cols-12 grid-rows-10 justify-center">
                    <img src="../assets/img/photo3.svg" alt="photo de profil" class="col-start-2 mt-[2rem]">
                    <p class="col-start-3 col-span-2 mx-[10px] mt-[2.75rem] text-[0.75rem]">Anna L.</p>
                    <p class="row-start-2 col-start-2 col-span-10 mt-[1rem] mb-[2rem]">Le configurateur de ce site est une révolution pour les amateurs de lunettes. En tant que passionné de mode, je peux expérimenter avec différents styles sans avoir à quitter mon canapé. La qualité est au rendez-vous, et les prix sont compétitifs. J'ai recommandé ce site à tous mes amis et collègues. Bravo pour cette innovation !</p>
                </div>
            </div>
        </div>
    </section>
    <section class="mt-[10rem]">
        <h1 class="text-center text-black font-inter text-5xl font-semibold uppercase">Nos valeurs</h1>
        <div class="grid grid-cols-12 grid-rows-10 justify-center gap-20 mx-[4.38rem] mt-[10rem] mb-[10rem]">
            <img src="../assets/img/ecologie.jpg" alt="image symbole de l'écologie" class="col-start-1 col-span-4 row-start-1 row-span-3">
            <img src="../assets/img/economie.jpg" alt="image symbole de l'economie" class="col-start-5 col-span-4 row-start-1 row-span-3">
            <img src="../assets/img/qualite.jpg" alt="image symbole de qualité" class="col-start-9 col-span-4 row-start-1 row-span-3">
        </div>
    </section>

</template>
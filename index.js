"use strict";
(() => {
    //recuperer l'element id canvqs
    const canva = document.getElementById('game');
    if (canva === null) {
        throw new Error('Impossible de trouver le canvas');
    }
    const ctx = canva.getContext('2d');
    if (ctx === null) {
        throw new Error('Impossible de récupérer le contexte 2D');
    }
    ctx.fillStyle = "rgb(200,0,0)"; // définit la couleur de remplissage du rectangle
    ctx.fillRect(0, 0, canva.width, canva.height); // dessine un rectangle plein
    console.log(ctx);
})();

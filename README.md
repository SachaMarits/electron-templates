# Template Electron appels DLL
## Explications

En suivant ce [tutoriel YouTube](https://www.youtube.com/watch?v=pN5NXDtOuek) via son [repo](https://github.com/VLabStudio/Tutorials/tree/master/Working%20with%20DLLs%20in%20Node.js/How%20to%20call%20Managed%20C%23%20DLLs%20from%20Node.js).

Le principe c'est de créer un dll très simple qui est MathLibrary.dll, d'y annoter les fonctions devant être exporter avec `[DllExport]` et d'utiliser DllExport.bat au même niveau que la solution (.sln) devant être exportée.

Ensuite à partir de là on peut build la dll et la déplacer dans le projet electron.

Avec le code suivant on est censé implémenter les fonctions dans notre code js:
```js
// Import dependencies
const ffi = require("ffi-napi");

// Import math library
const mathLibrary = new ffi.Library("./MathLibrary", {
    "Subtract": [
        "int", ["int","int"]
    ],
    "Add": [
        "int", ["int","int"]
    ],
    "Random": [
        "int", ["int","int"]
    ]
});

console.log(mathLibrary.Random(1,5));
```

Mais à l'appel de la librairie une erreur empêche d'aller plus loin.

Même en suivant ce [stack qui a exactement le même problème ça ne fonctionne pas](https://stackoverflow.com/questions/62576713/electron-app-not-working-with-ffi-napi-module).

**Résolution du problème en passant electron en 20.0.0 ✅**

Reste à voir pour les evenements maintenant pistes:
- https://stackoverflow.com/questions/36819679/node-fficall-c-lib-with-callback-function
- https://www.tutorialsteacher.com/codeeditor?cid=cs-x67Skk
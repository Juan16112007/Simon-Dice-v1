# 🎮 Simón Dice

Juego de memoria **Simón Dice** para la terminal, desarrollado en JavaScript (Node.js).

---

## 📋 Descripción

El jugador debe memorizar y repetir una secuencia de colores que va creciendo en cada ronda. El juego incluye 4 colores posibles: **Rojo**, **Verde**, **Azul** y **Dorado**. La dificultad aumenta progresivamente hasta llegar a una secuencia de 10 colores.

---

## 🚀 Requisitos

- [Node.js](https://nodejs.org/) v14 o superior
- tener ganas de jugar

---

## ▶️ Cómo ejecutar

```bash
node SimonDice.js
```

---

## 🕹️ Cómo jugar

1. Introduce tu nombre cuando el juego te lo pida.
2. Se mostrará una secuencia de colores en pantalla.
3. Pulsa **Enter** para ocultarla y, después, repite los colores introduciendo la letra correspondiente:

| Letra | Color  |
|-------|--------|
| `R`   | Rojo   |
| `V`   | Verde  |
| `A`   | Azul   |
| `D`   | Dorado |

4. Si aciertas toda la secuencia, avanzas al siguiente nivel con un color más.
5. Si fallas, el juego termina indicando en qué posición te equivocaste.
6. ¡Completa los 10 niveles para ganar!

---

## 🏗️ Estructura del código

| Función | Descripción |
|---|---|
| `generarSecuencia()` | Genera aleatoriamente la secuencia completa de 10 colores al inicio |
| `mostrarSecuencia()` | Muestra los primeros `n` colores de la secuencia al jugador |
| `comprobarColor()` | Verifica si el color introducido es el correcto en una posición |
| `charToColor()` | Convierte la letra introducida por el usuario en un valor de color |
| `comenzarJuego()` | Controla el bucle principal del juego y la progresión de niveles |
| `main()` | Punto de entrada: bienvenida, nombre del jugador y arranque |

---

## ⚙️ Detalles técnicos

- La secuencia completa se genera **una sola vez** al inicio y se va revelando por partes.
- La dificultad empieza en **3 colores** y sube de uno en uno hasta **10**.
- La entrada del usuario se gestiona de forma asíncrona con `readline` y `Promises`.
- El módulo `readline` se importa con sintaxis ESM (`import`), por lo que el archivo debe ejecutarse como módulo ES o renombrarse a `.mjs`.

---

## 📁 Archivos

```
SimonDice.js   # Código fuente completo del juego
README.md      # Este archivo
```

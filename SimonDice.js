// SIMON DICE

const tColores = {
    Rojo: 0,
    Verde: 1,
    Azul: 2,
    Dorado: 3
};

const MAX_COLORES_SEQ = 10;

function mostrarColor(c) {
    for (let key in tColores) {
        if (tColores[key] === c) {
            return key;
        }
    }
    return "???";
}

function charToColor(c) {
    c = c.toLowerCase();

    if (c === "r") return tColores.Rojo;
    if (c === "v") return tColores.Verde;
    if (c === "a") return tColores.Azul;
    if (c === "d") return tColores.Dorado;

    return null;
}

function intToColor(num) {
    const entrada = Object.entries(tColores).find(([, v]) => v === num);
    return entrada ? entrada[1] : null;
}

function generarSecuencia(maxColor) {
    let seq = [];

    for (let i = 0; i < MAX_COLORES_SEQ; i++) {
        let num = Math.floor(Math.random() * (maxColor + 1));
        seq.push(intToColor(num));
    }

    return seq;
}

function comprobarColor(seq, pos, color) {
    return seq[pos] === color;
}

async function mostrarSecuencia(seq, n, rl) {
    let texto = "";

    for (let i = 0; i < n; i++) {
        texto += mostrarColor(seq[i]);
        if (i < n - 1) texto += " - ";
    }

    console.log("\nSecuencia: " + texto);
    await pregunta(rl, "Pulsa enter para continuar...");
    console.clear();
}

async function comenzarJuego(nombre, rl) {
    let maxColor = Object.keys(tColores).length - 1;
    let seq = generarSecuencia(maxColor);

    let nivel = 3;
    let seguir = true;

    while (seguir) {
        await mostrarSecuencia(seq, nivel, rl);

        console.log(nombre + ", repite la secuencia de " + nivel + " colores:");
        console.log("( R = Rojo, V = Verde, A = Azul, D = Dorado )");

        for (let i = 0; i < nivel; i++) {
            let color = null;

            while (color === null) {
                let entrada = await pregunta(rl, "Color " + (i + 1) + ": ");
                color = charToColor(entrada.trim());

                if (color === null) {
                    console.log("Color no válido. Usa R, V, A o D.");
                }
            }

            if (!comprobarColor(seq, i, color)) {
                console.log("\nFallaste en la posicion " + (i + 1));
                console.log("Era: " + mostrarColor(seq[i]));
                console.log("Fin del juego!");
                seguir = false;
                break;
            }
        }

        if (seguir) {
            console.log("\nEnhorabuena, has acertado la secuencia numero " + (nivel - 2) + ".");

            if (nivel >= MAX_COLORES_SEQ) {
                console.log("¡Has ganado " + nombre + "!");
                break;
            }

            nivel++;
        }
    }
}

import { createInterface } from "readline";

function pregunta(rl, txt) {
    return new Promise((res) => {
        rl.question(txt, res);
    });
}

async function main() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("¡Bienvenido a Simon dice!");

    let nombre = await pregunta(rl, "¿Cuál es tu nombre? ");
    console.log("Hola " + nombre + ", pulsa una tecla para empezar a jugar.");
    await pregunta(rl, "");

    await comenzarJuego(nombre, rl);

    rl.close();
}

main().catch(console.error);
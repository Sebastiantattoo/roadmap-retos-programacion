/*
 * EJERCICIO:
 * Utilizando un mecanismo de peticiones HTTP de tu lenguaje, realiza
 * una petición a la web que tú quieras, verifica que dicha petición
 * fue exitosa y muestra por consola el contenido de la web.
 */
// Petición http.

fetch ("https://www.youtube.com/")
    .then (salida => {
        console.log (`Código de estado http: ${salida.status}`)
        fetch ("https://www.youtube.com/")
        .then (res => res.text ())
        .then (salida => {
            console.log (`Contenido: `)
            console.log (salida);
        })
        .catch (error => console.error ("error", error))
    });
//Otro ejemplo.

fetch ("https://dummyapi.io/data/v1/user/", {
    headers: {
        "app-id": "62b0433d2dfd91d4bf56c584"
    }
})
.then(response => {
    if (response.ok) {
        return response.json();
    }else{
        throw new Error("La solicitud no fue exitosa codigo de estado." + response.status);
    }
})
.then(data => {
    var result = data.data[0];
    console.log (result);
    
})
.catch(error => {
    console.error("Error", error);
})

 /* DIFICULTAD EXTRA (opcional):
 * Utilizando la PokéAPI (https://pokeapi.co), crea un programa por
 * terminal al que le puedas solicitar información de un Pokémon concreto
 * utilizando su nombre o número.
 * - Muestra el nombre, id, peso, altura y tipo(s) del Pokémon
 * - Muestra el nombre de su cadena de evoluciones
 * - Muestra los juegos en los que aparece
 * - Controla posibles errores
 */

const url = 'https://pokeapi.co/api/v2/pokemon';
const catchPokemon = async (number) => {
  try {
    const res = await fetch (`${url}/${number}`);
    const data = await res.json ();

    console.log (data); // Verificar respuesta.

    const {name, id, weight, height, types, game_indices} = data;

    console.log ("Nombre: ", name);
    console.log ("Id: ", id);
    console.log ("Peso: ", weight);
    console.log ("Altura ", height);

    const [ type ] = types;
      console.log ("Tipo: ", type.type.name);

      console.log ("Games: ");
      game_indices.forEach (game => {
        console.log (game.version.name);
      });
  }catch (error) {
    console.log (error);
  }
};

catchPokemon (12)

// Fin del ejercicio.
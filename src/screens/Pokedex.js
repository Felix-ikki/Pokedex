import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemons } from '../API/pokemon';
import { getPokemonDetailsByUrlAPi } from '../API/pokemon';
import PokemonList from '../components/PokemonList';

function Pokedex() {

  const [ pokemons, setPokemons ]  = useState([])
  const [ nextUrl, setNextUrl ] = useState(null)

  useEffect(() => {

    (async () => {
      await loadPokemons();
    })();
  }, []);


  const loadPokemons = async () => {
    try {
      const response = await getPokemons(nextUrl);
      setNextUrl(response.next)
      const pokemonArray = []

      for await (let pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlAPi(pokemon.url)
        pokemonArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonArray])
    }
    catch (error) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView edges={['right', 'left', 'top']}>
    <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl}/>
    </SafeAreaView>
  )
}

export default Pokedex
# Pokemon Type Matchup

**FEW 2.5: Final Project**

## Description

This is a [D3.js](https://d3js.org/) application that allows users to select a Pokemon and see a visualization of which move-types are super effective against it and which moves are not very effective.

The application is a React.js app, developed using [Vite](https://vitejs.dev/) frontend tooling.

## Usage

Navigate to the [live URL](https://shah-a.github.io/few2.5-07-final-project/). Use the dropdown menu to select a pokemon from the list. The graph will update automatically to display the selected pokemon's type matchup statistics.

## Future to-do

Some features that can be added to improve the app:

- Search by Pokemon name/number (search box should have auto-complete)
- Display selected pokemon's type(s) beneath its image
- Make svg display component responsive (rather than fixed width/height)
- Add a button for dark mode colour theme
- Fill in missing pokemon data in `PokeTypeMatchupData.csv`
- Update `PokeTypeMatchupData.csv` to account for abilities (e.g. [Lunatone](https://pokemondb.net/pokedex/lunatone) and [Solrock](https://pokemondb.net/pokedex/solrock) have `Ground` immunity due to `Levitate` ability)
- Add support for correctly displaying alternate form images (i.e. Alolan/Galarian form, Rotom forms, etc..)
- Use local image assets (rather than pull from the pokemon website)

## Acknowledgements & Resources

- Dataset by [lunamcbride24](https://www.kaggle.com/lunamcbride24) from [kaggle](https://www.kaggle.com/lunamcbride24/pokemon-type-matchup-data)
- Pokemon sprites/images from the [official pokemon site](https://www.pokemon.com/us/pokedex/)'s asset handler

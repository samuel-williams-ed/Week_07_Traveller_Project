import CountrySelector from "../components/CountrySelector"
import Favourites from "../components/Favourites"
import Details from "../components/Details"

import { useEffect, useState } from "react"


const CountryPage = () => {
    
    // track use states
    const [countries, setCountries] = useState([])
    const [countrySelected, setCountrySelected] = useState(null)
    const [favourites, setFavourites] = useState([])

    // manage React execution (
        useEffect( ()=> {
            getCountries()
    },[])
    
    // access API
    const errorMessage = ""
    const getCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(countries => setCountries(countries))
        .catch(err => errorMessage = `Uhoh, API didn't load properly: ${err}`)
    }

    // select a country (for child)
    const onCountrySelect = function(countryName) {
        console.log(`onCOuntrySelect called: looking for ${countryName}`)
        const foundCountry = countries.find((country) => {
            
            if (country.name.common === countryName) {
                return true
            } else {
                // console.log(`checking country: ${country.name.common}`)
                // console.log(`checking country: ${countryName}`)
            }
        })
        // console.log(`Country found. Setting countrySelected useState() to ${foundCountry.name.common}`)
        setCountrySelected(foundCountry)
    }

    // handle adding to favourites
    const addFavButton = () => {

        // create new copy of favourites
        let newFav = []

        // check not already favroutied
        if (!favourites.includes(countrySelected)) {
            newFav = [...favourites, countrySelected]
        } else {
            console.log("It didn't quite happen.")
            newFav = favourites
        }


        // set favourites useState()
        console.log(`Our copy of favourites is: ${newFav}`)
        setFavourites(newFav)

        // maybe printing too fast? or ^ isn't adding properly
        console.log(`Our favourites are now... ${favourites}`)
    }


    // build html
    return (
        <>
        {errorMessage && errorMessage}

        <Favourites favourites={favourites}></Favourites>

        <CountrySelector countries={countries} onCountrySelect={onCountrySelect} addFavButton={addFavButton}/>
        
        {countrySelected && <Details country={countrySelected}/>} {/* only render when country selected by user*/}
        </>
    )
}

export default CountryPage
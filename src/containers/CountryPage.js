import CountrySelector from "../components/CountrySelector"
import Favourites from "../components/Favourites"
import Details from "../components/Details"

import { useEffect, useState } from "react"


const CountryPage = () => {
    

    // use states
    const [countries, setCountries] = useState([])
    const [countrySelected, setCountrySelected] = useState(null)

    // manage React execution (
        useEffect( ()=> {
            getCountries()
        },[])

    const errorMessage = ""
    // access API
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
                console.log("This never prints")
                return true
            } else {
                console.log("Name didn't match")
                console.log(`checking country: ${country.name.common}`)
                console.log(`checking country: ${countryName}`)
            }
        
        })



        console.log(`Country found. Setting countrySelected useState() to ${foundCountry.name.common}`)
        setCountrySelected(foundCountry)
    }


    // build html
    return (
        <>
        <h3>This is a CountryPage</h3>
        {errorMessage && errorMessage}
        <Favourites></Favourites>
        <CountrySelector countries={countries} onCountrySelect={onCountrySelect}/>
        {countrySelected && <Details country={countrySelected}/>}
        </>
    )
}

export default CountryPage
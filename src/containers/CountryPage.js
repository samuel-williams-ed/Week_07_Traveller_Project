import CountrySelector from "../components/CountrySelector"
import Favourites from "../components/Favourites"
import Details from "../components/Details"
import { useEffect, useState } from "react"


const CountryPage = () => {

    // use states
    const [countries, setCountries] = useState("")
    const [countrySelected, setCountrySelected] = useState("")

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


    // build html
    return (
        <>
        <h3>This is a CountryPage</h3>
        {errorMessage && errorMessage}
        <CountrySelector/>
        <Favourites></Favourites>
        <Details/>
        </>
    )
}

export default CountryPage
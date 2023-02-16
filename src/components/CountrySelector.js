import FavouritesButton from "./FavouritesButton"


const CountrySelector = ({countries, onCountrySelect, addFavButton}) => {

    // once item selected
    const handleChange = (evt) => {
        const chosenCountry = evt.target.value
        onCountrySelect(chosenCountry)
    }

    // for each country in list
    const countryItems = countries.map((country) => {
        // return html element containing country name
        return (
            <option key={country.name.common} className="drop-down-item" value={(country.name.common)}>{country.flag} {country.name.common}</option>
        )
    })

    return (
        <section className="border white-text background-container">
            <div className="woodland-backdrop"></div>
                <div className="info-area-container">
                    <h4>Pick a Country
                    </h4>
                        <select defaultValue="" onChange={handleChange}>
                            {countryItems}
                        </select>
                        <FavouritesButton addFavButton={addFavButton}/>
                </div>
                
            
        </section>
    )
}

export default CountrySelector
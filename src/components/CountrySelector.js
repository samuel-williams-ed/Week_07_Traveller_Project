

const CountrySelector = ({countries, onCountrySelect}) => {

    // once item selected
    const handleChange = (evt) => {
        const chosenCountry = evt.target.value
        onCountrySelect(chosenCountry)
    }

    // for each country in list
    const countryItems = countries.map((country) => {
        // return html element containing country name
        return (
            <option className="drop-down-item" value={(country.name.common)}>{country.flag} {country.name.common}</option>
        )
    })

    return (
        <section className="border">
            <h4>This is a Country Selector</h4>

            <select defaultValue="" onChange={handleChange}>
                {countryItems}
            </select>
            
        </section>
    )
}

export default CountrySelector
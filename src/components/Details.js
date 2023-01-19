import Map from "./Map"


const Details = ({country}) => {

    // These need to be in arrays
    // <p>Capital: <i>{country.capital}</i></p>
    // <p>Languages: <i>{country.languages}</i></p>
    // <p>{country.currencies}</p>

    return (
        <section className="details-container border">
            <h4>{country.name.common} {country.flag}</h4>
            <p>{country.name.official}</p>
            <p>Pop: <i>{country.population}</i></p>

            

            <Map/>
        </section>
    )
}

export default Details
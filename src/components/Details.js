import Map from "./Map"


const Details = ({country}) => {

    // These need to be in arrays
    // <p>Capital: <i>{country.capital}</i></p>
    // <p>Languages: <i>{country.languages}</i></p>
    // <p>{country.currencies}</p>

    // see: https://reactjs.org/docs/dom-elements.html#style
    const localBackgroundStyle = {
        backgroundImage: 'url(' + country.flags.png + '), linear-gradient(to right, #000000f0, #24242440)',
        backgroundBlendMode: 'darken',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        minHeight: '12em',

    };

    return (
        <section className="details-container border" style={localBackgroundStyle}>
            <div className="info-area-container white-text">
                <h4>{country.name.common} {country.flag}</h4>
                <p>{country.name.official}</p>
                <p>Pop: <i>{country.population}</i></p>
            </div>
            <div className="image-container" >
                <p className="white-text">Something</p>
                <p className="white-text">more</p>
            </div>
            <Map/>
        </section>
    )
}

export default Details
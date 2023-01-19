import FavouritesFlag from "./FavouritesFlag"

const FavouritesBar = ({favourites}) => {

    // iterate for each country in favourites list & generate FavouritesFlag
    const generateHTMLforEachFavourite = favourites.map((favCountry) => (<FavouritesFlag key={favCountry.name.common} favCountry={favCountry}/>))


    return (
        <section className="border favourites-bar">
            Favourites:
            {generateHTMLforEachFavourite}
        </section>
    )
}

export default FavouritesBar
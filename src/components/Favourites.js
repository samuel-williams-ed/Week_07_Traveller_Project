import FavouritesBar from "./FavouritesBar"


const Favourites = ({favourites}) => {
    return (
        <>
            <h4>This is a Favourites</h4>
            <FavouritesBar favourites={favourites}/>
        </>
    )
}

export default Favourites
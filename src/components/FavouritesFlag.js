import FavouritesBar from "./FavouritesBar"


const FavouritesFlag = ({favCountry}) => {
    return (
        <>
            <label value={favCountry.name.common}><div>{favCountry.flag}</div></label>
        </>
    )
}

export default FavouritesFlag
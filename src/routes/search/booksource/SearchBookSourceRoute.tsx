import { useParams } from "react-router-dom"
import RouteContainer from "../../../common/styles/RouteContainer"

const SearchBookSourceRoute = () => {
    const { isbn13 } = useParams()

    return (
        <RouteContainer>{isbn13}</RouteContainer>
    )
}

export default SearchBookSourceRoute
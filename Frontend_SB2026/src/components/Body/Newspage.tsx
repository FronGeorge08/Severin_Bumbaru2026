
import { Box } from "@mui/material"
import { themedStyle } from "../../App"
import NewsFetcher from "./NewsComponets/NewsFetcher"
import { useState } from "react"

export type News = {
    title: string,
}

interface Props {
    category?: string,
    search?: string,
}

const Newspage = (
    {
        category,
        search,
    }: Props
) => {
    const [oldSearch, setOldSearch] = useState(search)
    const [reloadKey, setReloadKey] = useState(0)

    const pageStyle = themedStyle(
        {
            light: {},
            dark: {},
            mix: {
                display: "flex",
                borderRadius: "2rem",
            },
        }
    )


    if (search !== oldSearch) {
        setReloadKey(prev => prev + 1) 
        setOldSearch(search)
    }

    return (
        <NewsFetcher key={reloadKey} category = {category} q = {search} />
    )
}

export default Newspage

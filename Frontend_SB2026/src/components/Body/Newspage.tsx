
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
    const [oldCategory, setOldCategory] = useState(search)
    const [reloadKey, setReloadKey] = useState(0)

    if (search !== oldSearch) {
        setReloadKey(prev => prev + 1) 
        setOldSearch(search)
    }

    if (category !== oldCategory) {
        setReloadKey(prev => prev + 1) 
        setOldCategory(category)
    }

    return (
        <NewsFetcher key={reloadKey} category = {category} q = {search} />
    )
}

export default Newspage

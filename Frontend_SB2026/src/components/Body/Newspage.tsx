
import { Box } from "@mui/material"
import { themedStyle } from "../../App"
import NewsFetcher from "./NewsComponets/NewsFetcher"

export type News = {
    title: string,
}

interface Props {
    category?: string,
}

const Newspage = (
    {
        category
    }: Props
) => {
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

    return (
        <NewsFetcher category = "general" />
    )
}

export default Newspage

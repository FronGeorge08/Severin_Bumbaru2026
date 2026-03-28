
import { Box } from "@mui/material"
import { themedStyle } from "../../App"

export type News = {
    title: string,
}

interface Props {
    news: News[],
}

const Newspage = (
    {
        news
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
        <Box sx = {pageStyle}>
            TODO
        </Box>
    )
}

export default Newspage

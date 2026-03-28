
import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  MenuItem,
  Menu,
  IconButton,
  Avatar,
  Box,
  Container,
} from '@mui/material'
import { styled, alpha } from '@mui/material/styles'

import Newspage from './Body/Newspage'
import { themedStyle } from '../App'
import { Height } from '@mui/icons-material'

type Page = "main"

interface Props {
    category?: string,
    search?: string,
}

const Body = (
    {
        category,
        search,
    }: Props
) => {
    const [page, setPage] = React.useState<Page>("main")

    const containerStyle = themedStyle(
        {
            dark: {
                backgoundColor: "#31414c",
                color: '#e9e9e9',
            },
            light: {
                backgoundColor: "#c7dded",
                color: '#3f3f3f',
            },
            mix: {
                mt: 5,
                flex: 1,
            },
        }   
    )

    var view = undefined
    switch (page) {
        case "main":
            view = <Newspage category={category} search={search}/>
        break
    }

    return (
        <>
            <Container sx={containerStyle}>
                {view}
            </Container>
        </>
    )
}

export default Body

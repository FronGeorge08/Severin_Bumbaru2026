
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
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList'

import Footer from "./components/Footer"
import Header from "./components/Header"
import Body from "./components/Body"
import { type Theme, themedValue } from "./App"

interface Props {
    onThemeChange: (theme: Theme) => void,
    currentTheme: Theme,
}

const BasicTemplate = (
    {
        onThemeChange,
        currentTheme,
    }: Props
) => {    
    const [search, setSearch] = React.useState("")
    const [category, setCategory] = React.useState("")

    return (
        <>
            <Box sx={
                    {
                        display: 'flex',
                        backgroundColor: themedValue("#cbd8eb", "#393c58"),
                        flexDirection: 'column',
                        minHeight: '100vh',
                    }
                }
            >
                <Header
                    currentTheme={currentTheme}
                    onThemeChange={onThemeChange}
                    onSearchChange={setSearch}
                    onCategoryChange={setCategory}
                />
                
                <Body category={category} search={search}/>

                <Footer/ >
            </Box>
        </>
    )
}

export default BasicTemplate

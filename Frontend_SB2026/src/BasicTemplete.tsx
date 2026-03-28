
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
    const [anchorEl, setAnchorEl] = React.useState<any>(null);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }
    
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
            {/* --- HEADER --- */}
                <Header
                    onProfileOpen={handleProfileMenuOpen}
                    onThemeChange={onThemeChange}
                    currentTheme={currentTheme}
                />

                {/* Meniu Profil */}
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                >
                    <MenuItem onClick={handleMenuClose}>Profilul meu</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Deconectare</MenuItem>
                </Menu>

                {/* --- CONȚINUT PRINCIPAL --- */}
                <Body />

                {/* --- FOOTER --- */}
                <Footer/ >
            </Box>
        </>
    )
}

export default BasicTemplate

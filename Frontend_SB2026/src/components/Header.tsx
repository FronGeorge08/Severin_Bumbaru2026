
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
import { LightMode, DarkMode } from '@mui/icons-material'
import { type Theme, themedStyle } from "../App"

// Stiluri personalizate pentru Search Bar
const Search = styled('div')(({ theme }) => (
    themedStyle(
        {
            light: {},
            dark: {},
            mix: {
                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: alpha(theme.palette.common.white, 0.15),
                '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
                marginRight: theme.spacing(2),
                marginLeft: 0,
                width: '100%',
                [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
            }
        }
    )
    )
)

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: { width: '20ch' },
    },
}))

interface Props {
    onProfileOpen: (event: React.MouseEvent<HTMLElement>) => void,
    onThemeChange: (theme: Theme) => void,
    currentTheme: Theme,
}

const Header = ({
    onProfileOpen,
    onThemeChange,
    currentTheme,
}: Props) => {
    var IconMode = null
    switch (currentTheme) {
        case "dark":
            IconMode = DarkMode
            break
        case "light":
            IconMode = LightMode
            break
    }

    return (
        <AppBar position="static">
            <Toolbar
                sx={
                    themedStyle(
                        {
                            light: {
                                backgroundColor: "#098be2",
                                color: '#3f3f3f',
                            },
                            dark: {
                                backgroundColor: "#0a4a74",
                                color: '#e9e9e9',
                            },
                        }
                    )
                }
            >
                <Typography variant="h6" noWrap sx={{ display: { xs: 'none', sm: 'block' } }}>
                    FactShield
                </Typography>
                
                <Search>
                    <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
                    <StyledInputBase placeholder="Caută..." />
                </Search>

                <IconButton size="large" color="inherit">
                    <FilterListIcon />
                </IconButton>

                <IconButton
                    size = "large"
                    color = "inherit"
                    onClick = {
                        () => {
                            switch (currentTheme) {
                                case "dark":
                                    onThemeChange("light")
                                    break
                                case "light":
                                    onThemeChange("dark")
                                    break
                            }
                        }
                    }
                >
                    <IconMode />
                </IconButton>

                <Box sx={{ flexGrow: 1 }} />

                <IconButton onClick={onProfileOpen} color="inherit">
                    <Avatar alt="User" src="/path-to-avatar.jpg" sx={{ width: 35, height: 35 }} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header

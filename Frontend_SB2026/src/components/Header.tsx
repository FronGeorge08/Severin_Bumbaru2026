
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
  FormControl, 
  InputLabel, 
  Select, 
} from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList'
import { LightMode, DarkMode } from '@mui/icons-material'
import { type Theme, themedStyle } from "../App"

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

const Categories = (
    { onChange }: { onChange: (category: string) => void }
) => {
    const [value, setValue] = React.useState<string>('');

    const handleChange = (event: any) => {
        setValue(event.target.value as string)
        onChange(event.target.value as string)
    }

    return (
        <Box sx={{ minWidth: 300, ml: 2 }}>
            <FormControl fullWidth size="small">
                <Search>
                    <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label="Categorie"
                        onChange={handleChange}
                        fullWidth
                    >
                        <MenuItem value="">Nothing</MenuItem>
                        <MenuItem value="politics">Politics</MenuItem>
                        <MenuItem value="sport">Sport</MenuItem>
                        <MenuItem value="science ">Science</MenuItem>
                        <MenuItem value="technology">Technology</MenuItem>
                        <MenuItem value="business">Business & Trade</MenuItem>
                        <MenuItem value="health">Health</MenuItem>
                        <MenuItem value="entertainment">Entertainment</MenuItem>
                    </Select>
                </Search>
            </FormControl>
        </Box>
    );
};

interface Props {
    onThemeChange: (theme: Theme) => void,
    currentTheme: Theme,

    onSearchChange: (search: string) => void,
    onCategoryChange: (category: string) => void,
}

const Header = ({
    onThemeChange,
    currentTheme,

    onSearchChange,
    onCategoryChange,
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

    const handleSearch = (event: any) => {
        onSearchChange(event.target.value)
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
                    FactShield 🛡️
                </Typography>
                
                <Search>
                    <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
                    <StyledInputBase placeholder="Caută..." onChangeCapture={handleSearch}/>
                </Search>

                <Categories onChange={onCategoryChange} />

                <IconButton size="large" color="inherit">
                    <FilterListIcon />
                </IconButton>

                <Box sx={{ flexGrow: 1 }} />

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
            </Toolbar>
        </AppBar>
    )
}

export default Header

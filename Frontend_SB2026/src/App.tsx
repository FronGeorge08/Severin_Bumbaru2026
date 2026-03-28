import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BasicTemplate from './BasicTemplete'
import Message from "./components/Messege"
import { Box } from "@mui/material"
import { useState } from 'react'

export type Theme = "light" | "dark"

var globalTheme: Theme = "dark"

export const themedStyle = (style: {light: object, dark: object, mix?: object}): object => {
  if (style.mix === undefined) {
    style.mix = {}
  }
  
  switch (globalTheme) {
    case "light":
      return Object.assign(style.mix, style.light)
    case "dark":
      return Object.assign(style.mix, style.dark)
  }
}

export const themedValue = (light: any, dark: any) => {
  switch (globalTheme) {
    case "light":
      return light
    case "dark":
      return dark
  }
}

const App = () => {
  const [theme, setTheme] = useState<Theme>("dark")
  globalTheme = theme

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Box sx={{position: "relative"}}>
              <BasicTemplate
                currentTheme={theme}
                onThemeChange={(theme) => setTheme(theme)}
              />
              <Box>
                <Message />
              </Box>
            </Box>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App

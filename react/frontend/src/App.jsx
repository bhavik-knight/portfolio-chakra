import './App.css'
import { useState } from "react"
import { Flex, Grid, GridItem, useBoolean } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

function App() {
  const [darkMode, setDarkMode] = useBoolean(false)
  console.log(`dark mode on? ${darkMode}`)

  return (
    <Grid
      templateAreas={{ base: `"header" "sidebar" "main" "footer"`, md: `"header header" "sidebar main" "footer footer"` }}
      gridTemplateRows={{ base: `50px 50px 1fr 50px`, md: `60px 100vh 60px` }}
      gridTemplateColumns={{ base: `1fr`, md: `10% auto` }}
    >
      <GridItem bg="orange" area={`header`} className="header">
        <Header darkMode={darkMode} setDarkMode={setDarkMode.toggle} />
      </GridItem>

      {/* sidenav */}
      <GridItem as="aside" bg="pink" area={`sidebar`}>
        Sidebar
      </GridItem>
      <GridItem as="main" bg="blue.200" area={`main`}>
        Main
      </GridItem>
      <GridItem as="nav" bg="green.200" area={`footer`} position={{ base: "fixed", md: "absolute" }} className="footer">
        <Footer />
      </GridItem>
    </Grid>
  )
}

export default App

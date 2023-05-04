import './App.css'
import { useState, useEffect } from "react"
import { Flex, Menu, Grid, GridItem, ButtonGroup, useBoolean } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Sidenav } from "./components/Sidenav"
import { nanoid } from "nanoid"

function App() {
  // to toggle the darkmode
  const [darkMode, setDarkMode] = useBoolean(true)

  // background image
  const [bgImg, setBgImg] = useState("galaxy_hd.jpg")

  // list of pages in the portfolio
  const pages = ["home", "skills", "projects", "education", "certificates", "experiences"]

  // to load a particular page on button click
  const [page, setPage] = useState("home")

  useEffect(() => {
    console.log(`dark mode ${darkMode}`)
    console.log(`selected page: ${page}`)
    darkMode ? setBgImg("galaxy_hd.jpg") : setBgImg("snow.jpg")
  }, [darkMode, page])


  function selectPage(event) {
    console.log(`app - selected page ${event.target.name}`)
    setPage(event.target.name)
  }

  return (
    <Grid
      className="container"
      bgImage={bgImg}
      templateAreas={{ base: `"header" "sidebar" "main" "footer"`, md: `"header header" "sidebar main" "footer footer"` }}
      gridTemplateRows={{ base: `50px 50px 1fr 50px`, md: `60px 100vh 60px` }}
      gridTemplateColumns={{ base: `1fr`, md: `15% auto` }}
    >
      <GridItem area={`header`} className="header">
        <Header darkMode={darkMode} changeDarkMode={setDarkMode.toggle} />
      </GridItem>

      {/* sidenav */}
      <GridItem as="aside" area={`sidebar`} className="sidenav">
        <Sidenav pages={pages} activePage={page} selectPage={(event) => selectPage(event)} />
      </GridItem>

      {/* main page */}
      <GridItem as="main" bg="lightgrey" area={`main`}>
        {`selected page: ${page}`}
      </GridItem>
      <GridItem as="nav" bg="green.200" area={`footer`} position={{ base: "fixed", md: "absolute" }} className="footer">
        <Footer />
      </GridItem>
    </Grid>
  )
}

export default App


{/*
// reference: background
https://www.yorku.ca/news/wp-content/uploads/sites/242/2023/01/cem-sagisman-x8SqHJo9SUg-unsplash-TW.jpg
*/}

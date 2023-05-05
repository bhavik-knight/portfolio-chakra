import './App.css'
import { useState, useEffect } from "react"
import { Box, Flex, Menu, Grid, GridItem, ButtonGroup, useBoolean } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Sidenav } from "./components/Sidenav"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Education } from "./components/Education"
import { Certificates } from "./components/Certificates"
import { Experiences } from "./components/Experiences"
import { About } from "./components/About"
import {
  FaHome,
  FaTools,
  GiFilmProjector,
  MdSchool,
  FaAward,
  MdWork,
} from "./components/Icons"

function App() {

  // to toggle the darkmode
  const [darkMode, setDarkMode] = useBoolean(JSON.parse(localStorage.getItem("darkMode")) || false)
  useEffect(() => {
    // set dark mode to the local storage
    localStorage.setItem("darkMode", darkMode)
    darkMode ? setBgImg("galaxy_hd.jpg") : setBgImg("snow.jpg")
    console.log(`check the local storage: ${JSON.stringify(localStorage)}`)
  }, [darkMode])

  // pages in the portfolio
  const pages = {
    "home": {
      "icon": <FaHome />,
      "page": <About />,
    },

    "skills": {
      "icon": <FaTools />,
      "page": <Skills />,
    },

    "projects": {
      "icon": <GiFilmProjector />,
      "page": <Projects />,
    },

    "education": {
      "icon": <MdSchool />,
      "page": <Education />,
    },

    "certificates": {
      "icon": <FaAward />,
      "page": <Certificates />,
    },

    "experiences": {
      "icon": <MdWork />,
      "page": <Experiences />,
    }
  }

  // to load a particular page on button click
  const [currentPage, setCurrentPage] = useState(localStorage.getItem("currentPage") || "home")
  function handleSelectPage(event) {
    setCurrentPage(event.target.name)
  }

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage)
    document.title = `Bhavik | ${currentPage[0].toUpperCase() + currentPage.substring(1)}`
    window.scrollTo(0, 0)
  }, [currentPage])

  // backgroud image: this will depend on other factors than just darkmode
  const [bgImg, setBgImg] = useState("galaxy_hd.jpg")


  return (
    <Box bgImg={bgImg} className="container-bg-image">
      <Grid
        className="container"
        templateAreas={{ base: `"header" "sidebar" "main" "footer"`, md: `"header header" "sidebar main" "footer footer"` }}
        gridTemplateRows={{ base: `50px 50px 1fr 50px`, md: `60px 100vh 60px` }}
        gridTemplateColumns={{ base: `1fr`, md: `20% auto` }}
      >
        <GridItem area={`header`} className="header">
          <Header
            darkMode={darkMode}
            changeDarkMode={setDarkMode.toggle}
            title={currentPage}
          />
        </GridItem>

        {/* sidenav */}
        <GridItem as="aside" area={`sidebar`} className="sidenav">
          <Sidenav pages={pages} activePage={currentPage} selectPage={(event) => handleSelectPage(event)} />
        </GridItem>

        {/* main page */}
        <GridItem as="main" bg="none" area={`main`}>
          {pages[currentPage].page}
        </GridItem>

        {/* footer */}
        <GridItem as="nav" bg="green.200" area={`footer`} position={{ base: "fixed", md: "absolute" }} className="footer">
          <Footer />
        </GridItem>
      </Grid>
    </Box >
  )
}

export default App


{/*
// reference: background
https://www.yorku.ca/news/wp-content/uploads/sites/242/2023/01/cem-sagisman-x8SqHJo9SUg-unsplash-TW.jpg
*/}

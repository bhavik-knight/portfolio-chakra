import './App.css'
import { useState, useEffect } from "react"
import { Box, Flex, Wrap, WrapItem, Menu, Grid, GridItem, ButtonGroup, useBoolean, useColorMode } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Sidenav } from "./components/Sidenav"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Education } from "./components/Education"
import { Certificates } from "./components/Certificates"
import { Experiences } from "./components/Experiences"
import { Home } from "./components/Home"
import { icons } from "./components/Icons"


function App() {

  // color mode toggle; check the local storage on each color mode change
  const { colorMode, toggleColorMode } = useColorMode()
  useEffect(() => {
    console.log(`check the local storage: ${JSON.stringify(localStorage)}`)
  }, [colorMode])

  // pages in the portfolio
  const pages = {
    "home": {
      "icon": icons.home,
      "page": <Home />,
    },

    "skills": {
      "icon": icons.skills,
      "page": <Skills />,
    },

    "projects": {
      "icon": icons.projects,
      "page": <Projects />,
    },

    "education": {
      "icon": icons.education,
      "page": <Education />,
    },

    "certificates": {
      "icon": icons.certificates,
      "page": <Certificates />,
    },

    "experiences": {
      "icon": icons.experiences,
      "page": <Experiences />,
    }
  }

  // to load a particular page on button click
  const [currentPage, setCurrentPage] = useState(localStorage.getItem("currentPage") || "home")
  function handleSelectPage(event) {
    console.log(`app - ${currentPage}`)
    setCurrentPage(event.target.name)
  }
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage)
    document.title = `Bhavik | ${currentPage}`
    window.scrollTo(0, 0)
  }, [currentPage])

  // this is the function that will render the DOM
  return (
    <Flex className="container" flexDirection="column" flexWrap="wrap">
      <Header
        colorMode={colorMode}
        changeColorMode={() => toggleColorMode()}
        title={currentPage}
      />
      {/* middle part */}
      <Flex
        minH="100vh"
        flexdirection={{ base: "column", lg: "row" }}
        flexWrap={{ base: "wrap", lg: "nowrap" }}
      >

        <Flex
          className="sidenav"
          as="aside"
          minW="fit-content"
          maxW="200px"
          bg="red.900"
          flexDirection={{ base: "row", lg: "column" }}
          flexWrap={{ base: "wrap", lg: "nowrap" }}
          justifyContent={{ base: "center", lg: "flex-start" }}
          pt={2}
          gap={2}
        >
          <Sidenav
            pages={pages}
            activePage={currentPage}
            selectPage={(event) => handleSelectPage(event)}
          />
        </Flex>
        <Flex
          className="content"
          as="main"
          bg="blue.800"
          px={{ base: 0, lg: "4" }}
        >
          {pages[currentPage].page}
        </Flex>
      </Flex>

      {/*  footer */}
      <Footer />
    </Flex >
  )
}

export default App

{/*
  // reference: background
  https://www.yorku.ca/news/wp-content/uploads/sites/242/2023/01/cem-sagisman-x8SqHJo9SUg-unsplash-TW.jpg
*/}

{/*
  // class- header
  <Header
    lightMode={lightMode}
    changeLightMode={setLightMode.toggle}
    title={currentPage}
  />

  // side nav
  <Sidenav pages={pages} activePage={currentPage} selectPage={(event) => handleSelectPage(event)} />

  // project pages
  {pages[currentPage].page}
*/}

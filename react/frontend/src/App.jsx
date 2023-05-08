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
  // to toggle the darkmode
  const [lightMode, setLightMode] = useBoolean(() => JSON.parse(localStorage.getItem("lightMode")) || false)
  function handleColorMode() {
    setLightMode.toggle
  }

  useEffect(() => {
    // set dark mode to the local storage
    localStorage.setItem("lightMode", lightMode)
    lightMode ? setBgImg("snow.jpg") : setBgImg("galaxy_hd.jpg")
    console.log(`check the local storage: ${JSON.stringify(localStorage)}`)
  }, [lightMode])

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

  // backgroud image: this will depend on other factors than just darkmode
  const [bgImg, setBgImg] = useState("galaxy_hd.jpg")

  return (
    <Flex className="container" bgImage={bgImg} flexDirection="column" flexWrap="wrap" >
      <Header
        lightMode={lightMode}
        changeLightMode={setLightMode.toggle}
        title={currentPage}
      />

      {/* middle part */}
      <Flex
        minH="100vh"
        flexdirection={{ base: "column", lg: "row" }}
        flexWrap={{ base: "wrap", lg: "nowrap" }}
      >

        <Flex
          as="aside"
          minW="fit-content"
          maxW="200px"
          bg="green.900"
          flexDirection={{ base: "row", lg: "column" }}
          flexWrap={{ base: "wrap", lg: "nowrap" }}
        >
          <Sidenav
            pages={pages}
            activePage={currentPage}
            selectPage={(event) => handleSelectPage(event)}
          />
        </Flex>
        <Flex as="main" bg="blue.800">
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

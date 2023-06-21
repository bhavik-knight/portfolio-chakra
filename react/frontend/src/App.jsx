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
import { Contact } from "./components/Contact"
import { ResponsiveIcons } from "./components/ResponsiveIcons"


function App() {

    // color mode toggle; check the local storage on each color mode change
    const { colorMode, toggleColorMode } = useColorMode()
    useEffect(() => {
        // console.log(`check the local storage: ${JSON.stringify(localStorage)}`)
    }, [colorMode])

    // pages in the portfolio
    const pages = {
        "home": {
            "icon": ResponsiveIcons.home,
            "page": <Home />,
        },

        "skills": {
            "icon": ResponsiveIcons.skills,
            "page": <Skills />,
        },

        "projects": {
            "icon": ResponsiveIcons.projects,
            "page": <Projects />,
        },

        "education": {
            "icon": ResponsiveIcons.education,
            "page": <Education />,
        },

        "experiences": {
            "icon": ResponsiveIcons.experiences,
            "page": <Experiences />,
        },

        "contact": {
            "icon": ResponsiveIcons.contact,
            "page": <Contact />
        }

        // "certificates": {
        //     "icon": ResponsiveIcons.certificates,
        //     "page": <Certificates />
        // }
    }

    // to load a particular page on button click
    const [currentPage, setCurrentPage] = useState(localStorage.getItem("currentPage") || "home")
    function handleSelectPage(event) {
        setCurrentPage(event.currentTarget.name)
        console.log(`app - ${currentPage}`)
    }
    useEffect(() => {
        localStorage.setItem("currentPage", currentPage)
        document.title = `Bhavik | ${currentPage[0].toUpperCase() + currentPage.substring(1)}`
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
                flexdirection={{ base: "column", lg: "row" }}
                flexWrap={{ base: "wrap", lg: "nowrap" }}
            >
                <Sidenav
                    pages={pages}
                    activePage={currentPage}
                    selectPage={handleSelectPage}
                />

                <Flex
                    minH="100vh"
                    className="content"
                    as="main"
                    px={{ base: 0, lg: "4px" }}
                    width={{ base: "100%", lg: "85%" }}
                    mx="auto"
                    justify="center"
                >
                    {pages[currentPage].page}
                </Flex>
            </Flex>

            {/*  footer */}
            <Footer />
        </Flex >
    )
}

export { App }


// reference: transition of ball - can be use to track cursor
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions

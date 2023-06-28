import './App.css'
import { useState, useEffect, useRef, createContext, useContext } from "react"
import { Stack, HStack, VStack, StackDivider, useMediaQuery, useColorModeValue } from "@chakra-ui/react"
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
import { ContactForm } from "./components/ContactForm"
import { ResponsiveIcons } from "./components/ResponsiveIcons"


function App() {
    // check for mobile or not
    const [isMobile] = useMediaQuery("(max-width: 992px)")
    const [isLandscape, setIsLandscape] = useState(false)
    const [sidenavHeader, setSidenavHeader] = useState(false)
    const [marginTopPages, setMarginTopPages] = useState(
        { base: "50px", md: "50px", lg: "60px" }
    )

    // to handle orientation change effect: for landscape mode
    useEffect(() => {
        function handleOrientationChange() {
            setIsLandscape(window.innerWidth > window.innerHeight)
        }
        window.addEventListener("orientationchange", handleOrientationChange)
        handleOrientationChange()
        return () => window.removeEventListener("orientationchange", handleOrientationChange)
    }, [isLandscape])

    // to check is I should move sidenav to the top based on mobile device | landscape
    useEffect(() => {
        setSidenavHeader(isMobile && isLandscape)
    }, [isMobile, isLandscape])

    // so windows resizing can change the landscape mode; check for that as well
    useEffect(() => {
        function handleResize() {
            setIsLandscape(window.innerWidth > window.innerHeight)
        }
        window.addEventListener("resize", handleResize)
        handleResize()
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // when sidenav is moved to top; we must move the pages to fill that space
    useEffect(() => {
        setMarginTopPages(sidenavHeader ? 0 : { base: "50px", md: "50px", lg: "60px" })
    }, [sidenavHeader])

    // color mode toggle; check the local storage on each color mode change
    const { colorMode, toggleColorMode } = useColorMode()
    useEffect(() => {
        // console.log(`check the local storage: ${JSON.stringify(localStorage)}`)
    }, [colorMode])


    // check the vertical scroll to style navbar between transparent and solid background
    const [downScroll, setDownScroll] = useState(window.scrollY)
    const [bgColor, setBgColor] = useState()
    useEffect(() => {
        // check and handle the vertical scroll value constantly
        function handleScroll() {
            setDownScroll(window.scrollY === 0)
            downScroll ?
                setBgColor("transparent") :
                colorMode === "dark" ? setBgColor("black") : setBgColor("gray.500")
            // console.log(`nbg ${downScroll}`)
        }

        // add event listener to check for vertical scroll
        window.addEventListener("scroll", handleScroll)

        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [downScroll])


    // pages in the portfolio
    const pages = {
        "home": {
            "icon": ResponsiveIcons.home.icon,
            "page": <Home />,
        },

        "skills": {
            "icon": ResponsiveIcons.skills.icon,
            "page": <Skills />,
        },

        "projects": {
            "icon": ResponsiveIcons.projects.icon,
            "page": <Projects />,
        },

        "education": {
            "icon": ResponsiveIcons.education.icon,
            "page": <Education />,
        },

        "experiences": {
            "icon": ResponsiveIcons.experiences.icon,
            "page": <Experiences />,
        },

        "contact": {
            "icon": ResponsiveIcons.contact.icon,
            "page": <Contact />
        },
        // "certificates": {
        //     "icon": ResponsiveIcons.certificates.icon,
        //     "page": <Certificates />
        // }
    }

    // to load a particular page on button click
    const [currentPage, setCurrentPage] = useState(localStorage.getItem("currentPage") || "home")
    function handleSelectPage(event) {
        setCurrentPage(event.currentTarget.name)
    }
    useEffect(() => {
        localStorage.setItem("currentPage", currentPage)
        document.title = `Bhavik | ${currentPage[0].toUpperCase() + currentPage.substring(1)}`
        window.scrollTo(0, 0)
        // console.log(`app - ${currentPage}`)
    }, [currentPage])


    // this is the function that will render the DOM
    return (
        <Flex
            m={0} p={0} gap={0} spacing={0}
            position="relative"
            wrap="wrap"
        >
            <Header
                colorMode={colorMode}
                changeColorMode={() => toggleColorMode()}
                title={currentPage}
                selectPage={setCurrentPage}
                pages={pages}
                activePage={currentPage}
                currentPage={currentPage}
                handleSelectPage={handleSelectPage}
                isScrolled={downScroll}
                bgColor={bgColor}
                isMobile={isMobile}
            />

            {
                <Sidenav
                    pages={pages}
                    activePage={currentPage}
                    selectPage={handleSelectPage}
                    w={{ base: "100%", lg: "20%" }}
                    px={{ base: 0, lg: 4 }}
                    sidenavHeader={sidenavHeader}
                />
            }

            <Flex
                as="main"
                w={{ base: "100%" }}
                maxW={{ lg: "80%" }}
                // mt={{ base: "50px", md: "50px", lg: "60px" }}
                mt={marginTopPages}
                mx="auto" py={2}
            >
                {pages[currentPage].page}
            </Flex>

            < Footer />
        </Flex >
    )
}

export { App }


// reference: transition of ball - can be use to track cursor
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions


{/*

        <Flex className="container" flexDirection="column" flexWrap="wrap">
            <Header
                colorMode={colorMode}
                changeColorMode={() => toggleColorMode()}
                title={currentPage}
            />
            // middle part
<Flex
    flexDirection={{ base: "column", lg: "row" }}
    flexWrap={{ base: "wrap", lg: "nowrap" }}
    mt={{ base: "50px", lg: "60px" }}
>
    <Flex
        bg="green"
        as="aside"
        minW={{ base: "100%", lg: "13%" }}
        mx="auto"
        left={0} right={0}
        top={{ base: "80px", lg: 0 }}
        py={{ base: 0, lg: 2 }}
        justify={{ base: "center", lg: "flex-start" }}
    >
        <Sidenav
            pages={pages}
            activePage={currentPage}
            selectPage={handleSelectPage}
        />
    </Flex>

    <Flex
        bg="red"
        minH="100vh"
        className="content"
        as="main"
        px={{ base: 0, lg: "4px" }}
        w={{ base: "100%", lg: "85%" }}
        mx="auto"
        mt={{ base: "70px", lg: 0 }}
        py={{ base: 0, lg: 2 }}
        justify="center"
    >
        // {pages[currentPage].page}
    </Flex >
</Flex >

    //  footer
    <Footer />
        </Flex >
*/}

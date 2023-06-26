import './App.css'
import { useState, useEffect } from "react"
import { Stack, HStack, VStack, StackDivider } from "@chakra-ui/react"
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

    // color mode toggle; check the local storage on each color mode change
    const { colorMode, toggleColorMode } = useColorMode()
    useEffect(() => {
        // console.log(`check the local storage: ${JSON.stringify(localStorage)}`)
    }, [colorMode])

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
            direction="column"
            m={0} p={0} gap={0} spacing={0}
            position="relative"
            wrap="wrap"
        >
            <Header
                colorMode={colorMode}
                changeColorMode={() => toggleColorMode()}
                title={currentPage}
                selectPage={setCurrentPage}
            />

            <Stack
                mt={{ base: "50px", md: "50px", lg: "60px" }}
                minH={{ base: "fit-content", lg: "100vh" }}
                direction={{ base: "column", lg: "row" }}
                flexWrap={{ base: "wrap", lg: "nowrap" }}
                m={0} p={0} gap={0} spacing={0}
                w="100vw"
            >
                {/* sidenav */}
                <Flex
                    // h={{ base: "fit-content", lg: "100vh" }}
                    position="relative"
                    minW={{ base: "100%", lg: "fit-content" }} zIndex={5} me={10}>

                    <Sidenav
                        pages={pages}
                        activePage={currentPage}
                        selectPage={handleSelectPage}
                    />
                </Flex>

                <StackDivider
                    mt={{ base: "50px", md: "50px", lg: "60px" }}
                    borderColor="white" border="1px dotted"
                />

                {/* pages */}
                <Flex w="100%" py={2}>
                    <Flex as="main" w="95%" mt={{ base: "50px", md: "50px", lg: 0 }} mx="auto">
                        {pages[currentPage].page}
                    </Flex>
                </Flex>

            </Stack>

            <Footer />
        </Flex>
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

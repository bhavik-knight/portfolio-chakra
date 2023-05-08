import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { icons } from "./Icons"
import { Button, Menu, Box, Flex, Image, ButtonGroup, Text, Container, IconButton, Icon, useMediaQuery } from "@chakra-ui/react"
import { useState, useRef, useEffect } from "react"


// ref: https://dev.to/davidemaye/how-to-set-up-font-awesome-in-react-5a8d
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faLinkedinIn, faGithubSquare } from "@fortawesome/free-brands-svg-icons"

// to create icons for navbar with consistent style
function getNavbarIconButton(btnName, btnIcon, handleClick) {
    return (
        <IconButton
            variant="solid"
            fontSize={{ base: "md", lg: "2xl" }}
            borderRadius="4px"
            colorScheme="transparent"
            name={btnName}
            icon={btnIcon}
            onClick={handleClick}
        />
    )
}


function Header({ lightMode, changeLightMode, title }) {

    // check the vertical scroll to style navbar between transparent and solid background
    const [verticalScroll, setVerticalScroll] = useState(window.scrollY)
    let navbarBg = (verticalScroll === 0)
    let bgColor = `linear-gradient(violet, purple)`

    useEffect(() => {
        // check and handle the vertical scroll value constantly
        function handleScroll() {
            setVerticalScroll(window.scrollY)
            // console.log(`nbg ${navbarBg}`)
        }

        // add event listener to check for vertical scroll
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [verticalScroll])

    const sunIcon = getNavbarIconButton(
        "sun",
        icons["sun"],
        changeLightMode
    )

    const moonIcon = getNavbarIconButton(
        "moon",
        icons["moon"],
        changeLightMode
    )

    const linkedinIcon = getNavbarIconButton(
        "linkedin",
        icons["linkedin"],
        () => open("https://linkedin.com/in/bhavikbhagat", "_blank")
    )

    const gitHubIcon = getNavbarIconButton(
        "github",
        icons["github"],
        () => open("https://github.com/bhavik-knight", "_blank")
    )

    return (
        <Flex as="nav"
            className="navbar"
            px={4}
            bg={`${navbarBg ? "transparent" : bgColor}`}
        >
            <Image
                className="logo"
                src="./bhavik_logo.png"
                width="15%"
            />
            <Container bg="transparent">
                <Text
                    fontSize="4xl"
                    textAlign="center"> {title === "home" ? "Bhavik's Portfolio" : title}
                </Text>
            </Container>
            <ButtonGroup spacing={1}>
                {lightMode ? moonIcon : sunIcon}
                {linkedinIcon}
                {gitHubIcon}
            </ButtonGroup>
        </Flex >
    )
}

export { Header, getNavbarIconButton }

// reference: track window width, height, scroll, etc
// https://bobbyhadz.com/blog/react-get-window-width-height

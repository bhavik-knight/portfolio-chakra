import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { FaLinkedinIn, FaGithub, } from "./Icons"
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
            fontSize={{ base: "md", lg: "4xl" }}
            borderRadius="4px"
            colorScheme="transparent"
            name={btnName}
            icon={btnIcon}
            onClick={handleClick}
        />
    )
}


function Header({ darkMode, changeDarkMode, title }) {
    // check the vertical scroll to style navbar between transparent and solid background
    const [verticalScroll, setVerticalScroll] = useState(window.scrollY)
    let bgColor = `linear-gradient(violet, purple)`

    useEffect(() => {
        // check and handle the vertical scroll value constantly
        function handleScroll() {
            setVerticalScroll(window.scrollY)
        }

        // add event listener to check for vertical scroll
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [verticalScroll])

    const sunIcon = getNavbarIconButton(
        "sun",
        <SunIcon />,
        changeDarkMode
    )

    const moonIcon = getNavbarIconButton(
        "moon",
        <MoonIcon />,
        changeDarkMode
    )

    const linkedinIcon = getNavbarIconButton(
        "linkedin",
        <FaLinkedinIn />,
        () => open("https://linkedin.com/in/bhavikbhagat", "_blank")
    )

    const gitHubIcon = getNavbarIconButton(
        "github",
        <FaGithub />,
        () => open("https://github.com/bhavik-knight", "_blank")
    )

    return (
        <Flex as="nav"
            className="navbar"
            bg={{ base: `${bgColor}`, md: `${verticalScroll === 0 ? "none" : bgColor}` }}
            h={{ base: "50px", md: "60px" }}
        >
            <Image
                className="logo"
                src="./bhavik_logo.png"
                w={{ base: "40%", md: "15%" }}
            />
            <Container flexGrow={{ base: 0, md: "1" }} bg="transparent">
                <Text
                    fontSize={{ base: "sm", md: "4xl" }}
                    textAlign="center"> {title === "home" ? "Bhavik's Portfolio" : title}
                </Text>
            </Container>
            <ButtonGroup spacing={{ base: "-0.5", md: "2" }}>
                {linkedinIcon}
                {gitHubIcon}
                {darkMode ? sunIcon : moonIcon}
            </ButtonGroup>
        </Flex >
    )
}

export { Header, getNavbarIconButton }

// reference: track window width, height, scroll, etc
// https://bobbyhadz.com/blog/react-get-window-width-height

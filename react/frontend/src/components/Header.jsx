import { icons } from "./Icons"
import { useState, useRef, useEffect } from "react"
import { useColorModeValue } from "@chakra-ui/react"
import { Heading, Menu, Box, Flex, Image, Text, Container } from "@chakra-ui/react"
import { Tooltip, Button, Icon, IconButton, ButtonGroup } from "@chakra-ui/react"


// ref: https://dev.to/davidemaye/how-to-set-up-font-awesome-in-react-5a8d
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faLinkedinIn, faGithubSquare } from "@fortawesome/free-brands-svg-icons"

// to create icons for navbar with consistent style
function getNavbarIconButton(btnName, btnIcon, handleClick) {
    return (
        <Tooltip hasArrow placement="bottom" label={btnName} araiLabel={btnName} textTransform="capitalize">
            <IconButton
                variant="ghost"
                fontSize={{ base: "md", lg: "2xl" }}
                borderRadius="4px"
                border="1px solid transparent"
                _hover={{ borderColor: useColorModeValue("red", "cyan") }}
                name={btnName}
                icon={btnIcon}
                onClick={event => handleClick(event)}
            />
        </Tooltip>
    )
}


function Header({ colorMode, changeColorMode, title }) {

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
        changeColorMode,
    )

    const moonIcon = getNavbarIconButton(
        "moon",
        icons["moon"],
        changeColorMode
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
            className="navbar header"
            px={4}
            bg={`${navbarBg ? "transparent" : bgColor}`}
        >
            <Heading className="logo" width="15%">Bhavik</Heading>
            <Container bg="transparent">
                <Text
                    fontSize="4xl"
                    textAlign="center"> {title === "home" ? "Bhavik's Portfolio" : title}
                </Text>
            </Container>
            <ButtonGroup spacing={1}>
                {colorMode === "dark" ? sunIcon : moonIcon}
                {linkedinIcon}
                {gitHubIcon}
            </ButtonGroup>
        </Flex >
    )
}

export { Header, getNavbarIconButton }

// reference: track window width, height, scroll, etc
// https://bobbyhadz.com/blog/react-get-window-width-height

import "./Header.css"
import { ResponsiveIcons } from "./ResponsiveIcons"
import { useState, useRef, useEffect } from "react"
import { useColorModeValue, useMediaQuery } from "@chakra-ui/react"
import { Heading, Spacer, Center, Menu, Box, Flex, Image, Text, Container } from "@chakra-ui/react"
import { Tooltip, Button, Icon, IconButton, ButtonGroup } from "@chakra-ui/react"


// ref: https://dev.to/davidemaye/how-to-set-up-font-awesome-in-react-5a8d
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faLinkedinIn, faGithubSquare } from "@fortawesome/free-brands-svg-ResponsiveIcons"

// to create icons for navbar with consistent style
function getNavbarIconButton(btnName, btnIcon, handleClick) {

    return (
        <Tooltip hasArrow placement="bottom" label={btnName} araiLabel={btnName} textTransform="capitalize">
            <IconButton
                variant="ghost"
                fontSize={{ base: "md", lg: "2xl" }}
                borderRadius="4px"
                _hover={{ boxShadow: "1px 1px 8px" }}
                name={btnName}
                icon={btnIcon}
                onClick={event => handleClick(event)}
            />
        </Tooltip>
    )
}


function Header({ colorMode, changeColorMode, title }) {
    // check for the media query
    const [isLarge] = useMediaQuery("(min-width: 992px)")

    // check the vertical scroll to style navbar between transparent and solid background
    const [verticalScroll, setVerticalScroll] = useState(window.scrollY)
    let navbarBg = (verticalScroll === 0)
    const [bgColor, setBgColor] = useState()
    useEffect(() => {
        navbarBg ?
            setBgColor("transparent") :
            colorMode === "dark" ? setBgColor("black") : setBgColor("gray.400")
    }, [verticalScroll, colorMode])

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
        ResponsiveIcons["sun"]["name"],
        ResponsiveIcons["sun"]["icon"],
        changeColorMode,
    )

    const moonIcon = getNavbarIconButton(
        ResponsiveIcons["moon"]["name"],
        ResponsiveIcons["moon"]["icon"],
        changeColorMode
    )

    const linkedinIcon = getNavbarIconButton(
        ResponsiveIcons["linkedin"]["name"],
        ResponsiveIcons["linkedin"]["icon"],
        () => open("https://linkedin.com/in/bhavikbhagat", "_blank")
    )

    const gitHubIcon = getNavbarIconButton(
        ResponsiveIcons["github"]["name"],
        ResponsiveIcons["github"]["icon"],
        () => open("https://github.com/bhavik-knight", "_blank")
    )

    return (
        <Flex
            as="nav"
            px={4}
            top={0} left={0} right={0}
            h={{ base: "50px", md: "50px", lg: "60px" }}
            alignItems="center"
            position="fixed"
            justify="space-between"
            bg={bgColor}
            zIndex={10}
            boxShadow={navbarBg && "0px 0px 16px 0px"}
        >
            <Heading
                className="logo"
                width={{ base: "30%", lg: "15%" }}
            >
                B{isLarge && "havik"}
            </Heading>
            <Spacer />
            {/* <Container bg="transparent">
                <Text
                    display={{ base: "none", md: "block" }}
                    fontSize="4xl"
                    textAlign="center"> {title === "home" ? "Bhavik's Portfolio" : title}
                </Text>
            </Container> */}
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

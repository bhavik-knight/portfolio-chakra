import "./Header.css"
import { ResponsiveIcons } from "./ResponsiveIcons"
import { useState, useRef, useEffect } from "react"
import { useColorModeValue, useMediaQuery } from "@chakra-ui/react"
import { Heading, Spacer, Menu, Flex, Image, Text } from "@chakra-ui/react"
import { Tooltip, Button, Icon, IconButton, ButtonGroup } from "@chakra-ui/react"
import { Container, Center, Box, Stack } from "@chakra-ui/react"



function Header({ colorMode, changeColorMode, title, selectPage }) {
    // check for the media query
    const [isMobile] = useMediaQuery("(max-width: 992px)")

    // logo style on mobile hide other letters
    const logoStyle = {
        // bg: "red",
        // border: "1px solid",
        my: "auto",
        display: isMobile ? "none" : "flex",
        fontSize: "36px",
        boxSize: "40px",
        alignItems: "bottom"
    }


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
            px={{ base: 2, lg: 4 }}
            top={0} left={0} right={0}
            w="100vw"
            h={{ base: "50px", md: "50px", lg: "60px" }}
            alignItems="center"
            position="fixed"
            justify="space-between"
            bg={bgColor}
            zIndex={10}
            boxShadow={navbarBg && "0px 0px 16px 0px"}
        >
            <Text
                as={Flex}
                className="logo"
                fontSize={{ base: "28px", lg: "36px" }}
                onClick={() => selectPage("home")}
                my="auto"
                px={2}
                alignItems="center"
                _hover={{ ariaLabel: "HomeButton" }}
            >

                {/* B{!isMobile && "havik"} */}
                <span className="logoText" sx={{ style: "--l:1" }} >B</span>
                <span className="logoText" sx={{ style: "--l:2" }} >h</span>
                <span className="logoText" sx={{ style: "--l:3" }} >a</span>
                <span className="logoText" sx={{ style: "--l:4" }} >v</span>
                <span className="logoText" sx={{ style: "--l:5" }} >i</span>
                <span className="logoText" sx={{ style: "--l:6" }} >k</span>
            </Text>

            {/* <Container bg="transparent">
                <Text
                    display={{ base: "none", md: "block" }}
                    fontSize="4xl"
                    textAlign="center"> {title === "home" ? "Bhavik's Portfolio" : title}
                </Text>
            </Container> */}

            <ButtonGroup isAttached>
                {colorMode === "dark" ? sunIcon : moonIcon}
                {linkedinIcon}
                {gitHubIcon}
            </ButtonGroup>
        </Flex >
    )
}


// ref: https://dev.to/davidemaye/how-to-set-up-font-awesome-in-react-5a8d
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faLinkedinIn, faGithubSquare } from "@fortawesome/free-brands-svg-ResponsiveIcons"

// to create icons for navbar with consistent style
function getNavbarIconButton(btnName, btnIcon, handleClick) {

    return (
        <Tooltip hasArrow placement="bottom" label={btnName} araiLabel={btnName} textTransform="capitalize">
            <IconButton
                variant="ghost"
                className="btnIcon"
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

export { Header, getNavbarIconButton }

// reference: track window width, height, scroll, etc
// https://bobbyhadz.com/blog/react-get-window-width-height

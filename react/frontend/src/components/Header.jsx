import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { FaLinkedinIn, FaGithub } from "./Icons"
import { Button, Menu, Box, Flex, Image, ButtonGroup, Text, Container, IconButton, Icon } from "@chakra-ui/react"


// ref: https://dev.to/davidemaye/how-to-set-up-font-awesome-in-react-5a8d
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faLinkedinIn, faGithubSquare } from "@fortawesome/free-brands-svg-icons"


function Header({ darkMode, changeDarkMode }) {
    const sunIcon = <IconButton
        variant="solid"
        fontSize={{ base: "sm", lg: "4xl" }}
        borderRadius="4px"
        colorScheme="blackAlpha"
        icon={< SunIcon />} onClick={changeDarkMode}
    />

    const moonIcon = <IconButton
        variant="solid"
        fontSize={{ base: "sm", lg: "4xl" }}
        borderRadius="4px"
        colorScheme="blackAlpha"
        icon={<MoonIcon />} onClick={changeDarkMode}
    />

    const linkedinIcon = <IconButton
        variant="solid"
        fontSize={{ base: "sm", lg: "4xl" }}
        borderRadius="4px"
        colorScheme="blackAlpha"
        icon={<FaLinkedinIn />}
        onClick={() => open("https://linkedin.com/in/bhavikbhagat", "_blank")}
    />

    const gitHubIcon = <IconButton
        variant="solid"
        fontSize={{ base: "sm", lg: "4xl" }}
        borderRadius="4px"
        colorScheme="blackalpha"
        icon={<FaGithub />}
        onClick={() => open("https://github.com/bhavik-knight", "_blank")}
    />

    return (
        <Flex as="nav" className="navbar" h={{ base: "50px", md: "60px" }}>
            <Image
                className="logo"
                src="./bhavik_logo.png"
                w={{ base: "40%", md: "15%" }}
            />
            <Container flexGrow={{ base: 0, md: "1" }} bg="transparent">
                <Text fontSize={{ base: "sm", md: "4xl" }} textAlign="center"> Bhavik's Portfolio</Text>
            </Container>
            <ButtonGroup display={{ base: "none", md: "inline-flex" }} variant="outline" px={2}>
                {linkedinIcon}
                {gitHubIcon}
                {darkMode ? sunIcon : moonIcon}
            </ButtonGroup>
        </Flex >
    )
}

export { Header }

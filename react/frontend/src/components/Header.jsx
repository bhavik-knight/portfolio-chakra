import { Box, Flex, Image, ButtonGroup, Text, Container, IconButton, Icon } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"

// ref: https://dev.to/davidemaye/how-to-set-up-font-awesome-in-react-5a8d
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithubSquare } from "@fortawesome/free-brands-svg-icons"


function Header({ darkMode, setDarkMode }) {
    const sunIcon = <IconButton
        variant="solid"
        fontSize={{ base: "sm", lg: "lg" }}
        borderRadius="4px"
        colorScheme="teal"
        icon={< SunIcon />} onClick={setDarkMode}
    />

    const moonIcon = <IconButton
        variant="solid"
        fontSize={{ base: "sm", lg: "lg" }}
        borderRadius="4px"
        colorScheme="teal"
        icon={<MoonIcon />} onClick={setDarkMode}
    />

    const linkedinIcon = <IconButton
        variant="solid"
        fontSize={{ base: "sm", lg: "4xl" }}
        borderRadius="4px"
        colorScheme="teal"
        icon={<FaLinkedinIn />}
        onClick={() => console.log(`open linkedin`)}
    />

    const gitHubIcon = <IconButton
        variant="solid"
        fontSize={{ base: "sm", lg: "4xl" }}
        borderRadius="4px"
        colorScheme="teal"
        icon={<FaGithub />}
        onClick={() => console.log(`open github`)}
    />

    return (
        <Flex as="nav" className="navbar" h={{ base: "50px", md: "60px" }}>
            <Image className="logo" src="./bhavik_logo.png" w="10%" />
            <Container flexGrow="1" bg="transparent">
                <Text fontSize={{ base: "sm", lg: "4xl" }} textAlign="center"> Bhavik's Portfolio</Text>
            </Container>
            <ButtonGroup variant="outline" px={2}>
                {linkedinIcon}
                {gitHubIcon}
                {darkMode ? sunIcon : moonIcon}
            </ButtonGroup>
        </Flex >
    )
}

export { Header }

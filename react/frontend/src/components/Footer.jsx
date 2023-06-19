import "./Footer.css"
import { Center, Flex, Text } from "@chakra-ui/react"

function Footer(props) {
    const year = new Date().getFullYear();
    return (
        <Flex
            mt={2}
            className="navbar"
            h={{ base: "50px", md: "60px" }}
            boxShadow="0 0 16px 0"
            justifyContent="center"
        >
            <Text as={Center}>
                © {year} Developed by Bhavik Bhagat
            </Text>
        </ Flex>
    )
}

export { Footer }

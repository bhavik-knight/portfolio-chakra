import { Center, Flex, Text } from "@chakra-ui/react"

function Footer(props) {
    const year = new Date().getFullYear();
    return (
        <Flex
            w="100%"
            h={{ base: "50px", md: "50px", lg: "60px" }}
            left={0} right={0} bottom={0}
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

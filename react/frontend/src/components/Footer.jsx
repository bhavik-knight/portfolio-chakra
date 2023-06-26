import { Center, Flex, Text } from "@chakra-ui/react"

const textFontStyle = {
    fontSize: { base: "0.8em", md: "0.9em", lg: "1em" },
    px: { base: 4, lg: 8 },
    py: 2,
    mx: "auto"
}

function Footer(props) {
    const year = new Date().getFullYear();
    return (
        <Flex
            // bg="green"
            w="100%"
            position="sticky"
            h={{ base: "50px", md: "50px", lg: "60px" }}
            left={0} right={0} bottom={0}
            boxShadow="0 0 16px 0"
            justify="space-between"
        >
            <Text as={Center} {...textFontStyle}>
                ©{year} Developed by Bhavik Bhagat
            </Text>
        </ Flex>
    )
}

export { Footer }

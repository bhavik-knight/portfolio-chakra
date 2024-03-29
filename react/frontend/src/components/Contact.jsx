import { ContactForm } from "./ContactForm"
import { ResponsiveIcons } from "./ResponsiveIcons"

import { Divider, Text, Heading, Image, Link } from "@chakra-ui/react"
import { StackDivider, Stack, VStack } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Box, Flex, Center } from "@chakra-ui/react"
import { ButtonGroup, IconButton, Tooltip } from "@chakra-ui/react"
import { useMediaQuery, useColorModeValue } from "@chakra-ui/react"


// box styles for form and QR code
const boxStyles = {
    as: Center,
    border: "1px solid",
    borderRadius: "1em",
    p: { base: 2, md: 4, lg: 8 },
}

// body text font style
const textFontStyle = {
    fontSize: { base: "0.9em", md: "0.95em", lg: "1em" },
    textAlign: "justify",
    px: { base: 4, lg: 8 },
    py: 2
}

// card header style
const headerFontStyle = {
    fontSize: { base: "lg", md: "xl", lg: "2xl" },
    mx: "auto",
}

// social icon button size
const btnStyles = {
    className: "btnIcon",
    isRound: true,
    _hover: {
        boxShadow: "1px 1px 4px",
    },
}


// react component
function Contact() {
    // for mobile screen
    const [isMobile] = useMediaQuery("max-width: 992px")

    function handleEmailClick(e) {
        e.preventDefault()
        window.location = `mailto:bhavik.bhagat.jobs@gmail.com`
    }

    return (
        <Stack gap={{ base: 1, lg: 2 }} w="100%" minH="90vh">
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" my={1} py={1}>
                    Contact Me
                </CardHeader>

                <Divider mx="auto" width="95%" />

                <CardBody textAlign="justify">
                    <Text {...textFontStyle}>
                        Please complete the following form to send me your message via email.
                    </Text>
                </CardBody>
            </Card>

            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <Stack
                    direction={{ base: "column", lg: "row" }}
                    p={{ base: 2, lg: 4 }} gap={1}
                    justify="space-between"
                >
                    <Box w={{ base: "100%", lg: "55%" }} {...boxStyles}
                        borderColor={useColorModeValue("gray.200", "gray.600")}
                    >
                        {/* form  goes here */}
                        <ContactForm />
                    </Box>

                    <StackDivider border="1px dotted" />

                    <Box w={{ base: "100%", lg: "40%" }} {...boxStyles}
                        borderColor={useColorModeValue("gray.200", "gray.600")}
                    >
                        <VStack spacing={2} w="100%" m={2}>
                            <Flex
                                wrap="wrap"
                                justifyContent="space-between"
                                boxSize={{ base: "100%", lg: "80%" }}
                                mx="auto"
                            >
                                <Text as={Flex} fontSize={["0.9em", "0.95em", "1em"]}>
                                    <span className="logoText">B</span>
                                    <span className="logoText">h</span>
                                    <span className="logoText">a</span>
                                    <span className="logoText">v</span>
                                    <span className="logoText">i</span>
                                    <span className="logoText">k</span>&nbsp;
                                    <span className="logoText">B</span>
                                    <span className="logoText">h</span>
                                    <span className="logoText">a</span>
                                    <span className="logoText">g</span>
                                    <span className="logoText">a</span>
                                    <span className="logoText">t</span>
                                </Text>

                                <EmailCard handleEmailClick={handleEmailClick} display={{ base: "none", md: "flex", lg: "none" }} />

                                <Flex alignItems="center" gap={1}>
                                    {ResponsiveIcons["phone"]["icon"]}
                                    <Text fontSize={["0.9em", "0.95em", "1em"]}>(902)-338-0682</Text>
                                </Flex>
                            </Flex>

                            <Box
                                mx="auto"
                                boxSize={{ base: "100%", lg: "80%" }}
                                display={{ base: "flex", md: "none", lg: "flex" }}
                            >
                                <Image src="images/BhavikQR.png" alt="qr-code" borderRadius="1em" />
                            </Box>

                            <EmailCard handleEmailClick={handleEmailClick} display={{ base: "flex", md: "none", lg: "flex" }} />

                            <Center >
                                <ButtonGroup
                                    isAttached
                                    variant="outline"
                                    size={{ base: "sm", md: "md" }}
                                >
                                    <Tooltip label={ResponsiveIcons["facebook"]["name"]} fontSize={["0.8em", "0.9em", "1em"]}>
                                        <IconButton
                                            {...btnStyles}
                                            icon={ResponsiveIcons["facebook"]["icon"]}
                                            onClick={() => open("https://facebook.com/", "_blank")}
                                        />
                                    </Tooltip>

                                    <Tooltip label={ResponsiveIcons["instagram"]["name"]} fontSize={["0.8em", "0.9em", "1em"]}>
                                        <IconButton
                                            {...btnStyles}
                                            icon={ResponsiveIcons["instagram"]["icon"]}
                                            onClick={() => open("https://instagram.com/", "_blank")}
                                        />
                                    </Tooltip>

                                    <Tooltip label={ResponsiveIcons["telegram"]["name"]} fontSize={["0.8em", "0.9em", "1em"]}>
                                        <IconButton
                                            {...btnStyles}
                                            icon={ResponsiveIcons["telegram"]["icon"]}
                                            onClick={() => open("https://telegram.org/", "_blank")}
                                        />
                                    </Tooltip>

                                    <Tooltip label={ResponsiveIcons["twitter"]["name"]} fontSize={["0.8em", "0.9em", "1em"]}>
                                        <IconButton
                                            {...btnStyles}
                                            icon={ResponsiveIcons["twitter"]["icon"]}
                                            onClick={() => open("https://twitter.com/", "_blank")}
                                        />
                                    </Tooltip>
                                </ButtonGroup>
                            </Center>

                        </VStack>
                    </Box>

                </Stack>

                <Divider mx="auto" width="95%" my={1} />

                <CardFooter px={8}>
                    <Text as={Center} mx="auto" fontSize={["0.9em", "0.95em", "1em"]}>
                        Thank you for visiting my website!
                    </Text>
                </CardFooter>
            </Card >
        </Stack >
    )
}


// this card to be displayed at the bottom of QR code on portaint mode on phone, and large screen
// on landscape mode mobile, hide QR code, and move it in the line with name + phone
function EmailCard({ handleEmailClick, display }) {
    return (
        <Center display={display}>
            {/* ref: https://stackoverflow.com/questions/63782544/react-open-mailto-e-mail-client-onclick-with-body-from-textarea */}
            <Link to="#" onClick={handleEmailClick}>
                <Flex alignItems="center" gap={1}>
                    {ResponsiveIcons["email"]["icon"]}
                    <Text fontSize={["0.9em", "0.95em", "1em"]}>
                        bhavik.bhagat.jobs@gmail.com
                    </Text>
                </Flex>
            </Link>
        </Center>
    )
}


// export only required react component
export { Contact }

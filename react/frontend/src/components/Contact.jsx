import { useRef, useState, useEffect } from "react"
import { useToast } from "@chakra-ui/react"
import { ResponsiveIcons } from "./ResponsiveIcons"
import { Divider, Spacer, Text, Heading, Image, Link } from "@chakra-ui/react"
import { Wrap, Stack, HStack, VStack } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Box, Flex, Container, Center } from "@chakra-ui/react"
import { ButtonGroup, Button, IconButton, Tooltip } from "@chakra-ui/react"
import { ContactForm } from "./ContactForm"


// box styles for form and QR code
const boxStyles = {
    as: Center,
    border: "1px solid darkgray",
    borderRadius: "1em",
    p: { base: 2, md: "2em", lg: "2em" },
    mx: { base: 0, lg: 2 }
}


// social icon button size
const btnStyles = {
    isRound: true,
    _hover: { boxShadow: "1px 1px 4px" },
}


// react component
function Contact() {

    function handleEmailClick(e) {
        e.preventDefault()
        window.location = `mailto:bhavik.bhagat.jobs@gmail.com`
    }

    return (
        <Stack p={{ base: 1, lg: 2 }} spacing={{ base: 1, lg: 2 }} w="100%">
            <Card as="section" p={{ base: 0, lg: 4 }} _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" py={2}>
                    Contact Me
                </CardHeader>

                <Divider mx="auto" width="95%" />
                <CardBody textAlign="justify" px={8}>
                    Please fill out the following form to send me your message through email.
                </CardBody>

            </Card>

            <Card as="section" p={{ base: 0, lg: 4 }} _hover={{ boxShadow: "4px 4px 16px" }}>
                <Flex
                    direction={{ base: "column", lg: "row" }}
                    flexWrap="wrap"
                    p={{ base: 0, lg: 2 }}
                    mx="auto"
                    justifyContent={{ lg: "space-evenly" }}
                    gap={2}
                >
                    <Box w={{ base: "100%", lg: "55%" }} {...boxStyles}>
                        {/* form  goes here */}
                        <ContactForm />
                    </Box>

                    <Box w={{ base: "100%", lg: "40%" }} {...boxStyles}>
                        <VStack spacing={2} w="100%">
                            <Flex
                                wrap="wrap"
                                justifyContent="space-between"
                                boxSize={{ base: "100%", lg: "80%" }}
                                mx="auto"
                                p={1}
                            >
                                <Text fontSize={["0.9em", "0.95em", "1em"]}>Bhavik Bhagat</Text>
                                <Flex alignItems="center" gap={1}>
                                    {ResponsiveIcons["phone"]["icon"]}
                                    <Text fontSize={["0.9em", "0.95em", "1em"]}>(902)-338-06821</Text>
                                </Flex>
                            </Flex>

                            <Box boxSize={{ base: "100%", lg: "80%" }} mx="auto">
                                <Image src="logos/BhavikQR.png" alt="qr-code" borderRadius="1em" />
                            </Box>

                            <Center>
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
                </Flex>

                <Divider mx="auto" width="95%" />

                <CardFooter px={8}>
                    <Text as={Center} mx="auto" fontSize={["0.9em", "0.95em", "1em"]}>
                        Thank you for visiting my website!
                    </Text>
                </CardFooter>
            </Card>
        </Stack >
    )
}


// export only required react component
export { Contact }

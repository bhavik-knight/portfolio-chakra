import { Heading, Text, Image, AspectRatio } from "@chakra-ui/react"
import { Stack, Container, Flex, Center } from "@chakra-ui/react"
import { Divider, Spacer, Button } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"

function Home() {
    return (
        <Stack
            p={2}
            gap={2}
            width="100%"
        >
            <Card as="section" p={4}>
                <Text
                    px={8}
                    fontSize={{ base: "md", md: "lg", lg: "4xl" }}
                >
                    Hello, world!<br /> I am Bhavik Bhagat.
                </Text>

                <Divider mx="auto" width="95%" my={1} />

                <Stack px={8} py={1} textAlign="justify">
                    <Text>
                        I am an aspiring full-stack developer, actively looking for my first break into the tech industry.

                    </Text>
                    <Text as="section">
                        I am open to freelancing work. If you have cool project ideas in mind, let's connect,
                        collaborate and build some cool webapps together.
                    </Text>

                    <Text as="section">
                        I learn new technologies keep up with the trends. Currently learning promot-engineering to leverage chatGPT to enchance my coding experience.
                    </Text>

                    <Text as="section">
                        This portfolio demonstrates my recently learned skilled ReactJS using the latest documentation, and powered by ChakraUI.
                    </Text>
                </Stack>

            </Card>

            <Card as="section" p={2}>
                <Stack direction={{ base: "column", lg: "row" }} >
                    <AspectRatio ratio={1}
                        width={{ base: "100%", xl: "40%" }}
                    >
                        <Flex boxSize={{ base: "base", md: "md", lg: "lg" }}>
                            <Image src="./logos/bhavik_sticker.png" objectFit="fill" alt="bhavik sticker" />
                        </Flex>
                    </AspectRatio>
                    <Flex
                        // bg="lightgray"
                        gap={2}
                        width={{ base: "100%", xl: "60%" }}
                        direction={{ base: "column", lg: "row" }}
                        justifyContent="space-evenly"
                        alignItems="center"
                        wrap="wrap"
                    >
                        <Card
                            as={Center}
                            width={{ base: "100%", lg: "40%" }}
                            height={{ base: "base", md: "200px" }}
                            _hover={{ boxShadow: "2px 2px 4px" }}
                        >
                            Full Stack Developement
                        </Card>
                        <Card
                            as={Center}
                            width={{ base: "100%", lg: "40%" }}
                            height={{ base: "base", md: "200px" }}
                            _hover={{ boxShadow: "2px 2px 4px" }}
                        >
                            Data Analyst
                        </Card>

                        <Card
                            as={Center}
                            width={{ base: "100%", lg: "40%" }}
                            height={{ base: "base", md: "200px" }}
                            _hover={{ boxShadow: "2px 2px 4px" }}
                        >
                            Teamwork
                        </Card>
                        <Card
                            as={Center}
                            width={{ base: "100%", lg: "40%" }}
                            height={{ base: "base", md: "200px" }}
                            _hover={{ boxShadow: "2px 2px 4px" }}
                        >
                            Problem Solving
                        </Card>
                    </Flex>
                </Stack>

            </Card >

        </Stack >
    )
}

export { Home }

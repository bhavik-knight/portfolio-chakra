
import { List, UnorderedList, ListItem } from "@chakra-ui/react"
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
                <Stack direction={{ base: "column", xl: "row" }} >
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
                        direction={{ base: "column", xl: "row" }}
                        justifyContent="space-evenly"
                        alignItems="center"
                        wrap="wrap"
                    >
                        <Card
                            as={Center}
                            width={{ base: "100%", md: "80%", xl: "40%" }}
                            height={{ base: "base", md: "200px" }}
                            className="homeSkills"
                        >
                            <Text as="strong" className="homeSkillName">Full Stack Developement</Text>
                            <CardBody className="homeSkillDetails" width="100%" textAlign="justify">
                                <Text noOfLines={[2, 4, 8]}>
                                    Worked on numerous Full Stack project using Django, Flask, PHP, HTML, CSS, JavaScript, jQuery, Bootstrap, ReactJS, ChakraUI, MySQL, Postgreq and hosted the projects on Heroku and AWS using Apache server.
                                </Text>
                            </CardBody>
                        </Card>
                        <Card
                            as={Center}
                            width={{ base: "100%", md: "80%", xl: "40%" }}
                            height={{ base: "base", md: "200px" }}
                            className="homeSkills"
                        >
                            <Text as="strong" className="homeSkillName">Data Analyst</Text>
                            <CardBody className="homeSkillDetails" width="100%" textAlign="justify">
                                <Text noOfLines={[2, 4, 8]}>
                                    Worked on the projects executing the all stages of the process and created data-pipelines, and communicated the results using the tools like Numpy, Pandas, Plotly, Ggplot, NLTK, etc.
                                </Text>
                            </CardBody>
                        </Card>

                        <Card
                            as={Center}
                            width={{ base: "100%", md: "80%", xl: "40%" }}
                            height={{ base: "base", md: "200px" }}
                            className="homeSkills"
                        >
                            <Text as="strong" className="homeSkillName">Teamwork</Text>
                            <CardBody className="homeSkillDetails" width="100%" textAlign="justify">
                                <Text noOfLines={[2, 4, 8]}>
                                    Completed several projects as a team where I contributed during each stage. Experience as a scrum master as well as scribe using the tools like project management tools like Jira, Trello, etc.
                                </Text>
                            </CardBody>
                        </Card>
                        <Card
                            as={Center}
                            width={{ base: "100%", md: "80%", xl: "40%" }}
                            height={{ base: "base", md: "200px" }}
                            className="homeSkills"
                        >
                            <Text as="strong" className="homeSkillName">Problem Solving</Text>
                            <CardBody className="homeSkillDetails" width="100%" textAlign="justify">
                                <Text noOfLines={[2, 4, 8]}>
                                    Leverage critical thinking, analytical skills, logic and reasoning, in combination with tools like Google, Stackoverflow, chatGPT, and when required help of experienced colleauge to solve the problems.
                                </Text>
                            </CardBody>
                        </Card>
                    </Flex>
                </Stack>

            </Card >

        </Stack >
    )
}

export { Home }

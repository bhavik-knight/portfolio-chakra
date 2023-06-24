import "./Home.css"
import { List, UnorderedList, ListItem } from "@chakra-ui/react"
import { Heading, Text, Image, AspectRatio } from "@chakra-ui/react"
import { Stack, Container, Flex, Center } from "@chakra-ui/react"
import { Divider, Spacer, Button } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"


const textFontSize = {
    fontSize: { base: "0.9em", md: "0.95em", lg: "1em" }
}

function getHomeSkillsCard(skillName, details, color) {
    return (
        <Card
            as={Center}
            borderRight={`1px solid ${color}`}
            borderBottom={`1px solid ${color}`}
            _hover={{ boxShadow: `4px 4px 16px ${color}` }}
            width={{ base: "100%", md: "80%", xl: "40%" }}
            height={{ base: "100px", md: "200px" }}
            className="homeSkills"
        >
            <Text as="strong" className="homeSkillName">{skillName}</Text>
            <CardBody className="homeSkillDetails" textAlign="justify">
                <Text noOfLines={[4, 4, 8]}> {details} </Text>
            </CardBody>
        </Card>
    )
}

function Home() {
    return (
        <Stack p={{ base: 1, lg: 2 }} spacing={{ base: 1, lg: 2 }} w="100%">
            <Card as="section" p={{ base: 1, lg: 4 }} _hover={{ boxShadow: "4px 4px 16px" }}>
                <Text
                    px={8}
                    fontSize={{ base: "1.5em", md: "1.75em", lg: "2em" }}
                >
                    Hello, world!<br /> I am Bhavik Bhagat.
                </Text>

                <Divider mx="auto" width="95%" my={1} />

                <Stack px={8} py={2} textAlign="justify" {...textFontSize} spacing={2}>
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
                        This portfolio demonstrates my recently learned ReactJS skills, powered by ChakraUI.
                    </Text>
                </Stack>

            </Card>

            <Card as="section" p={4} _hover={{ boxShadow: "4px 4px 16px" }}>
                <Stack direction={{ base: "column", xl: "row" }}>
                    <Flex
                        width={{ base: "100%", xl: "40%" }}
                        boxSize={{ base: "base", md: "md", lg: "lg" }}
                        as={Container}
                        mx="auto"
                    >
                        <Image src="./logos/bhavik_sticker.png" objectFit="contain" alt="bhavik sticker" />
                    </Flex>

                    <Stack
                        width={{ base: "100%", xl: "60%" }}
                        flexDirection={{ base: "column", xl: "row" }}
                        justifyContent="space-around"
                        alignItems="center"
                        wrap="wrap"
                        p={0}
                        fontSize={{ base: "0.9em", md: "0.95em", lg: "1em" }}
                    >
                        {
                            getHomeSkillsCard(
                                "Full Stack Development",
                                "Worked on numerous Full Stack project using Django, Flask, PHP, HTML, CSS, JavaScript, jQuery, Bootstrap, ReactJS, ChakraUI, MySQL, Postgreq and hosted the projects on Heroku and AWS using Apache server.",
                                "red"
                            )
                        }
                        {
                            getHomeSkillsCard(
                                "Data Analyst",
                                "Worked on the projects executing ETL operations to create data-pipelines to do EDA, and communicated the results using the tools like Numpy, Pandas, Plotly, Ggplot, etc.",
                                "green"
                            )
                        }
                        {
                            getHomeSkillsCard(
                                "Teamwork",
                                "Completed several projects as a team where I contributed during each stage. Experience as a scrum master as well as scribe using the tools like project management tools like Jira, Trello, etc.",
                                "blue"
                            )
                        }
                        {
                            getHomeSkillsCard(
                                "Problem Solving",
                                "Leverage critical thinking, analytical skills, logic and reasoning, in combination with tools like Google, Stackoverflow, chatGPT, and when required help of experienced colleauge to solve the problems.",
                                "yellow"
                            )

                        }
                    </Stack>
                </Stack>
            </Card >
        </Stack >
    )
}

export { Home }

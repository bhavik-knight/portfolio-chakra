import "./Home.css"
import { List, UnorderedList, ListItem } from "@chakra-ui/react"
import { Heading, Text, Image, AspectRatio } from "@chakra-ui/react"
import { Stack, VStack, StackDivider, Container, Flex, Center } from "@chakra-ui/react"
import { Divider, Spacer, Button } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"
import { AboutMe } from "./AboutMe"


const textFontStyle = {
    fontSize: { base: "0.8em", md: "0.9em", lg: "1em" },
    textAlign: "justify",
    px: { base: 4, lg: 8 },
    py: 2
}

const headerFontStyle = {
    fontSize: { base: "md", md: "lg", lg: "xl" },
    mx: "auto",
}


function Home() {
    // for mobile screens
    const [isMobile] = useMediaQuery("(max-width: 992px)")

    return (
        <Stack p={{ base: 1, lg: 2 }} gap={{ base: 1, lg: 2 }} w="100%">

            {/* summary */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>

                <CardHeader mx="auto" my={1} py={1} w={{ base: "fit-content", lg: "100%" }}>
                    <Stack
                        direction={{ base: "column", lg: "row" }}
                        px={{ base: 0, lg: 8 }}
                        justify="space-between"
                    >
                        <VStack spacing={0} p={0} m={0}>
                            <Text className="hello" fontSize={{ base: "1.2em", md: "1.3em", lg: "1.5em" }}>
                                Hello, world!
                            </Text>
                            <Text className="hello" fontSize={{ base: "1.2em", md: "1.3em", lg: "1.5em" }}>
                                I am Bhavik.
                            </Text>
                        </VStack>

                        {isMobile && <StackDivider border="1px dotted" />}

                        <VStack>
                            {!isMobile && <Spacer />}
                            <Text
                                as={Flex}
                                fontSize={{ base: "1.2em", md: "1.3em", lg: "1.5em" }}
                            >
                                <span className="logoText">W</span>
                                <span className="logoText">e</span>
                                <span className="logoText">l</span>
                                <span className="logoText">c</span>
                                <span className="logoText">o</span>
                                <span className="logoText">m</span>
                                <span className="logoText">e</span>&nbsp;
                                <span className="logoText">t</span>
                                <span className="logoText">o</span>&nbsp;
                                <span className="logoText">m</span>
                                <span className="logoText">y</span>&nbsp;
                                <span className="logoText">P</span>
                                <span className="logoText">o</span>
                                <span className="logoText">r</span>
                                <span className="logoText">t</span>
                                <span className="logoText">f</span>
                                <span className="logoText">o</span>
                                <span className="logoText">l</span>
                                <span className="logoText">i</span>
                                <span className="logoText">o</span>&nbsp;
                                <span className="logoText">😇</span>

                                {/* Welcome to my Portfolio Website */}
                            </Text>
                        </VStack>
                    </Stack>
                </CardHeader>

                <Divider width="95%" mx="auto" my={1} />

                <CardBody>
                    <Stack as={List} spacing={2} {...textFontStyle}>
                        <ListItem>
                            I am an aspiring full-stack developer, actively looking for my first break into the programming industry.
                        </ListItem>
                        <ListItem>
                            I am open to freelancing work. If you have cool project ideas, let's connect, collaborate and build some cool web apps together.
                        </ListItem>
                        <ListItem>
                            I have a strong enthusiasm for staying up-to-date with the latest technologies, consistently expanding my skills through self-learning and leveraging MOOCs (Massive Open Online Courses).
                        </ListItem>
                        <ListItem>
                            Currently, I am learning promote-engineering to leverage chatGPT to enhance my coding experience.
                        </ListItem>
                    </Stack>
                </CardBody>

            </Card>


            {/* skills */}
            <Card as="section" p={4} _hover={{ boxShadow: "4px 4px 16px" }}>
                <Stack direction={{ base: "column", xl: "row" }}>
                    <Flex
                        width={{ base: "100%", xl: "40%" }}
                        boxSize={{ base: "base", md: "md", lg: "lg" }}
                        as={Container}
                        mx="auto"
                    >
                        <Image className="sticker" src="./logos/bhavik_sticker.png" objectFit="contain" alt="bhavik sticker" />
                    </Flex>

                    <Stack
                        width={{ base: "100%", xl: "60%" }}
                        flexDirection={{ base: "column", md: "row" }}
                        justifyContent="space-around"
                        alignItems="center"
                        flexWrap="wrap"
                        {...textFontStyle}
                        p={0}
                    >
                        {
                            getHomeSkillsCard(
                                "Full Stack Development",
                                "Worked on numerous Full Stack projects using Django, Flask, PHP, HTML, CSS, JavaScript, jQuery, Bootstrap, ReactJS, ChakraUI, MySQL, and PostgreSQL. Hosted the apps on Heroku, Netlify, and AWS.",
                                "red"
                            )
                        }
                        {
                            getHomeSkillsCard(
                                "Data Analyst",
                                "Worked on the projects executing ETL operations to create data pipelines to perform EDA. Communicated the results using the tools like Numpy, Pandas, Plotly, Ggplot, Tidyverse",
                                "green"
                            )
                        }
                        {
                            getHomeSkillsCard(
                                "Teamwork",
                                "Completed several projects as a team, where I contributed during each stage. Experience as a scrum master and scribe utilizing project management tools like Jira, Confluence, and Trello",
                                "blue"
                            )
                        }
                        {
                            getHomeSkillsCard(
                                "Problem Solving",
                                "Expert in problem-solving using critical thinking, analytical skills, logic, and reasoning, in combination with tools like Google, StackOverflow, and chatGPT",
                                "yellow"
                            )
                        }
                    </Stack>
                </Stack>
            </Card >

            <AboutMe />
        </Stack >
    )
}


function getHomeSkillsCard(skillName, details, color) {
    return (
        <Card
            as={Center}
            borderRight={`1px solid ${color}`}
            borderBottom={`1px solid ${color}`}
            _hover={{ boxShadow: `4px 4px 16px ${color}` }}
            width={{ base: "100%", md: "40%" }}
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

export { Home }

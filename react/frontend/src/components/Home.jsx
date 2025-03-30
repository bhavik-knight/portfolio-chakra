import "./Home.css";
import { AboutMe } from "./AboutMe";

import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { Text, Image } from "@chakra-ui/react";
import { Stack, VStack, StackDivider, Container, Flex, Center } from "@chakra-ui/react";
import { Divider, Spacer } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { GoDot, GoDotFill } from "react-icons/go";

const textFontStyle = {
    fontSize: { md: "0.8em", lg: "0.85em" },
    textAlign: "justify",
    px: { base: 4, lg: 8 },
    py: { base: 2, lg: 4 },
};

const headerFontStyle = {
    fontSize: { base: "md", md: "lg", lg: "xl" },
    mx: "auto",
};

function Home() {
    // for mobile screens
    const [isMobile] = useMediaQuery("(max-width: 992px)");

    return (
        <Stack
            gap={{ base: 2, lg: 4 }}
            w="100%"
            minH="90vh">
            {/* summary */}
            <Card
                as="section"
                _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader
                    mx="auto"
                    my={2}
                    py={1}
                    w={{ base: "fit-content", lg: "100%" }}>
                    <Stack
                        direction={{ base: "column", lg: "row" }}
                        px={{ base: 0, lg: 8 }}
                        justify="space-between">
                        <VStack
                            spacing={0}
                            p={0}
                            m={0}>
                            <Text
                                className="hello"
                                fontSize={{ base: "1.2em", md: "1.3em", lg: "1.5em" }}>
                                Hello, world!
                            </Text>
                            <Text
                                className="hello"
                                fontSize={{ base: "1.2em", md: "1.3em", lg: "1.5em" }}>
                                I am Bhavik.
                            </Text>
                        </VStack>

                        {isMobile && <StackDivider border="1px dotted" />}

                        <VStack>
                            {!isMobile && <Spacer />}
                            <Text
                                as={Flex}
                                fontSize={{ base: "1.2em", md: "1.3em", lg: "1.5em" }}>
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

                <Divider
                    width="95%"
                    mx="auto"
                    my={2}
                />

                <CardBody>
                    <Stack
                        as={List}
                        spacing={4}
                        {...textFontStyle}>
                        <ListItem color="whiteAlpha.800">
                            <ListIcon as={GoDot} />
                            Junior Software Developer with over a year of experience, driven by a strong passion for
                            emerging technologies and continuous learning through self-study, MOOCs, and training
                            programs.
                        </ListItem>
                        <ListItem color="whiteAlpha.700">
                            <ListIcon as={GoDotFill} />
                            Currently seeking a full-time role in software development but am also open to freelancing
                            opportunities and collaborative web app projects to expand my tech-stack and technical skill
                            set.
                        </ListItem>
                        <ListItem color="whiteAlpha.800">
                            <ListIcon as={GoDot} />
                            Earned multiple online certifications from prestigious institutions like Harvard, MIT, and
                            Microsoft, Google, through platforms like edX, courera, etc.
                        </ListItem>
                        <ListItem color="whiteAlpha.700">
                            <ListIcon as={GoDotFill} />
                            Over the past couple of years, I have gained hands-on experience in various aspects of the
                            Software Development Life Cycle (SDLC), taking on multiple roles as needed within my team.
                            This experience has helped me develop into a reliable developer who quickly learns, adapts
                            to changes, and delivers quality solutions on time.
                        </ListItem>
                        <ListItem color="whiteAlpha.800">
                            <ListIcon as={GoDot} />
                            My immediate goal is to advance my career by mastering in-demand technologies and broadening
                            my knowledge of computer science. To achieve this, I am eager to pursue a graduate program,
                            which I believe will deepen my expertise in a specialized domain and accelerate my career
                            growth.
                        </ListItem>
                        <ListItem color="whiteAlpha.700">
                            <ListIcon as={GoDotFill} />
                            In the next few years, I aspire to become a Machine Learning Engineer, working at an
                            organization where I can contribute to projects that help create safer communities and a
                            better society.
                        </ListItem>
                    </Stack>
                </CardBody>
            </Card>

            {/* skills */}
            <Card
                as="section"
                p={4}
                _hover={{ boxShadow: "4px 4px 16px" }}>
                <Stack direction={{ base: "column", xl: "row" }}>
                    <Flex
                        width={{ base: "100%", xl: "40%" }}
                        boxSize={{ base: "base", md: "md", lg: "lg" }}
                        as={Container}
                        mx="auto">
                        <Image
                            className="sticker"
                            src="./images/bhavik_sticker.png"
                            objectFit="contain"
                            alt="bhavik sticker"
                        />
                    </Flex>

                    <Stack
                        width={{ base: "100%", xl: "60%" }}
                        flexDirection={{ base: "column", md: "row" }}
                        justifyContent="space-around"
                        alignItems="center"
                        flexWrap="wrap"
                        p={2}>
                        {getHomeSkillsCard(
                            "Full Stack Development",
                            "Worked on numerous Full Stack projects using Django, Flask, PHP, HTML, CSS, JavaScript, jQuery, Bootstrap, ReactJS, ChakraUI, MySQL, and PostgreSQL. Hosted the apps on Heroku, Netlify, and AWS.",
                            "red"
                        )}
                        {getHomeSkillsCard(
                            "Data Analyst",
                            "Worked on the projects executing ETL operations to create data pipelines to perform EDA. Communicated the results using the tools like Numpy, Pandas, Plotly, Ggplot, Tidyverse",
                            "green"
                        )}
                        {getHomeSkillsCard(
                            "Teamwork",
                            "Completed several projects as a team, where I contributed during each stage. Experience as a scrum master and scribe utilizing project management tools like Jira, Confluence, and Trello",
                            "blue"
                        )}
                        {getHomeSkillsCard(
                            "Problem Solving",
                            "Expert in problem-solving using critical thinking, analytical skills, logic, and reasoning, in combination with tools like Google, StackOverflow, and chatGPT",
                            "yellow"
                        )}
                    </Stack>
                </Stack>
            </Card>

            {/* <AboutMe /> */}
        </Stack>
    );
}

function getHomeSkillsCard(skillName, details, color) {
    return (
        <Card
            as={Center}
            borderRight={`1px solid ${color}`}
            borderBottom={`1px solid ${color}`}
            _hover={{ boxShadow: `4px 4px 16px ${color}` }}
            width={{ base: "100%", md: "40%" }}
            height={{ base: "100px", md: "220px" }}
            className="homeSkills">
            <Text
                as="strong"
                className="homeSkillName">
                {skillName}
            </Text>
            <CardBody
                className="homeSkillDetails"
                textAlign="justify"
                {...textFontStyle}>
                <Text noOfLines={[4, 4, 8]}> {details} </Text>
            </CardBody>
        </Card>
    );
}

export { Home };

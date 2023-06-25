import "./Home.css"
import { List, UnorderedList, ListItem } from "@chakra-ui/react"
import { Heading, Text, Image, AspectRatio } from "@chakra-ui/react"
import { Stack, StackDivider, Container, Flex, Center } from "@chakra-ui/react"
import { Divider, Spacer, Button } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"


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
        <Stack p={{ base: 1, lg: 2 }} spacing={{ base: 1, lg: 2 }} w="100%">

            {/* summary */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>

                <CardHeader mx="auto" my={1} py={1} w={{ base: "fit-content", lg: "100%" }}>
                    <Stack
                        direction={{ base: "column", lg: "row" }}
                        px={{ base: 0, lg: 8 }}
                        justify="space-between"
                    >
                        <Text fontSize={{ base: "1.5em", md: "1.75em", lg: "2em" }}>
                            Hello, world!<br />I am Bhavik Bhagat.
                        </Text>

                        {isMobile && <StackDivider border="1px dotted" />}

                        <Text fontSize={{ base: "1.05em", md: "1.5em", lg: "2em" }}>
                            {!isMobile && <br />}
                            Welcome to my portfolio website!
                        </Text>
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
                            I love technologies to stay up-to-date with the trends. I keep upskilling myself through self-learning and help of the MOOCs.
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
                        <Image src="./logos/bhavik_sticker.png" objectFit="contain" alt="bhavik sticker" />
                    </Flex>

                    <Stack
                        width={{ base: "100%", xl: "60%" }}
                        flexDirection={{ base: "column", xl: "row" }}
                        justifyContent="space-around"
                        alignItems="center"
                        wrap="wrap"
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

            {/* about me */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}
            // display={{ base: "none", md: "flex" }}
            >
                <CardHeader as={Heading} {...headerFontStyle}>
                    About Me
                </CardHeader>

                <Divider width="95%" mx="auto" my={1} />

                <CardBody as={Flex} wrap="wrap" justifyContent="space-evenly">
                    <Stack as={List} spacing={2} {...textFontStyle}>
                        <ListItem>
                            I am a Pythonist, passionate about Artificial Intelligence having a thorough foundation in Mathematics.
                        </ListItem>
                        <ListItem>
                            Becoming a Software Engineer had always been my childhood dream, even though my undergraduate education was in a different field. It was during the second semester of my Bachelor's degree in Mechanical Engineering that I discovered my love for programming and developed a deep passion for Computer Science. This revelation occurred when I took a course on Computer Programming using C-language.
                        </ListItem>
                        <ListItem>
                            After successfully completing my Bachelor's degree in Mechanical Engineering, I began working as an ad-hoc lecturer at the College. However, my passion for Computer Science continued to thrive, and I embarked on a journey to build a career that would align with my long-standing dream.
                        </ListItem>
                        <ListItem>
                            In 2015, I embarked on an unconventional journey into the realm of Computer Science, making a pivotal decision to redirect my career trajectory and pursue my long-held aspirations. I am deeply indebted to Dr. David J. Malan, a professor at Harvard, whose passionate teaching of the CS50 course ignited a profound transformation in my life.
                        </ListItem>
                        <ListItem>
                            During my tenure as a full-time technician, I dedicated myself to earning numerous online certifications from renowned institutions such as Harvard, MIT, and Microsoft through platforms like Edx, Coursera, and MIT-OCW. These certifications, focusing on the fundamentals of programming, enabled me to lay a solid groundwork in the field and propel my career aspirations forward.
                        </ListItem>
                    </Stack>
                </CardBody>
            </Card>
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

export { Home }

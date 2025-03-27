import "./Projects.css";
import { ProjectCard } from "./ProjectCard";
import { getData } from "../data/getData";

import { nanoid } from "nanoid";
import { Divider, List, ListItem, Spinner } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Flex, Stack, Center } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Tabs, Tab, TabPanels, TabPanel, TabList } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const textFontStyle = {
    fontSize: { base: "0.9em", md: "0.95em", lg: "1em" },
    textAlign: "justify",
    px: { base: 4, lg: 8 },
    py: 2,
};

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // fetch all projects data from the firebase db
    useEffect(() => {
        setLoading(true);
        getData("projects")
            .then((data) => setProjects(data))
            .catch((error) => console.log(error.message));
    }, []);

    useEffect(() => {
        setLoading(projects.length === 0);
    }, [projects]);

    // domains
    const projectTypes = ["web", "data", "ai"];

    // to keep track of active tab
    const [tabIndex, setTabIndex] = useState(0);

    return loading ? (
        <Stack
            gap={{ base: 2, lg: 4 }}
            as={Center}
            minH="90vh"
            w="100%">
            <Spinner size="xl" />
        </Stack>
    ) : (
        <Stack
            gap={{ base: 2, lg: 4 }}
            w="100%"
            minH="90vh">
            {/* some text */}
            <Card
                as="section"
                _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader
                    as={Heading}
                    mx="auto"
                    my={2}
                    py={2}>
                    Projects
                </CardHeader>

                <Divider
                    width="95%"
                    mx="auto"
                    my={2}
                />

                <CardBody>
                    <Stack
                        as={List}
                        spacing={2}
                        {...textFontStyle}>
                        <ListItem>
                            I demonstrated diverse programming skills through numerous projects in the fields of Web
                            Development, Data Analytics, Data Science, and Machine Learning.
                        </ListItem>
                        <ListItem>
                            I developed most of the projects shared here independently. However, I also actively
                            contributed in many group projects. Some of them are displayed here that demonstrats my
                            skills in specific domain and application of understanding of the concepts using various
                            framework/libraries.
                        </ListItem>
                    </Stack>
                </CardBody>
            </Card>

            <Card
                as="section"
                _hover={{ boxShadow: "4px 4px 16px" }}>
                {/* tabs for different types of project */}
                <Tabs
                    isFitted
                    isLazy
                    p={2}
                    my={2}
                    variant="enclosed"
                    size={{ base: "base", lg: "md" }}
                    orientation={{ base: "vertical", lg: "horizontal" }}
                    onChange={(index) => setTabIndex(index)}>
                    {/* tab titles */}
                    <TabList
                        className="tabLabel"
                        width={{ base: "100%", lg: "96%" }}
                        mx="auto"
                        fontSize={{ base: "0.9em", md: "0.95em", lg: "1em" }}>
                        <Tab
                            _selected={{ bg: "red", color: "black" }}
                            _hover={{ border: `1px solid red` }}>
                            Web Dev
                        </Tab>
                        <Tab
                            _selected={{ bg: "green", color: "white" }}
                            _hover={{ border: `1px solid green` }}>
                            Data
                        </Tab>
                        <Tab
                            _selected={{ bg: "blue", color: "white" }}
                            _hover={{ border: `1px solid blue` }}>
                            ML/AI
                        </Tab>
                        {/* <Tab _selected={{ bg: "yellow", color: "black" }} _hover={{ border: `1px solid yellow` }}>Game Dev</Tab> */}
                    </TabList>

                    {/* tab content */}
                    <TabPanels>
                        {projectTypes.map((type) => (
                            <TabPanel
                                as={Flex}
                                key={nanoid()}
                                justifyContent="space-evenly"
                                flexWrap="wrap"
                                px={0}
                                gap={1}>
                                {projects
                                    .filter((p) => p.type === type)
                                    .map((p) => (
                                        <ProjectCard
                                            key={nanoid()}
                                            project={p}
                                        />
                                    ))}
                            </TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>
            </Card>
        </Stack>
    );
}

export { Projects };

// reference: import data from urls
// https://medium.com/frontendweb/how-to-read-local-json-file-in-react-js-564125235fc7

{
    /* json tic-tac-toe removed for now
        {
            "id": 4,
            "title": "Tic-tac-toe",
            "description": "My first mini-project in the web development area as a backend developer where I used flask microframework. I received constructive critisim on my coding style by Harvard's computer science professor Dr. David Malan in CS50's code-review stream.",
            "type": "web",
            "source": "https://github.com/bhavik-knight/cs50beyond/tree/master/tictactoe",
            "uri": "https://www.youtube.com/watch?v=5aWjlEqwJs4&t=1829s",
            "displayImg": "projects/hck_dns_sfha/1_landing_page.png",
            "technologies": [
                "python",
                "flask",
                "html",
                "css",
                "git",
                "windows"
            ],
            "details": [
                "First experience of utilizing any framework for web-development. I learned about flask micro-framework by reading the official documentation.",
                "Implemented backend using flask, used stackoverflow/goggle to solve the issues during the developement process",
                "First time using git for version control and hosted project on the github",
                "Received the feedback on my project from my idol Dr. David Malan; learned about various aspect i.e., the best coding practicies,  use of MVC in the web developement, etc."
            ],
            "projectImgs": ""
        },

*/
}

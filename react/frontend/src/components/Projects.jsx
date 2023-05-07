import { projects } from "../data/portfolio_db.json"
import { useState } from "react"
import {
    Tooltip,
    Center,
    Box,
    Flex,
    Button,
    ButtonGroup,
    Container,
    Img,
    Heading,
    Text,
    Divider,
    List,
    ListItem
} from "@chakra-ui/react"

import { Wrap, WrapItem } from "@chakra-ui/react"
import { Stack, VStack, HStack, } from "@chakra-ui/react"
import { Tabs, Tab, TabPanels, TabPanel, TabList, } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { nanoid } from "nanoid"
import { icons } from "./Icons"

function Projects() {

    const projectTypes = ["web", "data", "ml", "game"]

    function getProjectCard(projectList) {
        return projectList.map(project =>
            <>
                <Card key={nanoid()} bg="none" border="2px solid cyan" maxH="500px" justifyContent="center">
                    <Flex m={0} p={0} bg="">
                        <Flex mx={1} p={1} bg="gray" height="100%" maxW="30%">
                            <Img src={project.displayImg} className="projectDisplayImg" />
                        </Flex>

                        <Stack>
                            <CardBody>
                                <Heading my={1} px="auto" textDecoration="underline">{project.title}</Heading>
                                <Text my={2}>
                                    {project.description}
                                </Text>
                                <Wrap my={2}>
                                    {
                                        project.technologies.map(tech => {
                                            return (
                                                <WrapItem
                                                    key={nanoid()}
                                                    spacing={2}
                                                    // border="2px solid white"
                                                    borderRadius="8px"
                                                >
                                                    {icons[tech]}
                                                </WrapItem>
                                            )
                                        })
                                    }
                                </Wrap>
                                <Flex mt={2} justifyContent="center">
                                    <Button width="150px" bg="orange" color="black">Github</Button>
                                    <Button width="150px" bg="white" color="blue">Details</Button>
                                    <Button width="150px" bg="green" color="white">Link</Button>
                                </Flex>
                            </CardBody>
                        </Stack>
                    </Flex >
                </Card >

                <Card border="2px solid white" mt={4} p={2} bg="none" size={{ base: "sm", md: "lg" }}>
                    <Stack direction={{ base: "column", md: "row" }} justifyContent="center">
                        <Flex maxW={{ base: "100%", md: "25%" }}>
                            <Img src={project.displayImg} className="projectDisplayImg" />
                        </Flex>
                        <Flex>
                            <Stack>
                                <CardHeader px={4} py={0}>
                                    <Heading textDecoration="underline">
                                        {project.title}
                                    </Heading>
                                </CardHeader> p={0}
                                <CardBody p={0}>
                                    <Text px={4}>
                                        {project.description}
                                    </Text>
                                    <Divider width="95%" px={2} mx="auto" my={2} />
                                    <Flex justifyContent="center">
                                        <Wrap my={2} spacing={4}>
                                            {
                                                project.technologies.map(tech => {
                                                    return (
                                                        <Tooltip label={tech} aria-label={tech} hasArrow>
                                                            <WrapItem
                                                                key={nanoid()}
                                                                className="projectSkills"
                                                                borderRadius="8px"
                                                            >
                                                                {icons[tech]}
                                                            </WrapItem>
                                                        </Tooltip>
                                                    )
                                                })
                                            }
                                        </Wrap>

                                    </Flex>
                                </CardBody>
                                <CardFooter p={0} justifyContent="center">
                                    <Wrap mt={2}>
                                        <Button width="150px" bg="orange" color="black">Github</Button>
                                        <Button width="150px" bg="white" color="blue">Details</Button>
                                        <Button width="150px" bg="green" color="white">Link</Button>
                                    </Wrap>
                                </CardFooter>
                            </Stack>
                        </Flex>
                    </Stack>

                </Card >
            </>
        )
    }

    // to keep track of active tab
    const [tabIndex, setTabIndex] = useState(0)

    return (
        <VStack m={2} p={2}>
            {/* some text */}
            <List spacing={2} m={2} p={2}>
                <ListItem as={Text}>
                    Checkout the projects I have developed in differnet domains.
                </ListItem>

                <ListItem as={Text}>
                    While most of the projects are developed as an independenet developer; some projects are group-projects where I demonstrated adaquet skills in the core domain.
                </ListItem>
            </List>

            {/* horzontal division */}
            <Divider px={2} my={4} mx="auto" maxWidth="95%" />

            {/* tabs for different types of project */}
            <Tabs isFitted isLazy variant="enclosed" pt={2} onChange={(index) => setTabIndex(index)}>
                {/* tab titles */}
                <TabList className="tabLabel">
                    <Tab _selected={{ bg: "red", color: "black" }}>Web Dev</Tab>
                    <Tab _selected={{ bg: "green", color: "white" }}>Data</Tab>
                    <Tab _selected={{ bg: "blue", color: "white" }}>ML / AI</Tab>
                    <Tab _selected={{ bg: "yellow", color: "black" }}>Game Dev</Tab>
                </TabList>

                {/* tab content */}
                <TabPanels>
                    {
                        projectTypes.map(type =>
                            <TabPanel key={nanoid()}>
                                {getProjectCard(projects.filter(p => p["type"] === type))}
                            </TabPanel>
                        )
                    }
                </TabPanels>
            </Tabs>
        </VStack>
    )
}

export { Projects }



// reference: import data from urls
// https://medium.com/frontendweb/how-to-read-local-json-file-in-react-js-564125235fc7

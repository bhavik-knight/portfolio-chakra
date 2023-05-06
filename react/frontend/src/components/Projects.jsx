import { projects } from "../data/portfolio_db.json"
import { useState } from "react"
import {
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
            <Card key={nanoid()} bg="none" border="2px solid cyan" maxH="500px" justifyContent="center">
                <HStack p={0} bg="orange.800">
                    <Flex p={2} bg="gray" width="40%" maxW="50%">
                        <Img src={project.displayImg} className="projectDisplayImg" />
                    </Flex>

                    <Divider orientation="vertical" />

                    <Stack>
                        <CardHeader>
                            {project.title}
                        </CardHeader>
                        <CardBody>
                            <Text>
                                {project.description}
                            </Text>
                            <Wrap>
                                {
                                    project.technologies.map(tech => {
                                        return (
                                            <WrapItem key={nanoid()} spacing={2} border="2px solid white" borderRadius="8px">
                                                {icons[tech]}
                                            </WrapItem>
                                        )
                                    })
                                }
                            </Wrap>
                        </CardBody>
                        <CardFooter>
                            <Button variant="outline" width="150px">Github</Button>
                            <Button variant="outline" width="150px">Details</Button>
                            <Button variant="outline" width="150px">Link</Button>
                        </CardFooter>
                    </Stack>
                </HStack >
            </Card >
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

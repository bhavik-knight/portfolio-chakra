import { projects } from "../data/portfolio_db.json"
import { useState } from "react"
import { Divider, UnorderedList, List, ListItem } from "@chakra-ui/react"
import { Heading, Text } from "@chakra-ui/react"
import { Flex, Stack, VStack, HStack, } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Tabs, Tab, TabPanels, TabPanel, TabList, } from "@chakra-ui/react"
import { nanoid } from "nanoid"
import { ProjectCard } from "./ProjectCard"

function Projects() {

    const projectTypes = ["web", "data", "ai", "game"]

    // to keep track of active tab
    const [tabIndex, setTabIndex] = useState(0)

    return (
        <Stack m={2} p={2} bg="lightblue" width="100%">

            {/* some text */}
            <Card as="section">
                <CardHeader as={Heading} mx="auto" my={0} py={1}>
                    Projects
                </CardHeader>

                <Divider className="divider" width="95%" mx="auto" my={1} />

                <CardBody as={UnorderedList}>
                    <ListItem>
                        Checkout the projects I have developed in differnet domains.
                    </ListItem>

                    <ListItem>
                        While most of the projects are developed as an independenet developer; some projects are group-projects where I demonstrated adaquet skills in the core domain.
                    </ListItem>
                </CardBody>
            </Card>


            <Card as="section">
                {/* tabs for different types of project */}
                <Tabs
                    isFitted
                    isLazy
                    pt={2}
                    px={2}
                    variant="enclosed"
                    onChange={(index) => setTabIndex(index)}
                >
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
                                <TabPanel as={Flex} key={nanoid()} justifyContent="space-evenly" flexWrap="wrap" px={2}>
                                    {
                                        projects.filter(p => p.type === type).map(p =>
                                            <ProjectCard key={nanoid()} project={p} />
                                        )
                                    }
                                </TabPanel>
                            )
                        }
                    </TabPanels>
                </Tabs>
            </Card>
        </Stack>
    )
}

export { Projects }



// reference: import data from urls
// https://medium.com/frontendweb/how-to-read-local-json-file-in-react-js-564125235fc7

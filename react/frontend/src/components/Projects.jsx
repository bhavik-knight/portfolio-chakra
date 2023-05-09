import { projects } from "../data/portfolio_db.json"
import { useState } from "react"
import { Text, Divider, List, ListItem } from "@chakra-ui/react"
import { Flex, Stack, VStack, HStack, } from "@chakra-ui/react"
import { Tabs, Tab, TabPanels, TabPanel, TabList, } from "@chakra-ui/react"
import { nanoid } from "nanoid"
import { ProjectCard } from "./ProjectCard"

function Projects() {

    const projectTypes = ["web", "data", "ai", "game"]

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
            <Tabs
                isFitted
                isLazy
                pt={2}
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
        </VStack>
    )
}

export { Projects }



// reference: import data from urls
// https://medium.com/frontendweb/how-to-read-local-json-file-in-react-js-564125235fc7

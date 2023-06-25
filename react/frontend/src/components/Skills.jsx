import { skills } from "../data/portfolio_db.json"
import { nanoid } from "nanoid"
import { Heading, Text, UnorderedList } from "@chakra-ui/react"
import { Box, Flex, Center, Container } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"
import { Button, IconButton, Icon, Tag } from "@chakra-ui/react"
import { Stack, VStack, HStack } from "@chakra-ui/react"
import { Divider, Spacer } from "@chakra-ui/react"
import { List, ListItem } from "@chakra-ui/react"
import { ProgrammingParadigms } from "./ProgrammingParadigms"
import { useState, useEffect } from "react"
import { ResponsiveIcons } from "./ResponsiveIcons"


function CreateBadge({ skill }) {
    return (
        <VStack
            as={Center}
            p={2}
            mx="auto"
            w={{ base: "32px", md: "64px", lg: "90px" }}
            _hover={{ boxShadow: "1px 1px 8px" }}
        >
            {ResponsiveIcons[skill]?.icon}
            <Text fontSize="sm" textAlign="center">
                {ResponsiveIcons[skill]?.name}
            </Text>
        </VStack>
    )
}

function Skills() {
    const [languages, setLanguages] = useState([])
    const [frameworks, setFrameworks] = useState([])
    const [technologies, setTechnologies] = useState([])
    const [os, setOs] = useState([])
    const [management, setManagement] = useState([])
    const [apps, setApps] = useState([])
    const [databases, setDatabases] = useState([])
    const [cloud, setCloud] = useState([])

    useEffect(() => {
        skills.map(skill => {
            skill.name === "languages" && setLanguages(skill.data)
            skill.name === "frameworks" && setFrameworks(skill.data)
            skill.name === "technologies" && setTechnologies(skill.data)
            skill.name === "os" && setOs(skill.data)
            skill.name === "management" && setManagement(skill.data)
            skill.name === "apps" && setApps(skill.data)
            skill.name === "cloud" && setCloud(skill.data)
            skill.name === "databases" && setDatabases(skill.data)
        })
    }, [languages, frameworks, technologies, os, management, apps])


    return (
        <Stack p={{ base: 1, lg: 2 }} spacing={{ base: 1, lg: 2 }} w="100%">
            {/* introduction */}
            <Card as="section" p={4} _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" py={2}>
                    Skills
                </CardHeader>
                <Divider className="divider" width="95%" mx="auto" my={1} />
                <CardBody textAlign="justify">
                    <List ps={4}>
                        <ListItem>
                            I am a Pythonist who is passionate about Artificial Intelligence, having a thorough foundation in Mathematics.
                        </ListItem>
                        <ListItem>
                            In a full-stack environment, my dominant skills are in the backend development, but I can also make good UI/UX as a frontend developer.
                        </ListItem>
                        <ListItem>
                            I can setup docker containers and host the website using PaaS like Heroku, Netlify or configure IaaS like AWS - EC2.
                        </ListItem>
                    </List>
                </CardBody>
                {/* <Divider className="divider" width="95%" mx="auto" my={1} /> */}
                <CardFooter my={0} as={Stack} display="none">
                    <Flex justifyContent={{ base: "center", lg: "space-evenly" }} direction={{ base: "column", lg: "row" }}>
                        <Button
                            variant="ghost"
                            onClick={() => setWebBtn.toggle()}
                        >Web Development</Button>
                        <Button
                            variant="ghost"
                            onClick={() => setDataBtn.toggle()}
                        >Data Analytics</Button>
                    </Flex>
                </CardFooter>
            </Card>

            {/* programming languages */}
            <Card as="section" p={4} _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" py={2} fontSize={{ base: "md", lg: "2xl" }}>
                    Programming Languages
                </CardHeader>
                <CardBody as={Flex} wrap="wrap" gap={2} justifyContent="space-evenly">
                    {
                        languages.map(l => <CreateBadge key={nanoid()} skill={l} />)
                    }
                </CardBody>
            </Card>

            {/* frameworks/libraries */}
            <Card as="section" p={4} _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" py={2} fontSize={{ base: "md", lg: "2xl" }}>
                    Frameworks | Libraries
                </CardHeader>
                <CardBody as={Flex} wrap="wrap" gap={2} justifyContent="space-evenly">
                    {
                        frameworks.map(fw => <CreateBadge key={nanoid()} skill={fw} />)
                    }
                </CardBody>
            </Card>

            {/* Technologies, Cloud, DB, and Host */}
            <Card as="section" p={4} _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" py={2} fontSize={{ base: "md", lg: "2xl" }}>
                    Technologies | Databases | Cloud | Hosting
                </CardHeader>
                <CardBody as={Flex} wrap="wrap" gap={2} justifyContent="space-evenly">
                    {
                        technologies.map(tech => <CreateBadge key={nanoid()} skill={tech} />)
                    }
                    {
                        cloud.map(c => <CreateBadge key={nanoid()} skill={c} />)
                    }
                    {
                        databases.map(d => <CreateBadge key={nanoid()} skill={d} />)
                    }
                </CardBody>
            </Card>

            {/* applications, os */}
            <Card as="section" p={4} _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" py={2} fontSize={{ base: "md", lg: "2xl" }}>
                    Operating Systems | Applications
                </CardHeader>
                <CardBody as={Flex} wrap="wrap" gap={2} justifyContent="space-evenly">
                    {
                        os.map(o => <CreateBadge key={nanoid()} skill={o} />)
                    }
                    {
                        apps.map(app => <CreateBadge key={nanoid()} skill={app} />)
                    }
                </CardBody>
            </Card>

            {/* project management */}
            <Card as="section" p={4} _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" py={2} fontSize={{ base: "md", lg: "2xl" }}>
                    Project Management
                </CardHeader>
                <CardBody as={Flex} wrap="wrap" gap={2} justifyContent="space-evenly">
                    {
                        management.map(mgmt => <CreateBadge key={nanoid()} skill={mgmt} />)
                    }
                </CardBody>
            </Card>

            {/* programming paradigms */}
            {/* <ProgrammingParadigms /> */}
        </Stack >
    )
}

export { Skills }

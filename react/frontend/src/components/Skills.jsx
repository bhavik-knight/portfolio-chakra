import { skills } from "../data/portfolio_db.json"
import { nanoid } from "nanoid"
import { Heading, Text, UnorderedList } from "@chakra-ui/react"
import { Box, Flex, Center, Container } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"
import { Button, IconButton, Icon, Tag } from "@chakra-ui/react"
import { Stack, VStack, HStack } from "@chakra-ui/react"
import { Divider, Spacer } from "@chakra-ui/react"
import { List, ListItem, ListIcon } from "@chakra-ui/react"
import { ProgrammingParadigms } from "./ProgrammingParadigms"
import { useState, useEffect } from "react"
import { ResponsiveIcons } from "./ResponsiveIcons"
import { CheckIcon } from "@chakra-ui/icons"


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
        <Stack p={{ base: 0, lg: 2 }} spacing={{ base: 1, lg: 2 }} w="100%">
            {/* introduction */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" my={1} py={1}>
                    Skills
                </CardHeader>

                <Divider width="95%" mx="auto" my={1} />

                <CardBody textAlign="justify">
                    <Stack as={List} spacing={2} {...textFontStyle}>
                        <ListItem>
                            {/* <ListIcon as={CheckIcon} /> */}
                            In a full-stack environment, my dominant skills are in the backend development, but I can also make good UI/UX as a front-end developer.
                        </ListItem>
                        <ListItem>
                            {/* <ListIcon as={CheckIcon} /> */}
                            I possess practical knowledge of AWS and GCP, including the ability to configure Infrastructure as a Service (IaaS) offerings like AWS EC2 or GCP GCE.

                        </ListItem>
                        <ListItem>
                            {/* <ListIcon as={CheckIcon} /> */}
                            I am adept at establishing connections between these instances and databases hosted on AWS RDS or GCP Firestore.
                        </ListItem>
                        <ListItem>
                            {/* <ListIcon as={CheckIcon} /> */}
                            I am proficient in setting up Docker containers and deploying web applications using Platform as a Service (PaaS) providers such as Heroku or Netlify.
                        </ListItem>
                        {/* <ListItem>
                            <ListIcon as={CheckIcon} />
                            I have showcased my robust analytical skills and diverse programming skills through numerous projects in the fields of Data Analytics, Data Science, and Machine Learning.
                        </ListItem> */}
                    </Stack>
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
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} {...headerFontStyle}>
                    Programming Languages
                </CardHeader>

                <Divider width="95%" mx="auto" my={1} />

                <CardBody as={Flex} wrap="wrap" justifyContent="space-evenly">
                    {
                        languages.map(l => <CreateBadge key={nanoid()} skill={l} />)
                    }
                </CardBody>
            </Card>

            {/* frameworks/libraries */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} {...headerFontStyle}>
                    Frameworks | Libraries
                </CardHeader>

                <Divider width="95%" mx="auto" my={1} />

                <CardBody as={Flex} wrap="wrap" justifyContent="space-evenly">
                    {
                        frameworks.map(fw => <CreateBadge key={nanoid()} skill={fw} />)
                    }
                </CardBody>
            </Card>

            {/* Technologies, Cloud, DB, and Host */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} {...headerFontStyle}>
                    Technologies | Databases | Cloud | Hosting
                </CardHeader>

                <Divider width="95%" mx="auto" my={1} />

                <CardBody as={Flex} wrap="wrap" justifyContent="space-evenly">
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
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} {...headerFontStyle}>
                    Operating Systems | Applications
                </CardHeader>

                <Divider width="95%" mx="auto" my={1} />

                <CardBody as={Flex} wrap="wrap" justifyContent="space-evenly">
                    {
                        os.map(o => <CreateBadge key={nanoid()} skill={o} />)
                    }
                    {
                        apps.map(app => <CreateBadge key={nanoid()} skill={app} />)
                    }
                </CardBody>
            </Card>

            {/* project management */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} {...headerFontStyle}>
                    Project Management
                </CardHeader>

                <Divider width="95%" mx="auto" my={1} />

                <CardBody as={Flex} wrap="wrap" justifyContent="space-evenly">
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


function CreateBadge({ skill }) {
    return (
        <VStack
            as={Center}
            p={2}
            mx="auto"
            w={{ base: "fit-content", lg: "90px" }}
            _hover={{ boxShadow: "1px 1px 8px" }}
        >
            {ResponsiveIcons[skill]?.icon}
            <Text fontSize="sm" textAlign="center">
                {ResponsiveIcons[skill]?.name}
            </Text>
        </VStack>
    )
}

export { Skills }

import { nanoid } from "nanoid"
import { useState, useEffect } from "react"
import { useBoolean } from "@chakra-ui/react"
import { Heading, Text, UnorderedList } from "@chakra-ui/react"
import { Flex, Container } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"
import { Button, Tag } from "@chakra-ui/react"
import { Stack, VStack, HStack } from "@chakra-ui/react"
import { Divider, Spacer } from "@chakra-ui/react"
import { List, ListItem } from "@chakra-ui/react"
import { icons } from "./Icons"
import { skills } from "../data/portfolio_db.json"

function Skills() {
    // const web = ["python", "javascript", "html", "css", "jquery", "php", "sql", "reactjs", "chakraui", "materialui", "boostrap", "django", "flask", "postgresql", "mysql", "sqlite", "heroku", "netlify"]

    // const data = ["python", "r", "sql", "numpy", "pandas", "nltk", "scikit-learn", "matplotlib", "seaborn", "plotly", "beautifulsoup"]

    // const [webBtn, setWebBtn] = useBoolean(false)
    // const [dataBtn, setDataBtn] = useBoolean(false)

    // const [langs, setLangs] = useState(skills.languages)
    // const [frameWorks, setFrameWorks] = useState(skills.frameworks)

    // useEffect(() => {
    //     webBtn && setLangs(skills.languages.filter(l => web.includes(l.toLowerCase()))) && setFrameWorks(skills.frameworks.filter(fw => web.includes(fw.toLowerCase())))

    //     dataBtn && setLangs(skills.langs.filter(l => data.includes(l.toLowerCase()))) && setFrameWorks(skills.frameworks.filter(fw => data.includes(fw.toLowerCase())))

    //     console.log(`wb ${webBtn}: ${langs}, ${frameWorks}`)
    //     console.log(`data ${dataBtn}: ${langs}, ${frameWorks}`)

    // }, [webBtn, dataBtn])

    return (
        <Stack
            p={2}
            width="100%"
        // m={2}
        // bg="lightblue"
        >
            {/* introduction */}
            <Card as="section" boxShadow="2px 2px 4px">
                <CardHeader as={Heading} mx="auto" my={0} py={1}>
                    Skills
                </CardHeader>
                <Divider className="divider" width="95%" mx="auto" my={1} />
                <CardBody textAlign="justify">
                    <List ps={4}>
                        <ListItem>
                            I am a Pythonist who is passionate about Artificial Intelligence, having a thorough foundation in Mathematics.
                        </ListItem>
                        <ListItem>My dominant skills are in the following two domains of Computer Science.
                        </ListItem>
                    </List>
                </CardBody>
                <Divider className="divider" width="95%" mx="auto" my={1} />
                <CardFooter my={0} as={Stack}>
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
            <Card as="section" boxShadow="2px 2px 4px">
                <CardHeader as={Heading} mx="auto" my={0} py={1} fontSize={{ base: "md", lg: "2xl" }}>
                    Programming Languages
                </CardHeader>
                <CardBody as={Flex} wrap="wrap" gap={2} justifyContent="space-evenly">
                    {
                        skills.languages.map(l => {
                            return (
                                <Tag key={nanoid()}>{l}</Tag>
                            )
                        })
                    }
                </CardBody>
            </Card>

            {/* frameworks/libraries */}
            <Card as="section" boxShadow="2px 2px 4px">
                <CardHeader as={Heading} mx="auto" my={0} py={1} fontSize={{ base: "md", lg: "2xl" }}>
                    Frameworks | Libraries
                </CardHeader>
                <CardBody as={Flex} wrap="wrap" gap={2} justifyContent="space-evenly">
                    {
                        skills.frameworks.map(fw => {
                            return (
                                <Tag key={nanoid()}>{fw}</Tag>
                            )
                        })
                    }
                </CardBody>
            </Card>

            {/* Technologies & OS */}
            <Card as="section" boxShadow="2px 2px 4px">
                <CardHeader as={Heading} mx="auto" my={0} py={1} fontSize={{ base: "md", lg: "2xl" }}>
                    Technologies | Operating Systems
                </CardHeader>
                <CardBody as={Flex} wrap="wrap" gap={2} justifyContent="space-evenly">
                    {
                        skills.technologies.map(tech => {
                            return (
                                <Tag key={nanoid()}>{tech}</Tag>
                            )
                        })
                    }

                    {
                        skills.os.map(o => {
                            return (
                                <Tag key={nanoid()}>{o}</Tag>
                            )
                        })
                    }
                </CardBody>
            </Card>

            {/* project management */}
            <Card as="section" boxShadow="2px 2px 4px">
                <CardHeader as={Heading} mx="auto" my={0} py={1} fontSize={{ base: "md", lg: "2xl" }}>
                    Project Management
                </CardHeader>
                <CardBody as={Flex} wrap="wrap" gap={2} justifyContent="space-evenly">
                    {
                        skills.management.map(mgmt => {
                            return (
                                <Tag key={nanoid()}>{mgmt}</Tag>
                            )
                        })
                    }
                </CardBody>
            </Card>

            {/* applications */}
            <Card as="section" boxShadow="2px 2px 4px">
                <CardHeader as={Heading} mx="auto" my={0} py={1} fontSize={{ base: "md", lg: "2xl" }}>
                    Applications | Database | Cloud
                </CardHeader>
                <CardBody as={Flex} wrap="wrap" gap={2} justifyContent="space-evenly">
                    {
                        skills.apps.map(app => {
                            return (
                                <Tag key={nanoid()}>{app}</Tag>
                            )
                        })
                    }
                </CardBody>
            </Card>

            {/* programming paradigms */}
            <Card as="section" boxShadow="2px 2px 4px">
                <CardHeader as={Heading} mx="auto" my={0} py={1} fontSize={{ base: "md", lg: "2xl" }}>
                    Programming Paradigms
                </CardHeader>
                <Divider mx="auto" width="95%" my={1} />
                <CardBody>
                    <UnorderedList ps={4}>
                        <ListItem>
                            Traditionally we all learn procedural programming and OOP concepts. However, I am familiar with declaratice paradigms too.
                        </ListItem>
                        <ListItem>
                            I leverage functional programming paradigm (map, filter, reduce, lambda functions) of Python and JS where I can.
                        </ListItem>
                        <ListItem>

                            In Artificial Intelligence, I learned First Order Logic (FOL) which in addition to the facts, can express object, relations and functions.
                        </ListItem>
                        <ListItem>
                            To perform the CRUD Operations on the databases, we use SQL. Thus, concetually I have knowledge of all programming paradigms.
                        </ListItem>
                    </UnorderedList>
                </CardBody>
                <Divider mx="auto" width="95%" my={1} />
                <CardFooter as={Stack} direction={{ base: "column", lg: "row" }} justifyContent="center">
                    <List>
                        <ListItem as="strong" textDecoration="underline">Imperative</ListItem>
                        <ListItem>Procedural</ListItem>
                        <ListItem>Object Oriented</ListItem>
                        <ListItem>Structural</ListItem>
                    </List>
                    <Divider orientation="vertical" />
                    <List>
                        <ListItem as="strong" textDecoration="underline">Declarative</ListItem>
                        <ListItem>Functional</ListItem>
                        <ListItem>Logical</ListItem>
                        <ListItem>Database</ListItem>
                    </List>
                </CardFooter>
            </Card>
        </Stack >
    )
}

export { Skills }

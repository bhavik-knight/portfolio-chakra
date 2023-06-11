import { nanoid } from "nanoid"
import { Heading, Text, UnorderedList } from "@chakra-ui/react"
import { Flex, Center, Container } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"
import { Button, Tag } from "@chakra-ui/react"
import { Stack, VStack, HStack } from "@chakra-ui/react"
import { Divider, Spacer } from "@chakra-ui/react"
import { List, ListItem } from "@chakra-ui/react"
import { skills } from "../data/portfolio_db.json"
import { ProgrammingParadigms } from "./ProgrammingParadigms"

function Skills() {

    return (
        <Stack p={2} gap={2}>
            {/* introduction */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
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
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" py={2} fontSize={{ base: "md", lg: "2xl" }}>
                    Programming Languages
                </CardHeader>
                <CardBody as={Flex} wrap="wrap" gap={2} justifyContent="space-evenly">
                    {
                        skills[0].languages.map(l => {
                            return (
                                <Tag key={nanoid()}>{l}</Tag>
                            )
                        })
                    }
                </CardBody>
            </Card>

            {/* frameworks/libraries */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" py={2} fontSize={{ base: "md", lg: "2xl" }}>
                    Frameworks | Libraries
                </CardHeader>
                <CardBody as={Flex} wrap="wrap" gap={2} justifyContent="space-evenly">
                    {
                        skills[0].frameworks.map(fw => {
                            return (
                                <Tag key={nanoid()}>{fw}</Tag>
                            )
                        })
                    }
                </CardBody>
            </Card>

            {/* Technologies & OS */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" py={2} fontSize={{ base: "md", lg: "2xl" }}>
                    Technologies | Operating Systems
                </CardHeader>
                <CardBody as={Flex} wrap="wrap" gap={2} justifyContent="space-evenly">
                    {
                        skills[0].technologies.map(tech => {
                            return (
                                <Tag key={nanoid()}>{tech}</Tag>
                            )
                        })
                    }

                    {
                        skills[0].os.map(o => {
                            return (
                                <Tag key={nanoid()}>{o}</Tag>
                            )
                        })
                    }
                </CardBody>
            </Card>

            {/* applications */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" py={2} fontSize={{ base: "md", lg: "2xl" }}>
                    Applications | Database | Cloud
                </CardHeader>
                <CardBody as={Flex} wrap="wrap" gap={2} justifyContent="space-evenly">
                    {
                        skills[0].apps.map(app => {
                            return (
                                <Tag key={nanoid()}>{app}</Tag>
                            )
                        })
                    }
                </CardBody>
            </Card>

            {/* project management */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" py={2} fontSize={{ base: "md", lg: "2xl" }}>
                    Project Management
                </CardHeader>
                <CardBody as={Flex} wrap="wrap" gap={2} justifyContent="space-evenly">
                    {
                        skills[0].management.map(mgmt => {
                            return (
                                <Tag key={nanoid()}>{mgmt}</Tag>
                            )
                        })
                    }
                </CardBody>
            </Card>

            {/* programming paradigms */}
            {/* <ProgrammingParadigms /> */}
        </Stack >
    )
}

export { Skills }

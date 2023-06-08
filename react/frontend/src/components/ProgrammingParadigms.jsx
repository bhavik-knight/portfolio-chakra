import { Heading, Text, UnorderedList } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"
import { Stack, VStack, HStack } from "@chakra-ui/react"
import { Divider, Spacer } from "@chakra-ui/react"
import { List, ListItem } from "@chakra-ui/react"

function ProgrammingParadigms() {
    return (

        <Card as="section" _hover={{ boxShadow: "2px 2px 4px 2px" }}>
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

                        In Artificial Intelligence, I learned First Order Logic (FOL), which in addition to the facts, can express object, relations and functions.
                    </ListItem>
                    <ListItem>
                        To perform the CRUD Operations on the databases, I use SQL. Thus, conceptually I have knowledge of all programming paradigms.
                    </ListItem>
                </UnorderedList>
            </CardBody>

            <Divider mx="auto" width="95%" my={1} />

            <CardFooter
                as={Stack}
                direction={{ base: "column", lg: "row" }}
                justifyContent={{ base: "center", md: "space-evenly" }}
            >
                <Card
                    p={1}
                    textAlign="center"
                    borderBottom="1px solid"
                    _hover={{ boxShadow: "1px 2px 4px 1px" }}
                    width={{ base: "100%", lg: "25%" }}
                >
                    <CardHeader pb={0} textDecoration="underline">Imperative</CardHeader>
                    <CardBody as={List}>
                        <ListItem>Procedural</ListItem>
                        <ListItem>Object Oriented</ListItem>
                        <ListItem>Structural</ListItem>
                    </CardBody>
                </Card>

                <Divider orientation={{ base: "horizontal", md: "vertical" }} />

                <Card
                    p={1}
                    textAlign="center"
                    borderBottom="1px solid"
                    _hover={{ boxShadow: "1px 2px 4px 1px" }}
                    width={{ base: "100%", lg: "25%" }}
                >
                    <CardHeader pb={0} textDecoration="underline">Declarative</CardHeader>
                    <CardBody as={List}>
                        <ListItem>Functional</ListItem>
                        <ListItem>Logical</ListItem>
                        <ListItem>Database</ListItem>
                    </CardBody>
                </Card>
            </CardFooter>
        </Card >
    )
}

export { ProgrammingParadigms }

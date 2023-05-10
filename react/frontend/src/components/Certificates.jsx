import { Flex, HStack, VStack, Stack, Box, Wrap, Container, Divider } from "@chakra-ui/react"
import { List, UnorderedList, ListItem } from "@chakra-ui/react"
import { Accordion, AccordionIcon, AccordionButton, AccordionItem, AccordionPanel } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Text, Heading } from "@chakra-ui/react"

function Certificates() {
    return (
        <Stack m={2} p={2} bg="lightblue">
            {/* card for information on top */}
            <Card as="section">
                <CardHeader as={Heading} mx="auto" my={0} py={1}>
                    Computer Science / IT Certificates
                </CardHeader>

                <Divider width="90%" mx="auto" my={1} />

                <CardBody as={UnorderedList} className="certificatesTitle" >
                    <ListItem>
                        My non-traditional path of making a career in Computer Science field has been challenging as well as rewarding.
                    </ListItem>
                    <ListItem>
                        To break into the field I have completed several online courses in the domain of IT and Computer Science.
                    </ListItem>
                    <ListItem>
                        Checkout my certificates from prestigious institutions like Harvard, MIT, Microsoft, Google, etc.
                    </ListItem>
                </CardBody>
            </Card>

            {/* certificates */}
            <Card as="section">
                <Accordion allowToggle>
                    <AccordionItem>
                        <AccordionButton>
                            <HStack as="span" flex="1" justifyContent="space-between">
                                <Heading fontSize={{ base: "sm", md: "xl" }}>
                                    Google IT Professional Certificate
                                </Heading>
                                <AccordionIcon />
                            </HStack>
                        </AccordionButton>
                        <AccordionPanel pb={2}>
                            Place certificates here in Caresoul
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Card>
        </Stack >
    )
}

export { Certificates }

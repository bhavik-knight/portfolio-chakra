import { nanoid } from "nanoid"
import { Flex, HStack, VStack, Stack, Box, Wrap, Container, Divider } from "@chakra-ui/react"
import { List, UnorderedList, ListItem } from "@chakra-ui/react"
import { Accordion, AccordionIcon, AccordionButton, AccordionItem, AccordionPanel } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Text, Heading } from "@chakra-ui/react"
import { certificates } from "../data/portfolio_db.json"
import { CertificateCard } from "./CertificateCard"

function Certificates() {

    // console.log(`certificates page: ${JSON.stringify(certificates)}`)

    return (
        <Stack p={2} width="100%">
            {/* card for information on top */}
            <Card as="section" boxShadow="2px 2px 4px">
                <CardHeader as={Heading} mx="auto" my={0} py={1}>
                    Computer Science / IT Certificates
                </CardHeader>

                <Divider className="divider" width="95%" mx="auto" my={1} />

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
                    {/* <ListItem>
                        Click on any certificates to check the credentials online
                    </ListItem> */}
                </CardBody>
            </Card>


        </Stack >
    )
}

export { Certificates }

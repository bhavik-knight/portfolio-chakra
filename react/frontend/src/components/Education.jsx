import { education, training, extracurriculars, certificates } from "../data/portfolio_db.json"
import { nanoid } from "nanoid"
import { Heading, Text } from "@chakra-ui/react"
import { Box, Stack, VStack, HStack, Flex, Divider, Spacer } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"
import { List, UnorderedList, ListItem } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel } from "@chakra-ui/react"
import { EducationCard } from "./EducationCard"
import { TrainingCard } from "./TrainingCard"
import { ExtracurricularCard } from "./ExtracurricularCard"
import { CertificateCard } from "./CertificateCard"
import { CertificateCardCarousel } from "./CertificateCardCarousel"


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


function Education() {
    const isMobile = window.matchMedia("(max-width:992px)").matches
    const getCredentialInfoStyle = (isMobile) => {
        return isMobile ?
            { bg: "green", color: "white", display: "flex" } :
            { display: "none" }
    }

    const [credentialInfoStyle, setCredentialInfoStyle] = useState(getCredentialInfoStyle(isMobile))
    useEffect(() => {
        const handleResize = () => {
            setCredentialInfoStyle(getCredentialInfoStyle(isMobile))
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [isMobile])

    // console.log(`mobile: ${isMobile}, ${JSON.stringify(credentialInfoStyle)}`)
    return (
        <Stack p={{ base: 0, lg: 2 }} gap={{ base: 1, lg: 2 }} w="100%">

            {/* education */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" my={1} py={1}>
                    Education
                </CardHeader>

                <Divider width="95%" mx="auto" my={1} />

                <CardBody>
                    <Stack as={List} spacing={2} {...textFontStyle}>
                        <ListItem>
                            I recently graduated with a Post-Baccalaureate Diploma in Artificial Intelligence from St. Francis Xavier University. During my time there, I studied a range of core Computer Science subjects, as well as specialized courses focused on AI. These studies allowed me to enhance my knowledge and skills, setting a strong foundation for my career in the field of AI.
                        </ListItem>
                        <ListItem>
                            The HOD of the CS department suggested that I should have been a MACS student or must give thought to completing a master's degree, acknowledging my understanding of the fundamentals and depth of the knowledge to be successful at that level.
                        </ListItem>
                    </Stack>
                </CardBody>
            </Card >


            {/* Degree */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} {...headerFontStyle}>
                    Degrees
                </CardHeader>
                <CardBody px={{ base: 0, lg: 4 }} py={0}>
                    <Accordion allowToggle>
                        {
                            education.map(e => <EducationCard key={nanoid()} edu={e} />)
                        }
                    </Accordion>
                </CardBody>
            </Card>


            {/* training */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} {...headerFontStyle}>
                    Training
                </CardHeader>

                <CardBody px={{ base: 0, lg: 4 }} py={0}>
                    <Accordion allowToggle>
                        {
                            training.map(t => <TrainingCard key={nanoid()} t={t} />)
                        }
                    </Accordion>
                </CardBody>
            </Card>


            {/* certificates */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} {...headerFontStyle}>
                    Certificates
                </CardHeader>

                <Text {...textFontStyle} {...credentialInfoStyle}>Tap on the certificate to check the credentials if available.</Text>
                <CardBody px={{ base: 0, lg: 4 }} py={0}>
                    <Accordion allowToggle>
                        {/* one accordion item - one certificate group */}
                        {
                            certificates.map(c => <CertificateCard key={nanoid()} certs={c} />)
                        }
                    </Accordion>
                </CardBody>
            </Card>


            {/* extra curricular */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} {...headerFontStyle}>
                    Extracurricular Activities
                </CardHeader>
                <CardBody px={{ base: 0, lg: 4 }} py={0}>
                    <Accordion allowToggle>
                        {
                            extracurriculars.map(ex => <ExtracurricularCard key={nanoid()} ex={ex} />)
                        }
                    </Accordion>
                </CardBody>
            </Card>
        </Stack >
    )
}

export { Education }

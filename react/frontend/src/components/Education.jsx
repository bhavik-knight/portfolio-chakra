import { nanoid } from "nanoid"
import { Heading, Text } from "@chakra-ui/react"
import { Box, Center, Stack, VStack, HStack, Flex, Divider, Spacer, Spinner } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"
import { List, UnorderedList, ListItem } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"
import { Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel } from "@chakra-ui/react"
import { EducationCard } from "./EducationCard"
import { TrainingCard } from "./TrainingCard"
import { ExtracurricularCard } from "./ExtracurricularCard"
import { CertificateCard } from "./CertificateCard"
import { CertificateCardCarousel } from "./CertificateCardCarousel"
import { useEffect, useState } from "react"
import { getData } from "../data/getData"

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
    const [loading, setLoading] = useState(true)

    const [education, setEducation] = useState([])
    useEffect(() => {
        setLoading(true)
        getData("education")
            .then(data => setEducation(data))
            .catch(error => console.log(error.message))
        // .finally(setLoading(false))
    }, [])

    const [training, setTraining] = useState([])
    useEffect(() => {
        setLoading(true)
        getData("training")
            .then(data => setTraining(data))
            .catch(error => console.log(error.message))
        // .finally(setLoading(false))
    }, [])

    const [extracurriculars, setExtraCurriculars] = useState([])
    useEffect(() => {
        setLoading(true)
        getData("extracurriculars")
            .then(data => setExtraCurriculars(data))
            .catch(error => console.log(error.message))
        // .finally(setLoading(false))
    }, [])

    const [certificates, setCertificates] = useState([])
    useEffect(() => {
        setLoading(true)
        getData("certificates")
            .then(data => setCertificates(data))
            .catch(error => console.log(error.message))
        // .finally(setLoading(false))
    }, [])


    useEffect(() => {
        setLoading(
            education.length === 0 &&
            training.length === 0 &&
            extracurriculars.length === 0 &&
            certificates.length === 0
        )
    }, [education, training, extracurriculars, certificates])

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
        loading ?
            <Stack
                p={{ base: 0, lg: 2 }}
                gap={{ base: 1, lg: 2 }}
                as={Center}
                minH="100vh"
                w="100%"
            >
                <Spinner size="xl" />
            </Stack >
            :
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
                                I recently graduated with a Post Baccalaureate Diploma in Artificial Intelligence from St. Francis Xavier University, where I studied some core subjects of Computer Science and enriched my knowledge and skills to build my career.
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

import { education, training, extracurriculars, certificates } from "../data/portfolio_db.json"
import { nanoid } from "nanoid"
import { Heading, Text } from "@chakra-ui/react"
import { Stack, HStack, Flex, Divider, Spacer } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"
import { List, UnorderedList, ListItem } from "@chakra-ui/react"
import { Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel } from "@chakra-ui/react"
import { EducationCard } from "./EducationCard"
import { TrainingCard } from "./TrainingCard"
import { ExtracurricularCard } from "./ExtracurricularCard"
import { CertificateCard } from "./CertificateCard"


function Education() {
    return (
        <Stack
            width="100%"
            gap={2}
            p={2}
        // m={2}
        // bg="lightblue"
        >
            {/* journey */}
            <Card display={{ base: "none", md: "flex" }} boxShadow="2px 2px 4px">
                <CardHeader as={Heading} mx="auto" my={0} py={1}>
                    My journey
                </CardHeader>
                <Divider className="divider" width="95%" mx="auto" my={1} />
                <CardBody>
                    <Stack as={List} gap={2} p={2} textAlign="justify">
                        <ListItem>
                            My journey in the field of Computer Science is a non-traditional approach. I have established my love for coding and passsion for the Computer Science during 2nd semester of my Bachelor of Engineering in Mechanical when we had a course on Computer Programming using C language. My professor acknowledged my understanding of topics and programming skills saying that I could complete some of the challenges which half of the Computer Science couldn't complete during that time.
                        </ListItem>
                        <ListItem>
                            Being a Software Engineer was my childhood dream, but my undergraduate study was completely different than my dreams. So even after completion of my degree and starting a job, my love for Computer Science never died, and I keep seeking a career path to follow my dream. My journey for the Computer Science started in 2015 when I decided to change my career trajectory in pursite of my dreams. I am forever grateful for Harvard's professor Dr. David Malan for teaching the CS50 course with so much passion which played a pivotal role in my life and career.
                        </ListItem>
                        <ListItem>
                            I recently graduated with Post Baccalaureate Diploma in Artificial Intelligence from St. Francis Xavier Unviersity where I studied some core subjects of Computer Science and enriched my knowledge and skills to build my career. Checkout my projects and skills in various domains.
                        </ListItem>
                    </Stack>
                </CardBody>
            </Card>

            {/* education */}
            {
                education.map(e => <EducationCard key={nanoid()} edu={e} />)
            }

            {/* training */}
            <Card as="section" boxShadow="2px 2px 4px">
                <CardHeader as={Heading} fontSize={{ base: "md", lg: "2xl" }} mx="auto">
                    Training
                </CardHeader>

                <CardBody>
                    <Accordion allowToggle>
                        {
                            training.map(t => <TrainingCard key={nanoid()} t={t} />)
                        }
                    </Accordion>
                </CardBody>
            </Card>

            {/* certificates */}
            <Card as="section" boxShadow="2px 2px 4px">
                <CardHeader as={Heading} fontSize={{ base: "md", lg: "2xl" }} mx="auto">
                    Certificates
                </CardHeader>

                <CardBody>
                    <Accordion allowToggle>
                        {/* one accordion item - one certificate group */}
                        {
                            certificates.map(certObj =>
                                <AccordionItem key={nanoid()}>
                                    <AccordionButton
                                        as={Heading}
                                        fontSize={{ base: "sm", md: "md", lg: "xl" }}
                                        _hover={{ cursor: "pointer" }}
                                        _expanded={{ boxShadow: "0px 2px 8px" }}
                                    >
                                        <HStack as="span" flex="1" justifyContent="space-between">
                                            <Heading fontSize={{ base: "sm", md: "2xl" }}>
                                                {certObj.title}
                                            </Heading>
                                            <AccordionIcon />
                                        </HStack>
                                    </AccordionButton>
                                    <AccordionPanel p={2}>
                                        <Stack as={Flex}
                                            pt={2}
                                            px={4}
                                            justifyContent="space-between"
                                            direction={{ base: "column", md: "row" }}
                                            flexWrap={{ base: "nowrap", md: "wrap" }}
                                        >
                                            <Text>{certObj.platform}</Text>
                                            <Text>{certObj.institute}</Text>
                                        </Stack>
                                        <Flex
                                            px={4}
                                            mt={1} flexShrink="1"
                                        >
                                            <Text>{certObj.about}</Text>
                                        </Flex>
                                        <Divider className="divider" mx="auto" my={2} width="90%" />

                                        <CertificateCard details={certObj.certificateDetails} />
                                    </AccordionPanel>
                                </AccordionItem>
                            )

                        }
                    </Accordion>
                </CardBody>
            </Card>


            {/* extra curricular */}
            <Card as="section" boxShadow="2px 2px 4px">
                <CardHeader as={Heading} fontSize={{ base: "md", lg: "2xl" }} mx="auto">
                    Extracurricular Activities
                </CardHeader>
                <CardBody>
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

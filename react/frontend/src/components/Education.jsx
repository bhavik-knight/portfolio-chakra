import { education, training, extracurriculars } from "../data/portfolio_db.json"
import { nanoid } from "nanoid"
import { Heading, Text } from "@chakra-ui/react"
import { Stack, Flex, Divider, Spacer } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"
import { List, UnorderedList, ListItem } from "@chakra-ui/react"
import { Accordion } from "@chakra-ui/react"
import { EducationCard } from "./EducationCard"
import { TrainingCard } from "./TrainingCard"
import { ExtracurricularCard } from "./ExtracurricularCard"


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
                            My journey in the field of Computer Science is a non-traditional approach. I have established my love for coding and passsion for the Computer Science during 2nd semester of my Bachelor of Engineering in Mechanical.
                        </ListItem>
                        <ListItem>
                            Being the first person in my family to pursue science and engineering field without any background or information it was difficut decision for me to dropout or not. I chose latter and completed my Bachelors in Engineering in Mechanical, and within few months I got my first job as an ad-hoc lecuturer.
                        </ListItem>
                        <ListItem>
                            My love for Computer Science came knocking time-to-time and I chose to follow my dream to become a Software Engineer, and made decision to change my career. I found Havard's introductory course CS50's video playlist on youtube, and then I signed up for the course through edX. That's how my journey started for the new career, and since then I never looked back. I completed several online courses before I got admission in St. Francis Xavier University's Post Baccaluareate Diploma in Artificial Intelligence program.
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

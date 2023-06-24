import { experiences, volunteer } from "../data/portfolio_db.json"
import { nanoid } from "nanoid"
import { Heading, Text, Spacer } from "@chakra-ui/react"
import { Stack, Flex, Divider } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"
import { List, UnorderedList, ListItem } from "@chakra-ui/react"
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react"
import { ExperienceCard } from "./ExperienceCard"

function Experiences() {
    return (
        <Stack p={{ base: 1, lg: 2 }} spacing={{ base: 1, lg: 2 }} w="100%">
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" my={0} py={1}>
                    Experiences
                </CardHeader>
                <Divider className="divider" width="95%" mx="auto" my={1} />
                <CardBody>
                    <Text>
                        Currently, I am looking for Jr. Software Developer role. Open to work on cool projects with hoping to integrate the technical skills and transferable skills I gained from my diverse work-experience.
                    </Text>
                </CardBody>
            </Card>


            {/* section about work */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} fontSize={{ base: "md", lg: "2xl" }} mx="auto">
                    Work Experience{experiences.length > 1 && `s`}
                </CardHeader>
                <CardBody>
                    <Accordion allowToggle>
                        {
                            experiences.map(e => <ExperienceCard key={nanoid()} job={e} />)
                        }
                    </Accordion>
                </CardBody>
            </Card>

            {/* section about volunteer work */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} fontSize={{ base: "md", lg: "2xl" }} mx="auto">
                    Volunteer Experience{volunteer.length > 1 && `s`}
                </CardHeader>


                <CardBody>
                    <Accordion allowToggle>
                        {
                            volunteer.map(v => <ExperienceCard key={nanoid()} job={v} />)
                        }
                    </Accordion>
                </CardBody>
            </Card>
        </Stack >
    )
}

export { Experiences }

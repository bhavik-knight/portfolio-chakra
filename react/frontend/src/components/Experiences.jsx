import { nanoid } from "nanoid"
import { Heading, Text, Spacer } from "@chakra-ui/react"
import { Stack, Flex, Divider } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"
import { List, UnorderedList, ListItem } from "@chakra-ui/react"
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react"
import { experiences, volunteer } from "../data/portfolio_db.json"
import { ExperienceCard } from "./ExperienceCard"

function Experiences() {
    return (
        <Stack
            width="100%"
        // bg="lightblue"
        // m={2} p={2}
        >
            <Card
                as="section"
                border="2px solid"
                boxShadow="2px 2px 4px"
            >
                <CardHeader as={Heading} mx="auto" my={0} py={1}>
                    Experiences
                </CardHeader>
                <Divider className="divider" width="95%" mx="auto" my={1} />
                <CardBody>
                    <Text>
                        Currently, I am looking for Jr. Software Developer role. Open to work on cool projects with hoping to integrate the skills I learned from my diverse work-experience.
                    </Text>
                </CardBody>
            </Card>


            {/* section about work */}
            <Card
                as="section"
                border="2px solid"
                boxShadow="2px 2px 4px"
            >
                <CardHeader as={Heading} fontSize={{ base: "md", lg: "2xl" }}>
                    Work Experience{experiences.length > 1 && `s`}
                </CardHeader>
                <Accordion allowToggle>
                    {
                        experiences.map(e => <ExperienceCard key={nanoid()} job={e} />)
                    }
                </Accordion>
            </Card>

            {/* section about volunteer work */}
            <Card
                as="section"
                border="2px solid"
                boxShadow="2px 2px 8px"
            >
                <CardHeader as={Heading} fontSize={{ base: "md", lg: "2xl" }}>
                    Volunteer Experience{volunteer.length > 1 && `s`}
                </CardHeader>

                <Accordion allowToggle>
                    {
                        volunteer.map(v => <ExperienceCard key={nanoid()} job={v} />)
                    }
                </Accordion>
            </Card>
        </Stack >
    )
}

export { Experiences }

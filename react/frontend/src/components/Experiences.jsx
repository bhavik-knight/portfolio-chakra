import { experiences, volunteer } from "../data/portfolio_db.json"
import { nanoid } from "nanoid"
import { Heading, Text, Spacer } from "@chakra-ui/react"
import { Stack, Flex, Divider } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"
import { List, UnorderedList, ListItem } from "@chakra-ui/react"
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react"
import { ExperienceCard } from "./ExperienceCard"


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


function Experiences() {
    return (
        <Stack p={{ base: 0, lg: 2 }} gap={{ base: 1, lg: 2 }} w="100%">
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" my={1} py={1}>
                    Experiences
                </CardHeader>

                <Divider width="95%" mx="auto" my={1} />

                <CardBody>
                    <Text {...textFontStyle}>
                        I am actively looking for a Junior Software Developer position and eager to participate in exciting projects where I can leverage my technical skills and transferable expertise gained from my previous work experiences.
                    </Text>
                </CardBody>
            </Card>


            {/* section about work */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} {...headerFontStyle}>
                    Work Experience{experiences.length > 1 && `s`}
                </CardHeader>

                <CardBody px={{ base: 0, lg: 4 }} py={0}>
                    <Accordion allowToggle>
                        {
                            experiences.map(e => <ExperienceCard key={nanoid()} job={e} />)
                        }
                    </Accordion>
                </CardBody>
            </Card>

            {/* section about volunteer work */}
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} {...headerFontStyle}>
                    Volunteer Experience{volunteer.length > 1 && `s`}
                </CardHeader>

                <CardBody px={{ base: 0, lg: 4 }} py={0}>
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

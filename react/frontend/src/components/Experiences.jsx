import { getData } from "../data/getData"
import { ExperienceCard } from "./ExperienceCard"

import { nanoid } from "nanoid"

import { Heading, Text, Spacer } from "@chakra-ui/react"
import { Stack, Flex, Divider } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"
import { List, UnorderedList, ListItem } from "@chakra-ui/react"
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react"
import { Spinner, Center } from "@chakra-ui/react"

import { useState, useEffect } from "react"


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
    // fetch all experiences data from the firebase db
    const [experiences, setExperiences] = useState([])
    // fetch all volunteer data from the firebase db
    const [volunteer, setVolunteer] = useState([])

    // to check if all the data is loaded for the page
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getData("experiences")
            .then(data => setExperiences(data))
    }, [])

    useEffect(() => {
        setLoading(true)
        getData("volunteer")
            .then(data => setVolunteer(data))
            .catch(error => console.log(error.message))
    }, [])

    useEffect(() => {
        setLoading(experiences.length === 0 && volunteer.length === 0)
    }, [experiences, volunteer])

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
                <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                    <CardHeader as={Heading} mx="auto" my={1} py={1}>
                        Experiences
                    </CardHeader>

                    <Divider width="95%" mx="auto" my={1} />

                    <CardBody>
                        <Text {...textFontStyle}>
                            I am actively seeking an entry-level Full-Stack Developer position. I am enthusiastic about contributing to projects as part of a team and learning from experts in the field, where I can apply my technical skills gained from various projects and transferable skills acquired through my previous work experiences.
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

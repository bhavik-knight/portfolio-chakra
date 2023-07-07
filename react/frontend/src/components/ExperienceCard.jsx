import { nanoid } from "nanoid"
import { AccordionButton, AccordionItem, AccordionIcon, AccordionPanel } from "@chakra-ui/react"
import { Text, Heading } from "@chakra-ui/react"
import { Flex, Divider, Stack, Spacer } from "@chakra-ui/react"
import { UnorderedList, ListItem } from "@chakra-ui/react"


const textFontStyle = {
    fontSize: { base: "0.9em", md: "0.95em", lg: "1em" },
    textAlign: "justify",
    px: { base: 4, lg: 8 },
    py: 2
}


function ExperienceCard({ job }) {
    return (
        <AccordionItem py={2}>
            <AccordionButton
                as={Heading}
                fontSize={{ base: "sm", md: "md", lg: "xl" }}
                _hover={{ cursor: "pointer" }}
                _expanded={{ boxShadow: "0px 2px 8px" }}
            >
                <Flex width="100%" direction={{ base: "column", md: "row" }} wrap="wrap">
                    <Text>
                        {job.title}
                    </Text>
                    <Spacer />
                    <Text px={{ base: 0, lg: 2 }}>
                        {job.start} - {job.end}
                    </Text>
                </Flex>
                <AccordionIcon />
            </AccordionButton>

            <AccordionPanel
                p={{ base: 0, lg: 4 }}
                size={{ base: "md", lg: "lg" }}
            >
                <Text {...textFontStyle} mt={2}>
                    {job.company} | {job.place}
                </Text>

                <Divider mx="auto" my={1} width="95%" />

                <Stack as={UnorderedList} {...textFontStyle}>
                    {
                        job.responsibilities.map(responsibility => {
                            return (
                                <ListItem key={nanoid()} textAlign="justify">
                                    {responsibility}
                                </ListItem>
                            )
                        })
                    }
                </Stack>
            </AccordionPanel>
        </AccordionItem >

    )
}

export { ExperienceCard }

import { nanoid } from "nanoid"
import { useColorModeValue, useColorMode } from "@chakra-ui/react"
import { Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel } from "@chakra-ui/react"
import { Text, Heading } from "@chakra-ui/react"
import { Flex, Divider, Stack, Spacer } from "@chakra-ui/react"
import { List, UnorderedList, ListItem } from "@chakra-ui/react"

function ExperienceCard({ job }) {
    return (
        <AccordionItem py={2}>
            <AccordionButton
                as={Heading}
                fontSize={{ base: "md", lg: "xl" }}
                _hover={{ cursor: "pointer" }}
                _expanded={{ boxShadow: "0px 2px 8px" }}
            >
                <Flex width="100%" direction={{ base: "column", md: "row" }} wrap="wrap" justifyContent="space-between">
                    <Text>
                        {job.title}
                    </Text>
                    <Spacer />
                    <Text px={2}>
                        {job.start} - {job.end}
                    </Text>
                    <AccordionIcon />
                </Flex>
            </AccordionButton>

            <AccordionPanel p={4}>
                <Text fontSize={{ base: "md", lg: "lg" }} px={4}>
                    {job.company} | {job.place}
                </Text>
                <Divider mx="auto" my={1} width="95%" />
                <Stack as={UnorderedList} ms={8}>
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
        </AccordionItem>

    )
}

export { ExperienceCard }

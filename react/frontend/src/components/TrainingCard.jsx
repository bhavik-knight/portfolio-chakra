import { nanoid } from "nanoid"
import { AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react"
import { Flex, Box, Stack, Spacer, Divider } from "@chakra-ui/react"
import { Text, Heading } from "@chakra-ui/react"
import { UnorderedList, List, ListItem } from "@chakra-ui/react"
import { Table, Thead, Tbody, Tfoot, Th, Tr, Td, TableCaption, TableContainer } from "@chakra-ui/react"


function TrainingCard({ t }) {
    return (
        <AccordionItem py={2}>
            {/* heading for accordion */}
            <AccordionButton
                as={Heading}
                fontSize={{ base: "sm", md: "md", lg: "xl" }}
                _expanded={{ boxShadow: "0px 2px 8px" }}
            >
                <Flex width="100%" direction={{ base: "column", md: "row" }} wrap="wrap">
                    <Text>
                        {t.program}
                    </Text>
                    <Spacer />
                    <Text px={2}>
                        {t.start} - {t.end}
                    </Text>
                </Flex>
                <AccordionIcon />
            </AccordionButton>


            <AccordionPanel
                p={4}
                size={{ base: "md", lg: "lg" }}
            >
                <Text fontSize={{ base: "md", lg: "lg" }}>
                    {t.institute} | {t.place}
                </Text>

                <Divider mx="auto" my={1} width="95%" />


                <Flex overflow="hidden" mx="auto" width="80%">
                    <Table variant="striped" colorScheme="purple">
                        <Thead>
                            <Tr>
                                <Th>Domain</Th>
                                <Th>Learnings</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                t.learnings.map(l => {
                                    return (
                                        <Tr key={nanoid()}>
                                            <Td width="15%">{l.domain}</Td>
                                            <Td width="85%">{l.technologies}</Td>
                                        </Tr>
                                    )
                                })
                            }
                        </Tbody>
                    </Table>
                </Flex>
            </AccordionPanel>
        </AccordionItem >
    )
}

export { TrainingCard }

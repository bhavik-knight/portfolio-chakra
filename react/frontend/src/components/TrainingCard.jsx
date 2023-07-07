import { nanoid } from "nanoid"
import { AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react"
import { Flex, Spacer, Divider } from "@chakra-ui/react"
import { VStack } from "@chakra-ui/react"
import { Text, Heading } from "@chakra-ui/react"
import { Table, Thead, Tbody, Tfoot, Th, Tr, Td, TableCaption, TableContainer } from "@chakra-ui/react"


const textFontStyle = {
    fontSize: { base: "0.9em", md: "0.95em", lg: "1em" },
    textAlign: "justify",
    px: { base: 4, lg: 8 },
    py: 2
}


function TrainingCard({ t }) {
    return (
        <AccordionItem py={2}>
            {/* heading for accordion */}
            <AccordionButton
                as={Heading}
                fontSize={{ base: "sm", md: "md", lg: "xl" }}
                _hover={{ cursor: "pointer" }}
                _expanded={{ boxShadow: "0px 2px 8px" }}
            >
                <Flex width="100%" direction={{ base: "column", md: "row" }} wrap="wrap">
                    <Text>
                        {t.program}
                    </Text>
                    <Spacer />
                    <Text px={{ base: 0, lg: 2 }}>
                        {t.start} - {t.end}
                    </Text>
                </Flex>
                <AccordionIcon />
            </AccordionButton>


            <AccordionPanel
                p={{ base: 0, lg: 4 }}
                size={{ base: "md", lg: "lg" }}
            >
                <Text {...textFontStyle} mt={2}>
                    {t.institute} | {t.place}
                </Text>

                <Divider mx="auto" my={1} width="95%" />

                <VStack spacing={2} px={0}>
                    <Table
                        variant="striped"
                        colorScheme="purple"
                        {...textFontStyle}
                    >
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
                </VStack>
            </AccordionPanel>
        </AccordionItem >
    )
}

export { TrainingCard }

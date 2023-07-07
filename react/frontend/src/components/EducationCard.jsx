import { nanoid } from "nanoid"
import { Flex, Spacer, Tag } from "@chakra-ui/react"
import { HStack, VStack } from "@chakra-ui/react"
import { Text, Heading } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { ChevronDownIcon, StarIcon } from "@chakra-ui/icons"
import { Table, TableCaption, Thead, Tbody, Tfoot, Th, Tr, Td } from "@chakra-ui/react"
import { AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react"
import { useBoolean } from "@chakra-ui/react"
import { useState, useEffect } from "react"


const textFontStyle = {
    fontSize: { base: "0.9em", md: "0.95em", lg: "1em" },
    textAlign: "justify",
    px: { base: 4, lg: 8 },
    py: 2
}


function EducationCard({ edu }) {

    // set the favorite courses by default to display
    const showLess = edu.courses !== null && edu.courses.filter(c => edu.highlights.includes(c.name))

    // set showMore to false to shwo only favorite courses by default
    const [showMore, setShowMore] = useBoolean(false)

    // keep track of the course data
    const [courseData, setCourseData] = useState(showLess)

    // set the course data again on changing the showMore value
    useEffect(() => {
        showMore ? setCourseData(edu.courses) : setCourseData(showLess)
        // console.log(`clicked on course data change ${courseData.length}`)
    }, [showMore])

    return (
        <AccordionItem py={2}>
            {/* heading */}
            <AccordionButton
                as={Heading}
                fontSize={{ base: "sm", md: "md", lg: "xl" }}
                _hover={{ cursor: "pointer" }}
                _expanded={{ boxShadow: "0px 2px 8px" }}
            >
                <Flex width="100%" direction={{ base: "column", md: "row" }} wrap="wrap">
                    <Text>
                        {edu.degree} - <em>{edu.field}</em>
                    </Text>
                    <Spacer />
                    <Text px={{ base: 0, lg: 2 }}>
                        {edu.start} - {edu.end}
                    </Text>
                </Flex>
                <AccordionIcon />
            </AccordionButton>


            <AccordionPanel
                px={{ base: 0, lg: 4 }}
                size={{ base: "md", lg: "lg" }}
            >

                <Text {...textFontStyle} mt={2}>
                    {edu.institute} | {edu.place}
                </Text>

                {/* display the highlighted courses if available and grades - only in large screen */}
                <VStack spacing={{ base: 1, lg: 2 }} px={{ base: 2, lg: 4 }}>
                    <Table
                        variant="striped"
                        colorScheme="purple"
                        {...textFontStyle}
                        display={edu.courses === null && "none"}
                    >
                        <TableCaption placement="top" px={0}>
                            <HStack justifyContent="space-between" px={2} >
                                <Text>Courses</Text>
                                <Button
                                    size={{ base: "xs", md: "sm", lg: "md" }}
                                    variant="solid"
                                    colorScheme="purple"
                                    onClick={setShowMore.toggle}
                                    rightIcon={showMore ? <StarIcon /> : <ChevronDownIcon />}
                                >
                                    {
                                        showMore ? `Favorites` : `More`
                                    }
                                </Button>
                            </HStack>
                        </TableCaption>

                        <Thead>
                            <Tr>
                                <Th width="10%">Course ID</Th>
                                <Th width="80%">Course Name</Th>
                                <Th width="10%" textAlign="right">Grade / {edu.maxGPA}</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                courseData && courseData.map(c => {
                                    return (
                                        <Tr key={nanoid()}>
                                            <Td width="10%">{c.cid}</Td>
                                            <Td width="80%">{c.name}</Td>
                                            <Td width="10%" textAlign="right">{c.grade}</Td>
                                        </Tr>
                                    )
                                })
                            }
                        </Tbody>

                        <Tfoot>
                            <Tr>
                                <Td>GPA</Td>
                                <Td></Td>
                                <Td textAlign="right">{edu.gpa}%</Td>
                            </Tr>
                        </Tfoot>

                    </Table>

                    {/* highlight important-interesting courses */}
                    <Flex wrap="wrap" gap={2}>
                        {
                            edu.highlights.map(h => <Tag key={nanoid()}>{h}</Tag>)
                        }
                    </Flex>
                </VStack>

            </AccordionPanel>
        </AccordionItem >
    )
}

export { EducationCard }

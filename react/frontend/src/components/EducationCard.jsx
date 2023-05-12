import { nanoid } from "nanoid"
import { useState, useEffect } from "react"
import { useBoolean } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Flex, Container, Stack, Spacer, Divider, Tag } from "@chakra-ui/react"
import { Text, Heading } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { TableContainer, Table, TableCaption, Thead, Tbody, Tfoot, Th, Tr, Td } from "@chakra-ui/react"

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
        <Card as="section" boxShadow="2px 2px 4px">
            <CardHeader as={Heading} p={4}>
                <Stack>
                    <Flex direction={{ base: "column", lg: "row" }} fontSize={{ base: "md", lg: "2xl" }} wrap="wrap">
                        <Text>{edu.degree} - <em>{edu.field}</em></Text>
                        <Spacer />
                        <Text>{edu.start} - {edu.end}</Text>
                    </Flex>
                    <Flex direction={{ base: "column", lg: "row" }} fontSize={{ base: "sm", lg: "lg" }} wrap="wrap">
                        <Text>{edu.institute} | {edu.place}</Text>
                    </Flex>
                </Stack>
            </CardHeader>

            <Divider mx="auto" my={0} width="95%" />

            {/* display the highlighted courses if available and grades - only in large screen */}
            <CardBody display={edu.courses === null ? "none" : "flex"}>
                <Flex mx="auto" width="80%">
                    <Table variant="striped" colorScheme="purple">
                        <TableCaption placement="top">
                            <Stack direction={{ base: "column", lg: "row" }} justifyContent="center">
                                <Text fontSize={{ base: "md", lg: "2xl" }}>Courses</Text>
                                <Button variant="solid" colorScheme="purple" onClick={setShowMore.toggle}>{showMore ? `Show Favorites` : `Show More`}</Button>
                            </Stack>
                        </TableCaption>

                        <Thead>
                            <Tr>
                                <Th width="15%">Course ID</Th>
                                <Th width="65%">Course Name</Th>
                                <Th width="20%" textAlign="right">Grade / {edu.maxGPA}</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                courseData && courseData.map(c => {
                                    return (
                                        <Tr key={nanoid()}>
                                            <Td width="15%">{c.cid}</Td>
                                            <Td width="65%">{c.name}</Td>
                                            <Td width="20%" textAlign="right">{c.grade}</Td>
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
                </Flex>
            </CardBody>

            {/* highlight important-interesting courses */}
            <CardFooter>
                <Flex wrap="wrap" gap={2}>
                    {
                        edu.highlights.map(h => <Tag key={nanoid()}>{h}</Tag>)
                    }
                </Flex>
            </CardFooter>
        </Card>

    )
}

export { EducationCard }

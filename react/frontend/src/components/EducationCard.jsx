import { nanoid } from "nanoid"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Flex, Stack, Spacer, Divider, Tag } from "@chakra-ui/react"
import { Text, Heading } from "@chakra-ui/react"

function EducationCard({ edu }) {
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
            <CardBody>

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

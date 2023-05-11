import { Heading, Text } from "@chakra-ui/react"
import { Stack, Flex, Divider } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"

function Home() {
    return (
        <Stack m={2} p={2} width="100%" bg="lightblue">
            <Card>
                <CardHeader as={Heading} mx="auto" my={0} py={1}>
                    Home
                </CardHeader>
                <Divider className="divider" width="95%" mx="auto" my={1} />
                <CardBody>
                    <Text>
                        sometext
                    </Text>
                </CardBody>
            </Card>
        </Stack>
    )
}

export { Home }

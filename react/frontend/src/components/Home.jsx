import { Heading, Text, Textarea } from "@chakra-ui/react"
import { Stack, Container, Flex, Divider, Spacer, Button } from "@chakra-ui/react"
import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react"

function Home() {
    return (
        <Stack p={2} width="100%"
        // bg="lightblue"
        >
            <Card as="section">
                <Text>
                    Hello, world! I am Bhavik Bhagat.
                </Text>
                <Text>
                    Welcome to my website...
                </Text>
            </Card>
            <Card bgColor="transparent">
                <embed src="./logos/bhavik_sticker.png" />
            </Card>
            <Card as="section">
                <Text>
                    I am an aspiring Software Developer looking to break into tech industry. I am a skilled backend developer who can create good UI/UX. Checkout my diverse skillsets and projects in different domains.
                </Text>
            </Card>
            <Card as="section">
                <Text>
                    I keep learning new technologies to stay up-to-date with the trends. This portfolio demonstrates my recently learned skilled ReactJS using the latest documentation released in March, 2023, powered by Chakra UI.
                </Text>
            </Card>
            <Card>
                <Text>
                    I am open to freelancing work. If you have cool project ideas in mind, lets connect, collaborate and build some cool Software together.
                </Text>
            </Card>
        </Stack >
    )
}

export { Home }

import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { SimpleGrid, Grid, Stack, Flex, Wrap, WrapItem, } from "@chakra-ui/react"
import { Img, Heading, Text, Divider } from "@chakra-ui/react"
import { Tooltip, Button } from "@chakra-ui/react"
import { nanoid } from "nanoid"
import { icons } from "./Icons"

function ProjectCard({ project }) {
    return (
        <Card
            key={nanoid()}
            border="2px solid white"
            boxSize={{ base: "100%", md: "50%", xl: "30%" }}
            mt={4} p={2}
        >
            <Stack justifyContent="center">
                <Flex>
                    <Img src={project.displayImg} className="projectDisplayImg" />
                </Flex>

                <Divider />
                <CardHeader px={4} py={0}>
                    <Heading textDecoration="underline">
                        {project.title}
                    </Heading>
                </CardHeader> p={0}

                <CardBody p={0}>
                    <Text px={4}>
                        {project.description}
                    </Text>
                    <Divider width="95%" px={2} mx="auto" my={2} />
                    <SimpleGrid
                        justifyContent="center"
                        alignItems="center"
                        gap={2}
                        minChildWidth="32px"
                        row="auto"
                    >
                        {
                            project.technologies.map(tech => {
                                return (
                                    <Tooltip key={nanoid()} label={tech} aria-label={tech} hasArrow>
                                        <WrapItem className="projectSkills" borderRadius="8px" >
                                            {icons[tech]}
                                        </WrapItem>
                                    </Tooltip>
                                )
                            })
                        }
                    </SimpleGrid>
                </CardBody>

                <CardFooter p={0} justifyContent="center">
                    <Wrap mt={2}>
                        <Button width="80px" bg="orange" color="black">Github</Button>
                        <Button width="80px" bg="white" color="blue">Details</Button>
                        <Button width="80px" bg="green" color="white">Link</Button>
                    </Wrap>
                </CardFooter>
            </Stack>
        </Card >
    )
}


export { ProjectCard }

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
            className="projectCard"
            boxSize={{ base: "100%", md: "50%", xl: "30%" }}
            mt={4} p={2}
            boxShadow="2px 2px 8px aliceblue"
            _hover={{ border: "2px solid red" }}
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
                    <Flex
                        flexWrap="wrap"
                        gap={2}
                        justifyContent="space-evenly"
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
                    </Flex>
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

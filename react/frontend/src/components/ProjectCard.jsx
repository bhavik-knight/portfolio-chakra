import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { SimpleGrid, Grid, Stack, Flex, Wrap, WrapItem, } from "@chakra-ui/react"
import { Img, Heading, Text, Divider } from "@chakra-ui/react"
import { Tooltip, Button } from "@chakra-ui/react"
import { nanoid } from "nanoid"
import { icons } from "./Icons"

const footerButtonStyle = {
    width: "80px",
    variant: "solid"
}

function ProjectCard({ project }) {
    return (
        <Card
            key={nanoid()}
            className="projectCard"
            boxSize={{ base: "100%", md: "50%", xl: "30%" }}
            my={4} p={2} gap={1}
            border="2px solid"
            borderColor={useColorModeValue("gray.200", "gray.600")}
            _hover={{ boxShadow: "4px 4px 16px black", _dark: { boxShadow: "4px 4px 16px white" } }
            }
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
                                    <Tooltip key={nanoid()} label={tech} aria-label={tech} hasArrow textTransform="capitalize">
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
                        <Button sx={footerButtonStyle} bg="orange" color="black" >Github</Button>
                        <Button sx={footerButtonStyle} bg={useColorModeValue("black", "white")} color={useColorModeValue("cyan", "blue")}>Details</Button>
                        <Button sx={footerButtonStyle} bg="green" color="white">Link</Button>
                    </Wrap>
                </CardFooter>
            </Stack>
        </Card >
    )
}


export { ProjectCard }

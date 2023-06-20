import { useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Center, SimpleGrid, Grid, Stack, Flex, Wrap, WrapItem, } from "@chakra-ui/react"
import { Img, Heading, Text, Divider } from "@chakra-ui/react"
import { Tooltip, Button, Badge } from "@chakra-ui/react"
import { nanoid } from "nanoid"
import { icons } from "./Icons"
import { ProjectDetailsModal } from "./ProjectDetailsModal"

const footerButtonStyle = {
    width: "80px",
    variant: "solid"
}

function ProjectCard({ project }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Card
            key={nanoid()}
            className="projectCard"
            boxSize={{ base: "100%", md: "50%", xl: "30%" }}
            m={2} p={2} gap={1}
            border="2px solid"
            borderColor={useColorModeValue("gray.200", "gray.600")}
            _hover={{ boxShadow: "4px 4px 16px black", _dark: { boxShadow: "4px 4px 16px white" } }
            }
        >
            <Stack justifyContent="center">
                <Flex as={Center}>
                    <Img src={project.displayImg} className="projectDisplayImg" />
                </Flex>

                <Divider />
                <CardHeader as={Center} px={2} py={0} mx="auto">
                    <Heading textDecoration="underline" fontSize={{ base: "md", lg: "xl" }}>
                        {project.title}
                    </Heading>

                </CardHeader>

                <CardBody p={0}>
                    <Text px={4} className="projectDetails">
                        {project.description}
                    </Text>
                </CardBody>

                <Divider width="95%" px={2} mx="auto" my={2} />

                <CardFooter p={0} as={Center}>
                    <Wrap>
                        {/* <Button sx={footerButtonStyle} bg="orange" color="black" >Github</Button> */}
                        <Button
                            sx={footerButtonStyle}
                            bg={useColorModeValue("black", "white")}
                            color={useColorModeValue("cyan", "blue")}
                            onClick={onOpen}
                            _hover={{
                                color: `${useColorModeValue("blue", "cyan")}`,
                                bg: `transparent`,
                                border: `1px solid`
                            }}
                        >
                            Details
                        </Button>
                        <ProjectDetailsModal isOpen={isOpen} onClose={onClose} project={project} />
                        {/* <Button sx={footerButtonStyle} bg="green" color="white">Link</Button> */}
                    </Wrap>
                    {
                        project.group &&
                        <Badge
                            colorScheme="whatsapp"
                            variant="subtle"
                            position="absolute"
                            right={0}
                            mr={2}
                            boxShadow="1px 1px 4px"
                        >
                            group
                        </Badge>
                    }
                </CardFooter>
            </Stack>
        </Card >
    )
}


export { ProjectCard }

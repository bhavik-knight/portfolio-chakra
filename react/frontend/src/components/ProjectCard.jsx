import { ProjectDetailsModal } from "./ProjectDetailsModal"
import { ResponsiveIcons } from "./ResponsiveIcons"

import { nanoid } from "nanoid"
import { useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Center, Stack, Flex, Wrap } from "@chakra-ui/react"
import { Image, Divider } from "@chakra-ui/react"
import { Button, Badge } from "@chakra-ui/react"


const textFontStyle = {
    fontSize: { base: "0.9em", md: "0.95em", lg: "1em" },
    textAlign: "justify",
    px: { base: 4, lg: 8 },
    py: 2
}


function ProjectCard({ project }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Card
            key={nanoid()}
            className="projectCard"
            boxSize={{ base: "100%", md: "40%", xl: "30%" }}
            m={{ base: 0, lg: 2 }}
            p={2}
            border="2px solid"
            borderColor={useColorModeValue("gray.200", "gray.600")}
            _hover={{ boxShadow: "4px 4px 16px black", _dark: { boxShadow: "4px 4px 16px white" } }
            }
        >
            <Stack as={Center}>
                <Flex>
                    <Image src={project.displayImg} alt="project display image" className="projectDisplayImg" />
                </Flex>

                <Divider />
                <CardHeader py={0} textDecoration="underline" fontSize={{ base: "1em", md: "1.1em", lg: "1.2em" }}>
                    {project.title}
                </CardHeader>

                <CardBody {...textFontStyle} py={0} px={{ base: 2, lg: 4 }}>
                    {project.description}
                </CardBody>

                <Divider width="95%" px={2} mx="auto" my={2} />

                <CardFooter p={0} as={Center}>
                    <Wrap>
                        {/* <Button sx={footerButtonStyle} bg="orange" color="black" >Github</Button> */}
                        <Button
                            variant="outline"
                            leftIcon={ResponsiveIcons.details.icon}
                            size={{ base: "sm", lg: "md" }}
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

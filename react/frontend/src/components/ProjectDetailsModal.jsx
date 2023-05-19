import "./ProjectDetailsModal.css"
import { nanoid } from "nanoid"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"

import { useDisclosure } from "@chakra-ui/react"
import { Flex, Stack, Center, Container } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Button, ButtonGroup, Tooltip } from "@chakra-ui/react"
import { Heading, Text, Divider, Spacer, Img } from "@chakra-ui/react"
import { UnorderedList, List, ListItem } from "@chakra-ui/react"
import { Tag } from "@chakra-ui/react"
import { ResponsiveIcons } from "./ResponsiveIcons"


function ProjectDetailsModal({ isOpen, onClose, project }) {

    return (
        <Modal onClose={onClose}
            isOpen={isOpen}
            isCentered
            size={{ base: "sm", lg: "6xl" }}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader
                    as={Stack}
                    direction={{ base: "column", lg: "row" }}
                    alignItems="center"
                    justifyContent={{ base: "center", lg: "space-between" }}>
                    <Text fontSize={{ base: "md", lg: "lg" }}>
                        {project.title} - Details
                    </Text>
                    <Spacer />
                    <ButtonGroup gap={2}>
                        <Button className="project-detail-btns" onClick={() => window.open(project.github, "_blank")}>Github</Button>
                        {
                            project.uri !== null &&
                            <Button className="project-detail-btns" onClick={() => window.open("http://35.182.245.62/", "_blank")}>Links</Button>
                        }
                        <Button className="project-detail-btns" onClick={onClose}>Close</Button>
                    </ButtonGroup>
                </ModalHeader>

                <Divider mx="auto" width="95%" my={0} />

                <ModalBody>
                    <UnorderedList>
                        {
                            project.details.map(task => {
                                return (
                                    <ListItem key={nanoid()} fontSize="md">
                                        {task}
                                    </ListItem>
                                )
                            })

                        }
                    </UnorderedList>
                    <Divider mx="auto" my={1} />
                    <Card py={2}><Img src={project.displayImg} /></Card>
                </ModalBody>

                <Divider mx="auto" width="95%" />

                <ModalFooter
                    mx="auto"
                    as={Flex}
                    // width={{ base: "100%", lg: "80%" }}
                    justifyContent="space-evenly" gap={1} flexWrap="wrap"
                >
                    {
                        project.technologies.map(tech =>
                            <Tooltip
                                key={nanoid()}
                                label={tech}
                                aria-label={tech}
                                textTransform="capitalize"
                                hasArrow
                            >
                                <Stack
                                    className="projectTech"
                                    as={Center}
                                    boxSize={{ base: "32px", lg: "80px" }}
                                    p={0}
                                >
                                    {ResponsiveIcons[tech]}
                                    <Text
                                        className="projectTechName"
                                    >
                                        {tech}
                                    </Text>
                                </Stack>
                            </Tooltip>
                        )
                    }
                </ModalFooter>
            </ModalContent>
        </Modal >
    )
}

export { ProjectDetailsModal };

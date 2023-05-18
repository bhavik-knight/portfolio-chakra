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
import { Flex, Wrap, Container } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Heading, Text, Divider, Spacer, Img } from "@chakra-ui/react"
import { UnorderedList, List, ListItem } from "@chakra-ui/react"
import { ResponsiveIcons } from "./ResponsiveIcons"
import "./ProjectDetailsModal.css"

function ProjectDetailsModal({ isOpen, onClose, project }) {

    return (
        <Modal onClose={onClose}
            isOpen={isOpen}
            isCentered
            size={{ base: "sm", lg: "6xl" }}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader as={Flex} wrap="wrap">
                    <Text>
                        {project.title} - Details
                    </Text>
                    <Spacer />
                    <ButtonGroup gap={2}>
                        <Button className="project-modal-footer-btns">Github</Button>
                        <Button className="project-modal-footer-btns">Links</Button>
                        <Button className="project-modal-footer-btns" onClick={onClose}>Close</Button>
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
                    <Card><Img src={project.displayImg} /></Card>
                </ModalBody>

                <ModalFooter as={Flex} justifyContent="center" gap={2} flexWrap="wrap">
                    {
                        project.technologies.map(t => {
                            ResponsiveIcons(t)
                        })
                    }
                </ModalFooter>
            </ModalContent>
        </Modal >
    )
}

export { ProjectDetailsModal };

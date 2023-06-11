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
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react"

import { useDisclosure } from "@chakra-ui/react"
import { Box, Flex, Stack, Center, Container } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Button, ButtonGroup, Tooltip } from "@chakra-ui/react"
import { Heading, Text, Divider, Spacer, Img } from "@chakra-ui/react"
import { UnorderedList, List, ListItem } from "@chakra-ui/react"
import { Image, Tag } from "@chakra-ui/react"
import { ResponsiveIcons } from "./ResponsiveIcons"
import { useState, useEffect, useCallback } from "react"
import { useMediaQuery } from "@chakra-ui/react"
import { RenderCarousel } from "./RenderCarousel"

function ProjectDetailsModal({ isOpen, onClose, project }) {
    const [cardWidth, setCardWidth] = useState(992)
    const [cardHeight, setCardHeight] = useState(512)

    const [isMobile] = useMediaQuery("(max-width: 768px)")
    useEffect(() => {
        if (isMobile) {
            setCardWidth(400)
            setCardHeight(200)
        } else {
            setCardWidth(992)
            setCardHeight(512)
        }

    }, [isMobile])

    // compute only once
    const projectImages = project.projectImgs !== "" && useCallback(
        project.projectImgs?.map(url => {
            return (
                <Box
                    key={nanoid()}
                    width={cardWidth}
                    height={cardHeight}
                    bgPosition="center center"
                    bgSize="contain"
                    bgColor="white"
                    bgImage={`url(${url})`}
                    bgRepeat="no-repeat"
                />
            )
        }),
        [project]
    )

    return (
        <Modal onClose={onClose}
            isOpen={isOpen}
            isCentered
            size={{ base: "2xl", lg: "6xl" }}
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
                        {
                            project.source != null && <Button className="project-detail-btns" onClick={() => window.open(project.source, "_blank")}>source</Button>
                        }
                        {
                            project.uri !== null &&
                            <Button className="project-detail-btns" onClick={() => window.open(project.uri, "_blank")}>link</Button>
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

                    {/* project images carousel */}
                    {/* <Card py={2}><Img src={project.displayImg} /></Card> */}
                    {
                        project.projectImgs !== "" &&
                        <RenderCarousel items={projectImages} cardWidth={cardWidth} cardHeight={cardHeight} />
                    }
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
                                    mx="auto"
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

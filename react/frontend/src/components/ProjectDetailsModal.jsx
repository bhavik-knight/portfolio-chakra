import "./ProjectDetailsModal.css"
import { RenderCarousel } from "./RenderCarousel"
import { ResponsiveIcons } from "./ResponsiveIcons"
import { CreateSkillBadge } from "./CreateSkillBadge"

import { nanoid } from "nanoid"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody } from "@chakra-ui/react"

import { Box, Flex, Stack } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Text, Divider, Spacer } from "@chakra-ui/react"
import { UnorderedList, ListItem } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { useMediaQuery, useColorModeValue } from "@chakra-ui/react"
import { useState, useEffect, useRef } from "react"


const textFontStyle = {
    fontSize: { base: "0.9em", md: "0.95em", lg: "1em" },
    textAlign: "justify",
    px: { base: 2, md: 4, lg: 8 },
    py: 2
}


function ProjectDetailsModal({ isOpen, onClose, project }) {
    // get dimension of the component before rendering
    // ref: https://stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render
    const carouselBoxRef = useRef()

    // to check the mobile or not
    const [isMobile] = useMediaQuery("(max-width: 992px)")

    function getCardWidth() {
        return Math.min(window.screen.availWidth, 980)
    }

    function getCardHeight(width) {
        // let screenObj = window.screen
        let isLandscape = window.innerWidth > window.innerHeight
        // if phone is held horizontally / landscape mode - width can be more than 2x to height
        // in otherwords aspect ratio can be bigger than 2:1 depending on phone
        // ~~that is why set height accordingly by taking 80% of height available without padding; margin~~
        // taking height as 40 % of the width on landscape mode
        // if phone is help vertically / portait mode - height is far more than width
        // in such cases we can take height 60% of the width
        let newHeight = isMobile ? (isLandscape ? width * 0.4 : width * 0.6) : width * 0.6
        // console.log(`project details modal: m ${isMobile}, ls: ${isLandscape}, w:${width}, h: ${newHeight}`)
        return Math.max(newHeight, 200)
    }

    // to keep track of the dimensions
    const [cardWidth, setCardWidth] = useState(() => getCardWidth())
    const [cardHeight, setCardHeight] = useState(() => getCardHeight(cardWidth))

    // to store all project images at once
    const [projectImages, setProjectImages] = useState(
        () => getProjectImages({ project, cardWidth, cardHeight })
    )

    useEffect(() => {
        // to handle what happens when screen resizes
        const handleResize = () => {
            // if carousel box is mounted (Modal is mounted), then we can track our box's dimensions
            // otherwise we must give the initial dimesions for our box
            if (carouselBoxRef.current) {
                let newWidth = Math.min(carouselBoxRef.current.offsetWidth, 980)
                let newHeight = getCardHeight(newWidth)
                setCardWidth(newWidth)
                setCardHeight(newHeight)
            } else {
                setCardWidth(getCardWidth())
                setCardHeight(getCardHeight(cardWidth))
            }

            setProjectImages(getProjectImages({ project, cardWidth, cardHeight }))
        }

        // to handle what happen when screen orientation is changed
        // we just want to set dimensions or our box on change of orientation; dimensions of the box are changed
        const handleOrientation = () => {
            handleResize()
        }

        handleResize()

        // listen for screen resize
        window.addEventListener("resize", handleResize)

        // listen for screen orientation change
        window.addEventListener("orientationchange", handleOrientation)

        // clean up code:
        // 1. remove handler of resize
        // 2. remove handle of screen orientation
        return () => {
            // console.log(`before return from effect hook: ${cardWidth}, ${cardHeight}`)
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("orientationchange", handleOrientation)
        }

    }, [cardWidth, cardHeight, isMobile])

    // some styles for the buttons: source; link; close
    const btnHoverStyle = {
        size: { base: "xs", md: "sm", lg: "md" },
        _hover: {
            color: `${useColorModeValue("blue", "cyan")}`,
            bg: `transparent`,
            border: `1px solid`
        }
    }

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            size={{ base: "md", md: "full", lg: "6xl" }}
        >
            <ModalOverlay />
            <ModalContent
                my={{ base: 2, lg: "auto" }}
            >

                <ModalHeader
                    as={Stack}
                    direction={{ base: "column", md: "row" }}
                    alignItems="center"
                    justifyContent={{ base: "center", lg: "space-between" }}
                >
                    <Text fontSize={{ base: "md", lg: "lg" }}>
                        {project.title} - Details
                    </Text>
                    <Spacer />
                    <ButtonGroup isAttached variant="outline">
                        {
                            project.source != null &&
                            <Button
                                leftIcon={ResponsiveIcons.skills.icon}
                                onClick={() => window.open(project.source, "_blank")}
                                bg="orange.500" color="white"
                                {...btnHoverStyle}
                            >
                                {ResponsiveIcons.source.name}
                            </Button>
                        }
                        {
                            project.uri !== null &&
                            <Button
                                rightIcon={ResponsiveIcons.link.icon}
                                onClick={() => window.open(project.uri, "_blank")}
                                bg="white" color="blue"
                                {...btnHoverStyle}
                            >
                                {ResponsiveIcons.link.name}
                            </Button>
                        }
                        <Button
                            rightIcon={ResponsiveIcons.close.icon}
                            onClick={onClose}
                            bg="green.600" color="white"
                            {...btnHoverStyle}
                        >
                            {ResponsiveIcons.close.name}
                        </Button>
                    </ButtonGroup>
                </ModalHeader>

                <Divider mx="auto" width="95%" my={0} />

                <ModalBody w="100%" px={{ base: 0, lg: 2 }}>
                    <Box px={{ base: 2, lg: 8 }}>
                        <UnorderedList {...textFontStyle}>
                            {
                                project.details.map(task => {
                                    return (
                                        <ListItem key={nanoid()}>
                                            {task}
                                        </ListItem>
                                    )
                                })

                            }
                        </UnorderedList>
                    </Box>
                    <Divider mx="auto" my={1} />

                    {/* project images carousel */}
                    <Box ref={carouselBoxRef} mx={0} px={0}>
                        {
                            project.projectImgs !== "" &&
                            <RenderCarousel
                                items={projectImages}
                                cardWidth={cardWidth}
                                cardHeight={cardHeight}
                            />
                        }
                    </Box>
                </ModalBody>

                <Divider mx="auto" width="95%" />

                <ModalFooter
                    mx="auto"
                    as={Flex}
                    justifyContent="space-evenly" spacing={1} flexWrap="wrap"
                    px={{ base: 0 }}
                >
                    {
                        project.technologies.map(tech => <CreateSkillBadge key={nanoid()} skill={tech} />)
                    }
                </ModalFooter>
            </ModalContent>
        </Modal >
    )
}


function getProjectImages({ project, cardWidth, cardHeight }) {
    let dataList = []
    project.projectImgs?.map(url => {
        // console.log(`creating imgs with dim: ${cardWidth}, ${cardHeight}`)
        let data = (
            <Box
                key={nanoid()}
                w={cardWidth}
                h={cardHeight}
            >
                <Image
                    src={url}
                    w={cardWidth}
                    h={cardHeight}
                    objectFit="contain"
                    objectPosition="top"
                />
            </Box>
        )
        dataList.push(data)
    })

    return dataList
}

export { ProjectDetailsModal };

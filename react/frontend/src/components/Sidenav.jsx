import { useState, useEffect } from "react"
import { Button, ButtonGroup, IconButton, Icon, Tooltip } from "@chakra-ui/react"
import { WrapItem, Text, Divider, Wrap, List, ListItem, Flex, useMediaQuery, useColorModeValue } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import { nanoid } from "nanoid"
import { ResponsiveIcons } from "./ResponsiveIcons"


const btnStyles = {
    variant: "ghost",
    _hover: { boxShadow: "1px 1px 8px" },
    p: { base: 0, md: 2, lg: 4 }
}


function Sidenav({ pages, activePage, selectPage, sidenavHeader }) {

    // to check the screen is large or not to display icons on sidenav buttons
    const [isMobile] = useMediaQuery("(max-width: 992px)")
    const topPosition = sidenavHeader ? 0 : { base: "50px", lg: "60px" }
    const bgColor = sidenavHeader ? "transparent" : { base: useColorModeValue("gray.100", "gray.800"), lg: "transparent" }
    const alignStyle = sidenavHeader ? "center" : "none"

    return (
        <Stack
            as={ButtonGroup}
            isAttached={isMobile}
            px={{ base: 0, lg: 2 }}
            py={{ base: 0, md: 2, lg: 4 }}
            m={0}
            spacing={0}
            w={{ base: "100vw", lg: "fit-content" }}
            h="fit-content"
            position="sticky"
            justify={{ base: "center", lg: "flex-start" }}
            alignItems={alignStyle}
            direction={{ base: "row", lg: "column" }}
            top={topPosition}
            bg={bgColor}
            zIndex={sidenavHeader ? 10 : 5}
        >
            {
                Object.keys(pages).map((page) => (
                    <CreateButton
                        key={nanoid()}
                        activePage={activePage}
                        selectPage={selectPage}
                        page={page}
                        isMobile={isMobile}
                    />
                ))
            }
        </Stack >
    )
}


function CreateButton({ isMobile, page, activePage, selectPage }) {
    return (
        <Tooltip
            hasArrow
            placement="auto"
            label={page}
            aria-label={page}
            textTransform="capitalize"
        >
            {
                isMobile ?
                    <IconButton
                        {...btnStyles}
                        className="btnIcon"
                        aria-label={page}
                        onClick={event => selectPage(event)}
                        isActive={page === activePage}
                        name={page}
                        icon={ResponsiveIcons[page].icon}
                    />
                    :
                    <Button
                        {...btnStyles}
                        borderRadius="1em"
                        aria-label={page}
                        onClick={(event) => selectPage(event)}
                        isActive={page === activePage}
                        name={page}
                        leftIcon={ResponsiveIcons[page].icon}
                        justifyContent="flex-start"
                        textTransform="capitalize"
                    >
                        {page}
                    </Button>
            }
        </Tooltip>
    )
}


export { Sidenav }

import { useState, useEffect } from "react"
import { Button, ButtonGroup, IconButton, Icon, Tooltip } from "@chakra-ui/react"
import { WrapItem, Text, Divider, Wrap, List, ListItem, Flex, useMediaQuery, useColorModeValue } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import { nanoid } from "nanoid"
import { ResponsiveIcons } from "./ResponsiveIcons"


const btnStyles = {
    variant: { base: "outline", lg: "ghost" },
    _hover: { boxShadow: "1px 1px 8px" },
    p: 4
}


function Sidenav({ pages, activePage, selectPage }) {

    // to check the screen is large or not to display icons on sidenav buttons
    const [isMobile] = useMediaQuery("(max-width: 992px)")

    return (
        <Stack
            as={ButtonGroup}
            isAttached
            py={{ base: 2, lg: 4 }} mx={0}
            spacing={0}
            left={0}
            w={{ base: "100vw", lg: "fit-content" }}
            h="fit-content"
            justify={{ base: "center", lg: "flex-start" }}
            direction={{ base: "row", lg: "column" }}
            position={{ base: "fixed", lg: "sticky" }}
            top={{ base: "50px", md: "50px", lg: "60px" }}
            bg={{ base: useColorModeValue("gray.100", "gray.800"), lg: "transparent" }}
            boxShadow={{ base: "1px 1px 8px", lg: "none" }}
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

        </Stack>
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

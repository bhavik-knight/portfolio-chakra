import { useState, useEffect } from "react"
import { Button, ButtonGroup, IconButton, Icon, Tooltip } from "@chakra-ui/react"
import { WrapItem, Text, Divider, Stack, Wrap, List, ListItem, Flex, useMediaQuery } from "@chakra-ui/react"
import { nanoid } from "nanoid"

function Sidenav({ pages, activePage, selectPage }) {

    // to check the screen is large or not to display icons on sidenav buttons
    const [isLarge] = useMediaQuery("(min-width: 992px)")

    return (
        <Stack
            // bg="lightgreen"
            className="sidenav"
            as="aside"
            width={{ base: "100%", lg: "fit-content" }}
            height={{ base: "fit-content" }}
            justifyContent={{ base: "center", lg: "flex-start" }}
            direction={{ base: "row", lg: "column" }}
            pt={{ base: 0, lg: 2 }}
            mt="60px"
            px={0}
            mx={0}
            left={0}
            position={{ base: "sticky", lg: "sticky" }}
        >
            {
                Object.keys(pages).map((page) => {
                    return (
                        <Tooltip
                            hasArrow
                            placement="auto"
                            key={nanoid()}
                            label={page}
                            aria-label={page}
                            textTransform="capitalize"
                        >
                            {/* <ButtonGroup> */}
                            <ButtonGroup
                                // bg="red"
                                isAttached
                                vairant="outline"
                                size={{ base: "md", md: "lg", lg: "md" }}
                            >
                                {
                                    isLarge ?
                                        <Button
                                            onClick={(event) => selectPage(event)}
                                            isActive={page === activePage}
                                            name={page}
                                            leftIcon={pages[page].icon}
                                            borderRadius="10px"
                                            width="100%"
                                            justifyContent="flex-start"
                                            textTransform="capitalize"
                                            px={0}
                                            m={0}
                                        >
                                            {page}
                                        </Button>
                                        :
                                        <IconButton
                                            onClick={event => selectPage(event)}
                                            isActive={page === activePage}
                                            name={page}
                                            icon={pages[page].icon}
                                            p={0}
                                        />
                                }
                            </ButtonGroup>
                        </Tooltip >
                    )
                })
            }
        </Stack>
    )
}

export { Sidenav }

// <Button
//     className="sidenavButton"
//     variant="ghost"
//     onClick={(event) => selectPage(event)}
//     isActive={page === activePage}
//     name={page}
//     leftIcon={pages[page].icon}
//     size={{ base: "sm", lg: "md" }}
// >
//     {
//         isLarge &&
//         <Text className="sidenavButtonText">
//             {page}
//         </Text>
//     }
// </Button>

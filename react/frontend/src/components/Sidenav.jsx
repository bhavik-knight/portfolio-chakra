import "./Sidenav.css"
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
            width={{ base: "100%", lg: "10%" }}
            height={{ base: "fit-content" }}
            justifyContent={{ base: "center", lg: "flex-start" }}
            direction={{ base: "row", lg: "column" }}
            pt={{ base: 0, lg: 2 }}
            mt="60px"
            position="sticky"
            left={0}
        >
            {
                Object.keys(pages).map((page) => {
                    return (
                        <Tooltip
                            hasArrow
                            placement="right"
                            key={nanoid()}
                            label={page}
                            aria-label={page}
                            textTransform="capitalize"
                        >
                            {/* <ButtonGroup> */}
                            <ButtonGroup>
                                {
                                    isLarge ?
                                        <Button
                                            variant="ghost"
                                            onClick={(event) => selectPage(event)}
                                            isActive={page === activePage}
                                            name={page}
                                            leftIcon={pages[page].icon}
                                            borderRadius="10px"
                                            width="100%"
                                            justifyContent="flex-start"
                                            px={2}
                                        >
                                            <Text textTransform="capitalize">
                                                {page}
                                            </Text>
                                        </Button>
                                        :
                                        <IconButton
                                            variant="ghost"
                                            onClick={event => selectPage(event)}
                                            isActive={page === activePage}
                                            name={page}
                                            icon={pages[page].icon}
                                        />
                                }
                            </ButtonGroup>
                            {/* </ButtonGroup> */}
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

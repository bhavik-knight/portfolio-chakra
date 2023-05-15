import { useState, useEffect } from "react"
import { Button, ButtonGroup, IconButton, Icon, Tooltip } from "@chakra-ui/react"
import { WrapItem, Text, Divider, Stack, Wrap, List, ListItem, Flex, useMediaQuery } from "@chakra-ui/react"
import { nanoid } from "nanoid"

function Sidenav({ pages, activePage, selectPage }) {

    // to check the screen is large or not to display icons on sidenav buttons
    const [isLarge] = useMediaQuery("(min-width: 992px)")

    return (
        Object.keys(pages).map((page) => {
            console.log(`buttonicon - ${JSON.stringify(pages[page].icon)}`)
            return (
                <Tooltip
                    hasArrow
                    placement="right"
                    key={nanoid()}
                    label={page}
                    aria-label={page}
                    textTransform="capitalize"
                >
                    <Button
                        key={nanoid()}
                        className="sidenavButton"
                        variant="ghost"
                        onClick={(event) => selectPage(event)}
                        isActive={page === activePage}
                        name={page}
                        leftIcon={pages[page].icon}
                    >
                        {
                            isLarge &&
                            <Text className="sidenavButtonText">
                                {page}
                            </Text>
                        }
                    </Button>
                </Tooltip >
            )
        })
    )
}

export { Sidenav }

import { List, ListItem, Button, ButtonGroup, IconButton, Icon, Flex } from "@chakra-ui/react"
import { nanoid } from "nanoid"
import {
    FaHome,
    FaTools,
    MdWork,
    GiFilmProjector,
    MdSchool,
    FaAward
} from "./Icons"

function Sidenav(props) {
    const icons = {
        "home": <FaHome />,
        "skills": <FaTools />,
        "projects": <GiFilmProjector />,
        "education": <MdSchool />,
        "certificates": <FaAward />,
        "experiences": <MdWork />,
    }

    return (
        <Flex flexWrap="wrap" flexDirection={{ base: "row", md: "column" }}>
            {
                props.pages.map(page => {
                    return (
                        <Button
                            key={nanoid()}
                            name={page}
                            variant="solid"
                            colorScheme="blackAlpha"
                            className="sidenavButton"
                            onClick={(event) => props.selectPage(event)}
                            isActive={page === props.activePage}
                            leftIcon={icons[page]}
                            size={{ base: "sm", md: "lg" }}
                            width={{ base: "fit-content", md: "200px" }}
                        >
                            {page}
                        </Button >
                    )
                })
            }
        </Flex>
    )
}

export { Sidenav }

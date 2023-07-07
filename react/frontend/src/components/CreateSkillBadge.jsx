import { ResponsiveIcons } from "./ResponsiveIcons"

import { VStack, Center } from "@chakra-ui/react"
import { Text, Tooltip } from "@chakra-ui/react"


function CreateSkillBadge({ skill }) {
    let skillName = ResponsiveIcons[skill]?.name || skill
    let skillFullName = ResponsiveIcons[skill]?.fullName || skillName

    return (
        <Tooltip
            label={skillFullName}
            aria-label={skillFullName}
            hasArrow
        >

            <VStack
                className="skillBadge"
                as={Center}
                p={2}
                mx="auto"
                w={{ base: "fit-content", lg: "90px" }}
                _hover={{ boxShadow: "1px 1px 8px" }}
            >
                {ResponsiveIcons[skill]?.icon}
                <Text fontSize="sm" textAlign="center">
                    {skillName}
                </Text>
            </VStack>
        </Tooltip>
    )
}

export { CreateSkillBadge }

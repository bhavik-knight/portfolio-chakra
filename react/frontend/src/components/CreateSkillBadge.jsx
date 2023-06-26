import { VStack, Center } from "@chakra-ui/react"
import { Text, Tooltip } from "@chakra-ui/react"
import { ResponsiveIcons } from "./ResponsiveIcons"


function CreateSkillBadge({ skill }) {
    let skillName =
        ResponsiveIcons[skill]?.fullName ||
        ResponsiveIcons[skill]?.name ||
        skill

    return (
        <Tooltip
            label={skillName}
            aria-label={skillName}
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

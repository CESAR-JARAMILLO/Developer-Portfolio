import { Box, Text } from '@chakra-ui/react'

const ExperienceBox = ({ language, experience }) => {
  return (
    <Box bg="gray.700" color="white" borderRadius="md" padding="4" textAlign="center">
      <Text fontWeight="bold">{language}</Text>
      <Text>{experience}+ years of experience</Text>
    </Box>
  )
}

export default ExperienceBox

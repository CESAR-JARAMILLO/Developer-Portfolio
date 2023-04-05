import { Box, Text } from '@chakra-ui/react'

const ExperienceBox = ({ language, experience }) => {
  return (
    <Box bg="gray.700" color="white" borderRadius="md" padding="6" textAlign="center">
      <Text fontWeight="bold" fontSize="xl">{language}</Text>
      <Text fontSize="lg">{experience}+ years of experience</Text>
    </Box>
  )
}

export default ExperienceBox

import { Box, Image, Heading, Text, Link, Tag, TagLabel } from '@chakra-ui/react'

const ProjectCard = ({ project }) => {
  const { title, description, image, link, tags } = project;

  return (
    <Box bg="gray.800" color="white" borderRadius="md" overflow="hidden" boxShadow="md">
      <Image src={image} alt={title} />

      <Box padding="4" textAlign="left">
        <Heading as="h3" size="md">{title}</Heading>
        <Text mt={2} mb={2}>{description}</Text>
        <Box mt="2" display="flex" justifyContent="flex-start">
          {tags.map(tag => (
            <Tag key={tag} size="md" borderRadius="full" variant="solid" colorScheme="green" mr="2">
              <TagLabel>{tag}</TagLabel>
            </Tag>
          ))}
        </Box>
        <Link href={link} target="_blank" rel="noopener noreferrer" mt="2" display="inline-block">
          View project
        </Link>
      </Box>
    </Box>
  )
}

export default ProjectCard;

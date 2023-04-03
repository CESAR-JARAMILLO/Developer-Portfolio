import { Box, Image, Heading, Text, Link, Tag, TagLabel } from '@chakra-ui/react'

const ProjectCard = ({ project }) => {
  const { title, description, image, link, tags } = project;

  return (
    <Box bg="white" borderRadius="md" overflow="hidden" boxShadow="md">
      <Image src={image} alt={title} />

      <Box padding="4" textAlign="center">
        <Heading as="h3" size="md">{title}</Heading>
        <Text>{description}</Text>
        <Box mt="2" display="flex" justifyContent="center">
          {tags.map(tag => (
            <Tag key={tag} size="md" borderRadius="full" variant="solid" colorScheme="purple" mr="2">
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

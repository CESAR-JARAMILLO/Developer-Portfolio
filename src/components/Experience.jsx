import { Container, Stack, Grid, GridItem } from '@chakra-ui/react'
import ExperienceBox from './ExperienceBox'

const Experience = () => {
  return (
    <Container maxW="container.md">
      <Stack paddingY="8" spacing="4" align="center">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)"
          }}
          gap="4"
        >
          <GridItem>
            <ExperienceBox language="JavaScript" experience="6" />
          </GridItem>

          <GridItem>
            <ExperienceBox language="React" experience="4" />
          </GridItem>

          <GridItem>
            <ExperienceBox language="Node.js" experience="4" />
          </GridItem>

          <GridItem>
            <ExperienceBox language="Express" experience="4" />
          </GridItem>

          <GridItem>
            <ExperienceBox language="MongoDB" experience="4" />
          </GridItem>

          <GridItem>
            <ExperienceBox language="MySQL" experience="4" />
          </GridItem>

          <GridItem>
            <ExperienceBox language="HTML" experience="6" />
          </GridItem>

          <GridItem>
            <ExperienceBox language="CSS" experience="6" />
          </GridItem>
        </Grid>
      </Stack>
    </Container>
  )
}

export default Experience

import resume from './components/resume.json'

import Provider from './components/Provider'
import { Center, Container, Group, Space, Text, Accordion, Flex } from '@mantine/core'

const colors = ['#EBDCEE', '#4E4351', '#B4A7B7', '#BEE9E4', '#88B2AD']

const Resume = () => {
  return (
    <>
      <Provider>
        <Container size="md">
          <Container size="sm">
            <Center>
              <Text size="xl" weight={700} style={{ marginBottom: '1rem' }}>
                {resume.name}
              </Text>
            </Center>
            <Text size="lg" style={{ marginBottom: '1rem' }}>
              {resume.summary}
            </Text>
          </Container>
          <Container size="md">
            <Text size="lg" weight={700} style={{ marginBottom: '1rem' }}>
              Employment:
            </Text>
            <Accordion
              chevronPosition="right"
              style={{ marginBottom: '1.5rem' }}
              multiple={true}
              radius="md"
              transitionDuration={800}
            >
              {resume.employment.map((job, index) => (
                <Accordion.Item key={index} value={job.company}>
                  <Accordion.Control style={{ backgroundColor: 'transparent' }}>
                    <Group>
                      <Text size="md" weight={700}>
                        {job.company}
                      </Text>
                      <Text size="md" style={{ fontStyle: 'italic' }}>
                        {job.location}
                      </Text>
                      <Text size="md">
                        {job.duration.start} - {job.duration.end}
                      </Text>
                    </Group>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Group>
                      <Text size="md" weight={700}>
                        {job.position}
                      </Text>
                      {job.location && (
                        <Text size="md" style={{ fontStyle: 'italic' }}>
                          {job.location}
                        </Text>
                      )}
                      <Text size="md">
                        {job.duration.start} - {job.duration.end}
                      </Text>
                      <Text size="md">{job.description}</Text>
                    </Group>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Container>
          <Container size="md">
            <Text size="lg" weight={700} style={{ marginBottom: '1rem' }}>
              {`Skills`}
            </Text>
            <Flex
              direction="row"
              justify={'space-around'}
              wrap={'wrap'}
              style={{ marginBottom: '1rem' }}
            >
              {resume.skills.programmingSkills.map((skill, index) => {
                return <Text size={'sm'} key={index}>{`${skill},`}</Text>
              })}
            </Flex>

            <Text size="lg" weight={700} style={{ marginBottom: '1rem' }}>
              Education:
            </Text>
            <Text size="lg" style={{ marginBottom: '1rem' }}>
              {resume.education.university}
            </Text>
            <ul>
              {resume.education.degrees.map((degree, index) => (
                <Text size={'sm'} key={index}>
                  {degree}
                </Text>
              ))}
            </ul>
          </Container>
        </Container>
      </Provider>
    </>
  )
}

export default Resume

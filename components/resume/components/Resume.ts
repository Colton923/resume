export type Resume = {
  name: string
  residence: string
  links: {
    email: string
    linkedIn: string
  }
  summary: string
  education: {
    university: string
    degrees: string[]
  }
  employment: {
    company: string
    position: string
    location?: string
    duration: {
      start: string
      end: string
    }
    description: string
  }[]
  skills: {
    programmingSkills: string[]
    engineeringSkills: string[]
  }
}

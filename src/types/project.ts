export type ProjectCategory =
  | 'Computer Vision'
  | 'Generative AI'
  | 'Edge AI'
  | 'AI Infrastructure'
  | 'Robotics'
  | 'Backend'
  | 'Desktop'
  | 'Research'

export type ProjectStatus = 'Shipped' | 'In Progress' | 'Prototype' | 'Archived'

export type ProjectOrigin = 'Personal' | 'Company'

export interface Project {
  slug: string
  title: string
  summary: string
  categories: ProjectCategory[]
  technologies: string[]
  status: ProjectStatus
  duration: string
  origin: ProjectOrigin
  company?: string
  location?: string
  featured?: boolean
  coverImage?: string
  links?: {
    repo?: string
    demo?: string
  }
}

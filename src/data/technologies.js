import { nestjs, nodejs, javascript, typescript, react, mysql, express, git, tailwind, docker, sequelize }  from '../assets/logos'
import names from './listTechnologies'

export const technologies = {
  javascript: {
    name: names.javascript, 
    image: javascript,
    description: '',
  },
  typescript: {
    name: names.typescript, 
    image: typescript,
    description: '',
  },
  nodejs: {
    name: names.nodejs, 
    image: nodejs,
    description: '',
  },
  express: {
    name: names.express, 
    image: express,
    description: '',
  },
  nestjs: {
    name: names.nestjs, 
    image: nestjs,
    description: '',
  },
  react: {
    name: names.react, 
    image: react,
    description: '',
  },
  mysql: {
    name: names.mysql, 
    image: mysql,
    description: '',
  },
  sequelize: {
    name: names.sequelize,
    image: sequelize,
    description: '',
  },
  git: {
    name: names.git,
    image: git,
    description: '',
  },
  docker: {
    name: names.docker,
    image: docker,
    description: '',
  },
  tailwind: {
    name: names.tailwind,
    image: tailwind,
    description: '',
  }
}


export const technologyCategories = {
  lenguages: [
    technologies.javascript,
    technologies.typescript,
  ],
  backend: [
    technologies.nodejs,
    technologies.express,
    technologies.nestjs,
  ],
  frontend: [
    technologies.react,
    technologies.tailwind,
  ],
  databases: [
    technologies.mysql,
  ],
  orms: [
    technologies.sequelize,
  ],
  tools: [
    technologies.git,
    technologies.docker,
  ]
}
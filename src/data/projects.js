import { sequelize } from '../assets/logos';
import nameTechnologies from './listTechnologies'
const { javascript, typescript, nodejs, express, react, mysql } = nameTechnologies

const projects = [
  {
    name: 'Api de Tienda.',
    description: 'Api Restfull para tienda en linea',
    image: 'http://',
    github: 'http://',
    web: '',
    postman: 'http://',
    technologies: [
      typescript,
      nodejs,
      express,
      mysql,
      sequelize
    ]
  },
  {
    name: 'Google drive local',
    description: 'Clon de google drive',
    image: 'http://',
    github: 'http://',
    web: 'http://',
    postman: 'http://',
    technologies: [
      javascript,
      nodejs,
      express,
      react,
    ]
  },
  {
    name: 'Página del clima',
    description: 'Página del clima',
    image: 'http://',
    github: 'http://',
    web: 'http://',
    postman: '',
    technologies: [
      react,
    ]
  }
]

export default projects;
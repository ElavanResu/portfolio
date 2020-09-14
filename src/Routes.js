
import Home from './views/Home'
import About from './views/About'
import Skills from './views/Skills'
import Work from './views/Work'
import ProjectDetails from './views/Work/ProjectDetails'
import Contact from './views/Contact'

const navBarRoutes = [
  {
    routeName: 'home',
    iconName: 'home',
    component: Home
  },
  {
    routeName: 'about',
    iconName: 'about',
    component: About
  },
  {
    routeName: 'skills',
    iconName: 'skills',
    component: Skills
  },
  {
    routeName: 'work',
    iconName: 'work',
    component: Work,
    children: [
      {
        routeName: 'e-bot',
        childProps: {
          id: 'e-bot',
          title: 'E-Bot',
          cardImgUrl: 'https://i.imgur.com/9qRzZfs.jpg',
          backCardImgUrl: 'https://i.imgur.com/2esy9Az.jpg',
          tags: ['NodeJS', 'MongoDB'],
          githubLink: 'https://github.com/ElavanResu/e-bot',
          inDevelopment: true
        },
        component: ProjectDetails
      },
      {
        routeName: 'expense-tracker',
        childProps: {
          id: 'expense-tracker',
          title: 'Expense App',
          cardImgUrl: 'https://i.imgur.com/9qRzZfs.jpg',
          backCardImgUrl: 'https://i.imgur.com/2esy9Az.jpg',
          tags: ['React Native', 'CSS', 'Watermelon DB'],
          githubLink: 'https://github.com/ElavanResu/ExpenseTracker',
          inDevelopment: true
        },
        component: ProjectDetails
      }
    ]
  },
  {
    routeName: 'contact',
    iconName: 'contact',
    component: Contact
  }
]

export {
  navBarRoutes
}

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
          banner: 'https://i.imgur.com/KGuzIQc.jpg',
          backCardImgUrl: 'https://i.imgur.com/2esy9Az.jpg',
          tags: ['NodeJS', 'MongoDB', 'JavaScript'],
          githubLink: 'https://github.com/ElavanResu/e-bot',
          inDevelopment: true,
          shortDescription: 'An easy to use discord bot with auto-moderation, music, social alerts, fun, memes, and much more!',
          about: [
            'E-Bot is an easy to use discord developed with NodeJS and Discord JS library. It\'s an all-in-one discord bot that offers auto-moderation, administrative privileges, music, social integration like youtube notifications, fun, and meme generator.',
            'Its auto-moderation features will help your discord server to manage all the tiresome role assignment. Quickly create moderators to help your server maintain peace by using advance administrative privilege features.',
            'Its music feature allows users to hear high-quality on-demand music. It searches the song on YouTube based on the search string. Users can add/remove songs in the queue or browse through the queue.'
          ]
        },
        component: ProjectDetails
      },
      {
        routeName: 'expense-tracker',
        childProps: {
          id: 'expense-tracker',
          title: 'Expense Tracker',
          cardImgUrl: 'https://i.imgur.com/9qRzZfs.jpg',
          banner: 'https://i.imgur.com/KGuzIQc.jpg',
          backCardImgUrl: 'https://i.imgur.com/2esy9Az.jpg',
          tags: ['React Native', 'CSS', 'JavaScript', 'Watermelon DB', 'NodeJS', 'Express', 'MongoDB'],
          githubLink: 'https://github.com/ElavanResu/ExpenseTracker',
          inDevelopment: true,
          shortDescription: 'A small and handy expense tracker which monitors and tracks your expenses',
          about: [
            'Expense tracker is a handy expense app which is made by React Native and watermelongDB which helps user to categorize and observe their daily expenses.',
            'It allows the user to enter any new detail in the absence of the internet. It syncs the data back to the servers once the internet is back.'
          ]
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
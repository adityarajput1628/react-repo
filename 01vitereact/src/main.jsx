import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp() {

  return (
    <h1>Hello, from main + React!</h1>
  )
}

const reactElement = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
        children:'Google'
    }
}

const anotherElement = (<a href="https://www.google.com" target="_blank">Google</a>)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    <App />
    {anotherElement}
  </StrictMode>,
)

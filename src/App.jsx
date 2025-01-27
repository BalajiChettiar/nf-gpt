// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Body from "../src/components/Body"
import Header from "../src/components/Header"
import {Provider} from "react-redux"
import appStore from "./utils/appStore"

function App() {
  

  return (<>
   <Provider store={appStore}>
   <Body></Body> </Provider></>
  
  )
}

export default App

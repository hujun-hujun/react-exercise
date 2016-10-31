import React from 'react'
import { render } from 'react-dom'

// import TextDemo from "./components/demo1"

import TextDemo from "./components/demo2"

render(
  <TextDemo>question</TextDemo>, 
  document.getElementById('mountNode')
)

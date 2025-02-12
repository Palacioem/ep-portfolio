
import './App.css'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import { MantineProvider} from '@mantine/core';
import Portfolio from './pages/Portfolio';


function App() {
  
  

 
  return (
    <MantineProvider >
      <Portfolio/>
    </MantineProvider>
  )
}

export default App

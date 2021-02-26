import { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ResponsiveContext, ResponsiveContextProvider, DrawerContextProvider } from '@materialios/contexts'

const Materialios = ({ children }) => {
  const responsive = useContext(ResponsiveContext)

  const className = `Materialios ${responsive && responsive.className}`
  const style = {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }

  return (
    <div
      className={className}
      style={style}
    >
      {children}
    </div>
  )
}

/**
 * MaterialiosProvider
 */
const MaterialiosProvider = ({ children }) => {
  return (
    <Router>
      <ResponsiveContextProvider>
        <DrawerContextProvider>
          <Materialios>
            {children}
          </Materialios>
        </DrawerContextProvider>
      </ResponsiveContextProvider>
    </Router>
  )
}

export default MaterialiosProvider

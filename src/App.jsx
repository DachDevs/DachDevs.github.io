import './App.css'
import CircleFollower from './components/CircleFollower'
import Navbar from './components/Navbar'
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import CustomCursor from './Scripts/CustomCursor'
import Card from './components/Card'
import Main from './components/Main'
import Presentations from './components/Presentations'
import SectionTitle from './components/SectionTitle'
import Projects from './components/Projects'
import { useState } from 'react'

function App() {

  const [images, setImages] = useState([])

  return (
    <>
      <div className='main--'>
        <ShaderGradientCanvas
          importedFiber={{ ...fiber, ...drei, ...reactSpring }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <ShaderGradient
            control='query'
            urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.7&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%235606FF&color2=%23260000&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=off&lightType=3d&pixelDensity=1&positionX=-0.5&positionY=0.1&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.1&uFrequency=5.5&uSpeed=0.1&uStrength=2.4&uTime=0.2&wireframe=false'
          />
        </ShaderGradientCanvas>
      </div>
      <div className='main-'>
        <Navbar />
        <div>
          <Main />
          <SectionTitle title='Devs GITHUB Profiles' />
          <Presentations setImages={setImages} />
          <SectionTitle title='Experience' />
          <Card />
          <SectionTitle title='Some GITHUB Projects' />
          <Projects images={images} />
          {/* <CircleFollower /> */}
          <footer>
            <p>&copy; 2024 Dach Devs. Todos los derechos reservados.</p>
          </footer>
          <CustomCursor />
        </div>
      </div>
    </>
  )
}

export default App

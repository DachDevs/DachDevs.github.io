/* eslint-disable react/prop-types */
import '../styles/Socials.css'

const Socials = ({ images }) => {
  return (
    <div className='socials-container'>
      {
        images.map((item, index) => (
          <div key={index}>
            <img className='profile-image-contact' src={item} alt="Avatar" />
            <div>
              <span>
                {
                  [
                    'Henny M. Feliz',
                    'Carlos M. Ramirez',
                    'Darlin Ruben Nina'
                  ][index]
                }
              </span>
            </div>
            {
              index !== images.length - 1 ? <hr /> : null
            }
          </div>
        ))
      }
    </div>
  )
}

export default Socials
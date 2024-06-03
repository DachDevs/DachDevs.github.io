import '../styles/Card.css'
import CardRandomElements from '../Scripts/CardRandomElements.js'
import { useEffect } from 'react';

const Card = () => {

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(element => {
      element.classList.add('animate');
    });
  }, []);

  return (
    <div className='card-container'>
      {
        CardRandomElements.map((element, index) => (
          <div className='card fade-up' key={index}>
            <div className='card-content'>
              <div>
              </div>
              <div>
                <span>{element.position}</span>
                <span>{element.duration}</span>
                <span>{element.location}</span>
                <p>{element.description}</p>
                <div>
                  {
                    element.skills.map((tag, index) => (
                      <span className='skills' key={index}>{tag}</span>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Card
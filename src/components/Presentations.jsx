import { useEffect, useState } from 'react'
import '../styles/Presentations.css'

const Presentations = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(element => {
      element.classList.add('animate');
    });
    getGithubData();
  }, [])

  const getGithubData = () => {
    Promise.all([
      'hennyfeliz',
      'CarlosRamirez31',
      'Ruben890'
    ].map(user =>
      fetch(`https://api.github.com/users/${user}`)
        .then(response => response.json())
    ))
      .then(users => {
        setData(users);
      })
      .catch(error => console.error('Error al obtener los datos del perfil:', error));
  };

  return (
    <div className="presentations-container fade-up">
      {data.map((user, index) => (
        <div key={index}>
          <div>

          </div>
          <img src={user.avatar_url} alt="Avatar" />
          <div className='presentation-content'>
            <span>{user.name}</span>
            <span>{user.location}</span>
            <p>{user.bio}</p>
            <div>
              <span>
                <ion-icon name="people"></ion-icon>
                followers
                <strong>{user.followers}</strong>
              </span>
              ·
              <span>
                following
                <strong>{user.following}</strong>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Presentations
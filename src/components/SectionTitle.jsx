/* eslint-disable react/prop-types */
import '../styles/SectionTitle.css';

const SectionTitle = ({ title }) => {

  return (
    <div className='section-title'>
      {/* <hr /> */}
      <h1>{title}</h1>
    </div>
  );
}

export default SectionTitle;

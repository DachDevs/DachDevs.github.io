/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import Pcilustration from '../assets/Ilustrations/Pcilustration'
import '../styles/FistComponentStyles.css'

const FirstComponent = () => {

  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = typewriterRef.current;
    const text = "ach Devs Team";
    let index = 0;
    let typingInterval;
    let repeatInterval;

    const typingEffect = () => {
      if (index < text.length) {
        typewriter.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    };

    const startTypingEffect = () => {
      typewriter.innerHTML = 'D'; // Clear the text before starting
      index = 0; // Reset index
      typingInterval = setInterval(typingEffect, 100);
    };

    startTypingEffect();
    repeatInterval = setInterval(startTypingEffect, 6000); // Repeat every 3 seconds

    return () => {
      clearInterval(typingInterval);
      clearInterval(repeatInterval);
    };
  }, []);


  return (
    <div className="first-component-container">
      <div className="typewriter">
        <h1 ref={typewriterRef}></h1>
        <p>A dev small team that will design the best app possible for you</p>
        <div className='first-component-icons'>
          <section className="flex justify-center items-center">
            <button
              className="group button-style"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"
                width="1em"
                height="1.1em"
                strokeWidth="0"
                stroke="currentColor"
                className="icon-size" id="Linkedin-Logo--Streamline-Plump" ><desc>Linkedin Logo Streamline Icon: https://streamlinehq.com</desc><g id="linkedin--network-linkedin-professional"><path id="in" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M3 7.771C3 5.071 5.22 3 7.887 3c2.72 0 4.888 2.013 4.888 4.771 0 2.73 -2.221 4.713 -4.888 4.713C5.273 12.484 3 10.444 3 7.771Z" strokeWidth="3"></path><path id="in_2" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M26.844 28.216v13.32c0 1.786 -1.196 3.37 -2.98 3.444 -0.34 0.014 -0.675 0.02 -1.003 0.02 -2.74 0 -4.861 -0.87 -4.861 -3.904V23.805c0 -1.774 1.033 -3.065 2.46 -4.016C23.727 17.649 27.933 17 31.764 17 38.302 17 45 19.824 45 27.263v14.273c0 1.786 -1.195 3.373 -2.98 3.446 -0.319 0.013 -0.635 0.018 -0.944 0.018 -2.785 0 -4.861 -0.832 -4.861 -3.904V28.542c0 -2.677 -2.075 -3.96 -4.569 -3.96 -0.85 0 -1.687 0.107 -2.5 0.31 -1.465 0.367 -2.302 1.814 -2.302 3.324Z" strokeWidth="3"></path><path id="Rectangle 1095" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M9.182 17.047c1.688 0.14 2.672 1.639 2.712 3.332C11.945 22.522 12 25.994 12 31s-0.055 8.478 -0.106 10.62c-0.04 1.694 -1.024 3.192 -2.712 3.333 -0.355 0.03 -0.748 0.047 -1.182 0.047 -0.434 0 -0.827 -0.018 -1.182 -0.047 -1.688 -0.14 -2.672 -1.639 -2.712 -3.332C4.055 39.478 4 36.006 4 31s0.055 -8.478 0.106 -10.62c0.04 -1.694 1.024 -3.192 2.712 -3.333C7.173 17.017 7.566 17 8 17c0.434 0 0.827 0.018 1.182 0.047Z" strokeWidth="3"></path></g></svg>
              <span
                className="tooltip"
              >
                Linkedin
              </span>
            </button>
            <button className="group button-style">
              <svg width="1em"
                height="1.1em"
                strokeWidth="0"
                stroke="currentColor"
                className="icon-size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.29183 21V18.4407L9.3255 16.6219C9.36595 16.0561 9.58639 15.5228 9.94907 15.11C9.95438 15.1039 9.95972 15.0979 9.9651 15.0919C9.9791 15.0763 9.96988 15.0511 9.94907 15.0485V15.0485C7.52554 14.746 5.0005 13.7227 5.0005 9.26749C4.9847 8.17021 5.3427 7.10648 6.00437 6.27215C6.02752 6.24297 6.05103 6.21406 6.07492 6.18545V6.18545C6.10601 6.1482 6.11618 6.09772 6.10194 6.05134C6.10107 6.04853 6.10021 6.04571 6.09935 6.04289C6.0832 5.9899 6.06804 5.93666 6.05388 5.88321C5.81065 4.96474 5.86295 3.98363 6.20527 3.09818C6.20779 3.09164 6.21034 3.08511 6.2129 3.07858C6.22568 3.04599 6.25251 3.02108 6.28698 3.01493V3.01493C6.50189 2.97661 7.37036 2.92534 9.03298 4.07346C9.08473 4.10919 9.13724 4.14609 9.19053 4.18418V4.18418C9.22901 4.21168 9.27794 4.22011 9.32344 4.20716C9.32487 4.20675 9.32631 4.20634 9.32774 4.20593C9.41699 4.18056 9.50648 4.15649 9.59617 4.1337C11.1766 3.73226 12.8234 3.73226 14.4038 4.1337C14.4889 4.1553 14.5737 4.17807 14.6584 4.20199C14.6602 4.20252 14.6621 4.20304 14.6639 4.20356C14.7174 4.21872 14.7749 4.20882 14.8202 4.17653V4.17653C14.8698 4.14114 14.9187 4.10679 14.967 4.07346C16.6257 2.92776 17.4894 2.9764 17.7053 3.01469V3.01469C17.7404 3.02092 17.7678 3.04628 17.781 3.07946C17.7827 3.08373 17.7843 3.08799 17.786 3.09226C18.1341 3.97811 18.1894 4.96214 17.946 5.88321C17.9315 5.93811 17.9159 5.9928 17.8993 6.04723V6.04723C17.8843 6.09618 17.8951 6.14942 17.9278 6.18875C17.9289 6.18998 17.9299 6.19121 17.9309 6.19245C17.9528 6.21877 17.9744 6.24534 17.9956 6.27215C18.6573 7.10648 19.0153 8.17021 18.9995 9.26749C18.9995 13.747 16.4565 14.7435 14.0214 15.015V15.015C14.0073 15.0165 14.001 15.0334 14.0105 15.0439C14.0141 15.0479 14.0178 15.0519 14.0214 15.0559C14.2671 15.3296 14.4577 15.6544 14.5811 16.0103C14.7101 16.3824 14.7626 16.7797 14.7351 17.1754V21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M4 17C4.36915 17.0523 4.72159 17.1883 5.03065 17.3975C5.3397 17.6068 5.59726 17.8838 5.7838 18.2078C5.94231 18.4962 6.15601 18.7504 6.41264 18.9557C6.66927 19.161 6.96379 19.3135 7.27929 19.4043C7.59478 19.4952 7.92504 19.5226 8.25112 19.485C8.5772 19.4475 8.89268 19.3457 9.17946 19.1855" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              <span
                className="tooltip"
              >
                GitHub
              </span>
            </button>
            <button className="group button-style">
              <svg height="1.1em"
                strokeWidth="0"
                stroke="currentColor"
                className="icon-size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#ffffff"></path> </g></svg>
              <span className="tooltip">Facebook</span>
            </button>
            <button className="group button-style">
              <svg fill="#ffffff" width="1em"
                height="1.1em"
                strokeWidth="0"
                stroke="currentColor"
                className="icon-size" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>onlyfans</title> <path d="M16.165 17.236h0.038c0.007-0 0.016-0 0.025-0 0.95 0 1.721 0.77 1.721 1.721 0 0.726-0.449 1.347-1.085 1.599l-0.012 0.004h-0.107v1.445c0 0.001 0 0.002 0 0.003 0 0.221-0.115 0.416-0.288 0.527l-0.002 0.002h-0.639c-0.18-0.116-0.298-0.315-0.3-0.542v-1.434c-0.647-0.257-1.096-0.878-1.096-1.603 0-0.95 0.77-1.721 1.721-1.721 0.009 0 0.018 0 0.027 0l-0.001-0zM15.585 10.743h1.006c0.853 0.003 1.626 0.348 2.187 0.905l-0-0c0.561 0.546 0.91 1.308 0.912 2.151v0l0.004 1.262h-7.21v-1.262c0.002-0.844 0.351-1.606 0.912-2.151l0.001-0.001c0.562-0.557 1.334-0.903 2.188-0.906h0.001zM15.585 8.281c-0.001 0-0.002 0-0.004 0-1.54 0-2.936 0.62-3.951 1.624l0.001-0.001c-1.016 0.986-1.646 2.365-1.646 3.89 0 0.002 0 0.003 0 0.005v-0 1.223l-0.695 1.253v1.804c0.003 1.696 0.703 3.228 1.829 4.325l0.001 0.001c1.133 1.113 2.688 1.799 4.403 1.799 0.003 0 0.006 0 0.008 0h1.119c1.714-0 3.267-0.687 4.4-1.8l-0.001 0.001c1.129-1.097 1.831-2.63 1.833-4.326v-1.806l-0.687-1.253v-1.225c-0.002-1.527-0.633-2.906-1.648-3.893l-0.001-0.001c-1.014-1.003-2.41-1.623-3.95-1.623-0.002 0-0.004 0-0.006 0h0zM15.985 2.574c0.001 0 0.002 0 0.003 0 7.415 0 13.427 6.011 13.427 13.427s-6.011 13.427-13.427 13.427c-7.415 0-13.427-6.011-13.427-13.427 0-0.002 0-0.003 0-0.005v0c0-0.001 0-0.001 0-0.002 0-7.412 6.009-13.421 13.421-13.421 0.001 0 0.002 0 0.003 0h-0zM16 1.004c0 0 0 0-0 0-8.282 0-14.996 6.714-14.996 14.996s6.714 14.996 14.996 14.996c8.282 0 14.996-6.714 14.996-14.996v0c-0-8.282-6.714-14.995-14.996-14.996h-0z"></path> </g></svg>
              <span className="tooltip">Onlyfans</span>
            </button>
            <button className="group button-style">
              <span className="tooltip"></span>
            </button>
            <button className="group button-style">
              <span className="tooltip"></span>
            </button>
          </section>

        </div>
      </div>
      <Pcilustration />
    </div>
  )
}

export default FirstComponent
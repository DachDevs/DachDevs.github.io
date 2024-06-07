/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import '../styles/Projects.css'
import { m } from 'framer-motion';

const Projects = ({ images }) => {

  const properties = [
    {
      name: 'hennyfeliz',
      projects: [{
        "name": "Company Management App",
        "description": "This is a company app that allows you to manage your employees, departments, and projects.",
        "technologies": ["React", "Java", "Spring-boot", "MSSQL Server", "Hexagonal Architecture"]
      },
      {
        "name": "Students Management App",
        "description": "This is a students management app that allows you to manage your students, courses, and grades.",
        "technologies": ["React", "Java", "Quarkus", "MSSQL Server", "Panache-Entity"]
      },
      {
        "name": "Working with Images App",
        "description": "This is a working with images app that allows you to upload, store, and display images in the database.",
        "technologies": ["React", "Java", "Spring-boot", "MSSQL Server", "Varbinary Data Type"]
      }],
    },
    {
      name: 'Carlos Ramirez',
      projects: [
        {
          name: 'Point of Sale System',
          description: 'Point of sale system designed to manage sales transactions, product inventory, and financial reports, providing a comprehensive solution for retail businesses.',
          technologies: ['.NET', 'C#', 'MSSQL Server', 'Clean Architecture']
        },
        {
          name: 'Event Ticketing System',
          description: 'System for the complete management of event ticket sales and distribution, including attendee management, ticket validation, and sales reporting.',
          technologies: ['.NET', 'C#', 'MSSQL Server', 'Vertical Slice Architecture', 'Domain Driven Design']
        },
        {
          name: 'Book Project',
          description: 'Application for library management, allowing users to add, edit, and view book details, as well as track inventory and availability.',
          technologies: ['React', '.NET', 'C#', 'MSSQL Server', 'Onion Architecture']
        }
      ]
    },
    {
      "name": "Darlin Ruben Nina C",
      "projects": [
        {
          "name": "Ecomer-django",
          "description": "A comprehensive e-commerce platform built with Django.",
          "technologies": [
            "Django",
            "Python",
            "JavaScript",
            "Tailwind CSS",
            "MVT"
          ]
        },
        {
          "name": "Quiz Application",
          "description": "An engaging quiz app with timed questions and point scoring.",
          "technologies": [
            "React",
            "Express",
            "React-redux",
            "TypeScript",
            "PostgreSQL"
          ]
        },
        {
          "name": "URL Shortener",
          "description": "An app to shorten URLs, store them in a database, and generate QR codes.",
          "technologies": [
            "Django",
            "Python",
            "Bootstrap",
            "JavaScript",
            "MVT"
          ]
        }
      ]
    }
  ]

  return (
    <>
      <div className='image-container'>
        {
          images.map((item, index) => (
            <div key={index}>
              <img className='profile-image' src={item} alt="Avatar" />
              <h2>
                {
                  [
                    'Henny M. Feliz',
                    'Carlos M. Ramirez',
                    'Darlin Ruben Nina'
                  ][index]
                }
              </h2>
            </div>
          ))
        }
      </div>
      <div className='projects'>
        <div>
          {
            properties[0].projects.map((project, index) => (
              <div key={index}>
                <span>{project.name}</span>
                <p>{project.description}</p>
                <div>
                  {
                    project.technologies.map((technology, index) => (
                      <span className='technologies' key={index}>{technology}</span>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
        <hr />
        <div>
          {
            properties[1].projects.map((project, index) => (
              <div key={index}>
                <span>{project.name}</span>
                <p>{project.description}</p>
                <div>
                  {
                    project.technologies.map((technology, index) => (
                      <span className='technologies' key={index}>{technology}</span>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
        <hr />
        <div>
          {
            properties[2].projects.map((project, index) => (
              <div key={index}>
                <span>{project.name}</span>
                <p>{project.description}</p>
                <div>
                  {
                    project.technologies.map((technology, index) => (
                      <span className='technologies' key={index}>{technology}</span>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Projects
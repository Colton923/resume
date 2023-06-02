'use client'

import { useEffect } from 'react'
import * as THREE from 'three'
import Navbar from 'components/navbar/Navbar'
import Footer from 'components/footer/Footer'
import styles from 'styles/Home.module.scss'
import Link from 'next/link'

const NUMBER_OF_STARS = 1000

export default function Index() {
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      NUMBER_OF_STARS
    )
    const renderer = new THREE.WebGLRenderer()
    const starGeometry = new THREE.BufferGeometry()
    const starVertices = new Float32Array(NUMBER_OF_STARS * 3)

    const animate = () => {
      starGeometry.rotateZ(0.00000001)
      starGeometry.rotateX(0.0000001)
      starGeometry.rotateY(0.000001)

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    const Initialize = () => {
      for (let i = 0; i < NUMBER_OF_STARS; i++) {
        starVertices[i * 3] = Math.random() * 500 - 300 // Update the correct index for x-coordinate
        starVertices[i * 3 + 1] = Math.random() * 500 - 300 // Update the correct index for y-coordinate
        starVertices[i * 3 + 2] = Math.random() * 500 - 300 // Update the correct index for z-coordinate
      }

      starGeometry.setAttribute('position', new THREE.BufferAttribute(starVertices, 3))

      const sprite = new THREE.TextureLoader().load('/star.png', () => {
        renderer.render(scene, camera)
      })

      const spriteMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        map: sprite,
        transparent: true,
      })
      const spriteMesh = new THREE.Points(starGeometry, spriteMaterial)
      camera.position.z = Math.PI / 2
      camera.position.y = Math.PI / 2
      renderer.setSize(window.innerWidth, window.innerHeight)

      scene.add(spriteMesh)
      renderer.domElement.style.position = 'fixed'
      renderer.domElement.style.top = '0px'
      renderer.domElement.style.left = '0px'
      renderer.domElement.style.width = '100%'
      renderer.domElement.style.height = '100%'
      renderer.domElement.style.zIndex = '-1'

      document.body.appendChild(renderer.domElement)

      animate()
    }

    Initialize()
  }, [])

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Colton T. McClintock</h2>
        </div>

        <p>Maryland Resident</p>
        <Link className={styles.link} href="c.mcclin@webdevsolutionsllc.com">
          <p className={styles.link}>c.mcclin@webdevsolutionsllc.com</p>
        </Link>
        <Link
          className={styles.link}
          href="https://www.linkedin.com/in/colton-mcclintock-95279a152/"
        >
          <p className={styles.link}>LinkedIn</p>
        </Link>

        <div className={styles.break} />
        <div className={styles.break} />

        <h4>
          Software developer with expertise in Microsoft technologies, 3D systems, and cloud-based
          web development, seeking a challenging role where I can leverage my technical skills to
          create innovative solutions. Passionate about collaborating with high-performance teams in
          an agile environment to drive the development of state-of-the-art software technology
          platforms.
        </h4>
        <div className={styles.break} />

        <h2>Education</h2>
        <p>Southern Illinois University of Edwardsville School of Engineering</p>
        <p>
          Industrial Engineering (Major) Dec. ’18 Bachelor of Science | Industrial Bio-Processes
          Dec. ‘18 Bachelor of Arts | 169 Credit Hours
        </p>

        <h2>Employment History</h2>

        <h3>
          WEBDEV SOLUTIONS LLC | Owner/Web Application Developer | Anywhere, USA | 2016-Current
        </h3>
        <p>
          Spearhead the development and management of multiple small business projects as the sole
          developer and project manager. Create business logic, assets, and seamlessly integrated
          solutions to meet the specific needs of each project. Design and develop immersive user
          interfaces for both mobile and desktop applications, ensuring engaging and intuitive user
          experiences. Offer comprehensive engineering services to small businesses, delivering
          tailored solutions to address their unique challenges and requirements. Successfully
          fulfill various roles including Product Owner, Scrum Master, Developer, and Project
          Manager, resulting in positive customer experiences and project success. Proficient in
          Next-JS, React, and Typescript for efficient and high-quality development. Experienced in
          working with databases such as MySQL and NoSQL, and leveraging serverless architecture and
          Google Cloud Platform for scalable and cost-effective solutions. Familiarity with payment
          platforms like Stripe, deployment platforms like Vercel, and utilizing Firebase and
          Supabase for backend services.
        </p>

        <h3>THE GOLF FELLOWSHIP | Chief Technical Officer | 2022-2023</h3>
        <p>
          Led the end-to-end development of The Golf Fellowship web application, leveraging the
          tech-stack mentioned above. Provided comprehensive technology consultation and management
          for the startup, ensuring seamless integration of various components. Designed and
          implemented the authentication/authorization system and database solution using Firebase
          Firestore serverless database. Developed webhooks and automated email systems, including
          an email-bot that efficiently extracted sales data from diverse sources and stored it in
          the database. Leveraged Google Cloud Platform to create automated processes, optimizing
          efficiency and scalability. Engineered an intuitive administrator dashboard, empowering
          users to manipulate and visualize data effectively. Orchestrated integrations with Stripe
          for payment processing and implemented dynamic event creation capabilities for
          administrators. Successfully integrated third-party applications previously utilized by
          the business, enhancing overall functionality and user experience.
        </p>

        <h3>ZINC FINANCIAL LOAN VERIFICATION APP | Contractor | 2022</h3>
        <p>
          Developed engaging and user-friendly UI/UX designs using SCSS, CSS, HTML, JavaScript,
          React, and Next JS. Implemented a robust database solution utilizing the Firebase
          Firestore NoSQL Database. Designed and implemented editable table components using AG-Grid
          and React, enhancing user interaction and data management capabilities. Created an
          intuitive admin panel that enables easy updates of database values used in the Loan
          Verification Form Calculations. Engineered a complex email system triggered by the
          submission of the Loan Verification Form. The system dynamically updates and re-emails a
          series of emails containing relevant links using webhooks from the server. Integrated
          signable PDFs into the system, facilitating seamless document signing processes.
          Additionally, integrated with external party Lendingwise.com to streamline operations and
          improve efficiency.
        </p>

        <h3>BBC TEXAS THREE JS WEB APP | Contractor | 2019-2021</h3>
        <p>
          Successfully replicated an existing website-builder website, ensuring a seamless user
          experience and feature parity. Developed the login functionality, enabling secure access
          for users. Implemented Stripe subscription integration for streamlined payment processing.
          Designed and built a user interface using React, React Hook Forms, and TypeScript,
          offering an extensive range of options for customizing commercial metal buildings.
          Implemented a dynamic 3D model generation feature that responds to user inputs, allowing
          users to interactively move and view the generated building model. Planned for future
          enhancements by incorporating the capability to generate 2D views of the model,
          facilitating blueprinting and design processes as the project progresses.
        </p>

        <h3>SENIOR PROJECT MANAGEMENT ANALYST | Mantech Industries | California, MD | 2023</h3>
        <p>
          Led the management and development of the Microsoft Project Schedule for the Manflight
          Program at PAX NAVAIR, ensuring efficient project execution. Organized and facilitated
          meetings to identify and address project risks, evaluate earned value, plan upcoming
          tasks, determine critical paths, and allocate resources effectively. Collaborated with the
          Lead Software Engineer to develop and optimize Jira, a project management tool, for the
          Agile Scrum teams workflow. Implemented a VBA interface and devised logic to automate the
          integration of Jira with MS Project, streamlining software development management
          processes. Conducted weekly sprint planning sessions, fostering iterative development and
          ensuring alignment with project objectives. Facilitated daily scrum meetings to promote
          communication, collaboration, and transparency among team members, enhancing overall
          project coordination and progress tracking.
        </p>

        <h3>SYSTEMS ENGINEER | KBR | California, MD | 2021–2023</h3>
        <p>
          Provided support to the JSF F35 Electromagnetic Environmental Effects team, contributing
          to their objectives and ensuring efficient operations. Generated and managed data in a
          secure environment, prioritizing data integrity and confidentiality. Worked within an
          Agile software engineering team, participating in the development of a large-scale
          backend-focused solution. Utilized SQL and VBA to develop and optimize database
          functionalities, enhancing performance and usability. Assisted in financial tracking and
          database management, ensuring accurate and organized data for effective decision-making
          and reporting.
        </p>

        <h2>Programming | Web Application Development | Freelancing | College Projects</h2>
        <p>
          Proficient in Typescript, React, SQL, Git, CSS3, HTML5, Next.JS, SCSS, jQuery, REST APIs,
          Node JS, Cloud DBs, Postgres, Mongo.
        </p>
        <p>
          Experienced in Vue JS, Powershell, Express, Ajax, and Jira for efficient development
          workflows.
        </p>
        <p>
          Familiar with design tools such as Figma and Trello for collaborative project management.
        </p>
        <p>
          Skilled in unit testing, Docker, and Headless CMS Strapi for robust and scalable software
          development.
        </p>
        <p>Proficient in working with Command Line Interface.</p>
        <p>Experience developing and managing applications using C# .NET.</p>
        <p>
          Well-versed in utilizing Visual Studio and Visual Studio Code for efficient development
          environments.
        </p>
        <p>
          Experienced in Visual Basic for Applications, particularly with Microsoft Office Suite
          applications such as Excel, Word, Access, Outlook, and Power Point.
        </p>
        <p>
          Knowledgeable in cloud technologies, including Google Cloud Platform (equivalent to
          Azure), cloud computing, serverless computing, and containerization using Docker.
        </p>

        <h2>Engineering | Industrial Engineering 3D Modeling & Automation</h2>
        <p>
          Proficient in Industrial Engineering principles, specializing in 3D modeling, algorithms,
          and programming solutions.
        </p>
        <p>
          Skilled in CAD (Computer-Aided Design), CATIA, ABAQUS, NX10, and Arena Simulation for
          engineering design and analysis purposes.
        </p>
      </div>

      <Footer />
    </div>
  )
}

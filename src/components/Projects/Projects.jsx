import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import letsstud from "../../Assets/Projects/letsstudpng.png";
import liru from "../../Assets/Projects/liru.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import newsfeeder from "../../Assets/Projects/newsfeeder.png";
import todo from "../../Assets/Projects/todo.png";
import notty from "../../Assets/Projects/notty.png"
import monnymonsters from '../../Assets/Projects/monny-monsters.png'
import readfullapi from '../../Assets/Projects/readfullapi.png'
import conficon from '../../Assets/Projects/conficon.png'
import sandsstores from '../../Assets/Projects/sandsstores.png'
import teknova from '../../Assets/Projects/teknova.png'
import datnas from '../../Assets/Projects/datnas.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard 
              imgPath={teknova}
              isBlog={false}
              title="Teknova Ecommerce"
              description="an e-commerce platform, using Next.js, Tailwind CSS on the frontend and nodejs/expressjs on the backend. Successfully deployed the backend on namecheap vps and the frontend on Vercel, designed intuitive UIs enhancing user experience, and optimized for high performance. Overcame complex challenges, elevating site reliability and user satisfaction, and managed seamless front-end deployment with custom domain setup on teknova.ng"
              ghLink="Private"
              demoLink="https://teknova.ng"
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard 
              imgPath={sandsstores}
              isBlog={false}
              title="Sandstores Ecommerce"
              description="an e-commerce platform, using Next.js, Tailwind CSS, and Zustand. Successfully deployed the project on Vercel with AWS S3 integration, designed intuitive UIs enhancing user experience, and optimized for high performance. Overcame complex challenges, elevating site reliability and user satisfaction, and managed seamless front-end deployment with custom domain setup on sandsstores.com (they stopped paying for their hosting service)"
              ghLink="Private"
              demoLink="https://sandsstores.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard 
              imgPath={datnas}
              isBlog={false}
              title="Datnas Learning Management system"
              description="An innovative Learning Management System (LMS) designed to facilitate seamless online education. Utilized Express.js and TypeScript to build a robust backend, ensuring efficient data handling and user management. Integrated advanced features such as interactive course content, real-time notifications, and user analytics to enhance the learning experience. Focused on creating a responsive front-end with a user-friendly interface, ultimately driving student engagement and satisfaction."
              ghLink="Private"
              demoLink="https://teknova.vercel.app"
            />
          </Col>
          <Col>
            <ProjectCard 
              imgPath={monnymonsters}
              isBlog={false}
              title="Monny Monsters"
              description="A responsive website built to showcase some skill in reactjs. It also hight my skills in using hooks in reactjs and to manage complex and time and space efficient search"
              ghLink="https://github.com/jay-davisphem/monny-monsters"
              demoLink="https://monny-monsters.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={conficon}
              isBlog={false}
              title="Conficon Favicon Generator"
              description="A webapp built by during an internship at Zuri inc. We made use of Django, JavaScript, Html and CSS. I handled 80% of the backend of the webapp and also made corrections to the frontend. I managed the whole projects using github projects, merging and resolving all sort of backend and frontend conflicts that arose."
              ghLink="https://github.com/jay-davisphem/conficon2/"
              demoLink="https://conficon.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={readfullapi}
              isBlog={false}
              title="Readfull Api"
              description="An api written in Django to support my upcoming frontend novel web app. It was built with Django, Django Rest Framework and Postgresql. I integrated heroku CI/CD pipeline."
              ghLink="https://github.com/jay-davisphem/creadfull-server/"
              demoLink="https://readfullapi.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsfeeder}
              isBlog={false}
              title="Newsfeeder"
              description="A web app that uses currentnewsapi to render data. It fetches the latest news from around the world. It is written with ReactJS, react-router-dom, news api, hooks."
              ghLink="https://github.com/jay-davisphem/newsfeeder"
              demoLink="https://newsfeeder.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notty}
              isBlog={false}
              title="React-notty"
              description="A note-taking web application built for convenience. It showcases my skill in using react hooks and handling data efficiently. It is written with ReactJS, hooks and localStorage"
              ghLink="https://github.com/jay-davisphem/react-notty"
              demoLink="https://notty.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio website"
              description="My portfolio website build to showcase my work, about me and links to github repos. Made use of reactjs, react-router-dom, bootstrap, react-pdf"
              ghLink="https://github.com/jay-davisphem/jay-davisphem.github.io"
              demoLink="https://davisphem.me/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={letsstud}
              isBlog={false}
              title="Letsstudy web app"
              description="A study platform where students, study buddies, and friends can chat and study together. The app contains all the necessary CRUD operations and query manipulation and authentication. The API is built with Django rest framework and can be consumed by anyone. Made with Django, djangorestframework, postgresqsl, css. The api is located in /api routes"
              ghLink="https://github.com/jay-davisphem/letsStudy"
              demoLink="https://letsstud.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={liru}
              isBlog={false}
              title="Minimalistic Chat rooms"
              description="A CRUD application written in django. A user can register, login create rooms and chat with any other connected members. All messages are cleared in after 30minutes of inactivity or when a user logoff. Made use of Django, HTML, CSS, Postgresql"
              ghLink="https://github.com/jay-davisphem/lirurooms"
              demoLink="https://lirurooms.herokuapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo App Frontend(Reactjs) & Backend(Django)"
              description="A version2 of my wannado todo app written with django and react. Written in Djangorestframework and Reactjs"
              ghLink="https://github.com/jay-davisphem/wannado2"
              demoLink="https://todo.wannado.social/"
            />
          </Col>
          <Col md={5} className='project-card'>
            <ProjectCard
              ghlink="https://github.com/Jay-davisphem?tab=repositories"
              title="And lots more on github"
              description=''/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

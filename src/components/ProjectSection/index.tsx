import Image from 'next/image';
import { ProjectCard, ProjectCardPropsInterface } from '../ProjectCard';
import { ProjectButtonPropsInterface, ProjectButton } from '../ProjectButton';

const projectCardData: ProjectCardPropsInterface[] = [
  {
    image: "/images/project-1.jpg",
    title: "Book art design",
    tag: "Branding",
    width: "835",
    height: "429",
    alt: "Book art design",
  },
  {
    image: "/images/project-2.jpg",
    title: "Graphic Design",
    tag: "Design",
    width: "416",
    height: "429",
    alt: "Graphic Design",
  },
  {
    image: "/images/project-3.jpg",
    title: "3d Digital Art",
    tag: "Design",
    width: "416",
    height: "429",
    alt: "3d Digital Art",
  },
  {
    image: "/images/project-4.jpg",
    title: "Web Design",
    tag: "Design",
    width: "416",
    height: "429",
    alt: "Web Design",
  },
  {
    image: "/images/project-5.jpg",
    title: "Mobile App Design",
    tag: "Design",
    width: "416",
    height: "429",
    alt: "Mobile App Design",
  }
]

const buttonData: ProjectButtonPropsInterface[] = [
  {
    buttonText: 'Website'
  },
  {
    buttonText: 'Landing Page'
  },
  {
    buttonText: 'iOS App'
  },
  {
    buttonText: 'Landing Page'
  },
  {
    buttonText: 'Branding Design'
  }
]

const ProjectSection = () => {
  return (
    <section className="section project" id="project" aria-label="project">
      <div className="container">
        <p className="section-subtitle has-before text-center">Projects</p>

        <h2 className="h2 section-title text-center">
          Klythe complete <span className="has-before">project</span>
        </h2>

        <ul className="filter-list">
          {buttonData.map((item, index) => {
            return <li key={index}>
              <ProjectButton {...item} />
            </li>
          })}
          {/* className="filter-btn active" */}
        </ul>

        <ul className="grid-list">
          {projectCardData.map((item, index) => {
            return <li key={index}>
              <ProjectCard {...item} />
            </li>
          })}
        </ul>
      </div>
    </section>
  );
};

export { ProjectSection };

import ProjectSectionTitle from "./ProjectSectionTitle";

const ProjectBubble = (props) => {
  return (
    <div className="shadow-lg rounded-2xl p-10">
      <ProjectSectionTitle title={props.title} />
      {props.children}
    </div>
  )
}

export default ProjectBubble;
import { H3 } from "../utils/constants";
import ProjectSectionTitle from "./ProjectSectionTitle";

const ProjectBubble = (props) => {
  return (
    <div className="shadow-lg rounded-2xl p-10 sm:p-4">
      <ProjectSectionTitle type={H3} title={props.title} />
      {props.children}
    </div>
  )
}

export default ProjectBubble;
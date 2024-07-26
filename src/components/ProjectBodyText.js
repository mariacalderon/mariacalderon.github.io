import { FormattingTranslation } from "../utils/translationHook";

const ProjectBodyText = (props) => {
  return (
    <div className="text-body text-lg sm:text-md">
      {FormattingTranslation(props.text)}
    </div>
  )
}

export default ProjectBodyText;
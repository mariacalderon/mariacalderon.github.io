import { FormattingTranslation } from "../utils/translationHook";

const ProjectBodyText = (props) => {
  return (
    <div className="text-body text-lg">
      {FormattingTranslation(props.text)}
    </div>
  )
}

export default ProjectBodyText;
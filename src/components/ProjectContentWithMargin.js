const ProjectContentWithMargins = (props) => {
  return (
    <div className={`mx-auto w-full max-w-[70%] flex flex-col gap-16 ${props.styling}`}>
      {props.children}
    </div>
  )
}

export default ProjectContentWithMargins;
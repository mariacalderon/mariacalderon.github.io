const ProjectLink = (props) => {

  const onLinkClick = () => {
    window.open(props.url, "_blank");
  }

  return (
    <div className="font-bold text-4xl underline pb-4 cursor-pointer" onClick={() => {
      onLinkClick()
    }}>
      {props.linkText ?? props.url}
    </div>
  )
}

export default ProjectLink;
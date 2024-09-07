const ButtonComponent = (props) => {
  return (
    <div className="w-full">
      <button className={`w-full p-2 text-center rounded-md ${props.style}`} disabled={props.disabled ? 'disabled' : ''} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  )
}

export default ButtonComponent;
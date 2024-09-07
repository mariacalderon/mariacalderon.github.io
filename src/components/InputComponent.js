const InputComponent = (props) => {
  return (
    <div className="w-full">
      <input
        type="password"
        placeholder={props.placeholder}
        value={props.value}
        onInput={props.onChange}
        className={`w-full p-2 border rounded-md shadow-sm placeholder-gray ${props.style} ${props.errorMessage && 'border-red'}`} 
      />
      {
        props.errorMessage &&
        <div className="font-medium text-red pt-2">
          {props.errorMessage}
        </div>
      }
    </div>
  )
}

export default InputComponent;
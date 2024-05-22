
// eslint-disable-next-line react/prop-types
const Input = ({types, label}) => {
  return (
    <div>
       <label htmlFor="text">{label}</label> <br/>
      <input type={types} className="w-[70%] h-8 rounded-sm border-solid border-2 border-[#000]" />
    </div>
  )
}

export default Input;

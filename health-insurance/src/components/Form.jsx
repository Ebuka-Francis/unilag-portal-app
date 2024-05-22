import Input from "./UI/Input";

const FormPage = () => {
  return (
    <div className="max-w-3xl">
        <h2>Login</h2>
        <form action="">
            <div>
                <Input label='Matric/Application number' types='text' />
                <Input label='Password' types='password' />
            </div>
        </form>
      
    </div>
  )
}

export default FormPage;

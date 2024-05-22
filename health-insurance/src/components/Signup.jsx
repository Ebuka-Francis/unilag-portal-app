import FormPage from "./Form";

export default function Signup() {
  return (
    <div className="max-w-5xl bg-white mx-auto flex h-[300px] justify-around items-center w-[700px] ">
      <div>
        <h1 className="text-3xl font-bold underline">Health insurance!</h1>
      </div>
      <FormPage />
    </div>
  );
}

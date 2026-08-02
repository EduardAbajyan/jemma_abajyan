import RegisterForm from "./registrationForm";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[calc((100vh-150px)/2)] w-full">
      <h1 className="text-5xl! font-bold font-armenian my-5!">
        Գրանցվել
      </h1>{" "}
      <p className="text-lg text-center">
        Այստեղ կարող եք հերթագրվել ընտրելով օրը և ժամը և լրացնելով ձեր
        տվյալները։
      </p>
      <RegisterForm />
    </div>
  );
}

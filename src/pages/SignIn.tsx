import { Input } from "../components/input";
import { Button } from "../components/Button";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export function SignIn() {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4"
    >
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Input
            required
            legend="E-mail"
            type="email"
            placeholder="Seu @email.com"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Input
            required
            legend="Senha"
            type="password"
            placeholder="123456"
            {...field}
          />
        )}
      />

      <Button onClick={onSubmit}> Entrar </Button>

      <Button
        onClick={() => navigate("/SignUp")}
        type="button"
        className="w-full h-12 rounded-md font-sans text-gray-100 font-semibold cursor-pointer "
      >
        Criar conta
      </Button>
    </form>
  );
}

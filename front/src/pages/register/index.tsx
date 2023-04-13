import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import ButtonStyled from "../../components/atoms/ButtonStyled";
import InputStyled from "../../components/atoms/InputStyled";

import { BsGoogle } from "react-icons/bs";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import Logo from "../../assets/logo.png";
import useToken from "../../hooks/useToken";
import { postSignUp } from "../../services/authApi";

export default function Register() {
  const token = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token]);

  const schema = z.object({
    email: z.string().min(1, { message: 'Required' }).nonempty("Is required"),
    password: z.string().min(1, { message: 'Required' }).nonempty("Is required"),
    name: z.string().min(1, { message: 'Required' }).nonempty("Is required"),
    image: z.string().min(1, { message: 'Required' }).nonempty("Is required"),
  });

  const { setValue, getValues } = useForm({
    resolver: zodResolver(schema),
  });

  const handleSubmitValues = async (e: any) => {
    e.preventDefault();
    const values = getValues();
    

    try {
        await postSignUp(values);
        toast.success("Cadastro feito com sucesso!");
        navigate("/")
    } catch (error: any) {
      if (error.response.status === 422) {
        return toast.error("Verifique os campos")
      }

      return toast.error("Email já cadastrado!")
    }
  }

  return (
    <div className="bg-gray-100 w-full h-full min-h-screen flex items-center justify-center  box-border scrollbar-hide overflow-auto">
      <div className="w-[400px] min-h-[400px] p-6 h-full  bg-white rounded border-gray-300 flex flex-col items-center">
        <section className="w-full h-2/5 mb-8 flex flex-col items-center">
          <img className="w-[150px] h-[150px]" src={Logo} alt="logo" />
          <ButtonStyled>
            <span> <BsGoogle /></span>
            <p className="text-lg font-bold ml-2"> Entrar com Google </p>
          </ButtonStyled>
          <span className="w-2/5 h-[2px] bg-gray-100 mt-6" />
        </section>

        <form
          className="w-full h-full flex flex-col items-center"
          onSubmit={handleSubmitValues}>
          <InputStyled
            placeholder="Digite seu Email"
            name="email"
            value={getValues("email")}
            onChangeText={(value: string) => setValue("email", value)}
          />

          <InputStyled
            placeholder="Digite sua Senha"
            type="password"
            name="password"
            value={getValues("password")}
            onChangeText={(value: string) => setValue("password", value)}
          />

              <InputStyled
                placeholder="Digite seu nome"
                name="name"
                value={getValues("name")}
                onChangeText={(value: string) => setValue("name", value)}
              />

              <InputStyled
                placeholder="Url do seu avatar"
                name="image"
                value={getValues("image")}
                onChangeText={(value: string) => setValue("image", value)}
              />

          <ButtonStyled>
            <p className="text-2xl w-[150px] font-bold ml-2">Cadastrar</p>
          </ButtonStyled>
        </form>

        <button onClick={() => navigate("/") }>
          <p className="mt-2">
              Já tem cadastro? Realize o login
          </p>
        </button>

      </div>
    </div>
  )
}

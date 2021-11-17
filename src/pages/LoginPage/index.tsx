import React from 'react'
import { TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import './LoginPageStyle.scss'

interface ILoginPage { }

const schema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
})

const LoginPage: React.FC<ILoginPage> = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <div className="login__wrapper">
            <div className="login__form">
                <h3 className="login__form-title">
                    Simple Hotel Check
                </h3>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="login__form-inputs">
                    <TextField
                        className="login__form-filds"
                        label="Логин"
                        margin="normal"
                        variant="outlined"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        {...register('email')}
                    />
                    <TextField
                        className="login__form-filds"
                        label="Пароль"
                        margin="normal"
                        variant="outlined"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        {...register('password')}
                    />
                    <button
                    type="submit"
                        className="login__form-button">
                        Войти
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage

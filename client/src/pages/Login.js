import axios from 'axios';
import React from 'react'
import { useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'

function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    let history = useHistory();

    const login = () => {
        const data = {usuario: usuario, senha: senha}
        axios.post("http://localhost:3001/cadastro/login", data).then((response) => {
            if(response.data.error){
                alert(response.data.error)
            }else{
                localStorage.setItem("accessToken", response.data);
                history.push("/homepage");
            }
        })

    }

    const cadastroPage = () => {
        history.push("/cadastro")
    }
    return (
        <div className="loginPage">
            <div className="logForm">
                <label className="salvusTitle">Login</label>
                <label>Usuário</label>
                <input type="text" onChange={(event) => {
                    setUsuario(event.target.value)
                }} />

                <label>Senha</label>
                <input type="password"  onChange={(event) => {
                    setSenha(event.target.value)
                }}/>

                <button className="cadastroBtn" onClick={login}>Entrar</button>

                <p>Não tem conta ainda?</p>
                <button className="cadastroBtn" onClick={cadastroPage}>Cadastar</button>
            </div>
            <div className="salvusCall">
                <img src="https://www.salvus.me/_next/static/images/COMMON-salvus_logo_x-7ea80535a910c67245458d6e722fdefb.svg" alt="Salvus logo"  width="30%"/>
                <p className="salvusBemVindos">Bem Vindos!</p>
                <p className="salvusTitle">Para <a>maximizar</a> o valor e eficiência geradas pelas soluções, 
                focamos em conectar e levar benefícios para todos atores do ecossistema de saúde.</p>
                
                <p className="salvusText">
                A Salvus nasce do propósito de transformar o setor de saúde e impactar positivamente as pessoas. 
                Sonhamos e trabalhamos por um sistema de saúde mais eficiente e de qualidade para todos.
                </p>
                <p>
                Para realizar esse sonho, desenvolvemos sistemas inteligentes e uma plataforma de internet
                da Coisas com capacidade de conectar e transformar as jornadas, processos e gestão dos dados 
                da assistência ao gerenciamento dos atendimentos hospitalar e domiciliar.
                </p>
            </div>
        </div>
    )
}

export default Login

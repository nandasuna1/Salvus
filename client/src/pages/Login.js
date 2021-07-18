import React from 'react'

function Login() {
    return (
        <div className="loginPage">
            <div className="logForm">
                <label>Usuário</label>
                <input type="text"  />

                <label>Senha</label>
                <input type="password" />

                <button className="cadastroBtn">Entrar</button>

                <p>Não tem conta ainda?</p>
                <button className="cadastroBtn">Cadastar</button>
            </div>
            <div className="salvusCall">
                <p className="salvusTitle">Um pouco sobre nós</p>
                <p className="salvusText">
                A Salvus nasce do propósito de transformar o setor de saúde e impactar positivamente as pessoas. Sonhamos e trabalhamos por um sistema de saúde mais eficiente e de qualidade para todos..
                </p>
            </div>
        </div>
    )
}

export default Login

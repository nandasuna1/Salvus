import React from 'react'
import axios from "axios";
import {useEffect, useState} from 'react';
import { useHistory, useParams} from "react-router-dom"
function Lista() {
    const [listaUsuarios, setListaUsuarios] = useState([]);
    let history = useHistory();
    let {id} = useParams();


    useEffect(() => {
        axios.get("http://localhost:3001/cadastro").then((response) => {
            setListaUsuarios(response.data);
            //fazer algo dps
          });
    


    }, [id, history]);

    const voltar = () => {
        history.push(`/`);
    }
    
    return (
        <div>
            <div className="divLista" onClick={voltar}>
            <button className="sairBtn">retornar</button>
                {listaUsuarios.map((user, key) => {
                    return (
                    <div key={key} className="lista">
                            <div className="listaItem">
                                <label >Nome: </label>
                                {user.nomePrimeiro}
                            </div>
                            <div className="listaItem">
                                <label >Profissão: </label>
                                {user.profissao}
                            </div>
                            <div className="listaItem">
                                <label >Telefone: </label>
                                {user.tel}
                            </div>
                            <div className="listaItem">
                                <label >Email: </label>
                                {user.email}
                            </div>
                    </div> 
                    );
                })}
            </div>
        </div>
    )
}

export default Lista

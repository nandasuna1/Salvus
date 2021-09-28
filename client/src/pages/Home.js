import React from 'react'
import axios from "axios";
import {useEffect, useState} from 'react'; // useEffect => allow us to run a funcion imetiatly when the page rerenders
import { useHistory, useParams} from "react-router-dom"
import { Doughnut} from 'react-chartjs-2';

function Home() {

    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [totalMed, setTotalMedicos] = useState();
    const [totalEnfermeiros, setTotalEnfermeiros] = useState();
    const [totalFono, setTotalFono] = useState();
    const [totalTecEnf, setTotalTecEnf] = useState();
    const [user, setUser] = useState();
    const [userId, setUserID] = useState(0);
    let {id} = useParams();
    let history = useHistory();
    

    useEffect(() => {
        axios.get(`http://localhost:3001/cadastro/${id}`, {headers: {
            accessToken: localStorage.getItem("accessToken")
          }}).then((response) => {
              if(response.data.error){
                return history.push("/")
            }else{
                setUser(response.data.username)
                setUserID(response.data.id)
            }
       });


        axios.get("http://localhost:3001/cadastro").then((response) => {
            setListaUsuarios(response.data);
            //fazer algo dps

          });
    
          axios.get("http://localhost:3001/home").then((response) => {
                setTotalMedicos(response.data.totalMed.count);
                setTotalEnfermeiros(response.data.totalEnfermeiros.count)
                setTotalFono(response.data.totalFono.count)
                setTotalTecEnf(response.data.totalTecEnf.count)
    
        })

    }, [id, history]);

    const logout = () => {
        localStorage.removeItem("accessToken");
        history.push("/")
    }

    const deleteMe = (id) => {
        axios.delete(`http://localhost:3001/home/delete/${id}`, 
        {headears: {accessToken: localStorage.getItem("accessToken")},   
        })
    }

    const verCadastrados = (id) => {
        history.push("/lista")
    }

    
    const state = {
        labels: ['Medicos', 'Enfermeiros', 'Fonoaudiólogos','Tecnicos de Enfermage'],
        datasets: [{
            label: 'Profissionais cadastrados',
            backgroundColor: [
                '#79F14E',
                '#55BB30',
                '#32990E',
                '#227903',
            ],
            hoverBackgroundColor: ['#43FF00'],
            data: [totalMed, totalEnfermeiros, totalFono, totalTecEnf]
        }]
        ,
        options: {
            label: {
                display: false,
            }
        
        }
    }


    
    return (
        <div className="homePage">

            

            <div className="leftPart">
            <h1 className="saudacoes">Olá {user} !</h1>
            <div className="homeBtn">
                <button className="sairBtn" onClick={logout}>Sair</button>
                <button className="sairBtn" onClick={() => {
                    deleteMe(userId); logout()
                }}>Excluir conta</button>
            </div>
            
                <div className="profBox">
                    <p className="title">Total de Profissionais Cadastrados</p>
                    <p className="profInfo">
                        {totalEnfermeiros + totalFono + totalMed + totalTecEnf}
                    </p>

                </div>
                <div className="profBox">
                    <p className="title">Médicos</p>
                    <p className="profInfo">{totalMed}</p>
                </div>

                <div className="profBox">
                    <p className="title">Enfermeiros</p>
                    <p className="profInfo">{totalEnfermeiros}</p>
                </div>

                <div className="profBox">
                    <p className="title">Tecnicos de Enfermagem</p>
                    <p className="profInfo">{totalTecEnf}</p>
                </div>

                <div className="profBox">
                    <p className="title">Fonoudiologos</p>
                    <p className="profInfo">{totalFono}</p>
                </div>
            </div>
        

            <div className="rightPart">
                <p></p>
                <p className="title">Profissionais Cadastrados</p>
                <div className="chart">
                    <Doughnut data={state} />
                </div>
            </div>


        </div>


        
    )

}

export default Home

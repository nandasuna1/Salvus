import React from 'react'
import axios from "axios";
import {useEffect, useState} from 'react'; // useEffect => allow us to run a funcion imetiatly when the page rerenders
import { useHistory} from "react-router-dom"
import {Chart, Doughnut} from 'react-chartjs-2';

function Home() {

    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [totalMed, setTotalMedicos] = useState();
    const [totalEnfermeiros, setTotalEnfermeiros] = useState();
    const [totalFono, setTotalFono] = useState();
    const [totalTecEnf, setTotalTecEnf] = useState();


    
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
    
      


    let history = useHistory();

    useEffect(() => {
      axios.get("http://localhost:3001/cadastro").then((response) => {
        setListaUsuarios(response.data);
      });

      axios.get("http://localhost:3001/home").then((response) => {
            setTotalMedicos(response.data.totalMed.count);
            setTotalEnfermeiros(response.data.totalEnfermeiros.count)
            setTotalFono(response.data.totalFono.count)
            setTotalTecEnf(response.data.totalTecEnf.count)
            //console.log(response.data.totalMed.count);
      })
    }, []);



    return (
        <div className="homePage">

            <div className="leftPart">
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
                <p className="title">Profissionais Cadastrados</p>
                <div className="chart">
                    <Doughnut data={state} />
                </div>
            </div>


        </div>


        
    )
}

export default Home

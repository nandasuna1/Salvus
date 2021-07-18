import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';//formik para a criacao e validacao de formularios
import * as Yup from 'yup'; //pra a validacao e tratamento de erros
import axios from "axios"
import {useHistory} from 'react-router-dom'



function Cadastro() {

    let history = useHistory();
    const initialValues = {
        nomePrimeiro: "",
        nomeSegundo: "", 
        username: "",
        email: "", 
        senha: "",
        tel: "", 
        genero: "",
        profissao: "", 
        especialidade: "", 
        cidade: "", 
        estado: "",
        deslocamento: 0, 
    };

    const validationSchema = Yup.object().shape({

        nomePrimeiro: Yup.string().min(3).max(15).required("Campo obrigatório"),
        nomeSegundo: Yup.string().min(3).max(15).required("Campo obrigatório"),
        username: Yup.string().min(3).max(15).required("Campo obrigatório"),
        email: Yup.string().email("Email inválido").required("Campo obrigatório"),
        senha: Yup.string().min(3).max(15).required("Campo obrigatório"),
        tel: Yup.string().min(11).max(11).required("Campo obrigatório"),
        genero: Yup.string().required("Campo obrigatório"),
        profissao: Yup.string().required("Campo obrigatório"),
        especialidade: Yup.string().min(3).max(45).required("Campo obrigatório"),
        cidade: Yup.string().min(4).max(45).required("Campo obrigatório"),
        estado: Yup.string().required("Campo obrigatório"),
        deslocamento: Yup.number().min(1).max(100).required("Campo obrigatório"),
    })

    const onSubmit = (data, {resetForm}) => {
        console.log("funciona");
        axios.post("http://localhost:3001/cadastro", data).then(() => {
            console.log(data);
            resetForm({});
            history.push("/")
        })
        
    }

    return (
        <div className="cadastroDiv">
            <div className="imagesCadastro">
                <img className="imgCadastro" src="https://image.flaticon.com/icons/png/512/4561/4561054.png" alt="" />
                <img className="imgCadastro" src="https://image.flaticon.com/icons/png/512/4561/4561058.png" alt="" />
            </div>
                
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="formContainer">
                <h1>Cadastre-se já!</h1>

                    <p className="cabecario">Dados Pessoais</p>
                    <label > Nome: </label>
                    <ErrorMessage name="nomePrimeiro" component="span"/>
                    <Field
                        id="inputCadastro"
                        name="nomePrimeiro"
                        placeholder="Fulano"
                        autoComplete = "off"/>
        
                    <label > Sobrenome: </label>
                    <ErrorMessage name="nomeSegundo" component="span"/>
                    <Field
                        id="inputCadastro"
                        name="nomeSegundo"
                        placeholder="Saurro"
                        autoComplete = "off"/>
                    <label>Username: </label>
                    <ErrorMessage name="username" component="span"/>
                    <Field
                        id="inputCadastro"
                        name="username"
                        placeholder="fulanoS123"
                        autoComplete = "off"/>

                    <label>Email: </label>
                    <ErrorMessage name="email" component="span"/>
                    <Field
                        id="inputCadastro"
                        name="email"
                        placeholder="fulanoS123@email.com"
                        autoComplete = "off"/>
                    <label>Password: </label>
                    <ErrorMessage name="senha" component="span"/>
                    <Field
                        id="inputCadastro"
                        type="password"
                        name="senha"
                        placeholder="suasenha123"
                        autoComplete = "off"/>
                    <label>Telefone: </label>
                    <ErrorMessage name="tel" component="span"/>
                    <Field
                        id="inputCadastro"
                        name="tel"
                        placeholder="81912345678"
                        autoComplete = "off"/>
                    <label>Genero: </label>
                    <ErrorMessage name="genero" component="span"/>
                    <Field as="select"
                        name="genero"
                        placeholder="como se identifica"
                        autoComplete = "off">
                        <option value="">Selecione uma opção</option>
                        <option value="Masc">Masc</option>
                        <option value="Fem">Fem</option>
                        <option value="NB">Prefiro não me identificar</option>
                    </Field>

                    <p className="cabecario">Dados Profisssionais</p>
                    <label>Profissão: </label>
                    <ErrorMessage name="profissao" component="span"/>
                    <Field as="select"
                        name="profissao"
                        placeholder="sua profissão"
                        autoComplete = "off">
                        <option value="">Selecione uma opção</option>
                        <option value="Medico">Medico</option>
                        <option value="Enfermeiro">Enfermeiro</option>
                        <option value="Fonoaudiologo">Fonoaudiologo</option>
                        <option value="Tecnico de Enfermagem">Tecnico de Enfermagem</option>
                    </Field>
                    <label>Especialidade: </label>
                    <ErrorMessage name="especialidade" component="span"/>
                    <Field
                        id="inputCadastro"
                        name="especialidade"
                        placeholder="Enfermeiro geral"
                        autoComplete = "off"/>
                    <label>Cidade: </label>
                    <ErrorMessage name="cidade" component="span"/>
                    <Field
                        id="inputCadastro"
                        name="cidade"
                        placeholder="Recife"
                        autoComplete = "off"/>
                    <label>Estado: </label>
                    <ErrorMessage name="estado" component="span"/>
                    <Field as="select"
                        name="estado"
                        placeholder="seu estado"
                        id="inputCadastro"
                        autoComplete = "off">
                        <option value="">Selecione uma opção</option>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                    </Field>
                    <label>Deslocamento: </label>
                    <ErrorMessage name="deslocamento" component="span"/>
                    <Field
                        id="inputCadastro"
                        type="number"
                        name="deslocamento"
                        placeholder="50km"
                        autoComplete = "off"/>
                        
                        <button className="cadastroBtn" type="submit"  >Cadastrar</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Cadastro

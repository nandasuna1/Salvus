import React from 'react'
import {useHistory} from 'react-router-dom'

function Page404() {
    
    let history = useHistory()
    const goToLogin = () => {
        history.push("/")
    }

    return (
        <div className="page404">
            A página que você busca não existe
            <button className="cadastroLogin" onClick={goToLogin}>Voltar para Login</button>
        </div>
    )
}

export default Page404

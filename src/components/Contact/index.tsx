import axios from "axios";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";
import { Container, Content } from "./styles";

type UserDataType = {

    name : string;
    email: string;
    
}



export function Contact() {

    const [ userName , setUserName] = useState('')
    const [ userEmail , setUserEmail] = useState('')
    function handleSubmit(event:FormEvent) {
        event.preventDefault();

        const userData:UserDataType = {
            name : userName,
            email : userEmail,

        };

        const headers = { 
            'Authorization': 'matheus.barretto2001@gmail.com',
        };

        api.post('dev/register', userData , { headers} ).then( res => {
                     if(res.status == 200) {
                         alert('Menssagem enviada ! obrigado pelo contato')
                     } else {
                         alert('Algo deu errado no envio de sua mensagem. favor tente mais tarde.')
                     }
                })

        setUserName("");
        setUserEmail("");
        

        console.log(userData);

        
    }
    return (
        <Container>
            <Content>
                <p>Quer conhecer mais sobre o Neovision?</p>
                <form action="" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Nome"
                        value={userName}
                        onChange={ event => { setUserName(event.target.value)}}
                    />

                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={userEmail}
                        onChange={ event => { setUserEmail(event.target.value)}}

                    />

                    <button
                        type="submit"
                    >Enviar
                    </button>
                </form>
            </Content>
        </Container>
    )

}
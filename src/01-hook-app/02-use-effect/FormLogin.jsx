import { MessageApp } from "./MessageApp"

export const FormLogin= () => {
    return (
        <>
            <h1>Login</h1>
            <hr />
            <input type="text" name="username
            " value="" />
            <br />
            <br />
            <input type="password" name="password" value="" />
            <hr />
            <button type="submit">Acceder</button>

            <MessageApp/>
        </>
        
    )
}

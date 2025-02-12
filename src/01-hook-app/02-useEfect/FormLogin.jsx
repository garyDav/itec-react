export const FormLogin=()=>{
    return(
        <>
       <H1>LOGIN</H1>
       <hr />
       <input type="text" name="username" value="" />
       <br />
       <input type="password" name="password" value=""/>
       <hr />
       <button>Acceder</button>
       <hr />
       <MessageApp/>
       </>
    )
}
export const MessageApp = () => {
    const [message, setMessage] = useState('')

    useEffect(() => {
        console.log('Componente montado')
        //if (message !== "") setMessage(message + 'hola')
    }, [message])

  return (
    <>
    <h1>MessageApp</h1>
    <hr />
    <h2>{message}</h2>

    <button onClick={()=>{setMessage('hola mundo')}}>Mostrar Mensaje</button>
    
    </>
  )
}

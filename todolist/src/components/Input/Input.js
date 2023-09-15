function Input({tipo, clase, identificador, placeHolder}){
    return (
        <>
            <input type={tipo} class={clase} id={identificador} placeholder={placeHolder} />
        </>
    );
}

export default Input;
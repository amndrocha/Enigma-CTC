import { useDispatch, useSelector } from "react-redux";
import { checkPass, handleFound, handleModal, setInput } from "./MapSlice";

export const  Dark = () => {
    const dispatch = useDispatch();

    let modalClass = useSelector((state) => state.map.modalClass);
    let found = useSelector((state) => state.map.found);
    let countries = useSelector((state) => state.map.countries);
    let n = countries.length - 1;
    let input = useSelector((state) => state.map.input);
    let pass = useSelector((state) => state.map.pass);

    return (
        <div className="dark-map">
            <div className={'dark-'+modalClass}>
                <div className="dark-modal-window">
                    <div className="dark-modal-header">
                        <div className="dark-close-btn" onClick={() => dispatch(handleModal())}>X</div>
                    </div>
                    <div className="dark-modal-content">
                        {countries.map((country, i) => {
                            if (country.class == "selected-point" && country.name == pass) {                                
                                dispatch(handleFound());
                                return(
                                    <div>País desbloqueado!! [inserir charada do próximo país]</div>
                                )
                            }
                            if (!found && i == n) {
                                return(
                                    <div className="dark-input-box">
                                        <label for="pass">?</label>
                                        <input id="pass" type="text" value={input} onChange={(e) => dispatch(setInput(e.target.value))}/>
                                        <button onClick={() => dispatch(checkPass())}>Enviar</button>
                                    </div>
                                )
                            }
                        })}
                        
                    </div>
                </div>
            </div>
            {countries.map((country) => {
                return(
                    <div className="dark-map-point">
                        {country.name}
                        <div className={'dark-'+country.class} onClick={() => dispatch(handleModal(country.pass))}></div>
                    </div>
                )
            })}
        </div>
    )
}
import { useDispatch, useSelector } from "react-redux";
import { renderToString } from 'react-dom/server';
import { checkPass, handleFound, handleModal, setInput } from "./MapSlice";

import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";

export const  Page = () => {
    const dispatch = useDispatch();

    let modalClass = useSelector((state) => state.map.modalClass);
    let dark = useSelector((state) => state.map.dark);
    let found = useSelector((state) => state.map.found);
    let countries = useSelector((state) => state.map.countries);
    let n = countries.length - 1;
    let input = useSelector((state) => state.map.input);
    let pass = useSelector((state) => state.map.pass);

    function MyComponent() {
        const map = useMapEvents({
            click: () => {
            map.locate()
            },
            locationfound: (location) => {
                console.log('[', location.latitude,',',location.longitude,']')
            },
        })
        return null
    }

    const LocationFinderDummy = () => {
        const map = useMapEvents({
            click(e) {
                console.log('[', e.latlng.lat,',',e.latlng.lng,']');
            },
        });
        return null;
    };


    return (
        <div className="map-page">
            <div className={modalClass}>
                <div className="modal-window">
                    <div className="modal-header">
                        <div className="close-btn" onClick={() => dispatch(handleModal())}>X</div>
                    </div>
                    <div className="modal-content">
                        {countries.map((country, i) => {
                            if ((country.marker == "selected-point" || country.marker == "dark-selected-point") && country.pass == pass) {                                
                                dispatch(handleFound());
                                return(
                                    <div>País desbloqueado!! [inserir charada do próximo país]</div>
                                )
                            }
                            if (!found && i == n) {
                                return(
                                    <div className="input-box">
                                        <input id="pass" type="text" value={input}
                                        onChange={(e) => dispatch(setInput(e.target.value))}
                                        onKeyDown={(e) => {if (e.key === "Enter") dispatch(checkPass())}}
                                        />
                                        <button onClick={() => dispatch(checkPass())}>Enviar</button>
                                    </div>
                                )
                            }
                        })}                            
                    </div>
                </div>
            </div>

            <MapContainer center={[0,0]} zoom={2}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                opacity={dark ? 0.1 : 1}
                />
                {countries.map((country) => {
                    return(
                        <Marker 
                        position={country.position}
                        icon={
                            divIcon({
                                html: renderToString(<div className={country.marker}></div>),
                                className: "",
                            })
                        }
                        eventHandlers={{
                            click: () => {
                            dispatch(handleModal(country.pass))
                            },
                        }}>
                        </Marker>
                    )
                })}
                <LocationFinderDummy/>
            </MapContainer>



            
        </div>        
    )
}

import React, { useState } from "react";
import "./forms.css";
import Maps from "C:/Users/Aluno27PROA/Documents/Processo seletivo/client/src/components/maps/maps.jsx"

function Forms() {

    const [texto, setTexto] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [posicao, setPosicao] = useState(null)
    function onClickButton() {
        setPosicao({
            latitude,
            longitude,
            texto
        })
    }
    return (
        <div className="content">
            <div className="map">
                <div className="input">
                    Latitude: <input className="latitude_position" lat="Latitude type=text" value={latitude} onChange={event => setLatitude(event.target.value)} placeholder=" Digite a Latitude"></input>
                    Longitude: <input className="longitude_position" lng="Longitude type=text" value={longitude} onChange={event => setLongitude(event.target.value)} placeholder="Digite a Longetude"></input>
                    Texto: <input className="text_pusition" txt="txt type=text" value={texto} onChange={event => setTexto(event.target.value)} placeholder="Texto"></input>
                    <button type="button" onClick={onClickButton}>Pesquisar</button>
                </div>
                <Maps posicaoMarker={posicao} />
            </div>
        </div>
    );
}

export default Forms;
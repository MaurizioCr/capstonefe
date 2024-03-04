import { Col, Container, Row } from "react-bootstrap";
import carpentiere from "./Assets/Scena-9.png";

const Update = () => {

return(
    <>
        <Container>
            <Row>
                <Col>
                    <div className='text-center'>
                        <img style={{border: "3px solid black"}} width={350} className='rounded text-center animate__animated animate__lightSpeedInLeft' src={carpentiere} alt="foto Personaggio" />
                    </div>
                </Col>
                <Col>
                <p className='animate__animated animate__lightSpeedInRight text-white rosso p-2 rounded'>Aggiornamento Del Mese Di Febbraio 2024<br/><br/>
                    Dato il numero molto limitato di personale ( 2 persone ) al momento siamo in uno stato arretrato nello sviluppo del gioco, prevediamo di pubblicare la beta della demo entro il secondo trimestre del 2024 , mancano ancora le seguenti meccaniche : -Combat System -Miglioramento Dell ' IA (movimenti,interazioni) -Level Design di altri biomi, -Day/NightSystem  Invece sono stati fatti : -Taming System, -Crafting System, -Loot System, -Interact System , -Locomotion, -Save/Load System . Durante l'ultima settimana 28/02/2024 abbiamo aggiunto la prima zona esplorabile nella quale è presente il primo esemplare di abitante del pianeta NESS-44 HOPYS apparentemente una docile creatura...che non conviene disturbare durante le ore notture, inoltre sono presenti diversi oggetti da raccogliere/costruire, enigmi da risolvere e combattimenti da vincere.
</p>
                </Col>
            </Row>
        </Container>
    </>
    );

};

export default Update;
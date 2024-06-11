import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Pagamento() {
    return (
        <div>
            <div className="metodo">Método de Pagamento</div>
            <div className="conteudo">
                <div className="pix"><img src="/src/Images/PIX.png" width={60} height={60}></img></div>
                <div className="pix2">Pix</div>
                <input className="selecionar" type="radio"></input>
            </div>

            <div className="greyLine"></div>
            <input className="selecionar2" type="checkbox"></input>
            <div className="termos">Eu aceito os termos e condições</div>
            <a  href="/profile" id='final'> Finalizar Compra <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></a>
        </div>
    )
}

export default Pagamento
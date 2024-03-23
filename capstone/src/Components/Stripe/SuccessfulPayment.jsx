import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StrièeSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="bgInter">
      <Container>
        <Row>
          <Col>
            <div className="bgInter bg bg-primary-subtle mt-2 w-100">
              <img
                src="https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2021/02/10/2990590-61367528-2560-1440.jpg"
                className="imgInter"
              ></img>
              <div className="d-flex flex-column align-items-center justify-content-center ps-4 pb-4 pt-3 d-block ">
                <p>
                  <strong>Congratulazioni!</strong>
                </p>
                <p>
                  <em className="fs-5">
                    Il tuo pagamento è stato effettuato con successo!
                  </em>
                </p>
                <div
                  className="fs-5 fw rounded-5 px-4 py-2 cursor"
                  onClick={() => {
                    navigate("/homepage");
                  }}
                >
                  Homepage
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} className="d-flex justify-content-center">
            <img
              src="/images/successful-payment.jpg"
              className="w-25 rounded-4 mt-5"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StrièeSuccess;
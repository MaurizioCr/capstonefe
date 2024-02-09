import { Col, Container, Row } from 'react-bootstrap'

const NotFound = () => (
  <Container>
    <Row className="mt-4 flex-column align-items-center">
      <Col xs={12} md={6}>
        <img
          className="w-100"
          src="https://placekitten.com/500"
          alt="not-found"
        />
        <h2 className="mt-2 text-center">404 - World Not Found</h2>
      </Col>
    </Row>
  </Container>
)

export default NotFound

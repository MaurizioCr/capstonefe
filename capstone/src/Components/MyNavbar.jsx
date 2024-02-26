import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from "styled-components";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Col, Dropdown, Row } from 'react-bootstrap';

const StyledHeader = styled.div`
  .grigio {
    background: rgba(128, 128, 128, 0.4) url(./Assets/foto1.jpg);
  }
  .contentend {
    justify-content: end !important;
  }
  a {
    color: white;
    font-weight: bold;
  }

  .hover {
    cursor: pointer;
  }
`;

const LoginPrompt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.8);
  margin-top: 20px;
`;

const Prova = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);
  const isAuthenticated = !!localStorage.getItem('authToken');
  

  useEffect(() => {
    async function fetchUserData() {
      try {
        const userId = localStorage.getItem("userId");

        if (!userId) {
          console.error('User ID not found in local storage.');
          return;
        }

        const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error('Error fetching user data. Server response:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    if (isAuthenticated) {
      fetchUserData();
    }
  }, [isAuthenticated]);

  function logout() {
    localStorage.removeItem("authToken");
    // Aggiungi un reindirizzamento al login dopo il logout
    navigate("/");
  }

  return (
    <StyledHeader>
      <Navbar className="justify-content-end grigio" expand="lg">
        <Container className='text-right'>
          <Link className={location.pathname === '/login' ? 'nav-link active' : 'nav-link'} to="/">
            <h2 >LastWorld</h2>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end contentend">
              <Nav className="ml-auto d-flex">
                {isAuthenticated ? (
                  <>
                  <div className='me-2 d-flex flex-column flex-md-row'>
                    <Link className="nav-link d-block d-md-none" to="/profile">
                      Profilo
                    </Link>
                    <Link className="nav-link d-block d-md-none" to="/buy">
                      Acquista
                    </Link>
                    <Link onClick={logout} className="nav-link d-block d-md-none" to="/">
                      Logout
                    </Link>
                    {children}
                    <Dropdown className='d-none d-lg-block' show={showDropdown} align="" onToggle={(isOpen) => setShowDropdown(isOpen)}>
                      <Dropdown.Toggle variant="link" id="dropdown-basic">
                        {user.avatar ? (
                          <img src={user.avatar} alt="avatar" style={{ borderRadius: '50%', width: '2em', height: '2em' }} />
                            ) : (
                                  'Vai al tuo profilo'
                            )}
                     </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className="text-black" as={Link} to="/profile">
                          Profilo
                        </Dropdown.Item>
                        <Dropdown.Item className="text-black" as={Link} to="/buy">
                          Acquista
                        </Dropdown.Item>
                        <Dropdown.Item onClick={logout} className="text-black" as={Link} to="/buy">
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    className={location.pathname === '/login' ? 'nav-link active' : 'nav-link'}
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className={`nav-link${location.pathname === '/register' ? ' active' : ''}`}
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledHeader>
  );
};

export default Prova;

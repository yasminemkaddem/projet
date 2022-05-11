import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <div className='loginContainerfooter'>

    <MDBFooter color="pink" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">YASMINE SHOP .</h5>
            <p>
            We sell the best products for cheap
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">categorie</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">accesoires sport</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">accesoires </a>
              </li>
              
              <li className="list-unstyled">
                <a href="#!">dbach sport</a>
              </li>
        
              
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> YASMINE SHOP.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;
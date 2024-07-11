import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter style={{backgroundColor:"#b34c6f"}} className="text-center text-lg-start text-muted">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4 mt-3">
              <h6 className="text-uppercase fw-bold mb-4" style={{color:"#fcfcfc"}}>
                <MDBIcon   icon="gem"  />
                PetPals Connect
              </h6>
              <p className="text-justify" style={{color:"#fcfcfc"}}>
                PetPals Connect connects pets in need with loving homes. Browse
                our listings and find your perfect companion today. Join us in
                making a difference in a pet's life.
              </p>
            </MDBCol>


            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4 mt-3" style={{color:"#fcfcfc"}}>
              <h6 className="text-uppercase fw-bold mb-4" >Contact</h6>
              <p>
                <MDBIcon style={{color:"#fcfcfc"}} icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon style={{color:"#fcfcfc"}} icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon style={{color:"#fcfcfc"}} icon="phone" className="me-3" /> + 01
                234 567 88
              </p>
              <p>
                <MDBIcon style={{color:"#fcfcfc"}} icon="print" className="me-3" /> + 01
                234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="#">
          PetpalsConnect.com
        </a>
      </div>
    </MDBFooter>
  );
}

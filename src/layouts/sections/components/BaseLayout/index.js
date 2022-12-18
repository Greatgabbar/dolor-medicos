/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import CenteredFooter from "examples/Footers/CenteredFooter";
import routes from "routes";

function BaseLayout({ children }) {
  return (
    <MKBox display="flex" flexDirection="column" bgColor="white" minHeight="100vh">
      <MKBox bgColor="white" shadow="sm" py={0.25}>
        <DefaultNavbar routes={routes} transparent relative />
      </MKBox>
      <Container sx={{ mt: 6 }}>
        <Grid container item xs={12} flexDirection="column" justifyContent="center" mx="auto">
          {children}
        </Grid>
      </Container>
      <MKBox mt="auto">
        <CenteredFooter />
      </MKBox>
    </MKBox>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;

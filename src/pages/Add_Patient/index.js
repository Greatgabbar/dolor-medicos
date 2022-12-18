import { useState } from "react";
import BaseLayout from "layouts/sections/components/BaseLayout";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function FormSimple() {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  return (
    <BaseLayout
      title="Navbars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/navbars" },
        { label: "Navbars" },
      ]}
    >
      <MKBox bgColor="white" component="section">
        <Container>
          <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
            <MKTypography variant="h3" mb={1}>
              Add Patient
            </MKTypography>
          </Grid>
          <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
            <MKBox width="100%" component="form" method="post" autocomplete="off">
              <MKBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="First Name" fullWidth />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Last Name" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput variant="standard" type="email" label="Email Address" fullWidth />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Bed Number" fullWidth rows={6} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Age" fullWidth rows={6} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Weight" fullWidth rows={6} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Sex" fullWidth rows={6} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Blood Group" fullWidth rows={6} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Allergies" fullWidth rows={6} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Emergency Contact" fullWidth rows={6} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Doctor's Full Name" fullWidth rows={6} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Allergies" fullWidth rows={6} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Attendent's Name" fullWidth rows={6} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Cholestrol" fullWidth rows={6} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Blood Glucose Level" fullWidth rows={6} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Heart Rate" fullWidth rows={6} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="SPO2" fullWidth rows={6} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Blood Pressure" fullWidth rows={6} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Plateletes" fullWidth rows={6} />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} my={2}>
                  <MKButton type="submit" variant="gradient" color="dark" fullWidth>
                    Save
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
    </BaseLayout>
  );
}

export default FormSimple;

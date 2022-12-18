import BaseLayout from "layouts/sections/components/BaseLayout";
import classes from "./dashboard.module.css";
import Card from "./Card";
import MKButton from "components/MKButton";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
const arr = [
  {
    name: "Yoshna Marwaha",
    age: "22",
    sex: "female",
    doctor: "Ankur Jain",
    bedno: "3",
    sp02: "95",
    bp: "90",
    temp: "97.5",
    hr: "79",
  },
  {
    name: "Rakesh Trivedi",
    age: "42",
    sex: "male",
    doctor: "Ankur Jain",
    bedno: "7",
    sp02: "98",
    bp: "80",
    temp: "96.5",
    hr: "82",
  },
  {
    name: "Upasana Tiwari",
    age: "35",
    sex: "female",
    doctor: "Ram Kapoor",
    bedno: "10",
    sp02: "95",
    bp: "100",
    temp: "99.5",
    hr: "65",
  },
  {
    name: "Jayanti Thakur",
    age: "78",
    sex: "female",
    doctor: "Umesh Aggarwal",
    bedno: "13",
    sp02: "97",
    bp: "85",
    temp: "101.5",
    hr: "75",
  },
  {
    name: "Yoshna Jain",
    age: "22",
    sex: "female",
    doctor: "Ankur Jain",
    bedno: "3",
    sp02: "95",
    bp: "80",
    temp: "97.5",
    hr: "79",
  },
  {
    name: "Yoshna Marwaha",
    age: "22",
    sex: "female",
    doctor: "Ankur Jain",
    bedno: "3",
    sp02: "95",
    bp: "80",
    temp: "97.5",
    hr: "79",
  },
  {
    name: "Yoshna Jain",
    age: "22",
    sex: "female",
    doctor: "Ankur Jain",
    bedno: "3",
    sp02: "95",
    bp: "80",
    temp: "97.5",
    hr: "79",
  },
  {
    name: "Yoshna Jain",
    age: "22",
    sex: "female",
    doctor: "Ankur Jain",
    bedno: "3",
    sp02: "95",
    bp: "80",
    temp: "97.5",
    hr: "79",
  },
];
function DashBoard() {
  return (
    <BaseLayout
      title="Navbars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/navbars" },
        { label: "Navbars" },
      ]}
    >
      <Link to="/addpatient">
        <div>
          <Grid container item justifyContent="center" xs={12} my={2}>
            <MKButton type="submit" variant="gradient" color="light">
              Add Patient
            </MKButton>
          </Grid>
        </div>
      </Link>

      <div className={classes.container}>
        {arr.map((data) => (
          <Card
            age={data.age}
            bedno={data.bedno}
            name={data.name}
            doctor={data.doctor}
            bp={data.bp}
            hr={data.hr}
            temp={data.temp}
            sex={data.sex}
            sp02={data.sp02}
          />
        ))}
      </div>
    </BaseLayout>
  );
}

export default DashBoard;

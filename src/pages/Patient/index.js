import BaseLayout from "layouts/sections/components/BaseLayout";
import Card from "./Card";
import classes from "./style.module.css";

function Patient() {
  return (
    <BaseLayout
      title="Navbars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/navbars" },
        { label: "Navbars" },
      ]}
    >
      <div className={classes.container}>
        <div className={classes.intro}>
          <p> Name : Akshay </p>
          <p> Age : 21 </p>
          <p> Sex : male </p>
          <p> Doctor : Shubham Trivedi </p>
        </div>
        <h2>Patient Data -</h2>
        <div className={classes.patient_data}>
          {[1, 2, 3, 4, 5, 6, 7, 7].map(() => (
            <Card
              name="SpO2"
              val="70"
              safe="Range [ 95% or higher ]"
              svg={
                <svg
                  style={{ fill: "#e05260" }}
                  xmlns="http://www.w3.org/2000/svg"
                  height={35}
                  width={35}
                  viewBox="0 0 512 512"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              }
              bgColor="#f7d4d7"
            />
          ))}
        </div>
        <div className={classes.doctor}>
          <div className={classes.prescription}>
            <h4>Prescription</h4>
            <p>helloooo</p>
          </div>
          <div className={classes.disorder}>
            <h4>Disorder</h4>
            <p>helloooo</p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Patient;

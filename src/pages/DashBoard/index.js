import BaseLayout from "layouts/sections/components/BaseLayout";
import classes from "./dashboard.module.css";
import Card from "./Card";

function DashBoard() {
  return (
    <BaseLayout
      title="Navbars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/navbars" },
        { label: "Navbars" },
      ]}
    >
      <div className={classes.container}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </BaseLayout>
  );
}

export default DashBoard;

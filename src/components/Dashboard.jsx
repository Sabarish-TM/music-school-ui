import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Grid, Typography } from "@mui/material";
import DashboardComp from "./DashboardComp";

const data = [
  {
    en_no: "111111",
    s_name: "John Doe",
    c_name: "Percussion",
    fees: "1000 rs",
    date: "12-08-2023",
  },
  {
    en_no: "111111",
    s_name: "John Doe",
    c_name: "Percussion",
    fees: "1000 rs",
    date: "12-08-2023",
  },
  {
    en_no: "111111",
    s_name: "John Doe",
    c_name: "Percussion",
    fees: "1000 rs",
    date: "12-08-2023",
  },
  {
    en_no: "111111",
    s_name: "John Doe",
    c_name: "Percussion",
    fees: "1000 rs",
    date: "12-08-2023",
  },
  {
    en_no: "111111",
    s_name: "John Doe",
    c_name: "Percussion",
    fees: "1000 rs",
    date: "12-08-2023",
  },
];

const datas = [
  {
    reg_no: "42522",
    f_name: "John",
    l_name: "Doe",
    course: "3",
    total_fee: "$300",
    date: "01-6-2023",
  },
  {
    reg_no: "42522",
    f_name: "John",
    l_name: "Doe",
    course: "3",
    total_fee: "$300",
    date: "01-6-2023",
  },
  {
    reg_no: "42522",
    f_name: "John",
    l_name: "Doe",
    course: "3",
    total_fee: "$300",
    date: "01-6-2023",
  },
  {
    reg_no: "42522",
    f_name: "John",
    l_name: "Doe",
    course: "3",
    total_fee: "$250",
    date: "01-6-2023",
  },
  {
    reg_no: "42522",
    f_name: "John",
    l_name: "Doe",
    course: "3",
    total_fee: "$300",
    date: "01-6-2023",
  },
];

const Dashboard = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "en_no",
        header: "Enr.No",
        size: 300,
      },
      {
        accessorKey: "s_name",
        header: "S.Name",
        size: 250,
      },
      {
        accessorKey: "c_name",
        header: "C. Name",
        size: 300,
      },
      {
        accessorKey: "fees",
        header: "Fees",
        size: 350,
      },
      {
        accessorKey: "date",
        header: "Enr.Date",
        size: 300,
      },
    ],
    [],
  );

  const columnss = useMemo(
    () => [
      {
        accessorKey: "reg_no",
        header: "Reg.No",
        size: 250,
      },
      {
        accessorKey: "f_name",
        header: "F.Name",
        size: 300,
      },
      {
        accessorKey: "l_name",
        header: "L.Name",
        size: 200,
      },
      {
        accessorKey: "course",
        header: "Course #",
        size: 300,
      },
      {
        accessorKey: "total_fee",
        header: "Total Fees #",
        size: 210,
      },
      {
        accessorKey: "date",
        header: "Reg.Date",
        size: 250,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    enableColumnActions: false,
    enableBottomToolbar: false,
    enableGlobalFilter: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableHiding: false,
    columns,
    data,
  });
  const tables = useMaterialReactTable({
    enableColumnActions: false,
    enableBottomToolbar: false,
    enableGlobalFilter: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableHiding: false,
    columns: columnss,
    data: datas,
  });

  return (
    <>
      <Grid container spacing={2} sx={{ width: "95%", ml: "2%" }}>
        <Grid item xs={6}>
          <Typography
            variant="h5"
            sx={{ color: "#8c918d", whiteSpace: "nowrap" }}
          >
            Overview
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{ width: "95%", ml: "2%", mt: "1%", mb: "2%" }}
      >
        <Grid item xs>
          <DashboardComp data1={"164"} data2={"total number of students"} />
        </Grid>
        <Grid item xs>
          <DashboardComp data1={"12"} data2={"total number of courses"} />
        </Grid>
        <Grid item xs>
          <DashboardComp data1={"$2000"} data2={"total amount earned"} />
        </Grid>
        <Grid item xs>
          <DashboardComp data1={"Guitar"} data2={"best performing course"} />
        </Grid>
        <Grid item xs>
          <DashboardComp data1={"Flute"} data2={"worst performing course"} />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ width: "95%", ml: "2%" }}>
        <Grid item xs={6}>
          <Typography
            variant="h6"
            sx={{ color: "#8c918d", whiteSpace: "nowrap" }}
          >
            LATEST ENROLMENTS
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ textAlign: "right" }}
          sx={{ color: "#8c918d", whiteSpace: "nowrap" }}
        >
          <Typography variant="subtitle1" align="right">
            View All Course
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <MaterialReactTable table={table} />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ width: "95%", ml: "2%", mt: 5, mb: "2%" }}
      >
        <Grid item xs={6}>
          <Typography
            variant="h6"
            sx={{ color: "#8c918d", whiteSpace: "nowrap" }}
          >
            BEST STUDENTS
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ textAlign: "right" }}
          sx={{ color: "#8c918d", whiteSpace: "nowrap" }}
        >
          <Typography variant="subtitle1" align="right">
            View All Students
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <MaterialReactTable table={tables} />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box, Typography, Stack, Button } from "@mui/material";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { setColumns } from "@/store/action";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Gitar", "Flute", "Violin", "Piano"];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const CourseTable = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.columns);

  const [personName, setPersonName] = React.useState("");
  const [day, setDay] = React.useState("");
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [inst, setInst] = React.useState("");
  const [price, setPrice] = React.useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
  };
  const handleChangeDate = (event) => {
    const {
      target: { value },
    } = event;
    setDay(value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloses = () => {
    setAnchorEl(null);
  };
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "instructor",
      header: "Instructor",
    },
    {
      accessorKey: "instrument",
      header: "Instrument",
    },
    {
      accessorKey: "day",
      header: "Day of Week",
    },
    {
      accessorKey: "students",
      header: "# of Students",
    },
    {
      accessorKey: "price",
      header: "Price",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ row }) => {
        return (
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0.5}
          >
            <Chip
              variant="outlined"
              color="secondary"
              size="small"
              label={row?.original?.status}
            />
          </Stack>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Action",
      Cell: ({ row }) => {
        return (
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0.5}
          >
            <MoreVertIcon onClick={handleClick} />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={opens}
              onClose={handleCloses}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleCloses}>Edit Course</MenuItem>
              <MenuItem onClick={handleCloses}>Close Course</MenuItem>
              <MenuItem onClick={handleCloses}>Archive Course</MenuItem>
            </Menu>
          </Stack>
        );
      },
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPersonName("");
    setDay("");
  };

  const handleAddColumn = () => {
    const newColumn = {
      name: name,
      description: desc,
      instructor: inst,
      instrument: personName,
      day: day,
      students: "34",
      price: price,
      status: "Active",
    };
    const updatedColumns = [...data, newColumn];
    dispatch(setColumns(updatedColumns));
    setOpen(false);
  };

  const table = useMaterialReactTable({
    columns,
    data,
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{ display: "flex", gap: "16px", padding: "8px", flexWrap: "wrap" }}
      >
        <Button onClick={() => setOpen(true)}> + Add Course </Button>
      </Box>
    ),
  });

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Typography variant="h5" component="h5">
        Courses List
      </Typography>
      <Stack width={"95%"} height={"95%"}>
        <MaterialReactTable table={table} />
      </Stack>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Course</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="Name"
            label="Course Name"
            type="name"
            fullWidth
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="description"
            name="description"
            label="Description"
            type="description"
            fullWidth
            variant="outlined"
            onChange={(e) => setDesc(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="instructor"
            name="instructor"
            label="Instructor"
            type="instructor"
            fullWidth
            variant="outlined"
            onChange={(e) => setInst(e.target.value)}
          />

          <FormControl sx={{ width: "100%", mt: 1 }}>
            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ width: "100%", mt: 1 }}>
            <InputLabel id="demo-multiple-checkbox-label">
              Date of the week
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              value={day}
              onChange={handleChangeDate}
              input={<OutlinedInput label="Date of the week" />}
              renderValue={(selected) => selected}
              MenuProps={MenuProps}
            >
              {days.map((name) => (
                <MenuItem key={name} value={name}>
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            autoFocus
            required
            margin="dense"
            id="price"
            name="price"
            label="Price"
            type="price"
            fullWidth
            variant="outlined"
            onChange={(e) => setPrice(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="outlined" onClick={handleAddColumn}>
            Add Course
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default CourseTable;

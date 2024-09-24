import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { team_data } from "./data";
import { Box, Typography, useTheme } from "@mui/material";

export default function Manage() {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phoneNumber",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "authority",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { authority } }) => {
        return (
          <Box
            sx={{
              p: "5PX",
              mt: "8px",
              mx: "auto",
              width: "99px",
              borderRadius: "5px",
              bgcolor: theme.palette.info.dark,
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>{authority}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ minHeight: 300, width: "99%", xm: "auto" }}>
      <DataGrid
        rows={team_data}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}

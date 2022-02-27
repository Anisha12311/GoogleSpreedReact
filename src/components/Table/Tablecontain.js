import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './Table.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#29B6F6",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));







export default function CustomizedTables() {

  const [data, setData] = useState();
  const getData = async () => {

    try{
      const res = await fetch("https://sheet.best/api/sheets/7f695c1f-e41a-45f3-85fe-9679dfa5078e?_format=index")
      const data = await res.json();
      setData(Object.keys(data).map((key) => data[key]));
       
    }catch (error){
      console.log(error)
    }
  }
 

  console.log(data)
  useEffect(() => {
    getData();
  },[])


  const handleDelete = async (rowIndex) => {
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/7f695c1f-e41a-45f3-85fe-9679dfa5078e/${rowIndex}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        const updatedData = data.filter((_, i) => i !== rowIndex);
        setData(updatedData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TableContainer component={Paper} style = {{width : "800px",marginLeft : "16rem"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
           
           
            <StyledTableCell align="right">ID&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Avatar Name&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Performace Sorce&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Delete&nbsp;</StyledTableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item,i) => (
            <StyledTableRow key = {i} >
            
              <StyledTableCell align="right">{item.ID}</StyledTableCell>
              <StyledTableCell align="right">{item.Avatar}</StyledTableCell>
              <StyledTableCell align="right">{item.Performance}</StyledTableCell>
              <StyledTableCell align="right">
                        <RiDeleteBin6Line className = "icon_format" onClick = {() => {handleDelete(i)}}/>
              </StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
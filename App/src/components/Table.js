import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein,one,two) {
  return { name, calories, fat, carbs, protein,one,two };
}

const rows = [
  createData('بیت کوین', '۴۷۶،۰۰۰،۰۰۰', '۸.۷۰٪', '۴۸۱،۰۰۰،۰۰۰', '۴۴۱،۰۰۱،۰۰۰','۶۶،۵۲۳،۳۸۱،۱۷۳'),
  createData('اتریوم', '۴۷۶،۰۰۰،۰۰۰', '۸.۷۰٪', '۴۸۱،۰۰۰،۰۰۰', '۴۴۱،۰۰۱،۰۰۰','۶۶،۵۲۳،۳۸۱،۱۷۳'),
  createData('کاردانو', '۴۷۶،۰۰۰،۰۰۰', '۸.۷۰٪', '۴۸۱،۰۰۰،۰۰۰', '۴۴۱،۰۰۱،۰۰۰','۶۶،۵۲۳،۳۸۱،۱۷۳'),
  createData('ترون', '۴۷۶،۰۰۰،۰۰۰', '۸.۷۰٪', '۴۸۱،۰۰۰،۰۰۰', '۴۴۱،۰۰۱،۰۰۰','۶۶،۵۲۳،۳۸۱،۱۷۳'),
  createData('بایننس کوین', '۴۷۶،۰۰۰،۰۰۰', '۸.۷۰٪', '۴۸۱،۰۰۰،۰۰۰','۴۴۱،۰۰۱،۰۰۰','۶۶،۵۲۳،۳۸۱،۱۷۳'),
  createData('مونرو', '۴۷۶،۰۰۰،۰۰۰', '۸.۷۰٪', '۴۸۱،۰۰۰،۰۰۰', '۴۴۱،۰۰۱،۰۰۰','۶۶،۵۲۳،۳۸۱،۱۷۳'),
  createData('چین لینک', '۴۷۶،۰۰۰،۰۰۰', '۸.۷۰٪', '۴۸۱،۰۰۰،۰۰۰','۴۴۱،۰۰۱،۰۰۰','۶۶،۵۲۳،۳۸۱،۱۷۳'),
  createData('تزوس', '۴۷۶،۰۰۰،۰۰۰', '۸.۷۰٪', '۴۸۱،۰۰۰،۰۰۰', '۴۴۱،۰۰۱،۰۰۰','۶۶،۵۲۳،۳۸۱،۱۷۳'),
  createData('بیت کوین کش', '۴۷۶،۰۰۰،۰۰۰', '۸.۷۰٪', '۴۸۱،۰۰۰،۰۰۰', '۴۴۱،۰۰۱،۰۰۰','۶۶،۵۲۳،۳۸۱،۱۷۳'),
  createData('ریپل', '۴۷۶،۰۰۰،۰۰۰', '۸.۷۰٪', '۴۸۱،۰۰۰،۰۰۰','۴۴۱،۰۰۱،۰۰۰','۶۶،۵۲۳،۳۸۱،۱۷۳'),
  createData('تتر', '۴۷۶،۰۰۰،۰۰۰', '۸.۷۰٪', '۴۸۱،۰۰۰،۰۰۰', '۴۴۱،۰۰۱،۰۰۰','۶۶،۵۲۳،۳۸۱،۱۷۳')
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>نام ارز</StyledTableCell>
            <StyledTableCell align="right">آخرین قیمت</StyledTableCell>
            <StyledTableCell align="right">تغییرات&nbsp;(۲۴ ساعت)</StyledTableCell>
            <StyledTableCell align="right">بیشترین&nbsp;(۲۴ ساعت)</StyledTableCell>
            <StyledTableCell align="right">کمترین&nbsp;(۲۴ ساعت)</StyledTableCell>
            <StyledTableCell align="right">حجم&nbsp;(۲۴ ساعت)</StyledTableCell>
            <StyledTableCell align="right">نمودار تغییرات</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.one}</StyledTableCell>
              <StyledTableCell align="right">{row.two}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

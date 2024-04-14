import { styled } from "styled-components";

export const TableContainer = styled.div`
  margin: 10px;
  border-radius: 8px;
  overflow-x: auto;
  overflow-y: auto;
  height: 440px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
`;

export const TableHead = styled.thead`
  background-color: #ececec;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
`;

export const SortArrow = styled.span`
  position: absolute;
  right: -12px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0; /* Initially hide the arrow */
`;

export const TableHeader = styled.th`
  padding: 12px 15px;
  text-align: center;
  font-size: 13px;
  color: #878282;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
  cursor: pointer; /* Add cursor pointer to indicate clickable */
  &:hover ${SortArrow} {
    opacity: 1; /* Show arrow on hover */
  }
`;

export const TableCell = styled.td`
  padding: 12px 15px;
  text-align: center;
  font-size: 14px;
  color: #939393;
  border-bottom: 1px solid #eaeaea;
`;



import { useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { selectProductData } from "../../store/reducers/productSlice";
import {
  StyledTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  SortArrow
} from "./SalesTableStyles";

export const SalesTable = () => {
  const salesData = useAppSelector(selectProductData);
  const [sortBy, setSortBy] = useState(""); // State to keep track of sorting column
  const [sortOrder, setSortOrder] = useState("asc"); // State to keep track of sorting order

  if (!salesData.length) return null;
  let salesTableData = salesData[0].sales;

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleSort = (column: string) => {
    if (sortBy === column) {
      // If already sorting by this column, toggle sorting order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // If sorting by a new column, set the sorting column and default to ascending order
      setSortBy(column);
      setSortOrder("asc");
    }
  };
  
  // Function to compare values for sorting
  const compareValues = (a: { [key: string]: any }, b: { [key: string]: any }) => {
    const aValue = typeof a[sortBy] === "number" ? a[sortBy] : 0; // Default to 0 if value is not a number
    const bValue = typeof b[sortBy] === "number" ? b[sortBy] : 0;
    if (sortOrder === "asc") {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  };

  // Apply sorting if a column is selected for sorting
  if (sortBy) {
    salesTableData = salesTableData.slice().sort(compareValues);
  }

  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableHeader onClick={() => handleSort("weekEnding")}>
              WEEK ENDING
            </TableHeader>
            <TableHeader onClick={() => handleSort("retailSales")}>
              RETAIL SALES
            </TableHeader>
            <TableHeader onClick={() => handleSort("wholesaleSales")}>
              WHOLESALE SALES
            </TableHeader>
            <TableHeader onClick={() => handleSort("unitsSold")}>
              UNITS SOLD
            </TableHeader>
            <TableHeader onClick={() => handleSort("retailerMargin")}>
              RETAILER MARGIN
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {salesTableData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.weekEnding}</TableCell>
              <TableCell>
                {currencyFormatter.format(item.retailSales)}
              </TableCell>
              <TableCell>
                {currencyFormatter.format(item.wholesaleSales)}
              </TableCell>
              <TableCell>{item.unitsSold}</TableCell>
              <TableCell>
                {currencyFormatter.format(item.retailerMargin)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default SalesTable;
import { useEffect } from "react";
import { ChartsDiv, DashboardContainer } from "./DashboardStyles";
import Product from "../Product/Product";
import { useAppDispatch } from "../../hooks/hooks";
import { SalesChart } from "../SalesChart/SalesChart";
import { fetchData } from "../../store/reducers/productSlice";
import { SalesTable } from "../SalesTable/SalesTable";


export const Dashboard = () => {
  const dispatch = useAppDispatch();

    useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <DashboardContainer>
      <Product />
      <ChartsDiv>
        <SalesChart />
        <SalesTable />
      </ChartsDiv>
    </DashboardContainer>
  );
};

export default Dashboard;

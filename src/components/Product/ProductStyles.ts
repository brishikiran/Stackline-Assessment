import styled from "styled-components";
import { Card } from "../../resusableComponents/Card/Card";

export const ProductCard = styled(Card)`
  padding: 12px;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  height: 100vh; 
`;

export const ProductImage = styled.img`
  width: 200px; // Adjust size as needed
  height: auto;
  margin-bottom: 8px;
`;

export const ProductTitle = styled.h2`
  color: #333;
  margin-bottom: 4px;
`;

export const Subtitle = styled.h1`
  text-align: center;
  font-size: 12px;
  color: #bfbdbdba;
  flex-wrap: wrap;
  padding: 1%;
  width: 200px;
  margin:10px;
`;

export const Line = styled.hr`
  border-top: 2px solid #ccc; 
  margin-bottom: 1rem;
`;
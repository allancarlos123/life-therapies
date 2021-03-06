import styled from "styled-components";
import { Card, CardImg, CardBody, CardTitle, Badge } from "reactstrap";

export const CardStyled = styled(Card)`
  background: #fff;
  margin: 12px 0;
  border: 0 !important;
  text-decoration: none !important;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Price = styled.small`
  font-weight: normal;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: normal;
  font-family: "Circular Std Book";
  /* color: #ff6872; */
  color: #888;
`;

export const Category = styled(Badge)`
  line-height: 16px;
  letter-spacing: normal;
  text-transform: uppercase;
  color: #f9f9f9;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 2px;
  font-family: "Circular Std Book";
  overflow: hidden;
  padding: 3px;
  border-radius: 5px;
  background: ${props => props.color || "#ccc"} !important;
`;

export const Image = styled(CardImg)`
  object-fit: cover;
  object-position: 50% 50%;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

export const Body = styled(CardBody)`
  padding: 12px 8px !important;
`;

export const Title = styled(CardTitle)`
  font-weight: 800;
  margin-bottom: 0 !important;
  font-size: 16px;
  line-height: 1.375em;
  letter-spacing: normal;
  font-family: "Circular Std Bold";
  color: rgb(72, 72, 72);
  max-height: 36px;
  max-height: 44px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

import styled from "styled-components";

export const Table = styled.table`
  widht: 98%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-widht: 1120px;
  margin: 20px auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  border-botton: inset;
  padding-botton: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  widht: ${(props) => (props.widht ? props.width + "%" : "auto")};
`;

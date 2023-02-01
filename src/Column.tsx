import { ColumnContainer, ColumnTitle } from "./styles";
import { Card } from "./Card"

type ColumnProps = {
  text: string;
  children: string[];
};

export const Column = ({ text, children }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text={children[0]} />
      <Card text={children[1]} />
    </ColumnContainer>
  );
};

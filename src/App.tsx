import { AppContainer } from "./styles";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";

var children: string[] = ["Test1", "Test2"];
function Added(text: string){
  console.log(text);
}
export const App = () => {
  return (
    <AppContainer>
      <Column text="Todo1:" children={children} />
      <Column text="Todo2:" children={children} />
      <Column text="Todo3:" children={children} />
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} dark={true} />
    </AppContainer>
  );
};

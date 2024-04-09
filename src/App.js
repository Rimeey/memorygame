import StatisticsBlock from "./Components/StatisticsBlock/StatisticsBlock";
import PlaygroundBlock from "./Components/PlaygroundBlock/PlaygroundBlock";
import SettingsBlock from "./Components/SettingsBlock/SettingBlock";
import { Context } from "./Context";

export default function App() {
  return (
    <Context>
      <StatisticsBlock></StatisticsBlock>
      <PlaygroundBlock></PlaygroundBlock>
      <SettingsBlock></SettingsBlock>
    </Context>
  );
}

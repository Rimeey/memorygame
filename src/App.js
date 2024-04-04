import StatisticsBlock from "./StatisticsBlock/StatisticsBlock";
import PlaygroundBlock from "./PlaygroundBlock/PlaygroundBlock";
import SettingsBlock from "./SettingsBlock/SettingBlock";
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

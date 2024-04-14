import StatisticsBlock from "./Components/StatisticsBlock/StatisticsBlock";
import PlaygroundBlock from "./Components/PlaygroundBlock/PlaygroundBlock";
import SettingsBlock from "./Components/SettingsBlock/SettingBlock";
import { Context } from "./Context";
import { useTheme } from "./Hooks/useTheme";

export default function App() {
  const {theme, setTheme} = useTheme();
  return (
    <Context>
      <StatisticsBlock></StatisticsBlock>
      <PlaygroundBlock></PlaygroundBlock>
      <SettingsBlock></SettingsBlock>
    </Context>
  );
}

import Hello from "./components/Hello";
import KgButton from "./components/KgButton";
import { NamedExport } from "./components/NamedExport";
import Random from "./components/Random";
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <button>Subscribe</button>
      <KgButton></KgButton>
      <NamedExport></NamedExport>
      <Hello></Hello>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
    </div>
  );
}

export default App;

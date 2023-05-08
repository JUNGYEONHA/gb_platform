import "./App.css";
import MapNchart from "./MapNchart";
import { Layout } from "./components/layouts";
import { FootTraffic } from "./pages/FootTraffic";
import { GlobalStyle, GlobalFonts, GlobalOverrideStyle } from "./styles";
function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
      {/* <MapNchart/> */}
    </>
  );
}

export default App;

import './App.css';
import MapNchart from './MapNchart';
import { Layout } from "./views/layouts";
import { FootTraffic } from "./views/pages/FootTraffic";
import { GlobalStyle, GlobalFonts, GlobalOverrideStyle } from "./styles";
function App() {
  return (
    <>
      <GlobalStyle/>
      <Layout/>
      {/* <MapNchart/> */}
    </>
  );
}

export default App;

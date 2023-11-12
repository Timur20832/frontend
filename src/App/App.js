import '../static/Styles/App/App.css';
import ToolBar from './blocks_view/ToolBar';
import SlideBox from './blocks_view/SlideBox';
import InfoBar from './blocks_view/InfoBar';
import SlidePreview from './blocks_view/SlidePreview';

function App() {
  return (
    <div className="App">
      <InfoBar />
      <ToolBar />
      <div className="flex-slides">
        <SlidePreview />
        <SlideBox />
      </div>
    </div>
  );
}

export default App;

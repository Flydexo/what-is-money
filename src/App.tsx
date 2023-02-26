import Home from './Home';
import Scene from './Scene';
import { useGameSceneStore } from './stores/game';

function App() {
	const scene = useGameSceneStore((state) => state.scene);

	return <>{scene ? <Scene scene={scene} /> : <Home />}</>;
}

export default App;

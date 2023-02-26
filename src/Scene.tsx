import { useLayoutEffect, useRef, useState } from 'react';
import { GameScene } from './scenes';
import { useGameSceneStore } from './stores/game';

export const Scene = ({ scene }: { scene: GameScene }) => {
	const [dialogIndex, setDialogIndex] = useState(0);
	const nextScene = useGameSceneStore((state) => state.nextScene);
	const audio = useRef<HTMLAudioElement>();

	useLayoutEffect(() => {
		if (!audio.current) return;
		audio.current.volume = 0.025;
	});

	console.log(dialogIndex);

	const nextDialog = () => {
		if (dialogIndex == scene.dialogs.length - 1) {
			setDialogIndex(0);
			return nextScene();
		}
		setDialogIndex((i) => i + 1);
	};

	return (
		<div
			style={{
				backgroundImage: `url('${scene.background_url}')`,
				backgroundSize: 'cover',
				backgroundPositionY: 'bottom',
				backgroundPositionX: 'center',
			}}
			className={`w-screen h-screen font-serif`}
		>
			<audio
				src={scene.music_url}
				autoPlay={true}
				loop={true}
				ref={audio}
			></audio>
			<div className="fixed bottom-0 w-full">
				{scene.dialogs[dialogIndex].character?.img_url && (
					<img
						src={scene.dialogs[dialogIndex].character?.img_url}
						alt={scene.dialogs[dialogIndex].character?.name}
						className="relative left-[50%] translate-x-[-50%]"
					/>
				)}
				<div className="h-max flex justify-around flex-col items-center bg-stone-800 p-3 py-5 text-white text-lg font-viking gap-3 w-full">
					{scene.dialogs[dialogIndex].character && (
						<div className="w-full flex items-center justify-center bg-stone-700 p-3">
							<p className="font-viking text-yellow-400">
								{scene.dialogs[dialogIndex].character?.name}
							</p>
						</div>
					)}
					<p className="text-sm">{scene.dialogs[dialogIndex].message}</p>
					<button
						onClick={nextDialog}
						className="font-viking text-white bg-yellow-800 border-4 border-yellow-700 p-4 text-base"
					>
						Suivant
					</button>
					<div className="flex items-center gap-2">
						{Array(scene.dialogs.length)
							.fill(null)
							.map((_, i) => (
								<div
									className={`w-4 h-4 rounded-full ${
										i <= dialogIndex ? 'bg-white' : 'bg-stone-700'
									}`}
								></div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Scene;

import { useEffect, useLayoutEffect, useRef } from 'react';
import LoadingScreenAudio from './assets/audios/loading_screen.mp3';
import { useGameSceneStore } from './stores/game';

export const Home = () => {
	const audio = useRef<HTMLAudioElement>(null);
	const nextScene = useGameSceneStore((state) => state.nextScene);

	useLayoutEffect(() => {
		if (!audio.current) return;
		audio.current.volume = 0.25;
	});

	return (
		<>
			<audio
				src={LoadingScreenAudio}
				autoPlay={true}
				loop={true}
				ref={audio}
			></audio>
			<div className="w-screen h-screen bg-[url('/backgrounds/library.jpeg')] bg-center font-serif">
				<div className="grid place-content-center place-items-center gap-8 w-full h-full bg-black bg-opacity-60">
					<h1 className="font-viking text-white text-4xl text-center lg:text-7xl">
						C'est quoi l'argent ?
					</h1>
					<div className="w-[90%] lg:w-1/2 aspect-square overflow-hidden relative bg-black bg-opacity-60 border-4 border-yellow-600">
						<div className="absolute flex items-center h-full animate-slide">
							<div className="h-full aspect-square flex flex-col relative">
								<img
									src="/characters/portrait_aristote.png"
									alt="Aristote Portrait"
								/>
								<div className="absolute bottom-0 w-full bg-stone-900 bg-opacity-90 text-white flex flex-col items-center p-2 lg:p-5 gap-1">
									<h3 className="text-lg lg:text-xl font-viking">Aristote</h3>
									<h4 className="font-serif">384 av. J.-C - 322 av. J.-C</h4>
									<h4 className="font-serif">Philosophe Grec</h4>
								</div>
							</div>
							<div className="w-full h-full aspect-square flex flex-col relative">
								<img
									src="/characters/portrait_jerome_powell.png"
									alt="Jerome Powell Portrait"
								/>
								<div className="absolute bottom-0 w-full bg-stone-900 bg-opacity-90 text-white flex flex-col items-center p-2 lg:p-5 gap-1">
									<h3 className="text-lg lg:text-xl font-viking">
										Jerome Powell
									</h3>
									<h4 className="font-serif">1953</h4>
									<h4 className="text-sm">
										Président de la Réserve Fédérale des États-Unis (FED){' '}
									</h4>
								</div>
							</div>
							<div className="w-full h-full aspect-square flex flex-col relative">
								<img
									src="/characters/portrait_christine_lagarde.png"
									alt="Christine Lagarde Portrait"
								/>
								<div className="absolute bottom-0 w-full bg-stone-900 bg-opacity-90 text-white flex flex-col items-center p-2 lg:p-5 gap-1">
									<h3 className="text-lg lg:text-xl font-viking">
										Christine Lagarde
									</h3>
									<h4 className="font-serif">1956</h4>
									<h4 className="text-sm">
										Présidente de la Banque Centrale Européenne (BCE){' '}
									</h4>
								</div>
							</div>
							<div className="w-full h-full aspect-square flex flex-col relative">
								<img
									src="/characters/portrait_satoshi_nakamoto.png"
									alt="Satoshi Nakamoto Portrait"
								/>
								<div className="absolute bottom-0 w-full bg-stone-900 bg-opacity-90 text-white flex flex-col items-center p-2 lg:p-5 gap-1">
									<h3 className="text-lg lg:text-xl font-viking">
										Satoshi Nakamoto
									</h3>
									<h4>?</h4>
									<h4>Créateur de Bitcoin</h4>
								</div>
							</div>
						</div>
					</div>
					<button
						onClick={nextScene}
						className="font-viking text-white bg-yellow-800 border-4 border-yellow-700 p-4"
					>
						Commencer
					</button>
				</div>
				<div className="fixed bottom-0 bg-stone-900 bg-opacity-70 flex w-full items-center flex-col py-3 text-white">
					<h3>
						Créé par{' '}
						<a
							href="https://twitter.com/Flydex0"
							target={'_blank'}
							className="text-blue-500"
						>
							Flydexo
						</a>
					</h3>
				</div>
			</div>
		</>
	);
};

export default Home;

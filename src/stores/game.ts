import { create } from 'zustand'
import { GameScene, SCENES } from '../scenes'
import {persist} from 'zustand/middleware'

export interface GameSceneState {
    scene: GameScene,
    sceneIndex: number,
    nextScene: () => void, 
}

export const useGameSceneStore = create<GameSceneState>()(persist((set) => ({
    scene: SCENES[0],
    sceneIndex: 0,
    nextScene: () => set((state) => ({
        scene: SCENES[state.sceneIndex+1], 
        sceneIndex: state.sceneIndex+1
    })),
}), {
    name: 'game-scene'
}))
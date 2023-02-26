import { create } from 'zustand'
import { GameScene, SCENES } from '../scenes'
import {persist} from 'zustand/middleware'

export interface GameSceneState {
    scene?: GameScene,
    sceneIndex: number,
    nextScene: () => void, 
}

export const useGameSceneStore = create<GameSceneState>()((set) => ({
    scene: undefined,
    sceneIndex: -1,
    nextScene: () => set((state) => {
        if(state.sceneIndex+ 1 < SCENES.length){
            return {
                scene: SCENES[state.sceneIndex+1], 
                sceneIndex: state.sceneIndex+1
            }
        }
        return {
            scene: undefined,
            sceneIndex: -1
        }
    }),
}))
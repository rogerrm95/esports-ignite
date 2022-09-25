export interface GameParams {
    id: string,
    title: string,
    bannerUrl: string
}


export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            login: undefined,
            home: undefined,
            game: GameParams,
        }
    }
}
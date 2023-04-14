import { GameDescription } from 'src/app/shared/interfaces/game-description';

export const GameList: Array<GameDescription> = [
    {
        name: "Jogo dos Sons",
        imgUri: "",
        description: "Descubra a regra do jogo para saber o que toca e o que não toca.",
        type: "Jogo solo",
        route: "sound-game"
    },
    {
        name: "Jogo da Amizade",
        imgUri: "",
        description: "Descubra a regra do jogo para saber quem é ou não amigo.",
        type: "Jogo multiplayer",
        route: ""
    },
    {
        name: "Jogo da Garrafa",
        imgUri: "",
        description: "Descubra a regra do jogo para saber o se a garrafa está fechada ou aberta.",
        type: "Jogo multiplayer",
        route: ""
    },
    {
        name: "Jogo dos Atores",
        imgUri: "",
        description: "Descubra a regra do jogo para saber o nome dos atores.",
        type: "Jogo solo",
        route: ""
    },
    {
        name: "Jogo da Viagem",
        imgUri: "",
        description: "Descubra a regra do jogo para saber os locais de viagem.",
        type: "Jogo solo",
        route: ""
    }
]
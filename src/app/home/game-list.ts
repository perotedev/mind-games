import { GameDescription } from 'src/app/shared/interfaces/game-description';

export const GameList: Array<GameDescription> = [
    {
        name: "Jogo dos Sons",
        imgUri: "",
        description: "Descubra a regra do jogo para saber o que toca e o que não toca.",
        type: "Jogo solo",
        route: "sound-game",
        active: true
    },
    {
        name: "Jogo dos Cantores",
        imgUri: "",
        description: "Descubra a regra do jogo para saber quem sabe ou não cantar.",
        type: "Jogo solo",
        route: "",
        active: false
    },
    // {
    //     name: "Jogo da Amizade",
    //     imgUri: "",
    //     description: "Descubra a regra do jogo para saber quem é ou não amigo.",
    //     type: "Jogo solo",
    //     route: "",
    //     active: false
    // },
    // {
    //     name: "Jogo dos Atores",
    //     imgUri: "",
    //     description: "Descubra a regra do jogo para saber o nome dos atores.",
    //     type: "Jogo solo",
    //     route: "",
    //     active: false
    // },
    // {
    //     name: "Jogo da Viagem",
    //     imgUri: "",
    //     description: "Descubra a regra do jogo para saber os locais de viagem.",
    //     type: "Jogo solo",
    //     route: "",
    //     active: false
    // }
]
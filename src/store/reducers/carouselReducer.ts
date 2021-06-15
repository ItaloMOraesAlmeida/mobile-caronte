export interface IDataCarousel {
    title: string;
    message: string;
}

export interface ICArouselStore {
    data: IDataCarousel[];
}

const INITIAL_STATE: ICArouselStore = {
    data: [
        {
            title: "Tenha um controle de seus empéstimos",
            message:
                "Caronte ajuda a organizar e aletar a respeito seus empréstimos realizados.",
        },
        {
            title: "Tempo real",
            message:
                "Monitore seus empéstimos em tempo real, determinando data de entrega e devolução.",
        },
        {
            title: "Sinalizações de atraso",
            message:
                "Caronte informa toda vez que algum empéstimo está em atraso ou foi solicitado a você.",
        },
    ],
};

const CarouselReducer = (
    state: ICArouselStore = INITIAL_STATE
): ICArouselStore => state;

export default CarouselReducer;

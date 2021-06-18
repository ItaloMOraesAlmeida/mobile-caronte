import { combineReducers } from "redux";

import CarouselReducer, { ICArouselStore } from "./carouselReducer";

export interface IStore {
    CarouselReducer: ICArouselStore;
}

export default combineReducers({ CarouselReducer });

import {
  AGREGAR_MOVIES,
  AGREGAR_MOVIES_EXITO,
  AGREGAR_MOVIES_DESCARGAR_EXITO,
  AGREGAR_MOVIES_ERROR,
} from '../types';
const initialState = {
  recomendados: [],
  error: null,
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_MOVIES:
      return {
        ...state,
        loading: action.payload,
      };

    case AGREGAR_MOVIES_DESCARGAR_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        recomendados: action.payload,
      };

    default:
      return state;
  }
}

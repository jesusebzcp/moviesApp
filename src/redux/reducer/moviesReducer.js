import {
  AGREGAR_MOVIES,
  AGREGAR_MOVIES_DESCARGAR_EXITO,
  AGREGAR_MOVIES_ERROR,
  AGREGAR_MOVIES_ERROR_TOP,
  AGREGAR_MOVIES_DESCARGAR_EXITO_TOP,
  AGREGAR_MOVIES_TOP,
} from '../types';
const initialState = {
  recomendados: [],
  topRated: [],
  error: null,
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_MOVIES:
    case AGREGAR_MOVIES_TOP:
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
    case AGREGAR_MOVIES_DESCARGAR_EXITO_TOP:
      return {
        ...state,
        loading: false,
        error: false,
        topRated: action.payload,
      };
    case AGREGAR_MOVIES_ERROR:
    case AGREGAR_MOVIES_ERROR_TOP:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
}

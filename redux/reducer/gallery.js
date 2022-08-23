import galleryActionType from '../type/gallery'

const INITIAL_STATE = {
    galleries: {
        loading: true,
        data: [],
        error: false,
        page: 1,
        loadMore: true
    },
    gallery: {
        loading: true,
        data: null,
        error: false
    }
}

const GalleryReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case galleryActionType.galleries.FETCH_GALLERIES_START:
            return {
                ...state,
                galleries: {
                    ...state.galleries,
                    loading: true
                }
            }
        case galleryActionType.galleries.FETCH_GALLERIES_SUCCESS:
            return {
                ...state,
                galleries: {
                    ...state.galleries,
                    loading: false,
                    loadMore: payload.loadMore,
                    data: payload.page > state.galleries.page ? [...state.galleries.data, ...payload.data] : state.galleries.data,
                    page: payload.page
                }
            }
        case galleryActionType.galleries.FETCH_GALLERIES_ERROR:
            return {
                ...state,
                galleries: {
                    ...state.galleries,
                    loading: false,
                    error: false
                }
            }
        default:
            return state
    }
}

export default GalleryReducer
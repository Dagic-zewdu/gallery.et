import { apiCommon } from '../../../api';
import galleryActionType from '../../type/gallery';
export const fetchGalleriesStart = () => ({
  type: galleryActionType.galleries.FETCH_GALLERIES_START,
})

export const fetchGalleriesSuccess = (payload) => ({
  type: galleryActionType.galleries.FETCH_GALLERIES_SUCCESS,
  payload
})

export const fetchGalleriesError = (error) => ({
  type: galleryActionType.galleries.FETCH_GALLERIES_ERROR,
  payload
})

export const fetchGalleriesAsync = (page = 1) => async dispatch => {
  try {
    dispatch(fetchGalleriesStart())
    const res = await apiCommon().get(`/gallery?page=${page}&limit=10`)
    if (res.data.length)
      dispatch(fetchGalleriesSuccess({ data: res.data, page: page + 1, loadMore: true }))
    else
      dispatch(fetchGalleriesSuccess({ data: res.data, page: page, loadMore: false }))

  }
  catch (err) {
    console.log(err)
    dispatch(fetchGalleriesError(err))
  }
}
import { apiCommon } from '../../../api';
import galleryActionType from '../../type/gallery';
export const fetchGalleriesStart=()=>({
    type: galleryActionType.galleries.FETCH_GALLERIES_START,
})

export const fetchGalleriesSuccess=(payload)=>({
    type: galleryActionType.galleries.FETCH_GALLERIES_SUCCESS,
    payload
})

export const fetchGalleriesError=(error)=>({
    type: galleryActionType.galleries.FETCH_GALLERIES_ERROR,
    payload
})

export const fetchGalleriesAsync=()=>async dispatch=>{
  try{
    dispatch(fetchGalleriesStart())
    const res=await apiCommon().get("/gallery")
    dispatch(fetchGalleriesSuccess({data:res.data, page:1}))
  }
  catch(err){
    console.log(err)
     dispatch(fetchGalleriesError(err))
  }
}
import ApiClient from './ApiClient'

export const __uploadComment = async (formData, userId, commentId) => {
    try{
        const res = await ApiClient.post(`/posts/${userId}/comments/${commentId}?active=true`, formData)
        return res.Data
    } catch (error) {
        throw error
    }
}

export const __getComments = async (page, limit) => {
    try {
        const res = await ApiClient.get(`/comments?page=${page || 1}&limit${limit || 10}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __getComment = async (postId, commentId) => {
    try {
        const res = await ApiClient.get(`/posts/${postId}/comments/${commentId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __updateComment = async (formData, postId, commentId) => {
  try {
    const res = await ApiClient.put(`/posts/${postId}/comments/${commentId}?active=true`, formData)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __deleteComment = async (postId, commentId) => {
  try {
    const res = await ApiClient.delete(`/posts/${postId}/comments/${commentId}?active=true`)
    // `/posts/${postId}?active=true`
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

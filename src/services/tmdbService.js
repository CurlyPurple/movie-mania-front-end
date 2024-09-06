// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/tmdb`

async function getCelebs(formData) {
  try {
    const res = await fetch(`${BASE_URL}/celeb/${formData.name}`, {
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}` 
      },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

export {
  getCelebs,
}
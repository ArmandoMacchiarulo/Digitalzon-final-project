const BASE_URL = "http://localhost:8080/api";
//ALL GET
export const getGalleries = async () => {
  try {
    const response = await fetch(`${BASE_URL}/galleries`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log(response);
      return response;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const getArtworks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/artworks/galleries`);
    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      console.log(response);
      return response;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const getGalleryById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/galleries/${id}`);

    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const getArtworkByGalleryById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/galleries/${id}/artworks`);

    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const getArtworksByIdWithGallery = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/artworks/${id}/galleries`);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/user`);
    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      console.log(response);
      return response;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const getTags = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tags`);
    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      console.log(response);
      return response;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const getUserById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${id}`);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const getExhibitions = async () => {
  try {
    const response = await fetch(`${BASE_URL}/exhibition`);
    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      console.log(response);
      return response;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const getExhibitionsById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/exhibition/${id}`);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const getExhibitionByGalleryId = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/galleries/${id}/exhibition`);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const getExhibitionByIdWithGallery = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/exhibition/${id}/galleries`);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

//ALL PUT/UPDATE
export const putUser = async (user, id) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const putGallery = async (gallery, id) => {
  try {
    const response = await fetch(`${BASE_URL}/galleries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gallery),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const putArtworks = async (artwork, id) => {
  try {
    const response = await fetch(`${BASE_URL}/artworks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(artwork),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const putTag = async (tag, id) => {
  try {
    const response = await fetch(`${BASE_URL}/tags/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tag),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const putExhibition = async (exhibit, id) => {
  try {
    const response = await fetch(`${BASE_URL}/exhibition/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exhibit),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
//ALL POST/CREATE
export const postUser = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const postGallery = async (gallery) => {
  try {
    const response = await fetch(`${BASE_URL}/galleries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gallery),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const postArtwork = async (artwork) => {
  try {
    const response = await fetch(`${BASE_URL}/artworks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(artwork),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const postTag = async (tag) => {
  try {
    const response = await fetch(`${BASE_URL}/tags`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tag),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const postArtworkByGalleryId = async (artwork, id) => {
  try {
    const response = await fetch(`${BASE_URL}/galleries/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(artwork),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const postExhibitionkByGalleryId = async (exhibit, id) => {
  try {
    const response = await fetch(`${BASE_URL}/galleries/${id}/exhibition`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exhibit),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
//ALL DELETE
export const deleteUserById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return { ok: true, data: "Success" };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const deleteGalleryById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/galleries/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return { ok: true, data: "Success" };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const deleteArtworkById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/artworks/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return { ok: true, data: "Success" };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const deleteTagById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/tags/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return { ok: true, data: "Success" };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const deleteExhibitionById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/exhibition/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return { ok: true, data: "Success" };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

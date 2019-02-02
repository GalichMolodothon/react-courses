 export function getPosts(params) {
    let apiLink = `https://jsonplaceholder.typicode.com/posts?_limit=${params.limit}&_page=${params.page}&_sort=id&_order=${params.order}`;
    if (params.search) {
      apiLink = apiLink + `&q=${params.search}`;
    }
    
    return fetch(apiLink)
    .then(response => response.json())
    .then(json => json)
}

 export function getPhotos(params) {
     let apiLink = `https://jsonplaceholder.typicode.com/photos?_limit=${params.limit}&_page=${params.page}&_sort=id&_order=${params.order}`;
     if (params.search) {
         apiLink = apiLink + `&q=${params.search}`;
     }

     return fetch(apiLink)
         .then(response => response.json())
         .then(json => json)
 }

 export function getAlbums(params) {
     let apiLink = `https://jsonplaceholder.typicode.com/albums?_limit=${params.limit}&_page=${params.page}&_sort=id&_order=${params.order}`;
     if (params.search) {
         apiLink = apiLink + `&q=${params.search}`;
     }

     return fetch(apiLink)
         .then(response => response.json())
         .then(json => json)
 }
 export function getAlbumPhoto(params) {
     let apiLink = `https://jsonplaceholder.typicode.com/photos?albumId=${params.albumId}&_limit=${params.limit}&_page=${params.page}`;
     console.log(apiLink);
     if (params.search) {
         apiLink = apiLink + `&q=${params.search}`;
     }

     return fetch(apiLink)
         .then(response => response.json())
         .then(json => json)
 }

export function getPost(params) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    .then(response => response.json())
    .then(json => json)
}

export function getUserById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(json => json)
}

export function getCommentsByPostId(id) {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(response => response.json())
    .then(json => json)
}
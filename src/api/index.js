 export function getPosts(params) {
    let apiLink = `https://jsonplaceholder.typicode.com/posts?_limit=${params.limit}&_page=${params.page}&_sort=id&_order=${params.order}`;
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
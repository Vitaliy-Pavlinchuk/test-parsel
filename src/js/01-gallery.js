const button = document.querySelector('button');

const lastItem = document.createElement('button');
lastItem.textContent = 'cleak me';
lastItem.style.backgroundColor = 'red'
document.querySelector('.gallery').append(lastItem);



const onBtn = () => {
    setTimeout(() => 
    alert("I love async JS!")
  , 2000);
}

lastItem.addEventListener('click', onBtn)






const PROMT_DELAY = 1009
const MAX_PROMT_DALAY = 2

let promtCounter = 0
let hasSubscriebd = false

const intervalID =  setInterval(() => {
    if (promtCounter === MAX_PROMT_DALAY) {
        console.log('нужно остановить');
        clearInterval(intervalID)
        return
    } console.log('Подпишись на рассилку' + Date.now());
    promtCounter += 1
}, PROMT_DELAY)



// Тест задачи с первого занятия !!!!!!!-------------------------------
// const newBox = document.querySelector('.news-box');
// console.log(newBox);


// const data = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => {
//         if(res.status = 200)
//             return res.json()
//         throw new Error(res.status)
        
//     })
//     .then((data) => {
//         const allPost = data.reduce
//             ((acc, post) => acc + `<li data-id='${post.id}'> ${post.title}</li>`, '') 
//         newBox.insertAdjacentHTML('beforeend', allPost)
//         console.log(allPost);
//         console.log(data);
//     } )


// newBox.addEventListener('click', (event) => {
//     const { target } = event
//     const currentTouchPostBox = target
//     const postId = target.dataset.id

//     if(postId){
//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//         .then((res) => res.json())
//         .then((post) => {
//             currentTouchPostBox.insertAdjacentHTML('beforeend', `<p class='description'>${post.body}<p/>`)
//         }).finally(() => {
//             currentTouchPostBox.setAttribute('data-id', '')
//         })   
//     }
    
    
//     console.log(target.dataset);
//     } )

// Розбор примера по пагинации!!!
const fetchPostsBtn = document.querySelector(".btn");
const userList = document.querySelector(".posts");



const fetchPosts = () => {
   return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then((response) => {
            if (response.status = 200)
                return response.json()
            throw new Error (response.status)
        })

}

// fetchPostsBtn.addEventListener('click', () => {
//     fetchPosts()
//         .then((post) => renderPosts(post))
//         .catch((error) => console.log(error))
// })

fetchPostsBtn.addEventListener('click', () => {
    fetchPosts()
      .then(post => renderPosts(post))
      .catch(error => console.log(error));
})


function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join("");
  userList.innerHTML = markup;
}
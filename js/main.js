const post = document.querySelector('.post');
const likes = document.querySelector('.likes');
const heart = document.querySelector('.heart_icon');

likes.innerText = "No likes";
let counter = 0;

post.addEventListener('dblclick', () => {
    counter++;

    if(counter === 1) likes.innerText = counter + " like";
    else likes.innerText = counter + ' Likes';

    heart.classList.add('animate-like');
    setTimeout(() => {
        heart.classList.remove('animate-like');
    }, 500);
});
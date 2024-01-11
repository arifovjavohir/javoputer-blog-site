
function addPost() {
    const username=document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const imageUrl = document.getElementById('image-url').value;
    const content = document.getElementById('content').value;

    if (title && imageUrl && content) {
        const blogContainer = document.getElementById('blog-container');

        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postContent = `
            <center><p class="obs">${username}</p><hr></center>
            <center><h2>${title}</h2></center>
            <img src="${imageUrl}" alt="${title}">
            <p>${content}</p>
        `;

        postDiv.innerHTML = postContent;
        blogContainer.appendChild(postDiv);

        // Qo'shilgan maqolani qo'shishdan so'ng maydonlarni tozalash
        document.getElementById('title').value = '';
        document.getElementById('image-url').value = '';
        document.getElementById('content').value = '';

        // Formani yopish
        toggleOverlay();
    } else {
        alert('Iltimos, barcha maydonlarni to\'ldiring!');
    }
}

// Overlayni yopish va ochish uchun funktsiya
function toggleOverlay() {
    const form = document.getElementById('create-post-form');
    const overlay = document.getElementById('overlay');

    form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
    overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'block' : 'none';
}

// "+" tugmasini bosganda Create Post formasi va overlayni ochish
document.getElementById('create-post-form-toggle').addEventListener('click', toggleOverlay);
// Overlayni yopish uchun overlay oynasi
document.getElementById('overlay').addEventListener('click', toggleOverlay);

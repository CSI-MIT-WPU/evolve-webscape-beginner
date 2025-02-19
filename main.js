const posts = [
    {
        id: 1,
        author: 'Sarah Dev',
        time: '11 months ago',
        content: 'Just launched my new portfolio! Check it out 🚀',
        likes: 5,
        comments: 1
    },
    {
        id: 2,
        author: 'Mike Coder',
        time: '2 days ago',
        content: 'Working on an exciting new project using WebAssembly. Can\'t wait to share more details! 💻',
        likes: 12,
        comments: 3
    },
    {
        id: 3,
        author: 'Alex Designer',
        time: '5 hours ago',
        content: 'Just released a new UI kit on Figma. Free for the community! Link in bio 🎨',
        likes: 28,
        comments: 7
    }
];

function createPostElement(post) {
    return `
        <div class="post">
            <div class="post-header">
                <div class="post-avatar"></div>
                <div class="post-info">
                    <h3>${post.author}</h3>
                    <span>${post.time}</span>
                </div>
            </div>
            <div class="post-content">
                ${post.content}
            </div>
            <div class="post-actions">
                <div class="post-action">
                    ❤️ ${post.likes}
                </div>
                <div class="post-action">
                    💬 ${post.comments}
                </div>
                <div class="post-action">
                    🔗 Share
                </div>
            </div>
        </div>
    `;
}

function renderPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = posts.map(post => createPostElement(post)).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const postBtn = document.getElementById('postBtn');
    const textarea = document.querySelector('textarea');

    postBtn.addEventListener('click', () => {
        const content = textarea.value.trim();
        if (content) {
            addNewPost(content);
            textarea.value = '';
        }
    });

    renderPosts();
});
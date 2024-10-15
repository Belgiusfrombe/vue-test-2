// postsStore.js
import { reactive } from 'vue'

export const postsStore = reactive({
  posts: [
    { id: 1, title: 'Post 1', content: 'Content of Post 1' },
    { id: 2, title: 'Post 2', content: 'Content of Post 2' },
    { id: 3, title: 'Post 3', content: 'Content of Post 3' },
  ],
  deleteOneById(id) {
    this.posts.splice(this.posts.findIndex(post => post.id === id), 1);
  },
});
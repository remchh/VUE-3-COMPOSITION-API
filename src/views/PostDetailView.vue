<template>
  <div class="post-detail">
    <h1>This is a POST-DETAIL</h1>
    <p>Display the content of post with id of <strong>{{ $route.params.id }}</strong> here!</p>
    <div>
      <button @click="showPostId">Show post ID</button>
    </div>
    <div>
      <button @click="goToHomeIn3s">Go to home page in 3s</button>
    </div>
    <div>
      <button @click="goToFirstPost">Go to first post</button>
    </div>
    <p><RouterLink to="/posts">&lt; Back</RouterLink></p>
  </div>
</template>

 <script setup>
 import { useRoute, useRouter } from 'vue-router'


 const route = useRoute()
 const router = useRouter()
 
 const showPostId = () => {
  alert(`The ID of this post id: ${route.params.id}`)
 }

 const goToHomeIn3s = () => {
  setTimeout(() => {
    router.push({ name: 'home'})
  }, 3000);
 }

 const goToFirstPost = () => {
  router.push({
    name: 'postDetail',
    params: {
      id: 'id1'
    }
  })
 }

 </script>
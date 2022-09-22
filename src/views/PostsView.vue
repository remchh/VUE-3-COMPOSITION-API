<template>
  <div class="posts">
    <h1>POSTS</h1>
    <ul>
      <li 
        v-for="post in posts"
        :key="post.id"
      >
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink> 
      </li>
    </ul>
    <div>
      <button 
        @click="increaseCounter(1, $event)"
        class="counter-button"
        :class="{ 'yellow' : oddOrEven === 'odd'}"
      >
        {{ counterData.counter }}
      </button>
    </div>
  </div>
</template>

<script setup>

import { useCounter } from '@/use/useCounter'
import { ref } from 'vue'

const { counterData, increaseCounter, oddOrEven } = useCounter()

const posts = ref([
  {
    id: 'id1',
    title: 'Post 1'
  },
  {
    id: 'id2',
    title: 'Post 2'
  },
  {
    id: 'id3',
    title: 'Post 3'
  }
])

</script>

 <style scoped>

 ul {
  margin-top: 30px;
 }
 .counter-button {
  font-size: 60px;
  width: 100%;
  background-color: pink;
 }
 .counter-button.yellow {
  background-color: yellow;
 }
 
 </style>
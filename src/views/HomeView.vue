<template>
  <div class="home">
    <h2 ref="myTitleRef"> {{ appTitle }} </h2>
    <h3>{{ counter.title }}</h3>
    <div>
      <button class="btn" @click="counter.decreaseCounter(2)" >--</button>
      <button class="btn" @click="counter.decreaseCounter(1)">-</button>
      <span class="counter"> {{ counter.count }} </span>
      <button class="btn" @click="counter.increaseCounter(1)">+</button>
      <button class="btn" @click="counter.increaseCounter(2)">++</button>
    </div>
    <p> The counter is {{ counter.oddOrEven }}</p>
    <div class="edit">
      <h4>Edit counter title</h4>
      <input
        v-model="counter.title"
        v-autofocus
        type="text"
      >
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onBeforeUpdate, onUpdated, onActivated, onDeactivated} from 'vue'

import { vAutofocus } from '@/directives/vAutofocus'
import { useCounterStore } from '../stores/counter';

//const counter = ref(0),
  //     title = ref('My counter')

const appTitle = ref('My Title App') 

const myTitleRef = ref(null) //Template ref

const counter = useCounterStore()

/*
LIFECYCLE HOOKS
*/

onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log(`${myTitleRef.value.offsetWidth} px`) //Template ref access to a component when is mounted
  console.log('onMounted')
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
onUnmounted(() => {
  console.log('onUnmounted')
})

//works when the tempplate is updated

onBeforeUpdate(() => {
  console.log('onBeforeUpdate') 
})
onUpdated(() => {
  console.log('onUpdated') 
})

//works when keep-alive is running

onActivated(() => {
  console.log('onActivated') 
})
onDeactivated(() => {
  console.log('onDeactivated')
})


</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn, .counter {
  font-size: 40px;
  margin: 10px;
}

</style>
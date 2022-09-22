<template>
  <div class="home">
    <h2 ref="myTitleRef"> {{ appTitle }} </h2>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button class="btn" @click="decreaseCounter(2)">--</button>
      <button class="btn" @click="decreaseCounter(1)">-</button>
      <span class="counter">{{ counterData.counter }}</span>
      <button class="btn" @click="increaseCounter(1, $event)">+</button>
      <button class="btn" @click="increaseCounter(2)">++</button>
    </div>
    <p> The counter is {{ oddOrEven }}</p>
    <div class="edit">
      <h4>Edit counter title</h4>
      <input v-model="counterData.title" type="text" v-autofocus>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onBeforeUpdate, onUpdated, onActivated,    onDeactivated} from 'vue'

import { vAutofocus } from '@/directives/vAutofocus'
import { useCounter } from '@/use/useCounter'

//const counter = ref(0),
  //     title = ref('My counter')






const appTitle = ref('My Title App') 

const myTitleRef = ref(null) //Template ref

const { counterData, oddOrEven, increaseCounter, decreaseCounter} = useCounter()


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
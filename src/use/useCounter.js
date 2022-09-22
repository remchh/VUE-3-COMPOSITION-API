import { reactive, computed, nextTick, watch  } from 'vue'

const counterData = reactive({
  counter: 0,
  title: 'My counter'
})

export function useCounter(){
  

  const oddOrEven = computed(() => {
    if(counterData.counter % 2 === 0) return 'even'
    return 'odd'
  })

  const increaseCounter = (amount, e) => {
    console.log(e)
    counterData.counter += amount
    nextTick(() => {
      //Do something after the DOM has updated
      console.log('nextTick is working')
    })
  }
  
  const decreaseCounter = amount => {
    counterData.counter -= amount
  }
  
  //watching the updates of a prop 
  watch(() => counterData.counter, (newCount, oldCount) => {
    console.log('New Count: ', newCount)
    if(newCount === 20){
      alert('Way to go! You made it to 20!!')
    }
  })

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter
  }

}
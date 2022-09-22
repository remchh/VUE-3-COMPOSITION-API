<template>
    <teleport to="body"> <!-- Allow us move an element from its default place to somewhere in the DOM -->
        <div 
            class="modal"
            v-if="modelValue"
        >
            <h1> {{ title }} </h1>
            <slot />
            <button @click="$emit('update:modelValue', false)">Hide modal</button>
            <div>
                Username is: {{ userData.account }}
            </div>
        </div>
    </teleport>
</template>

<script setup >
import { inject } from 'vue'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'No title specified'
    }
})

const emit = defineEmits(['update:modelValue'])

const userData = inject('userData')

/*const handleButtonClick = () => {
    emit('update:modelValue', false)
}*/

</script>

<style>
.modal {
    background: beige;
    color: black;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>>

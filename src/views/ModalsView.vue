<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label>
                Show dark modals?
                <input 
                v-model="showDarkModals"
                type="checkbox"
                >
            </label>
        </div>
        <pre>{{ showDarkModals }}</pre>
        <button @click="showModal = true">Show modal</button>
    </div>
    <component
        v-model="showModal" 
        :is="showDarkModals ? ModalDark : Modal"
        title="My new prop title"
    >
        <!-- <template #title> My new slot title</template> -->
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ullam aliquam. Perferendis pariatur exercitationem corrupti possimus vero in, quibusdam sed. Sunt ex commodi distinctio tenetur maiores. Et aliquam quod mollitia.</p>
    </component>
</template>

<script setup>
    
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'



const showDarkModals = ref(false)
const showModal = ref(false)


</script>



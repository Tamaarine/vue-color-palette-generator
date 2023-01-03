<script>
import Palette from './components/Palette.vue'

export default {
    data() {
        return {
            colors: [],
        }
    },

    components: {
        Palette
    },

    methods: {
        generateColor() {
            let rand = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
            return rand;
        },
        
        incrementNumColors() {
            this.colors.push(this.generateColor());
            document.activeElement.blur();
        },
        
        decrementNumColors() {
            this.colors.pop();
            document.activeElement.blur();
        }
    },

    mounted() {
        // When mounted generate the 5 colors randomly
        for (let i=0;i<5;i++) this.incrementNumColors();
        
    },

    created() {
        window.addEventListener('keydown', (e) => {
            if (e.key == ' ') {
                e.preventDefault(); // Prevent scrolling when space bar is pressed
                
                // Regenerate colors
                this.colors = this.colors.map(() => this.generateColor());
            }
        })
    }
}
</script>

<template>
    <div class="d-flex justify-content-center">
        <h1 class="bold-font my-5">Color palette generator</h1>
    </div>
    <div class="container">
        <button class="btn btn-primary m-4"
            @click="incrementNumColors">
            Add new color
        </button>
        <button class="btn btn-primary m-4"
            @click="decrementNumColors">
            Remove color
        </button>
    </div>
    <div class="container">
        <div v-for="color in colors">
            <Palette :color="color"></Palette>
        </div>
    </div>
    <div class="container">
        <a class="link-dark" href="https://tamarine.me" target="_blank">Created by Tamaarine <i class="fa-solid fa-link"></i></a>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

a {
    text-decoration: none;
    margin: 20px;
}
</style>
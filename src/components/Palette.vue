<script>
import { useToast } from "vue-toastification"

export default {
    setup() {
        const toast = useToast();
        return { toast }
    },
    
    props: [
        'color'
    ],

    computed: {
        backgroundColor() {
            return {
                'background': `#${this.color}`
            }
        }
    },

    methods: {
        copy() {
            this.toast.clear(); // Clear all previous toast
            this.$refs.color.select();
            document.execCommand('copy');
            this.toast.success("Copied!");
        },
    }
}

</script>

<template>
    <div class="color my-3" :style="backgroundColor"></div>
    <div class="d-flex justify-content-center">
        <input class="form-control input" readonly type="text" ref="color" @focus="" :value="color">
        <button class="btn btn-primary" @click="copy">Copy</button>
    </div>
</template>

<style scoped>
.color {
    height: 10em;
    width: 150px;
    margin: 15px;
    border-radius: 10px;
}

.input {
    width: 90px;
}

</style>
<script  setup>

</script>

<template>
    <div class="bg-primaryLightColor rounded-md w-80">
        <div class="p-2">
            <p class="text-white font-bold p-2">Question 1/30</p>
            <div class="grid grid-cols-5 gap-2 mt-4 p-2">
                <!-- Use Vue.js v-for loop to generate 40 circular spans -->
                <span v-for="number in 30" :key="number"
                    class="h-10 w-10 rounded-full bg-primaryColor flex items-center justify-center text-white">
                    {{ number }}
                </span>
            </div>
            <button class="bg-white p-2  mt-6 rounded-md w-full font-bold">Submit Quiz</button>
        </div>
        
    </div>
</template>

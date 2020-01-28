<template>
<div>
<h2>計算</h2>
<p>1.每次點選 ＋5</p>
<p class="p1">原始數字：{{text5}}</p>
<button type="button" @click="add1">+5</button>
<p>2.每次點選 -5</p>
<p class="p1">原始數字：{{text12}}</p>
<button type="button" @click="add2">-5</button>
</div>
</template>

<script>
export default {
    data(){
        return {
            text5: 0,
            text12: 25,
        }
    },
    methods:{
        add1(){
            this.text5 +=5
        },
        add2(){
            this.text12 -=5
        }
    }
}
</script>
<style scoped>
h2 {
    color: blueviolet
}
.p1{
    color: palevioletred
}
</style>
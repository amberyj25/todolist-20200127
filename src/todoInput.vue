<template>
<div @click="addtodoemit" @keyup.enter="addtodoemit">
<input type="text" v-model="text1">
<input type="button" value="button">
</div>
</template>
<script>
export default {
    data(){
        return {
            text1:""
        }
    },
    methods:{
        addtodoemit(){
            if(this.text1 == ""){
                return
            };
            this.$emit("emittodo",this.text1);
            this.text1= "";
        }
    }
}
</script>
<template>
<div>
  <router-link :to="{name:'first'}">首頁</router-link>
  <router-link :to="{name:'addtodo'}">todolist</router-link>
  <router-link :to="{name:'counter'}">計算</router-link>
  <h2>歡迎使用todolist</h2>
  <router-view></router-view>
</div>
</template>
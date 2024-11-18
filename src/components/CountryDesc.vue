<script setup lang="ts">
import { defineProps } from 'vue';

// 定义 props 接收父组件传递的数据
interface CountryProps {
  title: string;
  desc: string;
  goldMedals: number;
  silverMedals: number;
  bronzeMedals: number;
}

// 使用 defineProps 定义 props
const props = defineProps<CountryProps>();
</script>

<template>
  <div class="bar">
    <div class="title">{{ props.title }}</div>
    <div class="num">
      <span>Description: {{ props.desc }}</span>
      <span>Gold medal: {{ props.goldMedals }}</span>
      <span>Silver medal: {{ props.silverMedals }}</span>
      <span>Bronze medal: {{ props.bronzeMedals }}</span>
    </div>
  </div>
</template>

<style scoped>
.bar {
  width: 60vw;
  margin: 20px 0px;
}
.title {
  font-weight: 600;
  font-size: 20px;
}
.num {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  font-weight: 400;
}
</style>

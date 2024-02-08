<script setup lang="ts">
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";

import ShaderSpherePng from "./assets/preview/shader-sphere.png?url";
import GraphABCPng from "./assets/preview/graph-abc.png?url";
</script>

<template>
  <div class="w-full w-min-[400px] min-h-screen bg-slate-100">
    <Header />
    <div class="flex justify-evenly flex-wrap p-5 sm:p-2">
      <Card title="Shader sphere" :image="ShaderSpherePng" github="https://github.com/forij/shader-sphere" link="https://forij.github.io/shader-sphere/"/>
      <Card title="GraphABC" :image="GraphABCPng" github="https://github.com/forij/GraphABC" link="https://forij.github.io/GraphABC/"/>
    </div>
  </div>
</template>

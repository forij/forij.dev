<script lang="ts" setup>
import { defineProps } from "vue";
import GithubIcon from "../assets/icons/github.svg";
import OpenNewWidowIcon from "../assets/icons/open-in-window.svg";

defineProps({
  title: String,
  link: String,
  github: String,
  image: String,
});
</script>

<template>
  <div
    class="text-center m-3 w-full w-min-40 md:w-[600px] md:h-[500px] shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl relative"
  >
    <img :src="image" alt="preview" class="w-full h-45 object-cover" />
    <a
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="cursor-pointer opacity-0 hover:opacity-100 hover:scale-150 transition-all ease-in-out duration-300"
    >
      <div
        class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div
          class="flex gap-2 justify-center items-center p-5 h-20 w-full text-white"
        >
          <div class="text-2xl">View</div>
          <OpenNewWidowIcon class="w-8 h-8 text-white" />
        </div>
      </div>
    </a>
    <div
      class="absolute bottom-0 flex justify-between items-center p-5 h-20 w-full bg-white shadow-[rgba(0,0,15,0.5)_0px_5px_5px_3px]"
    >
      <div class="text-2xl">{{ title }}</div>
      <a :href="github" target="_blank" rel="noopener noreferrer">
        <GithubIcon class="w-8 h-8 cursor-pointer" />
      </a>
    </div>
  </div>
</template>

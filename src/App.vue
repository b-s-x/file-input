<script setup lang="ts">
import FilePreview from '@/components/FilePreview.vue';
// import WithSpinner from '@/components/WithSpinner.vue';

const files = [
  {
    preview: "https://s1.1zoom.ru/b5755/170/The_Great_Wall_of_China_Mountains_Fence_542034_2560x1440.jpg",
    name: "11111",
  },
  {
    preview: "https://s1.1zoom.ru/b5755/170/The_Great_Wall_of_China_Mountains_Fence_542034_2560x1440.doc",
    name: "22222",
  },
  {
    preview: "https://s1.1zoom.ru/b5755/170/The_Great_Wall_of_China_Mountains_Fence_542034_2560x1440.pdf",
    name: "22222",
  },
]

</script>

<template>
  <div class="box">
    <div class="preview_box">
      <FilePreview
        v-for="file of files"
        class="item"
        :key="file.name"
        :preview="file.preview"
        :name="file.name"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@common';
.box {
  height: 100vh;
  width: 100vw;
}

.item {
  width: 200px;
  height: 200px;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
}

.preview {
  width: 50%;
  height: 50%;

  &_box {
    display: flex;
    flex-wrap: wrap;
    min-height: 200px;
    min-width: 420px;
  }
}
</style>

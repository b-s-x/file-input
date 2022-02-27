<script lang="ts" setup>
// import emit from 'vue-emit';
import {
  checkIsImage,
  getFileExtension,
  FileKind,
  getFileMetaData,
} from '@/utils/files';

import WithSpinner from './WithSpinner.vue';
import Icon from './Icon.vue';

const iconsMap: any = {
  [FileKind.PDF]: 'Pdf',
  [FileKind.Document]: 'Word',
  [FileKind.Image]: 'Image',
};

enum IconsColorsMap {
  Pdf = 'rgb(235, 16, 0)',
  Word = 'rgb(41, 82, 148)',
  Image = 'green',
};

const props = defineProps({
  file: {
    type: Array,
    default: () => [],
  },
  preview: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    default: null,
  },
  isDeliting: {
    type: Boolean,
    default: false,
  },
  previewClass: {
    type: String,
    default: '',
  },
  // blob: {
  //   type: [Object, File],
  //   default: () => ({}),
  // },
});

// const {
//   preview,
//   name,
//   progress,
//   isDeliting,
//   previewClass,
//   blob,
// } = props;

const handleDeleteClick = () => {};
const handlePreviewClick = () => {};

const type: any = getFileMetaData(props.preview);

const iconRender: any = iconsMap[type.extension] || 'FileAlt'
console.log(iconsMap[type.extension]);

// const isFetching = !(typeof progress === 'number'
//   && Number.isNaN(progress))
//   && progress > 1;

const extension = getFileExtension(props.preview)
console.log(2, extension);


</script>

<template>
  <div :class="['wrapper', {deletable: isDeliting}]">
    <button
      type="button"
      :class="['wrapper_box', props.previewClass]"
      :disabled="false"
      :title="props.name"
      @click="handlePreviewClick"
    >
      <WithSpinner
        :isFetching="false"
        class="spinner"
      />

        <img
          v-if="checkIsImage(props.preview)"
          class="file_preview"
          :src="props.preview"
          :alt="props.name"
        />

        <Icon
          v-else
          :icon="iconRender"
          :color="IconsColorsMap[iconRender]"
          class="icon"
        />
    </button>

    <button
      v-if="isDeliting"
      type="button"
      class="delete"
      @click="handleDeleteClick"
    >
      <Icon icon="IconTimes" />
    </button>
  </div>
</template>


<style lang="scss" scoped>
@import '../theme/common.scss';

$plateBackgroundColor: rgb(238, 238, 238);

.wrapper {
  display: flex;
  width: 100%;
  height: 100%;

  &_box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.spinner {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.file {
  background: $plateBackgroundColor;
  border: thin solid gray;
  border-radius: .5rem;
  display: block;
  height: 5rem;
  overflow: hidden;
  padding: 0;
  width: 5rem;

  &:hover,
  &:focus,
  &:active {
    color: gray;
  }

  &:disabled {
    opacity: .5;
    pointer-events: none;
  }

  &_preview {
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
}

.icon {
  width: 2rem;
  padding: 2rem;
}

.delete {
  align-items: center;
  background: white;
  border: thin solid currentColor;
  border-radius: 50%;
  color: red;
  display: flex;
  font-size: .825em;
  height: 1.5rem;
  justify-content: center;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: box-shadow ease-in-out .3s;
  width: 1.5rem;

  &:hover,
  &:focus {
    box-shadow: 0 0 5px 0 red;
    cursor: pointer;
    outline: 0;
  }

  &:disabled {
    opacity: .5;
    pointer-events: none;
  }
}

</style>
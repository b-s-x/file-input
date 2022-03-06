<script lang="ts" setup>
import {
  checkIsImage,
  FileKind,
  getFileMetaData,
  FileMetadata,
} from '@/utils/files';
// import WithSpinner from './WithSpinner.vue';
import Icon from './Icon.vue';

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

const handleDeleteClick = () => {};
const handlePreviewClick = () => {};

const type: FileMetadata = getFileMetaData(props.preview);
type IconsMap = {
  [K in keyof FileKind as FileKind[K] & string]: keyof typeof IconsColors;
};

enum IconsColors {
  Pdf = 'rgb(235, 16, 0)',
  Word = 'rgb(41, 82, 148)',
  Image = 'green',
};

const iconsMap: IconsMap = {
  [FileKind.PDF]: 'Pdf',
  [FileKind.Document]: 'Word',
  [FileKind.Image]: 'Image',
};

const iconTypeRender:  keyof typeof IconsColors = iconsMap[type.extension];
const iconColor = IconsColors[iconTypeRender];

//TODO: remade
const isFetching = !(typeof props.progress === 'number'
  && Number.isNaN(props.progress))
  && props.progress > 1;

</script>

<template>
  <div :class="['wrapper', {deletable: isDeliting}]">
    <button
      type="button"
      :class="['wrapper_box', props.previewClass]"
      :disabled="isFetching"
      :title="props.name"
      @click="handlePreviewClick"
    >
      <!-- <WithSpinner
        :isFetching="isFetching"
        class="spinner"
      /> -->

      <img
        v-if="checkIsImage(props.preview)"
        class="preview_img"
        :src="props.preview"
        :alt="props.name"
      />

      <Icon
        v-else
        :icon="iconTypeRender"
        :color="iconColor"
        class="preview_icon"
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
@import '@common';

$plateBackgroundColor: #8080801f;

.wrapper {
  display: flex;
  height: 100%;
  width: 100%;

  &.deletable {
    padding: .75rem .75rem 0 0;
    position: relative;
  }

  &_box {
    background: $plateBackgroundColor;
    border: none;
    border-radius: .5rem;
    display: block;
    height: 100%;
    overflow: hidden;
    padding: 0;
    width: 100%;

    &:hover,
    &:focus,
    &:active {
      color: gray;
    }
  }

  &:disabled {
    opacity: .5;
    pointer-events: none;
  }
}

.spinner {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.preview {
  &_img {
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  &_icon {
    width: 90%;
    height: 90%;
  }
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
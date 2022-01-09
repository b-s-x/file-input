<script lang="ts" setup>
import Trash from '../assets/icons/Trash.svg';
import CameraPlus from '../assets/icons/CameraPlus.svg';
import FileAlt from '../assets/icons/FileAlt.svg';
import FilePlus from '../assets/icons/FilePlus.svg';
import Image from '../assets/icons/Image.svg';
import MSWord from '../assets/icons/MSWord.svg';
import Pdf from '../assets/icons/Pdf.svg';
import Plus from '../assets/icons/Plus.svg';
import Times from '../assets/icons/Times.svg';
import { onMounted, ref } from 'vue';

const props = defineProps<{
  icon: string
  color?: string
}>();

enum Icons {
  Trash = 'Trash',
  CameraPlus = 'CameraPlus',
  FileAlt = 'FileAlt',
  FilePlus = 'FilePlus',
  Image = 'Image',
  MSWord = 'MSWord',
  Pdf = 'Pdf',
  Plus = 'Plus',
  Times = 'Times',
  Unknown = 'Unknown'
};

// TODO try rewrite from vite
// https://github.com/luxueyan/vite-transform-globby-import

const IconsMap = {
  [Icons.Trash]: Trash,
  [Icons.CameraPlus]: CameraPlus,
  [Icons.FileAlt]: FileAlt,
  [Icons.FilePlus]: FilePlus,
  [Icons.Image]: Image,
  [Icons.MSWord]: MSWord,
  [Icons.Pdf]: Pdf,
  [Icons.Plus]: Plus,
  [Icons.Times]: Times,
};

const obj = ref();

const getSvgElement = (): Promise<SVGElement> => {
  return new Promise((resolve, reject) => {
    obj.value.addEventListener('load', () => {
      const svg = obj.value.getSVGDocument()?.querySelector('svg');
      if (svg == null) return reject(new Error('no svg element found'));

      resolve(svg);
    })
  })
};

const setSvgColor = async () => {
  const svg = await getSvgElement();
  svg.setAttribute('fill', props.color as string);
  svg.style.color = props.color as string;
}

onMounted(() => {
  setSvgColor();
});

</script>

<template>
  <object
    ref="obj"
    :data="IconsMap[props.icon]"
    alt=""
  />
</template>

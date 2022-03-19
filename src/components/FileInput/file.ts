export class File {
  private localFiles: File[] = [];
  public files: File[] = [];

  constructor() {
    this.files = [];
    // this.localFiles = [];
  }

  async upload(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = Array.from(target.files as FileList)

    console.log('this.files', files);
    await Promise.all(files.map(async file => {
      const { size, type, name } = file;

      this.localFiles.push({
        // id: generateHash(8),
        file,
        // preview,
        // original: preview,
        caption: name,
        size,
        type,
        name,
        // isImage,
      })
    }))

    console.log('this.localFiles', this.localFiles);
  }
}

export default File;

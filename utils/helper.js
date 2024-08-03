exports.formatSize = (sizeInBytes) => {
    if (sizeInBytes < 1024) return `${sizeInBytes} Bytes`;
    else if (sizeInBytes < 1048576) return `${(sizeInBytes / 1024).toFixed(2)} KB`;
    else if (sizeInBytes < 1073741824) return `${(sizeInBytes / 1048576).toFixed(2)} MB`;
    else return `${(sizeInBytes / 1073741824).toFixed(2)} GB`;
};

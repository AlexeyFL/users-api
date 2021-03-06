function chunkArray(array, size) {
  const chunkedArr = [];
  const copied = [...array];
  const numOfChild = Math.ceil(copied.length / size);
  for (let i = 0; i < numOfChild; i++) {
    chunkedArr.push(copied.splice(0, size));
  }
  return chunkedArr;
}

export { chunkArray };

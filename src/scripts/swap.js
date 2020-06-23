let swapNodes = (node1, blank) => {
  let temp = document.createElement("div");
  node1.parentNode.insertBefore(temp, node1);

  blank.parentNode.insertBefore(node1, blank);

  temp.parentNode.insertBefore(blank, temp);

  temp.parentNode.removeChild(temp);
};

export default swapNodes
function countDevelopers(list) {
  // your awesome code here :)
  let count = 0;
  for (let li in list) {
    if (list[li].continent == "Europe" && list[li].language == "JavaScript") {
      count = count + 1;
    }
  }
  return count;
}

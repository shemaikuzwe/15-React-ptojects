const dummyApiResponse = {
  ShowLightAndDarkMode: true,
  showRandomColor: true,
  showAccordian: true,
  showImageSlider: true,
};
function FeautureFlagsDataCaller() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("something went wrong try again");
  });
}
export default FeautureFlagsDataCaller;

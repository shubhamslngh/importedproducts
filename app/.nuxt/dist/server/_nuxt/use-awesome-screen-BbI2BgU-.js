import { reactive, ref, onUnmounted } from "vue";
const defaultScreenConfig = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};
const useAwesomeScreen = () => {
  const screenSize = reactive({
    width: 0,
    height: 0
  });
  const current = ref("sm");
  const getSize = (width) => {
    if (width === void 0)
      width = screenSize.width;
    const { sm, md, lg, xl } = defaultScreenConfig;
    if (width < Number(sm))
      return "sm";
    if (width < Number(md))
      return "md";
    if (width < Number(lg))
      return "lg";
    if (width < Number(xl))
      return "xl";
    return "xl";
  };
  const higherThan = (size, defScreenSize) => {
    const { sm, md, lg, xl } = defaultScreenConfig;
    const width = defaultScreenConfig[defScreenSize || current.value];
    if (size === "sm")
      return width >= Number(sm);
    if (size === "md")
      return width >= Number(md);
    if (size === "lg")
      return width >= Number(lg);
    if (size === "xl")
      return width >= Number(xl);
    return false;
  };
  onUnmounted(() => {
    return;
  });
  return {
    getSize,
    screenSize,
    current,
    higherThan
  };
};
export {
  useAwesomeScreen as u
};
//# sourceMappingURL=use-awesome-screen-BbI2BgU-.js.map

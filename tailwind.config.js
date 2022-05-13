module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        green_A200_7f: "#73fdaa7f",
        gray_600: "#7f7f7f",
        gray_400: "#c4c4c4",
        gray_400_4c: "#b5b5b54c",
        green_A200: "#73fdaa",
        cyan_100: "#bbffff",
        black_900: "#010010",
        green_A200_af: "#73fdaaaf",
        white_A700: "#ffffff",
        green_A200_7a: "#72fda97a",
        green_A200_8e: "#73fdaa8e",
        green_A200_e2: "#73fdaae2",
        green_A200_5b: "#72fda95b",
      },
      fontFamily: {
        montserrat: "Montserrat",
        raleway: "Raleway",
        roboto: "Roboto",
      },
      borderRadius: {
        radius4: "4px",
        radius10: "10px",
        radius18: "18px",
        radius20: "20px",
        radius50: "50%",
      },
      fontSize: {
        fs7: "7px",
        fs8: "8px",
        fs10: "10px",
        fs12: "12px",
        fs14: "14px",
        fs15: "15px",
        fs16: "16px",
        fs17: "17px",
        fs18: "18px",
        fs19: "19px",
        fs20: "20px",
        fs21: "21px",
        fs24: "24px",
        fs28: "28px",
        fs32: "32px",
        fs36: "36px",
        fs37: "37px",
        fs38: "38px",
        fs42: "42px",
        fs43: "43px",
        fs48: "48px",
        fs57: "57px",
        fs58: "58px",
        fs66: "66px",
        fs75: "75px",
        fs90: "90px",
      },
      lineHeight: { lh: "normal" },
      borderWidth: { bw: "none", bw3: "3px" },
      backgroundImage: { gradient: "linear-gradient(270deg ,#73fdaa,#c4c4c4)" },
      boxShadow: {
        bs: "0px 1px  6px 4px #73fdaae2",
        bs2: "0px -5px  4px 0px #72fda95b",
        bs1: "5px 1px  13px 4px #72fda97a",
      },
      opacity: { op5: 0.05 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {
      colors: {
        cardinal: "#041F4F",
        yinmnBlue: "#E62E59",
        black: "#000000",
        battleshipGray: "##898989",
        silver: "#B2B2B2",
        platinum: "#EAEAEA",
        platinum30: "#EAEAEA4D",
        white: "#fff",
        vermililion: "#E74C3C",
        amber: "#FBBE28",
        emerald: "#00CC77",
        yinmnBlue10: "#e62e591A",
        borderColor: "#EAEAEA",
        gray: "#E4E8F2",
      },
      fontSize: {
        head56: "3.5rem",
        head48: "3rem",
        head40: "2.5rem",
        head32: "2rem",
        head24: "1.5rem",
        button18: "1.125rem",
        button16: "1rem",
        body18: "1.125rem",
        body16: "1rem",
        caption18: "1.125rem",
        caption16: "1rem",
        sub56: "3.5rem",
        sub48: "3rem",
        sub40: "2.5rem",
        sub32: "2rem",
        sub24: "1.5rem",
        small12: "0.75rem",
        small10: "0.625rem",
      },
    },
  },
  plugins: [],
};

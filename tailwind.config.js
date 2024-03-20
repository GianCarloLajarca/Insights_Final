module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        insightBanner: "url(/dist/img/banner-img.png)",
        projects1: "url(/dist/img/projects1.png)",
        projects2: "url(/dist/img/projects2.png)",
        projects3: "url(/dist/img/projects3.png)",
      },
      colors:{
        dark:"#2b2b2b",
        light:"#ffffff",
        pula: "#e64737",
      }
    },
  },
  plugins: [],
}

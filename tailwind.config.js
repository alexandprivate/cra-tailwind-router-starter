module.exports = {
    purge: {
        enabled: false, // change to true before push
        content: ["./pages/*.js", "./components/*.js"],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            colors: {
                primary: "#F53900",
            },
        },
    },
    variants: {},
    plugins: [],
};

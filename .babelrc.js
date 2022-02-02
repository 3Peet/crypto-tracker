// .babelrc.js
module.exports = {
	presets: [["next/babel"]],
	plugins: [["import", {libraryName: "antd", style: true}]],
};

module.exports = {
	presets: ["next/babel"],
	plugins: [["styled-components", {ssr: true}]],
};

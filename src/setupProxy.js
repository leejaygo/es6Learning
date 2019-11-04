
const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
    app.use(
        proxy("/api", {
			target: "http://172.31.0.99:8088",
			changeOrigin: true,
			pathRewrite: {
				'^/api': ''
			}
        })
    )
}

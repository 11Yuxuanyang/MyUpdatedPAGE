const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();
const PORT = process.env.PORT || 3000;

// 使用connect-history-api-fallback中间件支持Vue Router的history模式
app.use(history());

// 静态文件服务
app.use(express.static(path.join(__dirname, 'dist')));

// 所有请求都返回index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
  console.log(`访问 http://localhost:${PORT} 查看网站`);
}); 
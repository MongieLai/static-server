console.log('请求js成功')
let jsATag = document.createElement('a')
jsATag.textContent = '这是js动态插入的节点'
document.body.appendChild(jsATag)

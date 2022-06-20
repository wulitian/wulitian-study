// 监听来自主线程的消息事件
onmessage = function (e) {
  const { type, data } = e.data
  if (type === 'add') {
    const ret = data.num1 + data.num2

    // 给主线程发布事件
    postMessage({
      type: 'add',
      data: ret
    })

    // 关闭线程自己在合适的时机关闭否则只有第一次生效
    self.close()
  }
}

module.exports = (rateMs, finishCb) => {
  const stack = []
  let timer = null
  const process = () => {
    const item = stack.shift()
    item()
    if (stack.length === 0) {
      clearInterval(timer)
      timer = null
      finishCb && finishCb()
    }
  }
  return {
    queue: (item) => {
      stack.push(item)
    },
    start: () => {
      if (timer === null) {
        if (stack.length === 0) {
          finishCb && finishCb()
        } else {
          timer = setInterval(process, rateMs)
        }
      }
    }
  }
}

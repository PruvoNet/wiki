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
  return (item) => {
    stack.push(item)
    if (timer === null) {
      timer = setInterval(process, rateMs)
    }
  }
}

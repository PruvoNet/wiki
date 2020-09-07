module.exports = (rateMs) => {
  const stack = []
  let timer = null
  const process = () => {
    const item = stack.shift()
    item()
    if (stack.length === 0) {
      clearInterval(timer)
      timer = null
    }
  }
  return (item) => {
    stack.push(item)
    if (timer === null) {
      timer = setInterval(process, rateMs)
    }
  }
}

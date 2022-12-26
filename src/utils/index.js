/**
 * 创建字符索引
 * @author hongwenqing(elenh)
 * @param {number} index 数字索引值
 * @param {Array} ori 匹配数组
 * @return {any}
 */
export function createIndex (
  index,
  ori = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
) {
  const s = index + ''
  const len = s.length
  let res = ''

  for (let i = 0; i < len; i++) {
    const sIndex = Number.parseInt(s[i])
    res += ori[sIndex]
  }

  return res
}

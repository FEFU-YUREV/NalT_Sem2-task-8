import laptops from '../data'

export type tGroup = {
  id: number
  Группа: string
  'Минимальная цена': number
  'Максимальная цена': number
  'Средняя цена': number
  'Минимальная оценка': number
  'Максимальная оценка': number
  'Средняя оценка': number
}[]

const groupByTag = () => {
  const groups: Record<string, any[]> = {}

  laptops.forEach((laptop) => {
    const price = parseInt(laptop.price.replace(/[^0-9]/g, '')) || 0
    if (!groups[laptop.tag]) {
      groups[laptop.tag] = []
    }
    groups[laptop.tag].push({ price, score: laptop.score })
  })

  let idCounter = 1
  const result: tGroup = []

  for (const tag in groups) {
    const items = groups[tag]
    const prices = items.map((i) => i.price)
    const scores = items.map((i) => i.score)

    result.push({
      id: idCounter++,
      Группа: tag,
      'Минимальная цена': Math.min(...prices),
      'Максимальная цена': Math.max(...prices),
      'Средняя цена': Math.round(prices.reduce((a, b) => a + b, 0) / prices.length),
      'Минимальная оценка': Math.min(...scores),
      'Максимальная оценка': Math.max(...scores),
      'Средняя оценка': Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
    })
  }

  return result
}

export const tagsData = groupByTag()

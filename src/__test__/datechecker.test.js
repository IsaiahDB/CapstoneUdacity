
import { checkDate } from '../client/js/checkDate'

test('test if a number returns', () => {
    expect(checkDate(4,5)).toBeLessThan(7)
    expect(checkDate(4,5)).toBeTruthy()
    expect(checkDate(4,5)).toBe(1)
})




import { test, expect } from '@playwright/test'

test('[DatePicker] 测试禁用状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/disabled')
})

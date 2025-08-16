import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Navigate to the local index.html file
        await page.goto(f"file://{os.getcwd()}/index.html")

        # Take a screenshot of the main page
        await page.screenshot(path="jules-scratch/verification/main_page.png")

        # Click on the first tool to open the dialog
        await page.click('.grid-item')

        # Wait for the dialog to be visible
        await page.wait_for_selector('.dialog', state='visible')

        # Take a screenshot of the dialog
        await page.screenshot(path="jules-scratch/verification/dialog_page.png")

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())

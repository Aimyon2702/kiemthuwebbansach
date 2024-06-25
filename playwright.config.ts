import {  defineConfig } from '@playwright/test';


export default defineConfig({
    timeout: 5 * 60 * 1000,

    reporter: [
        ['dot'],
        ['list'],
        ['allure-playwright'],
        ['json', { outputFile: 'report.json'}]
    ],
});


import { config as sharedConfig } from './wdio.shared.conf';
import * as path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
//import 'dotenv/config';

export const config = {... sharedConfig};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// config.user = process.env.BROWSERSTACK_USERNAME;
// config.key = process.env.BROWSERSTACK_ACCESS_KEY;

config.user = 'ashleightu_puXqQJ';
config.key = 'TxteeiRpoUi5eKXTMuXx';

config.specs = [
    path.join(process.cwd(), 'test/specs/android/*.ts')
];

config.capabilities = [
    {
        platformName: 'Android', 
        'appium:deviceName': 'Google Pixel 7',
        'appium:platformVersion': '13.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'bs://20d3683319a4ae8a6dd3b131bca8933420afae8d',
        'appium:autoGrantPermissions': true,
    }
];

config.services = [
    ['browserstack', {
    browserstackLocal: false
    }]
];

import { config as sharedConfig } from './wdio.shared.conf';
import * as path from 'path';
import 'dotenv/config';

export const config = {... sharedConfig};

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

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

config.services = ['browserstack'];

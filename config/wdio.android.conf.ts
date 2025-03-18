import { config as sharedConfig } from './wdio.shared.conf';
import * as path from 'path';

export const config = {... sharedConfig};

config.port = 4723;

config.specs = [
    path.join(process.cwd(), 'test/specs/android/*.ts')
];

config.capabilities = [
    {
        platformName: 'Android', 
        'appium:deviceName': 'Pixel 7',
        'appium:platformVersion': '15.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
        'appium:autoGrantPermissions': true,
    }
];

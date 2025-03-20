import { config as sharedConfig } from './wdio.shared.conf';
import * as path from 'path';

export const config = {...sharedConfig};

config.port = 4723;

config.specs = [
    path.join(process.cwd(), 'test/specs/ios/webview*.ts')
];

config.capabilities = [
    {
        platformName: 'ios',
        //browserName: 'Safari',
        'appium:deviceName': 'iPhone 16',
        'appium:platformVersion': '18.3',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), 'app/ios/wdiodemoapp.app'),
    }
];

config.services = [
    ['appium', {
        args: {
            address: '127.0.0.1',
            port: 4723,
            path: '/',
            relaxedSecurity: true,
        },
        command: 'appium'
    }]
]
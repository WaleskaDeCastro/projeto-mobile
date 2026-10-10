exports.config = {
    runner: 'local',
    port: 4723,

    specs: ["./features/**/*.feature"],
    exclude: [],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator5554',
        'appium:platformVersion': '16.0',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'com.solodroid.solomerce',
        'appium:appActivity': 'com.solodroid.solomerce.activities.ActivitySplash',
        'appium:newCommandTimeout': 3600
    }],

    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: [
        [
            "appium",
            {
                args: {
                    allowInsecure: "*:chromedriver_autodownload",
                },
            },
        ],
    ],

    framework: 'cucumber',
    reporters: ['spec'],

    cucumberOpts: {
        require: [
            './step-definitions/adicionar_produto.steps.js',
            './step-definitions/hooks.js'
        ],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    }
};

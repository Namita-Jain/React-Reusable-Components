module.exports = {
    roots: ['<rootDir>/packages/'],
    coverageDirectory: '<rootDir>/coverage/',
    setupFilesAfterEnv: ['jest-extended'],
    preset: 'ts-jest',
    testMatch: [`<rootDir>/packages/**/*.spec.tsx`],
};

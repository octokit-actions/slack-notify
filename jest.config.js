module.exports = {
    testEnvironment: "node",
    moduleFileExtensions: ["js", "ts"],
    transform: {
        "^.+\\.ts$": "ts-jest"
    },
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json"
        }
    },
    testMatch: ["**/*.test.ts"],
    coverageDirectory: "./coverage"
}
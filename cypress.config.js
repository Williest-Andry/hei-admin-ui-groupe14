import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.REACT_PREPROD_URL
  },
  env: {
    REACT_APP_TEST_STUDENT1_PASSWORD:
      process.env.REACT_APP_TEST_STUDENT1_PASSWORD,
    REACT_APP_TEST_TEACHER1_PASSWORD:
      process.env.REACT_APP_TEST_TEACHER1_PASSWORD,
    REACT_APP_TEST_MANAGER1_PASSWORD:
      process.env.REACT_APP_TEST_MANAGER1_PASSWORD,
    REACT_APP_TEST_MONITOR1_PASSWORD:
      process.env.REACT_APP_TEST_MONITOR1_PASSWORD,
    REACT_APP_TEST_ADMIN1_PASSWORD: process.env.REACT_APP_TEST_ADMIN1_PASSWORD,
    REACT_APP_TEST_STAFF1_PASSWORD: process.env.REACT_APP_TEST_STAFF1_PASSWORD,
    REACT_APP_TEST_ORGANIZER1_PASSWORD:
      process.env.REACT_APP_TEST_ORGANIZER1_PASSWORD,
    codeCoverage: {
      exclude: ["cypress/**/*.*", "src/**/*.cy", "src/providers/**/*.*"],
    },
    REACT_APP_CASDOOR_SDK_SERVER_URL:
      process.env.REACT_APP_CASDOOR_SDK_SERVER_URL,
    REACT_APP_TEST_STUDENT1_EMAIL:
      process.env.REACT_APP_TEST_STUDENT1_EMAIL,
    REACT_APP_TEST_MANAGER1_EMAIL:
      process.env.REACT_APP_TEST_MANAGER1_EMAIL,
    INSTATUS_WEBHOOK_URL:
      process.env.INSTATUS_WEBHOOK_URL,
    INSTATUS_API_KEY:
      process.env.INSTATUS_API_KEY,
    REACT_APP_MANAGER_EMAIL:
      process.env.REACT_APP_MANAGER_EMAIL
  },
});

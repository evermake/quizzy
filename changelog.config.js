/** @type { import("changelogen").ChangelogConfig } */
module.exports = {
  types: {
    feat: { title: '🚀 Enhancements', semver: 'minor' },
    fix: { title: '🩹 Fixes', semver: 'patch' },
    perf: { title: '⚡️ Performance', semver: 'patch' },
    refactor: { title: '💅 Refactors', semver: 'patch' },
    docs: { title: '📖 Documentation', semver: 'patch' },
    build: { title: '🛠 Build', semver: 'patch' },
    workflow: { title: '👨🏻‍💻 Workflow' },
    chore: { title: '🏡 Chore' },
    test: { title: '✅ Tests' },
    style: { title: '🎨 Styles' },
    ci: { title: '🤖 CI' },
  },
}

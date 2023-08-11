/**
 * @typedef {{
 *   type: string;
 *   scope: string;
 *   subject: string;
 *   body: string;
 *   isBreaking: boolean;
 *   breakingBody: string;
 *   breaking: string;
 *   isIssueAffected: boolean;
 *   issuesBody: string;
 *   issues: string;
 * }} Answers
 */

/** @type import('cz-format-extension').Config<Answers> */

module.exports = {
  questions({ inquirer }) {
    return [
      {
        type: 'list',
        name: 'type',
        message: 'Select type',
        choices: [
          {
            name: 'feat: A new feature',
            value: 'feat',
          },
          {
            name: 'fix: A bug fix',
            value: 'fix',
          },
          {
            name: 'docs: Documentation only changes',
            value: 'docs',
          },
          {
            name: 'style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            value: 'style',
          },
          {
            name: 'refactor: A code change that neither fixes a bug nor adds a feature',
            value: 'refactor',
          },
          {
            name: 'perf: A code change that improves performance',
            value: 'perf',
          },
          {
            name: 'test: Adding missing tests or correcting existing tests',
            value: 'test',
          },
          {
            name: 'build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
            value: 'build',
          },
          {
            name: 'ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
            value: 'ci',
          },
          {
            name: "chore: Other changes that don't modify src or test files",
            value: 'chore',
          },
          {
            name: 'revert: Reverts a previous commit',
            value: 'revert',
          },
        ],
      },
      {
        type: 'input',
        name: 'subject',
        message: 'Write a short, imperative tense description of the change\n',
        validate: (subject) =>
          subject.length === 0 ? 'subject is required' : true,
      },
      {
        type: 'input',
        name: 'body',
        message:
          'Provide a longer description of the change: (press enter to skip)\n',
      },
      {
        type: 'confirm',
        name: 'isBreaking',
        message: 'Are there any breaking changes?',
        default: false,
      },
      {
        type: 'input',
        name: 'breakingBody',
        default: '-',
        message:
          'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself:\n',
        when: (answers) => answers.isBreaking && !answers.body,
      },
      {
        type: 'input',
        name: 'breaking',
        message: 'Describe the breaking changes:\n',
        when: (answers) => answers.isBreaking,
      },
      {
        type: 'confirm',
        name: 'isIssueAffected',
        message: 'Does this change affect any open issues?',
        default: false,
      },
      {
        type: 'input',
        name: 'issuesBody',
        default: '-',
        message:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself:\n',
        when: (answers) =>
          answers.isIssueAffected && !answers.body && !answers.breakingBody,
      },
      {
        type: 'input',
        name: 'issues',
        message: 'Add issue references (e.g. "fix #123", "re #123".):\n',
        when: (answers) => answers.isIssueAffected,
        default: undefined,
        validate: (issues) =>
          issues.length === 0 ? 'issues is required' : true,
      },
    ];
  },
  commitMessage({ answers }) {
    const scope = answers.scope ? `(${answers.scope})` : '';
    const head = `${answers.type}${scope}: ${answers.subject}`;
    const body = answers.body ? answers.body : '';
    const breaking = answers.breaking
      ? `BREAKING CHANGE: ${answers.breaking}`
      : '';
    const issues = answers.issues ? answers.issues : '';

    return [head, body, breaking, issues].join('\n\n').trim();
  },
};

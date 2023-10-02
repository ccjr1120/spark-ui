module.exports = {
  types: [
    {
      value: '🎉 init',
      name: '🎉 init:     初始化',
    },
    {
      value: '📃 docs',
      name: '📃 docs',
    },
    {
      value: '✨ feat',
      name: '✨ feat',
    },
    {
      value: ' 🐞 fix',
      name: '🔧 fix',
    },

    {
      value: '🔧 build',
      name: '🔧 build',
    },
    {
      value: '🐳 chore',
      name: '🐳 chore',
    },
    {
      value: '🌈 style',
      name: ' 🌈 style',
    },
  ],
  messages: {
    type: '请选择提交类型(必填)',
    customScope: '请输入文件修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    breaking: '列出任何BREAKING CHANGES(可选)',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确定提交此说明吗？',
  },
  allowCustomScopes: true,
  skipEmptyScopes: true,
  subjectLimit: 72,
};

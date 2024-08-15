export default {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@root': './'
          }
        }
      ]
    ]
  };
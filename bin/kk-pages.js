#!/usr/bin/env node

// Node CLI 应用入口文件必须要有这样的文件头
// 如果是 Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 bin/kk-pages.js 实现修改

process.argv.push('--cwd')
process.argv.push(process.cwd()) // 当前命令行执行的目录
process.argv.push('--gulpfile')
process.argv.push(require.resolve('..')) // lin/index.js


require('gulp/bin/gulp')
// 我们查node_modules中发现gulp/bin/gulp目录，其实是执行了这个函数 require('gulp-cli')();
// 而gulp-cli中又是通过process.argv来拿到对应的参数的  （argv是一个数组）
// console.log(process.argv); // 可以打印查看
// 所以我们可以在代码运行之前往argv中push我们需要传入的参数（"--cwd"、"--gulpfile"）

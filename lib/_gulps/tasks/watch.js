var gulp = require('gulp')
var config = require('../config')
var utils = require('../utils')
var browserSync = require('./browserSync')

gulp.task('watch', ['browserify'], function () {
	gulp.start('html', 'style', 'img', 'script', 'copy', 'watchify')
	var htmlConfig = utils.parseConfig(config.html)
	var styleConfig = utils.parseConfig(config.style)
	var imgConfig = utils.parseConfig(config.img)
	gulp.watch(utils.getSrc(htmlConfig.src), ['html'])
	gulp.watch(utils.getSrc(styleConfig.src), ['style'])
	gulp.watch(utils.getSrc(imgConfig.src), ['img'])
	gulp.watch(utils.getSrc(config.copy), ['copy'])
})

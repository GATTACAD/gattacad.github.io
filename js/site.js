(function() {
    var app = {};

    var skills = [{
        name: 'HTML(5)',
        img: 'images/icon-html.jpg',
        intro: '代码注重语义性，熟练手写符合 w3c 标准的HTML页面。'
    }, {
        name: 'CSS(3)',
        img: 'images/icon-css.jpg',
        intro: '熟练使用CSS对网页进行（自适应）布局，了解常见浏览器的兼容性。<br />'
    }, {
        name: 'Javascript',
        img: 'images/icon-js.jpg',
        intro: '看似简单，实则水很深，目前致力于能够用优雅的代码实现功能。'
    }, {
        name: 'jQuery',
        img: 'images/icon-jquery.jpg',
        intro: 'JS的一个类库，基本上可以熟练使用。'
    }, {
        name: 'AngularJS',
        img: 'images/icon-angular.jpg',
        intro: '前端框架，用起来还是比较容易上手的，极大减轻了对数据方面的处理，库重水深。'
    }, {
        name: 'NodeJS',
        img: 'images/icon-nodejs.jpg',
        intro: '能够实现增删改查，是接下来的学习方向，正在努力摸索中。'
    }, {
        name: 'BootStrap',
        img: 'images/icon-bootstrap.jpg',
        intro: '很强大的一个前端框架，自适应布局，各种组件等。'
    }, {
        name: 'Gulp',
        img: 'images/icon-gulp.png',
        intro: '前端领域的构建工具（任务管理工具），熟练使用创建基本任务。'
    }, {
        name: 'Less',
        img: 'images/icon-less.jpg',
        intro: '把CSS赋予动态语言特性，可以写更少的代码达到效果。但是实际编译出来的代码量远远超过手写，所以我建议能不用就别用。'
    }, {
        name: 'Phtoshop',
        img: 'images/icon-ps.jpg',
        intro: '熟练使用Photoshop，用于网页切图。'
    }, {
        name: 'Git',
        img: 'images/icon-git.jpg',
        intro: '版本管理工具，无需多言。'
    }];

    app.skill = new Vue({
        el: '#jSkill',
        data: {
            mName: '职业技能',
            skills: skills,
        }
    });

    var exps = [{
      // company: '',
      // from: '',
      // to: '',
      projects: [{
        name: '博学谷在线教育平台',
        intro: '实现在线教育平台的数据分析及可视化。<a href="javascript:;" target="_blank" class="link"></a>',
        tags: ['AngularJS','NodeJS']
      }
      ],
    },{
      // company: '',
      // from: '',
      // to: '',
      projects: [{
        name: '豆瓣一刻',
        intro: '运用 Angular 框架和跨域技术，从豆瓣数据库获取数据，模仿出豆瓣一刻。',
        tags: ['Angular','php']
      }],
    }];
    app.exp = new Vue({
        el: '#jExp',
        data: {
            mName: '项目经验',
            exps: exps,
        }
    });
})();

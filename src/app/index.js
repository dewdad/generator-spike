import Base from '../base';

export default class App extends Base {

  writing() {
    this.sourceRoot(path.join(__dirname, 'templates'));
    this._copyDirectoryDeep(this.sourceRoot(), { exclude: /(node_modules|dist)$/ });
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    });
  }
}

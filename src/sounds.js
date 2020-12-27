var context = require.context("./assets", false, /\.wav$/);

export default {
    click: context('./click.wav')
}
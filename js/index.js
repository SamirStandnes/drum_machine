var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      power: true,
      bank: false,
      volume: 0.5,
      currentAudioName: "",
      keyboard: [
      {
        keysign: "Q",
        keytrigger: 81,
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        name: "Heater" },

      {
        keysign: "W",
        keytrigger: 87,
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        name: "HEE" },

      {
        keysign: "E",
        keytrigger: 69,
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
        name: "Bark" },

      {
        keysign: "A",
        keytrigger: 65,
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3 ",
        name: "Kick-n-hat" },

      {
        keysign: "S",
        keytrigger: 83,
        audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        name: "Kick" },

      {
        keysign: "D",
        keytrigger: 68,
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
        name: "Chord" },

      {
        keysign: "Z",
        keytrigger: 90,
        audio:
        "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
        name: "Give light" },

      {
        keysign: "X",
        keytrigger: 88,
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
        name: "Dry-Ohh" },

      {
        keysign: "C",
        keytrigger: 67,
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
        name: "H!" }] };



    _this.powerSwitch = _this.powerSwitch.bind(_this);
    _this.playSound = _this.playSound.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.keyDown = _this.keyDown.bind(_this);
    _this.adjustVolume = _this.adjustVolume.bind(_this);return _this;
  }_createClass(App, [{ key: "powerSwitch", value: function powerSwitch()

    {
      this.setState({
        power: !this.state.power });

      document.getElementById("display").innerHTML = '';
    } }, { key: "playSound", value: function playSound(

    obj) {
      var audio = document.getElementById(obj.keysign);
      document.getElementById("display").innerHTML = obj.name;
      console.log(audio);
      var volume = this.state.volume;
      audio.volume = volume;
      audio.currentTime = 0;
      audio.play();
      this.setState({
        currentAudioName: obj.name });

    } }, { key: "handleClick", value: function handleClick(

    event_id) {
      var obj = this.state.keyboard.find(function (o) {return o.keysign === event_id;});
      console.log(obj);
      this.playSound(obj);
    } }, { key: "keyDown", value: function keyDown(

    event) {
      var keytrigger = event.keyCode;
      console.log(keytrigger);
      var obj = this.state.keyboard.find(function (o) {return o.keytrigger === keytrigger;});
      this.playSound(obj);
    } }, { key: "componentDidMount", value: function componentDidMount()

    {
      document.addEventListener("keydown", this.keyDown, false);
    } }, { key: "componentWillUnmount", value: function componentWillUnmount()
    {
      document.removeEventListener("keydown", this.keyDown, false);
    } }, { key: "adjustVolume", value: function adjustVolume(

    event) {
      var volume = event.target.value / 100;
      this.setState({
        volume: volume });

      console.log(volume, event);
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "drum-machine" },
          React.createElement("div", { className: "blockOne" },
            React.createElement(Drum, {
              handleClick: this.handleClick,
              keyboard: this.state.keyboard,
              power: this.state.power })),


          React.createElement("div", { className: "blockTwo" },
            React.createElement(Power, { power: this.state.power, powerSwitch: this.powerSwitch }),
            React.createElement("div", { id: "display" }, " "),
            React.createElement(Volume, { adjustVolume: this.adjustVolume, volume: this.state.volume }))));



    } }]);return App;}(React.Component);


var Drum = function Drum(props) {
  return (
    React.createElement("div", null,
      props.keyboard.map(function (e, index) {
        return (
          React.createElement("button", {
              className: "drum-pad",
              key: "" + e.keysign,
              id: "" + e.name,
              onClick: props.handleClick.bind(undefined, e.keysign),
              disabled: !props.power },

            e.keysign,
            React.createElement("audio", { id: "" + e.keysign, className: "clip", src: e.audio })));


      })));


};

var Volume = function Volume(props) {
  return (
    React.createElement("input", {
      type: "range",
      min: "0",
      max: "100",
      onChange: props.adjustVolume,
      className: "slider" }));


};

var Power = function Power(props) {
  return (
    React.createElement("label", { className: "switch-button" },
      React.createElement("input", { type: "checkbox" }),
      React.createElement("span", {
          className: "switch-thumb",
          id: "switch-thumb",
          style: !props.power ? { color: " #1E5631" } : { color: "#76BA1B" },
          onClick: props.powerSwitch },

        " ",
        props.power ? "" : "OFF", " ")));



};

var Bank = function Bank() {};{/* Not implementing another set of sounds to toggle to for now. */}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
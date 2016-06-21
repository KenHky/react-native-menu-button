const menuFactory = (React,Components,Styles) => {

  const Config = { Styles };

  return {
    MenuSwitch: require('./switch')(React, Components, Config),
    MenuOptions: require('./options')(React, Components, Config),
    MenuModal: require('./modal')(React, Components, Config),
    MenuOption:require('./option')(React, Components, Config),
  };
};

module.exports = menuFactory;
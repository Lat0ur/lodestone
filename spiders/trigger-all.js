const { lightforge } = require('./lightforge');
const { heartharena } = require('./heartharena');

(async() => {
  await heartharena('druid');
  await heartharena('hunter');
  await heartharena('mage');
  await heartharena('paladin');
  await heartharena('priest');
  await heartharena('rogue');
  await heartharena('shaman');
  await heartharena('warlock');
  await heartharena('warrior');

  await lightforge(1);
  await lightforge(2);
  await lightforge(3);
  await lightforge(4);
  await lightforge(5);
  await lightforge(6);
  await lightforge(7);
  await lightforge(8);
  await lightforge(9);

  await yingdi(0);
  await yingdi(1);
  await yingdi(2);
  await yingdi(3);
  await yingdi(4);
  await yingdi(5);
  await yingdi(6);
  await yingdi(7);
  await yingdi(8);
})();

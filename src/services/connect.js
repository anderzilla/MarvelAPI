import md5 from 'react-native-md5';
import moment from 'moment';

const publicKey = 'e39129ffea4355dfde00740abcb1766b';
const privatKey = 'ff64cfb9de7914cd99ec63b8f4c2873ad6ee8f36';
const ts = moment();
const hash = md5.str_md5(ts+privatKey+publicKey);

export default hash;
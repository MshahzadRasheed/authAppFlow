import moment from 'moment';
import Util from '../util';
import {Images} from '../theme';

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 20;
// export const TIME_ZONE = (-1 * new Date().getTimezoneOffset()) / 60;
export const APP_URL = '';
export const APP_DOMAIN = '';
export const QUERY_LIMIT = 10;
export const SAGA_ALERT_TIMEOUT = 500;
export const POST_VIEW_TIMEOUT = 2000;
export const IMAGE_QUALITY = 1;
export const IMAGE_MAX_WIDTH = 720;
export const IMAGE_MAX_HEIGHT = 480;
export const IMAGE_COMPRESS_MAX_WIDTH = 720;
export const IMAGE_COMPRESS_MAX_HEIGHT = 480;
export const VERSES_OF_THE_DAY_LIMIT = 10;
export const IMAGE_COMPRESS_FORMAT = 'JPEG';
export const ANDROID_NOTI_CHANNEL = 'VeteranAppChanel';

export const DISCARD_WARNING: String = 'Are You sure to discard';

// date time formats
export const DATE_FORMAT1 = 'dddd, DD MMMM, YYYY';
export const DATE_FORMAT2 = 'DD MMM YYYY';
export const DATE_FORMAT3 = 'YYYY-MM-DD';
export const TIME_FORMAT1 = 'hh:mm A';
export const TIME_FORMAT2 = 'HH:mm ';

export const DATE_FORMAT_TIME1 = 'Do | MMM | HH';
export const DATE_FORMAT4 = 'dddd, DD MMMM YYYY';
export const DATE_FORMAT5 = 'MMM DD, YYYY';

export const PLACEHOLDER_IMAGE =
  'https://i.imgur.com/udLAJnO_d.webp?maxwidth=760&fidelity=grand';

// Message types
export const MESSAGE_TYPES = {
  INFO: 'info',
  ERROR: 'error',
  SUCCESS: 'success',
};

// File Types
export const FILE_TYPES = {VIDEO: 'video', IMAGE: 'image', AUDIO: 'audi'};

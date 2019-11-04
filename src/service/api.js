import {createApi} from './request'

export const verify = createApi('/api/guest/verify');

export const getEnClientList = createApi('/api/encrypt/engine/list');

export const getEncryptActionList = createApi('/api/encrypt/action/list');
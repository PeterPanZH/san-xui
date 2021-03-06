/**
 * @file demos/xui-loading.es6
 * @author leeight
 */

import {defineComponent} from 'san';
import {Loading} from 'san-xui';

import Row from './Row';

/* eslint-disable */
const template = `<template>
<x-row label="[default]size=normal">
    <xui-loading />
</x-row>
<x-row label="[default]size=middle">
    <xui-loading size="middle" />
</x-row>
<x-row label="[default]size=small">
    <xui-loading size="small" />
</x-row>
</template>`;
/* eslint-enable */

export default defineComponent({
    template,
    components: {
        'x-row': Row,
        'xui-loading': Loading
    },
    initData() {
        return {
        };
    }
});

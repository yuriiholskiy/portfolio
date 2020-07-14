import Vue from 'vue';
import IconifyIcon from '@iconify/vue';
import html from '@iconify/icons-logos/html-5';
import css from '@iconify/icons-logos/css-3';
import js from '@iconify/icons-logos/javascript';
import ts from '@iconify/icons-logos/typescript-icon';
import vue from '@iconify/icons-logos/vue';
import react from '@iconify/icons-logos/react';
import nuxt from '@iconify/icons-logos/nuxt';
import redux from '@iconify/icons-logos/redux';
import jest from '@iconify/icons-logos/jest';
import mtui from '@iconify/icons-logos/material-ui';

IconifyIcon.addIcon('vue', vue);
IconifyIcon.addIcon('js', js);
IconifyIcon.addIcon('ts', ts);
IconifyIcon.addIcon('css', css);
IconifyIcon.addIcon('react', react);
IconifyIcon.addIcon('html', html);
IconifyIcon.addIcon('nuxt', nuxt);
IconifyIcon.addIcon('redux', redux);
IconifyIcon.addIcon('jest', jest);
IconifyIcon.addIcon('material-ui', mtui);

Vue.use(IconifyIcon);

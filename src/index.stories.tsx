/**
 * Storybook Main Project
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import '@/styles/scss/app.scss';

storiesOf('Atomic Component', module)
    .add('Button', () => <h1>Hai</h1>, {
        notes: '# Coming Soon'
    });

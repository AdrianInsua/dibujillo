import React from 'react';
import { fireEvent } from '@testing-library/react';
import getMockProvider from '../../../global/utils/test/store.mock';
import LandingUser from './LandingUser';

const user = { name: 'test' };

describe('Landing logged test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<LandingUser />, {
            user: { loggedIn: true, ...user },
        }));
    });

    test('element is present test', () => {
        const { getByTestId } = rendered;
        const input = getByTestId('avatar');
        expect(input).toBeInTheDocument();
    });

    test('userMenu appears test', () => {
        const { getByTestId } = rendered;
        const input = getByTestId('avatar');
        fireEvent.click(input);
    });
});

describe('Landing not logged test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<LandingUser />, {
            user: { loggedIn: false },
        }));
    });

    test('element is not present test', () => {
        const { getByTestId } = rendered;
        try {
            getByTestId('avatar');
        } catch (err) {
            expect(err).toBeDefined();
        }
    });
});

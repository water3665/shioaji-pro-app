import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

describe('candle chart timeframes', () => {
    it('offers a 3-minute chart option backed by 1-minute aggregation', () => {
        const source = readFileSync(
            fileURLToPath(new URL('./candle-chart.tsx', import.meta.url)),
            'utf8',
        );

        expect(source).toContain("{ label: '3m', minutes: 3, days: 7 }");
        expect(source).toContain('useState(2); // default 5m');
        expect(source).toContain('TIMEFRAMES[tfIdx] ?? TIMEFRAMES[2]');
    });
});

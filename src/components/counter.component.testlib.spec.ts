import {render} from '@testing-library/angular';
import {CounterComponent} from './counter.component';

describe('counter', () => {
  it('can render', async () => {
    const {getByText, click} = await render(CounterComponent, {
      componentProperties: {counter: 5}
    });
    click(getByText('+'));

    expect(getByText('Current Count: 6')).toBeTruthy();
  });
});

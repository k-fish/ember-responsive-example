import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setBreakpoint } from 'ember-responsive/test-support';

module('Integration | Component | example-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    setBreakpoint('desktop');
    // Template block usage:
    await render(hbs`
      {{example-component}}
    `);

    assert.equal(this.element.textContent.trim(), 'Is Desktop.');
  });
});

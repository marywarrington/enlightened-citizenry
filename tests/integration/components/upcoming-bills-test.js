import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('upcoming-bills', 'Integration | Component | upcoming bills', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{upcoming-bills}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#upcoming-bills}}
      template block text
    {{/upcoming-bills}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});



import { VueWrapper } from 'vuera'
import styles from './about.css'
import VuePageComponent from '../vuePage/AppComponent.vue'

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page about</h1>
      <VueWrapper component={VuePageComponent} />
    </div>
  );
}

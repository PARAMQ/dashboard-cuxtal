<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            Panel administrativo - cuxtal
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="logo">
              <img src="@/assets/cuxtal/RC_V.png" width="auto" height="auto">
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import dayjs from 'dayjs'
import { mapState } from 'vuex'

export default {
  name: 'FooterBar',
  computed: {
    year () {
      return dayjs().year()
    },
    ...mapState([
      'isFooterBarVisible'
    ])
  }
}
</script>

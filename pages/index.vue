<script>
import { validRoutes } from '~/common/api'

export default {
  fetch ({ redirect }) {
    redirect('/' + validRoutes[0])
  }
}
</script>

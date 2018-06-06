import PageCountainer from '../components/shared/PageContainer'

// import Table
import Title from '../components/users/Title'
import FilterBar from '../components/shared/FilterBar'
import Table from '../components/users/Table'

export default () => (
  <PageCountainer>
    <Title />
    <FilterBar />
    <Table />
  </PageCountainer>
)

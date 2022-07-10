import Masonry from 'react-masonry-css'

import projectList from 'config/projectList'

import Container from 'components/Container'
import ProjectCard from 'components/ProjectCard'

import * as S from './styles'

const breakpointColumnsObj = {
  default: 3,
  1400: 2,
  768: 1
}

const Projects = () => (
  <Container>
    <S.Wrapper>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {projectList.map((project) => (
          <ProjectCard {...project} />
        ))}
      </Masonry>
    </S.Wrapper>
  </Container>
)

export default Projects

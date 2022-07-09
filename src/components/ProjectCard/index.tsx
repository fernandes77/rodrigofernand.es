import Card from 'components/Card'

import * as S from './styles'

type ProjectCardProps = {
  slug: string
  icon: React.ReactNode
  name: string
  description: string
}

const ProjectCard = ({ slug, icon, name, description }: ProjectCardProps) => (
  <Card slug={`projects/${slug}`}>
    <S.Wrapper>
      <S.IconWrapper>{icon}</S.IconWrapper>
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  </Card>
)

export default ProjectCard

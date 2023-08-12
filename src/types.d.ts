interface IPersonal {
  name: string;
  email: string;
  phone: string;
  institution: string;
  spec: string;
  gradDate: string;
}

interface IExp {
  company: string;
  position: string;
  from: string;
  to: string;
  description: string;
}

type SavePersonalType = (info: IPersonal) => void;
type AddExperienceType = (newExp: IExp) => void;
type DeleteExperienceType = (index: number) => void;
type EditExperienceType = (nextExp: IExp, index: number) => void;

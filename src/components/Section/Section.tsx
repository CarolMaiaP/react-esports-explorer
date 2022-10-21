import { ReactNode } from "react";
import { SectionContainer } from "./styles";

interface SectionProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export function Section(props: SectionProps){
  return (
    <SectionContainer>
      <div>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        <ul>
          {props.children}
        </ul>
      </div>
    </SectionContainer>
  )
}